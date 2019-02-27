import React from 'react';
import FullAmenity from "./fullAmenity.jsx";

const Modal = (props) => {

    let backgroundDivStyle = {
        display:props.state.modalShow,
        position:'fixed',
        top:0,
        left:0,
        overflow:'auto',
        height:'100%',
        width:'100%',
        background:'rgba(255,255,255,0.8)',
    }

    let displayDivStyle = {
        display:'block',
        position:'relative',
        zIndex: 3,
        margin:'50px auto',
        padding:'0px 30px',
        height:'auto',
        width:450,
        backgroundColor:'white',
        boxShadow:'rgba(0, 0, 0, 0.2) 0px 1px 10px 0px',
    }

    let notIncludeDisp = {
        margin:'10px 0px',
        display:'block',
    }

    let listingAmenities = props.state.listingAmenities
    let basics = listingAmenities.filter(ele => (ele.category === 'Basic' && ele.included === 1))
    let facilities = listingAmenities.filter(ele => (ele.category === 'Facilities' && ele.included === 1))
    let hip = listingAmenities.filter(ele => (ele.category === 'Hip' && ele.included === 1))
    let notIncluded = listingAmenities.filter(ele => (ele.included === 0 && (ele.appeal >= 7 || ele.appeal === 0)))

    if (notIncluded.length === 0) {
        notIncludeDisp = {
            margin:'10px 0px',
            display:'none',
        }
    }

    return (
        <div style={backgroundDivStyle} className='opaqueBackground' onClick={(event) => props.hideModal(event)}>
            <div style={displayDivStyle}>
                <button style={{margin:'20px 0px',borderRadius:'50%'}} className='closeButton' onClick={(event) => props.hideModal(event)}>&times;</button>
                <h2 style={{margin:'0px 0px 20px 0px'}}>Amenities</h2>
                <h4 style={{margin:'10px 0px'}}>Basic</h4>
                <FullAmenity basics={basics}/>
                <h4 style={{margin:'10px 0px'}}>Facilities</h4>
                <FullAmenity facilities={facilities}/>
                <h4 style={{margin:'10px 0px'}}>Hip</h4>
                <FullAmenity hip={hip}/>
                <h4 style={notIncludeDisp}>Not Included</h4>
                <FullAmenity notIncluded={notIncluded}/>
            </div>
        </div>
    )
}

export default Modal;