const React = window.React;

const TextAreaFixtures = React.createClass({
  getInitialState() {
    return { value: '' };
  },
  onChange(event) {
    this.setState({ value: event.target.value });
  },
  render() {
    return (
      <div>
        <form className="container">
          <fieldset>
            <legend>Controlled</legend>
            <textarea value={this.state.value} onChange={this.onChange} />
          </fieldset>

          <fieldset>
            <legend>Uncontrolled</legend>
            <textarea defaultValue="" />
          </fieldset>
        </form>

        <div className="container">
          <h4>Controlled Output:</h4>
          <div className="output">
            {this.state.value}
          </div>
        </div>
      </div>
    );
  },
});

module.exports = TextAreaFixtures;
