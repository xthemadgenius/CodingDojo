import Player from "./Player.js";

const Scoreboard = (props, parentNode) => {
  const container = document.createElement("div");

  const heading = document.createElement("h2");
  heading.innerText = props.headingText;
  container.appendChild(heading);

  for (let i = 0; i < props.rankedPlayers.length; i++) {
    Player(
      {
        rankText: i + 1,
        player: props.rankedPlayers[i],
      },
      container
    );
  }

  parentNode.appendChild(container);
};

export default Scoreboard;
