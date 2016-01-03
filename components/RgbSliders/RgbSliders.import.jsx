import Slider from '/components/RgbSliders/Slider';

export default class RgbSliders extends React.Component {
  constructor() {
    super();
    this.state = {
      red: 0,
      green: 0,
      blue: 0,
    };

    // binding callbacks
    this.handleUpdateRed = this.handleUpdateRed.bind(this);
    this.handleUpdateGreen = this.handleUpdateGreen.bind(this);
    this.handleUpdateBlue = this.handleUpdateBlue.bind(this);
  }

  handleUpdateRed(val) {
    this.setState({
      red: val,
    });
  }

  handleUpdateGreen(val) {
    this.setState({
      green: val,
    });
  }

  handleUpdateBlue(val) {
    this.setState({
      blue: val,
    });
  }

  render() {
    return (
      <div>
        <p>Red</p>
        <Slider handleUpdate={this.handleUpdateRed} />{this.state.red}
        <br />
        <p>Green</p>
        <Slider handleUpdate={this.handleUpdateGreen} />{this.state.green}
        <br />
        <p>Blue</p>
        <Slider handleUpdate={this.handleUpdateBlue} />{this.state.blue}
      </div>
    );
  }
}
