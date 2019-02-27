import React from 'react';

let ShortAmenity = (props) => {
    let amenRows = [];
    if(props.amenities[0]) {
        let includedAmens = props.amenities.filter(ele => ele.included === 1).slice(0,4)
        let carbonAmen = props.amenities.filter(ele => (ele.appeal === 0 && ele.included === 0))
        let shortDisplayAmens = includedAmens.concat(carbonAmen)

        let amenTableData = shortDisplayAmens.map(ele => {
            return <td style={{paddingBottom:10}}><img src={ele.img_url} style={{height:20,width:20}}></img>{ele.name}</td>
        })
        for (let i = 0; i <= Math.ceil(shortDisplayAmens.length / 2); i++) {
            amenRows.push(<tr key={shortDisplayAmens[i].name} style={{}}>{amenTableData[i]}{amenTableData[i+1]}</tr>) 
            i++;
            if (Math.ceil(shortDisplayAmens.length / 2) - i  === 0) {
                amenRows.push(<tr key={shortDisplayAmens[i+1].name} style={{textDecoration:'line-through'}}>{amenTableData[i+1]}</tr>) 
                amenRows.push(<tr key={'safety explaination'} style={{fontSize:12}}><td>The host hasn't reported a carbon monoxide detector on the property.</td></tr>) 
            }
        }
    }
    return <tbody>{amenRows}</tbody>
}

export default ShortAmenity;