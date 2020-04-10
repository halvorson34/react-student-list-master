import React from 'react';

class StudentList extends Component {

render () {

return (
    <h2>Student List</h2>

            <table>
          <thead>
            <tr>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {this.prop.studentList.map((guest) => (
              <tr key={student.name}>
                <td>{student.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
     
);
}
}


export default StudentList;