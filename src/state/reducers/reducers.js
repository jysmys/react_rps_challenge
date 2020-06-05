import initialState from "../store/initialState";

const rootReducers = (state = initialState, action) => {
  switch (action.type) {
    case "PLAYER":
      return {
        ...state,
        player: action.payload.player,
        computer: action.payload.computer,
      };
    case "WINNER":
      return {
        ...state,
        roundWinner: action.payload.roundWinner,
        gameWinner: action.payload.gameWinner,
        playerWins: action.payload.playerWins,
        computerWins: action.payload.computerWins,
        counter: action.payload.counter,
        roundNr: action.payload.roundNr,
      };
    case "RESET_FILTER":
      return initialState;
    default:
      return state;
  }
};

export default rootReducers;
