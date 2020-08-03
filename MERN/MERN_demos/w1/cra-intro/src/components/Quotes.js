import React, { useState } from "react";
import SingleQuote from "./SingleQuote";

const Quotes = (props) => {
  // console.log(props);

  // useState method is passed the initial value for the state we want to keep track of
  // useState returns an array with two items, idx 0: the current value of the state, idx 1: a function used to update the state
  const [quotes, setQuotes] = useState(props.quotes);
  // long-form for of above useState line
  // const quotesState = useState(props.quotes);
  // const quotes = useState[0];
  // const setQuotes = useState[1];

  // state to keep track of two input box's values
  const [author, setAuthor] = useState("");
  const [quoteText, setQuoteText] = useState("");

  const handleDelete = (delIdx) => {
    const filteredQuotes = quotes.filter((quote, idx) => {
      return delIdx !== idx;
    });

    // MUST always pass in a BRAND NEW arr or object if the state value is an arr or object, otherwise it won't update, because react sees it is the same object by reference and does not update
    setQuotes(filteredQuotes);
  };

  const handleSubmit = (event) => {
    // prevent the default behavior of a form causing page refresh due to an HTTP request
    event.preventDefault();

    const newQuote = {
      // shorthand can be used when key name matches var name that is used for the value
      author,
      // long-hand
      text: quoteText,
    };

    console.log(newQuote);

    // MUST pass a BRAND new array to setQuotes for it to update
    // const quotesCopy = quotes.slice();
    // quotesCopy.push(newQuote)
    // setQuotes(quotesCopy);

    // create a brand new array, spread all the existing quotes into it, plus the newQuote at the end, passed into setQuotes
    setQuotes([...quotes, newQuote]);
    setAuthor("");
    setQuoteText("");
  };

  const toggleSelectQuote = (selectedIdx) => {
    // need to create a new array because if you pass in the same array
    // to setQuotes, it won't update even if you change something in the array

    const updatedQuotes = quotes.map((quote, i) => {
      // copy the quote so we don't mutate the state directly
      const quoteCopy = { ...quote };
      if (i === selectedIdx) {
        quoteCopy.isSelected = !quoteCopy.isSelected;
      }
      return quoteCopy;
    });

    setQuotes(updatedQuotes);
  };

  // could be used instead of .map but only for this 1 use case
  const manuallyMapToSingleQuotes = () => {
    const newArr = [];

    for (let idx = 0; idx < quotes.length; idx++) {
      const quoteObj = quotes[idx];

      newArr.push(
        <div key={idx}>
          <hr />
          <SingleQuote quote={quoteObj} />{" "}
          <button
            onClick={(event) => {
              handleDelete(idx);
            }}
          >
            Delete
          </button>
        </div>
      );
    }
    return newArr;
  };

  return (
    <div>
      <form
        onSubmit={(event) => {
          handleSubmit(event);
        }}
      >
        <div>
          <label>
            Author:{" "}
            <input
              onChange={(event) => {
                setAuthor(event.target.value);
              }}
              type="text"
              value={author}
            />
          </label>
        </div>

        <div>
          <label>
            Quote:{" "}
            <input
              onChange={(event) => {
                setQuoteText(event.target.value);
              }}
              type="text"
              value={quoteText}
            />
          </label>
        </div>

        <button>Submit</button>
      </form>

      {/* {manuallyMapToSingleQuotes()} */}

      {quotes.map((quoteObj, idx) => {
        let classes = "quote";

        if (quoteObj.isSelected) {
          // className needs to be a space separated string
          classes += " selected";
        }

        return (
          <div
            className={classes}
            key={idx}
            onClick={(event) => {
              toggleSelectQuote(idx);
            }}
          >
            <hr />
            <SingleQuote quote={quoteObj} />{" "}
            <button
              onClick={(event) => {
                handleDelete(idx);
              }}
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Quotes;
