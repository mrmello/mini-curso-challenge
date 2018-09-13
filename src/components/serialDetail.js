import React from 'react';

const SerialDetail = ({serial}) => {

  if(!serial) {
    return <div align="center"><h4>Loading...</h4></div>
  }

  const img = serial.img;
  const description = serial.description;
  const title = serial.name;
  return (
    <div >
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={img} title={title}></iframe>
      </div>
      <div className="details">
        <div>{title}</div>
        <div>{description}</div>
      </div>
    </div>
  )
}

export default SerialDetail;