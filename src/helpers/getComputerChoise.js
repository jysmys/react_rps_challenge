export const getComputerChoise = () => {
  const computer = ["rock", "paper", "scissor"];
  const random = Math.floor(Math.random() * computer.length);
  return computer[random];
};



