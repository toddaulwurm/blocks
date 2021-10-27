import React, { Component } from 'react';

const main = {
    margin: '10px',
    width: '70vw',
    height: '80vh',
    backgroundColor: '#e06666',
    display: 'flex',
    flexWrap: 'wrap'
}
class Main extends Component{
    render(){
        return(
            <div style={main}>
                <p>Main</p>
                {this.props.children}
            </div>
        );
    }
}


export default Main;