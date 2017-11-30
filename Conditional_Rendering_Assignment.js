import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state={
    length : null,
    myString : [],
    
  }
  onChangeHandler=(event)=>{
    let val=event.target.value;
    this.setState({
      length : val.length,
      myString : val,
      
    })
  }
  deleteChar=(index)=>{
    const  myNewString  = `${this.state.myString}`;
    let charArray = myNewString.split(''); 
    console.log("index=", index);
    console.log("CharArray=", charArray);
   charArray.splice(index,1);
 
    const newString =charArray.join('');
    console.log("new string = ",newString)
    this.setState({
      myString : newString
    })
  }
  render() {
    let myNewString  = `${this.state.myString}`;
    let charArray = myNewString.split(''); 
    console.log(charArray);
    console.log(typeof charArray);
    return (
      <div className="App">
        <ol>
          <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
        <input type="text" onChange={this.onChangeHandler} value= {this.state.myString}/>
        <p>Length = {this.state.length} </p>
        <ValidationComponent length ={this.state.length}/>
        {
          charArray.map((char,index)=>(
            <CharComponent key={index}click={()=>this.deleteChar(index)} character={char}/>
          ))
        }
      </div>
    );
  }
}
class ValidationComponent extends Component{
  render(){
    let myrender=null;
    const {length} = this.props;
    if((length>0)&&(length<5)){
      myrender=(<p>Text too short!</p>)
    }else if((5 <= length) &&(length<=30)){
      myrender=(<p>Length is fine!</p>)
    }else if((length!==null)){
      myrender=(<p>Text too long!</p>)
    }
    return(
      <div>
        {myrender}
      </div>
    )
  }
}
class CharComponent extends Component{
  render(){
    const style={
      display: 'inline-block', 
      padding: '16px' , 
      textAlign: 'center', 
      margin: '16px', 
      border: '1px solid black'
    }
    return(
      <div style={style} onClick={this.props.click}>
          <p>{this.props.character}</p>
      </div>
    )
  }
}
export default App;
