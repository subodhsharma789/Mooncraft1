import "./styles.css";
import React from "react";

export default function App() {
  return (
    <div className="App">
      <form>
        <label> Name: </label>
        <input type="text" required></input>
        <br />
        <br />
        <label> Email: </label>
        <input type="email" required></input>
        <br />
        <br />
        <label> Age: </label>
        <input type="date"></input>
        <br />
        <br />
        <label> Gender: </label>&nbsp;&nbsp;&nbsp; Male{" "}
        <input type="radio" name="gender" value="gender"></input>
        Female <input type="radio" name="gender" value="gender"></input>
        <br />
        <br />
        <label for="location"> Location: </label>&nbsp;&nbsp;
        <select name="location">
          <option value="Bangalore">Bangalore</option>
          <option value="Hyderabad">Hyderabad</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Kolkata">Kolkata</option>
        </select>
        <br />
        <br />
        <label for="Department"> Department: </label>&nbsp;&nbsp;
        <select name="Department">
          <option value="Development">Development</option>
          <option value="QA">QA</option>
          <option value="Designer">Designer</option>
        </select>
        <br />
        <br />
        <p onClick="myFunction()">Show More</p>
        <br />
        <br />
        <div id="About_us"></div>
        <button>Submit</button>
      </form>
    </div>
  );
}
