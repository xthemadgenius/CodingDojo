import React from "react";
import "./App.css";

import ProfilePreview from "./components/ProfilePreview";

// prop-it-up & putting-it-together demo but slightly different

function App() {
  // if we wanted to use a loop to display the ProfilePreview component...
  const profileData = [
    {
      username: "NiceGuy",
      imgUrl: "https://m.media-amazon.com/images/I/91VIl9sAfRL._SS500_.jpg",
      likeCount: 0,
      bio:
        "Finishes Last, but I deserve to be first because I'm a nice guy, I promise!",
    },
    {
      username: "Queen",
      imgUrl:
        "https://www.biography.com/.image/t_share/MTE1ODA0OTcxNjIzMzUxODIx/queen-elizabeth-ii-9286165-1-402.jpg",
      likeCount: 14,
      bio: "YaaAaas Queen",
    },
  ];

  return (
    <div className="App">
      {/* <ProfilePreview
        username="NiceGuy"
        imgUrl="https://m.media-amazon.com/images/I/91VIl9sAfRL._SS500_.jpg"
        likeCount={0}
        bio="Finishes Last, but I deserve to be first because I'm a nice guy, I promise!"
      />
      <ProfilePreview
        username="Queen"
        imgUrl="https://www.biography.com/.image/t_share/MTE1ODA0OTcxNjIzMzUxODIx/queen-elizabeth-ii-9286165-1-402.jpg"
        likeCount={14}
        bio="YaaAaaAaaAs queen."
      /> */}

      {profileData.map((data, idx) => {
        return (
          <ProfilePreview
            key={idx}
            username={data.username}
            imgUrl={data.imgUrl}
            likeCount={data.likeCount}
            bio={data.bio}
          />
        );
      })}
    </div>
  );
}

export default App;
