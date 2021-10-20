import React from "react";
import './midterm.css';
import math from './math';
import Spreader from "./spreader";
import MapFilterFind from "./MapFilterFind";

class Review extends React.Component {
  render() {
    return (
      <div>
        <MapFilterFind/>
        <Spreader/>
        <h1>Export/Import</h1>
        <h2>{math.PI}</h2>
        <h2>{math.subtract(7, 3)}</h2>
        <h2>{math.multiply(2, 3)}</h2>
        <h2>{math.add(2, 2)}</h2>
        <h1>Position</h1>
        <div className="position-yellow">
          Column Left
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
        </div>
        <div id="position-blue-id" className="position-blue">
          Column Center
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat        </div>
        <div style={{
          backgroundColor: 'red',
          position: 'fixed',
          top: '0px',
          right: '0px',
          border: 'solid green 10px',
          width: '30%'}}>
          Column Right
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
        </div>
        <h1>Float</h1>
        <div style={{
          backgroundColor: 'yellow',
          padding: '10px',
          width: '30%', float: 'left'}}>
          Column Left
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
        </div>
        <div style={{
          backgroundColor: 'blue',
          margin: '10px',
          width: '30%', float: 'left'}}>
          Column Center
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat        </div>
        <div style={{
          backgroundColor: 'red',
          border: 'solid green 10px',
          width: '30%', float: 'left'}}>
          Column Right
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
        </div>


        <h1>Select elements</h1>
        <select value="FEB" name="month">
          <option value="JAN">January (01)</option>
          <option value="FEB">February (02)</option>
          <option value="MAR">March (03)</option>
        </select>

        <h1>Dates</h1>
        <input type="date" value="2020-02-24"/>

        <h1>Input element attributes</h1>
        <input
          id="123"
          name="foo"
          placeholder="Some hint"
          title="Another Hint"/>

        <h1>Checkboxes</h1>
        <input type="checkbox" name="genre" value="HORROR"/>HORROR<br/>
        <input type="checkbox" name="genre" value="SCIFI"/>SCIFI<br/>
        <input type="checkbox" name="genre" value="DRAMA"/>DRAMA<br/>
        <input type="checkbox" name="color" value="YELLOW"/>YELLOW<br/>
        <input type="checkbox" name="color" value="BLUE"/>BLUE<br/>
        <input type="checkbox" name="color" value="RED"/>RED<br/>


        <h1>Radios</h1>
        <h2>Marital Status</h2>
        Maried
        <input id="married-yes" name="married" type="radio"/>
        <label for="married-yes">Yes</label>

        <label>
          <input name="married" type="radio"/> No
        </label>

        <h2>Favorite Color</h2>
        <input name="color" type="radio"/> Yellow
        <input name="color" type="radio"/> Blue
        <input name="color" type="radio"/> Red
      </div>
    );
  }
}

export default Review;