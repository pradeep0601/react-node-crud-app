import React, { Component } from 'react';
import logo from './logo.svg';
import './styles/App.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import EmployeeForm from './components/EmployeeForm';
import EmployeeRecord from './components/EmployeeRecord';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header></Header>
      <span className='react-crud-app'>
       <EmployeeForm></EmployeeForm>
       </span>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
