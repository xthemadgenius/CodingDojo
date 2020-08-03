/**
 * Functional component
 * @param {Object} props - containing the properties for the new Counter, such as button text, etc.
 * @param {Object} parentNode - HTML node that the counter component will be appended into
 */
const Player = (props, parentNode) => {
  const container = document.createElement("div");

  const rankingHeading = document.createElement("h2");
  rankingHeading.innerText = `Rank: ${props.rankText}`;
  container.appendChild(rankingHeading);

  const fullNameHeading = document.createElement("h3");
  fullNameHeading.innerText = `Name: ${props.player.fullName()}`;
  container.appendChild(fullNameHeading);

  const scoreHeading = document.createElement("h4");
  scoreHeading.innerText = `Score: ${props.player.score}`;
  container.appendChild(scoreHeading);

  container.appendChild(document.createElement("hr"));
  parentNode.appendChild(container);
};

export default Player;
