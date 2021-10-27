import React, { Component } from 'react';

const nav = {
    margin: '10px',
    width: '20vw',
    height: '80vh',
    backgroundColor: '#6fa8dc'
}
class Navigation extends Component{
    render(){
        return(
            <div style={nav}><p>Nav</p></div>
        );
    }
}
export default Navigation;