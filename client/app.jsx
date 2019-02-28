import React from 'react';
import Amenity from './shortAmenity.jsx';
import Modal from './modal.jsx';
class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            listingAmenities: [],
            modalShow: 'none',
            modalClickHeight: 0
        }
    }

    componentDidMount(){
        window.scrollTo(0, 0)
        let paramId = 100;
        let input;
        if (window.location.href.split('?')[1]) {
            input = window.location.href.split('?')[1];
            if (input >= 100 || input < 200) {
                paramId = input
            }
        }
        fetch('/api/amenities/' + paramId, {
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
          })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                let houseAmenities = [];
                for (var prop in data) {
                    houseAmenities.push(data[prop])
                }
                this.setState({
                    listingAmenities: houseAmenities
                })
            })
    }

    showModal(){
        document.body.style.setProperty('overflow','hidden')
        this.setState({
            modalShow: 'block',
            modalClickHeight: window.pageYOffset,
        });
    };

    hideModal(event){
        let origPosition = this.state.modalClickHeight;
        document.body.style.setProperty('overflow','visible')
        if (event.target.className === 'closeButton' || event.target.className === 'opaqueBackground') {
            this.setState({modalShow: 'none'},
            () => window.scrollTo(0, origPosition)
            );
        }
    };

    render() {
        return (
            <main style={{color:'#484848',fontFamily:'Circular,Helvetica,Arial,sans-serif'}}>
                <Modal state={this.state} hideModal={this.hideModal.bind(this)}/>
                <h2>Amenities</h2>
                <table style={{marginBottom:16,width:'90%'}}>
                    <Amenity amenities={this.state.listingAmenities}/>
                </table>
                <a style={{color:'blue',cursor:'pointer'}} onClick={this.showModal.bind(this)}><u>Show all {this.state.listingAmenities.filter(ele => ele.included === 1).length} amenities</u></a>
            </main>
        )
    }
}

export default App;