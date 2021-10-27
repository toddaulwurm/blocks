import React, { Component } from 'react';

const sub = {
    margin: '10px',
    width: '20vw',
    height: '30vh',
    backgroundColor: '#ffd966'
}
class SubContents extends Component{
    render(){
        return(
            <div style={sub}><p>Sub</p></div>
        );
    }
}
export default SubContents;