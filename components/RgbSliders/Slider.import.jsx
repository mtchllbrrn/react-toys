export default class Slider extends React.Component {
  constructor() {
    super();
    // binding callbacks
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.props.handleUpdate(e.target.value);
  }

  render() {
    return (
      <input
        type="range"
        min="0"
        max="255"
        defaultValue="0"
        onChange={this.onChange}
      />
    );
  }
}

Slider.propTypes = {
  handleUpdate: React.PropTypes.func.isRequired,
};
