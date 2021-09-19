
import './App.css';
import React from 'react';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { taskName: '', tasks: [] };
  }
  myTaskChangeHandler = (event) => {
    this.setState({ taskName: event.target.value });
    // console.log('Hello', event.target.value) 
  }
  addTask=()=> {
    // console.log('addTask', this.state.taskName)
    this.setState({ taskName: ''});

    this.state.tasks.push( this.state.taskName)

  }
  render() {
    return (
      <div className="App">
          <br />
          TODO LIST
          <br />
          <div className="aligned">
            <input type="text" value={this.state.taskName} onChange={this.myTaskChangeHandler} />
            <i className=" fas fa-plus-square" onClick={() => this.addTask()}></i>
          </div>

          <br />
          <ul>
            {this.state.tasks.map((taskItem,index) => (
              <li key={index} className="taskItem">{taskItem}</li>
            ))}
          </ul>


      </div>
    )
  }
}

export default App;
