import React from 'react'

const SerialListItem = ({serial, onSerialSelect}) => {
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