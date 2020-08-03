import React, { useEffect, useState } from "react";

import Delete from "../components/Delete";
import axios from "axios";
import { Link, navigate } from "@reach/router";

import { camelCaseToTitleCase } from "../helpers";

const Announcements = (props) => {
  const [allAnnouncements, setAllAnnouncements] = useState([]);
  const [announcements, setAnnouncements] = useState([]);
  const [searchFor, setSearchFor] = useState("");
  const [searchBy, setSearchBy] = useState("title");
  const [searchMethod, setSearchMethod] = useState("startsWith");

  const searchKeys = [
    "title",
    "description",
    "primaryCategory",
    "secondaryCategory",
  ];

  const searchMethods = ["startsWith", "endsWith", "includes"];

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/announcements")
      .then((res) => {
        setAllAnnouncements(res.data);
        setAnnouncements(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    search();
  }, [searchFor, searchBy, searchMethod]);

  const handleDelete = (delId) => {
    axios
      .delete("http://localhost:8000/api/announcements/" + delId)
      .then((res) => {
        const filteredAnnouncements = announcements.filter((a) => {
          return a._id !== delId;
        });

        setAnnouncements(filteredAnnouncements);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleLike = (announcement) => {
    const updatedValues = { likeCount: announcement.likeCount + 1 };

    axios
      .put(
        `http://localhost:8000/api/announcements/${announcement._id}`,
        updatedValues
      )
      .then((res) => {
        const updatedAnnouncements = announcements.map((a) => {
          if (a._id === announcement._id) {
            // this is the updated announcement from our server's response
            return res.data;
          }
          // this is not the announcement that needed to be updated
          return a;
        });
        setAnnouncements(updatedAnnouncements);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // if using useState(null)
  // if (announcements === null) {
  //   return "Loading...";
  // }

  const search = () => {
    if (searchFor === "") {
      console.log(allAnnouncements);
      return setAnnouncements(allAnnouncements);
    }

    const filteredAnnouncements = allAnnouncements.filter((ann) => {
      return ann[searchBy].toLowerCase()[searchMethod](searchFor.toLowerCase());
    });

    setAnnouncements(filteredAnnouncements);
  };

  return (
    <div>
      <h2>All Announcements</h2>
      <div>
        <label>Search For: </label>
        <input
          type="text"
          onChange={(e) => {
            setSearchFor(e.target.value);
          }}
        />

        <label> Search By: </label>
        <select
          value={searchBy}
          onChange={(e) => {
            setSearchBy(e.target.value);
          }}
        >
          {searchKeys.map((key, i) => {
            return (
              <option key={i} value={key}>
                {camelCaseToTitleCase(key)}
              </option>
            );
          })}
        </select>

        <label> Search Method: </label>
        <select
          value={searchMethod}
          onChange={(e) => {
            setSearchMethod(e.target.value);
          }}
        >
          {searchMethods.map((key, i) => {
            return (
              <option key={i} value={key}>
                {camelCaseToTitleCase(key)}
              </option>
            );
          })}
        </select>
      </div>
      {announcements.map((announcement, idx) => {
        return (
          <div key={announcement._id}>
            <hr />
            <div>
              <h3>Title: </h3>
              <Link to={`/announcements/${announcement._id}`}>
                {announcement.title}
              </Link>
            </div>
            <div>
              <h3>Description: </h3>
              <p>{announcement.description}</p>
            </div>
            <div>
              <button
                onClick={(event) => {
                  handleLike(announcement);
                }}
              >
                Like Count:
              </button>{" "}
              <span>{announcement.likeCount}</span>
              {" | "}
              <span>Dislike Count: </span>
              <span>{announcement.dislikeCount}</span>
            </div>
            <div>
              <span>Primary Category: </span>
              <span>{announcement.primaryCategory}</span>

              {/* conditionally render secondaryCategory only if it exists */}
              {announcement.secondaryCategory && (
                <>
                  {" | "}
                  <span>Secondary Category: </span>
                  <span>{announcement.secondaryCategory}</span>
                </>
              )}
            </div>
            <div>
              <img
                style={{ marginTop: 20 }}
                src={announcement.imgUrl}
                alt={announcement.title}
                width="20%"
              />
            </div>
            <button
              onClick={(event) => {
                navigate(`/announcements/${announcement._id}/edit`);
              }}
            >
              Edit
            </button>{" "}
            <Link to={`/announcements/${announcement._id}/edit`}>Edit</Link>{" "}
            <button
              onClick={(event) => {
                handleDelete(announcement._id);
              }}
            >
              Delete
            </button>{" "}
            <Delete id={announcement._id} handleDelete={handleDelete} />
            {/* <Delete
              handleDelete={() => {
                handleDelete(announcement._id);
              }}
            /> */}
          </div>
        );
      })}
    </div>
  );
};

export default Announcements;
