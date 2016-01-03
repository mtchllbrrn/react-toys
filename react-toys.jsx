class RgbSliders extends React.Component {
  constructor() {
    super();
    this.state = {
      red: 0,
      green: 0,
      blue: 0,
    };
  }

  updateRed(val) {
    console.log(val);
    this.setState({
      red: val,
    });
    console.log(this.state.red);
  }

  updateGreen(val) {
    this.setState({
      green: val,
    });
  }

  updateBlue(val) {
    this.setState({
      blue: val,
    });
  }

  render() {
    return (
      <div>
        <p>Red</p>
        <Slider onUpdate={this.updateRed} />{this.state.red}
        <br />
        <p>Green</p>
        <Slider onUpdate={this.updateGreen} />{this.state.green}
        <br />
        <p>Blue</p>
        <Slider onUpdate={this.updateBlue} />{this.state.blue}
      </div>
    );
  }
}

class Slider extends React.Component {
  onChange(e) {
    return e.target.value;
  }

  render() {
    return (
      <input
        type="range"
        min="0"
        max="255"
        onChange={this.onChange}
      />
    );
  }
}

ReactLayout.render(RgbSliders);
