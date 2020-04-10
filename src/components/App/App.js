import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import StudentForm from '../StudentForm/StudentForm';

class App extends Component {
  state = {
    studentList: [],
  };

  // This function is called by the StudentForm when the submit button is pressed
  addStudent = (newStudent) => {
    console.log(newStudent);
    // POST your data here
    axios({
      method: "POST",
      url: "/students",
      data: newStudent,
    })
      .then((response) => {
        console.log("Server POST Response", response.data);
        this.getStudent();
      })
      .catch((err) => {
        console.log("ERROR:", err);
        alert("There was an issue posting your song. Failure.");
      });
  };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">GitHub Student List</h1>
        </header>
        <br/>
        <StudentForm addStudent={this.addStudent}/>

        <p>Student list goes here.</p>
      </div>
    );
  }
}

export default App;
