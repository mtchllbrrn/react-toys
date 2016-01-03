export default class Slider extends React.Component {
  onChange(e) {
    console.log(this.props);
    this.props.onUpdate(e.target.value);
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

Slider.propTypes = {
  onUpdate: React.PropTypes.function,
};
