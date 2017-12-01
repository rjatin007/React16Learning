import React, { Component } from 'react';
import './App.css';
import Radium from 'radium';
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
      ':hover':{
        backgroundColor : 'lightgreen',
        color : 'black'
      }
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
      style[':hover']={
        backgroundColor :'lightred',
        color : 'black'
      }
    }
    // let classes=['red','bold'].join(' ');// red bold
    const classes = [];
    if(persons.length<=2){
      classes.push('red');
    }
    if(persons.length<=1){
      classes.push('bold');
    }
    return (
      <div className="App">
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

export default Radium(App);
