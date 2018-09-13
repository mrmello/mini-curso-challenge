import React from 'react'

const SerialListItem = ({serial, onSerialSelect}) => {
  const serialImage = serial.img;
  const serialTitle = serial.name;
  return (
      <nav className="menu" onClick={() => onSerialSelect(serial)}>
        <div >
            {serialTitle}
        </div>
      </nav>
  )
}

export default SerialListItem;