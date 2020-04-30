export const announceRoundWinner = (userChoice, computerChoice) => {
  console.log(userChoice + "    " + computerChoice);
  switch (userChoice) {
    case computerChoice:
      return "Game was tied";
    case "paper":
      return computerChoice === "scissor"
        ? "Computer wins"
        : computerChoice === "rock"
        ? "You win"
        : "Computer wins";
    case "scissor":
      return computerChoice === "paper"
        ? "You win"
        : computerChoice === "rock"
        ? "Computer wins"
        : "You win";
    case "rock":
      return computerChoice === "paper"
        ? "Computer wins"
        : computerChoice === "scissor"
        ? "You win"
        : "Computer wins";
    case "bomb":
      return "you are the master";
    default:
      break;
  }
};
