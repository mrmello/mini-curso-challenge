import React from 'react';

const SerialDetail = ({serial}) => {

  if(!serial) {
    return <div className="loading"><h4>Para testar, clique em um seriado abaixo :)</h4></div>
  }

  const img = serial.img;
  const description = serial.description;
  const title = serial.name;
  return (
    <div >
      <div className="embed-responsive embed-responsive-16by9">
        <div> <img src={img} width="1128px" ></img></div>

      </div>
      <div className="details">
        <div className="title">{title}</div>
        <div className="description">{description}</div>
      </div>
    </div>
  )
}

export default SerialDetail;