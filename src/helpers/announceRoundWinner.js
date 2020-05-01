export const announceRoundWinner = (userChoice, computerChoice) => {
  switch (userChoice) {
    case computerChoice:
      return "Nobody";
    case "paper":
      return computerChoice === "scissor"
        ? "Computer"
        : computerChoice === "rock"
        ? "Player"
        : "Computer";
    case "scissor":
      return computerChoice === "paper"
        ? "Player"
        : computerChoice === "rock"
        ? "Computer"
        : "Player";
    case "rock":
      return computerChoice === "paper"
        ? "Computer"
        : computerChoice === "scissor"
        ? "Player"
        : "Computer";
    default:
      break;
  }
};

export const checkGameWinner = (roundWinner, gameWin) => {
  let player = 0;
  let computer = 0;
  gameWin.push(
    roundWinner === "Player" ? 1 : roundWinner === "Computer" ? 0 : "X"
  );
  gameWin.forEach((i) => {
    i === 1 && player++;
    i === 0 && computer++;
  });
  const gamewinner =
    player === 2 ? "Player" : computer === 2 ? "Computer" : null;
  return { gamewinner, player, computer, gameWin };
};
