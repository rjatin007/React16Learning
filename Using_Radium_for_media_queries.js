import React , { Component } from 'react';
import './Person.css';
import Radium from 'radium';
class Person extends Component{
    render(){
        const style ={
            '@media (min-width : 500px)':{
               width : '450px'
            }
        };
    return(
        <div className='Person' style={style} >
        <p>Person here is {this.props.name} </p>
        <input type="text" onChange={this.props.changed} value={this.props.name}/>
        <button onClick={this.props.click}>Delete</button>
        
        </div>
    )
}
}
export default Radium(Person);
