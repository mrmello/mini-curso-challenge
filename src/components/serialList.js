import React from 'react'
import SerialListItem from './serialListItem';

const SerialList = (props) => {
    const SerialsList = props.serials.map((serial) => {
        return <SerialListItem  
                onSerialSelect={props.onSerialSelect}
                serial={serial} 
                key={serial.id}/>
    })

    return (
        <div>{SerialsList}</div>
    )
    
}

export default SerialList