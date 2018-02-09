import React, { Component } from 'react';
import Navbar from './containers/Navbar.js';
import EventForm from './forms/EventForm.js';
import EventList from './containers/EventList.js';
import EventCalendar2 from './containers/Calendar2.js';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <EventList />
        <EventForm />
      <EventCalendar2 />
      </div>
    );
  }
}

export default App;
