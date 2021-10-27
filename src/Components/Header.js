import React, { Component } from 'react';

const head = {
    margin: '10px',
    width: '98vw',
    height: '15vh',
    backgroundColor: '#6aa84f'
}
class Header extends Component{
    render(){
        return(
            <div style={head}><p>Head</p></div>
        );
    }
}


export default Header;