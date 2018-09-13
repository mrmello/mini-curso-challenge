import React, { Component } from 'react'
import avatar from '../img/avatar.jpg';

class Avatar extends Component{
    render(){
        return (
            <img src={avatar} className="avatar" alt="logo" />
        );
    }
}

export default Avatar