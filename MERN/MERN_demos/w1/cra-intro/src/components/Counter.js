import React from "react";

import SingleQuote from "./SingleQuote";

// File name and component name MUST be capitalized
class Counter extends React.Component {
  constructor(props) {
    console.log(props);
    // call the parent React.Component constructor and pass it the Counter's props
    super(props);

    // adding a key to Counter instance called state, must be named state to use state
    // add all the keys you need for anything that can change that you want to keep track of
    this.state = {
      clickCount: 0,
      clickDates: [],
    };

    /** only needed if handleClick is not arrow func
     * `this` keyword when inside our constructor method is pointing to our Counter class
     * .bind tells handleClick to use the current value
     * of `this` so that it doesn't change to undefined
     * when it is executed from a different context with a different value for `this`
     */
    // this.handleClick = this.handleClick.bind(this);
  }

  // life cycle method that react automatically calls when finished updating component
  componentDidUpdate(prevProps) {
    console.log(`the component updated`, prevProps);
  }

  // method added to class
  // never update the state directly via this.state...
  handleClick = () => {
    // pass in an object containing the keys that you want to update and their new values
    console.log("handleClick");
    this.setState({
      clickCount: this.state.clickCount + 1,
      // spread (...) all the existing items into a new array, comma add one new item to the end
      clickDates: [...this.state.clickDates, new Date()],
      // clickDates: this.state.clickDates.concat(new Date()),
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>
          Clicked {this.state.clickCount}
        </button>
        {/* <p>{this.state.clickDates.join(", ")}</p> */}

        {/* .map to create a new array based on the array of dates, where the new array converts each date into a list item with the date inside it */}
        <ul>
          {this.state.clickDates.map((date, idx) => {
            return <li key={idx}>{date.toString()}</li>;
          })}
        </ul>

        <SingleQuote>
          Single quote component inside counter component
        </SingleQuote>
      </div>
    );
  }
}

export default Counter;
