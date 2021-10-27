import React, { Component } from 'react';

const ad = {
    margin: '10px',
    width: '100vw',
    height: '30vh',
    backgroundColor: '#b4a7d6'
}
class Advertisement extends Component{
    render(){
        return(
            <div style={ad}><p>Ad</p></div>
        );
    }
}


export default Advertisement;