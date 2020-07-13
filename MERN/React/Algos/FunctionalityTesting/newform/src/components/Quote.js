import React, { useState } from "react";
import SingleQuote from "./SingleQuote";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {TheForm, FormGroup, FillLabel, MainInput}from './Styles';

const Quote = (props) => {
    const [quotes, setQuotes] = useState(props.quotes);
    const [author, setAuthor] = useState("");
    const [quoteText, setQuoteText] = useState("");
    const [ageNum, setAgeNum] = useState("");
    const [emailBot, setEmailBot] = useState("");

    const handleDelete = (delIdx) => {
    const filteredQuotes = quotes.filter((quote, idx) => {
            return delIdx !== idx;
        });
        setQuotes(filteredQuotes);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const newQuote = {
            author,
            text: quoteText,
            age:  ageNum,
            box: emailBot,
        };
        console.log(newQuote);
        setQuotes([...quotes, newQuote]);
        setAuthor("");
        setQuoteText("");
        setAgeNum("");
        setEmailBot("");
    };

    const toggleSelectQuote = (selectedIdx) => {
        const updatedQuotes = quotes.map((quote, i) => {
            const quoteCopy = { ...quote };
            if (i === selectedIdx) {
                quoteCopy.isSelected = !quoteCopy.isSelected;
            }
            return quoteCopy;
        });
        setQuotes(updatedQuotes);
    };

    return (
        <div>
            <TheForm
                onSubmit={(event) => {
                handleSubmit(event);
                }}
            >
            <FormGroup>
                <FillLabel>
                    Author:{" "}
                </FillLabel>
                <MainInput
                    onChange={(event) => {
                        setAuthor(event.target.value);
                    }}
                    type="text"
                    value={author}
                />
            </FormGroup>

            <FormGroup>
                <FillLabel>
                    Quote:{" "}
                </FillLabel>
                <MainInput
                    onChange={(event) => {
                        setQuoteText(event.target.value);
                    }}
                    type="text"
                    value={quoteText}
                />
            </FormGroup>

            <FormGroup>
                <FillLabel>
                    Age:{" "}
                </FillLabel>
                <MainInput
                    onChange={(event) => {
                        setAgeNum(event.target.value);
                    }}
                    type="number"
                    value={ageNum}
                />
            </FormGroup>

            <FormGroup>
                <FillLabel>
                    Email:{" "}
                </FillLabel>
                <MainInput
                    onChange={(event) => {
                        setEmailBot(event.target.value);
                    }}
                    type="email"
                    value={emailBot}
                />
            </FormGroup>


            <button>Submit</button>
        </TheForm>

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

export default Quote;