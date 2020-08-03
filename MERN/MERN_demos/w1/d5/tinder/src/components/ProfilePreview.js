import React, { useState } from "react";

const ProfilePreview = (props) => {
  const [likeCount, setLikeCount] = useState(props.likeCount);

  const styles = {
    profilePic: {
      borderRadius: 20,
      width: 300 + likeCount * 10,
      height: 300 + likeCount * 10,
    },
    thumbsUpIcon: {
      fontSize: 30,
      cursor: "pointer",
    },
    heart: {
      color: "red",
    },
  };

  return (
    <div>
      <h2>
        Username: {props.username}{" "}
        {likeCount >= 10 ? (
          <span role="img" aria-label="fire / hot">
            🔥
          </span>
        ) : (
          ""
        )}
      </h2>
      <img style={styles.profilePic} src={props.imgUrl} alt="profile" />
      <p>
        <span
          onClick={(event) => {
            setLikeCount(likeCount + 1);
          }}
          style={styles.thumbsUpIcon}
          role="img"
          aria-label="thumbs up"
        >
          &#128077;
        </span>{" "}
        {/* because we are looping based on a count, not an array, but .map needs to use an array, we either have to write a helper function with a for loop inside that pushes JSX into an array and returns the array, or we create a new array with any item in it repeated however many times we want to loop: */}
        {new Array(likeCount).fill(1).map((irrelevantItem, idx) => {
          return (
            <span key={idx} style={styles.heart} role="img" aria-label="heart">
              &#10084;
            </span>
          );
        })}
      </p>
      <p>{props.bio}</p>
    </div>
  );
};

export default ProfilePreview;
