import React from 'react';
import logo from './logo.svg';
import './App.css';
import  GenerateEmployee  from  './GenerateEmployee';
import  DisplayEmployee  from  './DisplayEmployee';

const sampleEmployee = {
  gender:  'male',
      name: {
      title:  'mr',
      first:  'mathys',
      last:  'aubert'
  },
  location: {
      street:  '9467 rue gasparin',
      city:  'perpignan',
      postcode:  '90208'
  },
  email:  'mathys.aubert@example.com',
  picture: {
    medium:  'https://randomuser.me/api/portraits/med/men/66.jpg'
  }
};


class App extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      employee:  sampleEmployee
    }
  }
  getEmployee() {
    // Employee collection via fetch
    fetch("https://randomuser.me/api?nat=fr")
        .then(response  =>  response.json())
        .then(data  => {
          // Once the data is collected, we update our state with the new data
          this.setState({
            employee:  data.results[0],
          });
        });
  }

  render() {
    return (
        <div className="App">
          <GenerateEmployee  selectEmployee={() =>  this.getEmployee()}  />
          <DisplayEmployee  employee={this.state.employee}  />
        </div>
    );
  }
}

export default App;
