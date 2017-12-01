// In App.js

import React, { Component } from 'react';
import Styles from './App.css';
import Person from './Person/Person';

class App extends Component {
state={
  persons:[
    { id: 1, name : 'Jatin' , age : 26 },
    { id: 2, name : 'Riship' , age : 26 },
    { id: 3, name : 'Amit' , age : 28 }
  ],
  showPersons:true
}
// switchNameHandler=(event)=>{
  
//   let people=this.state.persons.filter((person)=>(person.name!=='Riship'))
//   console.log(people)
//   this.setState({
//     persons:[...people,
//     { name : 'Lovish' , age : 24 }
//   ]
//   })
// }
onChangeHandler=(event,id)=>{
  let val = event.target.value
  const personIndex=this.state.persons.findIndex(p=>(p.id===id))
  const person={...this.state.persons[personIndex]};
  person.name = val;
  const persons=[...this.state.persons];
  persons[personIndex]=person;
  this.setState({persons});
}
deletePerson=(index)=>{
//const persons=this.state.persons.slice();// its a pointer reference
const persons = [...this.state.persons];
persons.splice(index,1); 
this.setState({persons});
}
onToggle=()=>{
  const show = this.state.showPersons;
  this.setState({
    showPersons : !show
  });
}
  render() {
    const { persons, showPersons } = this.state;
    let showCase = null;
    const style={
      backgroundColor : 'green',
      color : 'white',
      borderRadius:'10px',
      font : 'inherit',
      border : '1px solid blue',
      padding : '8px',
      cursor: 'pointer',
      marginTop : '200px',
    
     
    }
    if(showPersons){
     showCase  =  (
          persons.map((person,index)=>(
            <Person key={person.id} name={person.name}
              click={()=>this.deletePerson(index)}
              age = {person.age}
              changed={(event)=> this.onChangeHandler(event,person.id)}/>
          )
        )
      )
      style.backgroundColor='red'
     
    }
    // let classes=['red','bold'].join(' ');// red bold
    const classes = [];
    if(persons.length<=2){
      classes.push(Styles.red);
    }
    if(persons.length<=1){
      classes.push(Styles.bold);
    }
    return (
    
        <div className={Styles.App}>
          <p className ={classes.join(' ')}>Hello</p>
            {showCase}
            <button 
            style={style}
            onClick={this.onToggle}>
            Render Conditionally
          </button> 
        </div>
      
    );
  }
}

export default App;


// In Person.js
import React , { Component } from 'react';
import Styles from './Person.css';

class Person extends Component{
    render(){
    return(
        <div className= {Styles.Person} >
        <p>Person here is {this.props.name} </p>
        <input type="text" onChange={this.props.changed} value={this.props.name}/>
        <button onClick={this.props.click}>Delete</button>
        
        </div>
    )
}
}
export default Person;


// In Person.css

.Person{
    width: 60%;
    margin: 16px auto;
    border : 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    padding : 16px;
    text-align: center;
}

// In App.css

.App {
  text-align: center;
}

.red{
  color: red;
}
.bold{
  font-weight:bold;
}
