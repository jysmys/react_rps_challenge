export const announceRoundWinner = (userChoice, computerChoice) => {
  switch (userChoice) {
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

export const checkGameWinner = (roundWinner, playerWins, computerWins) => {
  roundWinner === "Player"
    ? playerWins++
    : roundWinner === "Computer" && computerWins++;
  const gameWinner =
    playerWins === 2 ? "Player" : computerWins === 2 ? "Computer" : null;
  return { gameWinner, playerWins, computerWins };
};
