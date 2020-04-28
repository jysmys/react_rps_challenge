import React, { Component } from "react";
// https://stackoverflow.com/questions/54958440/how-to-make-the-background-image-change-every-x-seconds-in-react

class ComputerPicks extends Component {
  constructor(props) {
    super(props);

    const images = [
      "./img/rock-paper-scissors-hand-icons/rock-computer.jpg",
      "./img/rock-paper-scissors-hand-icons/paper-computer.jpg",
      "./img/rock-paper-scissors-hand-icons/scissors-computer.jpg",
    ];

    this.state = {
      images,
      currentImg: 0,
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => this.changeBackgroundImage(), 1000);
  }

  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  changeBackgroundImage() {
    let newCurrentImg = 0;
    const { images, currentImg } = this.state;
    const noOfImages = images.length;

    if (currentImg !== noOfImages - 1) {
      newCurrentImg = currentImg + 1;
    }

    this.setState({ currentImg: newCurrentImg });
  }

  render() {
    const { images, currentImg } = this.state;
    const imgString = images[currentImg];

    return (
      <div className="App">
        <div
          className="dynamicImage"
          style={{ backgroundImage: imgString }}
        ></div>
      </div>
    );
  }
}
export default ComputerPicks;
