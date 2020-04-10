import React, { Component } from "react";

class StudentList extends Component {
  render() {
    return (
      <div>
        <h2>Student List</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {this.props.studentList.map((student) => (
              <tr key={student.name}>
                <td>{student.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default StudentList;
