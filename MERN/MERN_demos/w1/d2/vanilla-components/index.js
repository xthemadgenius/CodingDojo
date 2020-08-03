import Counter from "./components/Counter.js";
import Player from "./components/Player.js";
import PlayerModel from "./models/Player.js";
import Scoreboard from "./components/Scoreboard.js";

// new Counter(
//   { headingText: "Test heading", buttonText: "Test button" },
//   document.getElementById("root")
// );

// new Counter(
//   { headingText: "Test 2", buttonText: "Test 2" },
//   document.getElementById("root")
// );

// imagine: list of all players from database, orderBy score desc (highest score first)
const rankedPlayersFromDb = [
  new PlayerModel("Neil", "Mos", 9001),
  new PlayerModel("Steven", "Miyauchi", 6000),
  new PlayerModel("Javier", "Calderon", 5000),
  new PlayerModel("Brandon", "Nall", 5),
];

const rankedPlayersFromDb2 = [
  new PlayerModel("a", "b", 500),
  new PlayerModel("c", "d", 200),
];

// for (let i = 0; i < rankedPlayersFromDb.length; i++) {
//   Player(
//     {
//       rankText: i + 1,
//       player: rankedPlayersFromDb[i],
//     },
//     document.getElementById("root")
//   );
// }

Scoreboard(
  {
    headingText: "Left Scoreboard",
    rankedPlayers: rankedPlayersFromDb,
  },
  document.getElementById("left-col")
);

Scoreboard(
  {
    headingText: "Right Scoreboard",
    rankedPlayers: rankedPlayersFromDb2,
  },
  document.getElementById("right-col")
);
