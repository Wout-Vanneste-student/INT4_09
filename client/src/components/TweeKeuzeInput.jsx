import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class TweeKeuzeInput extends Component {
  constructor(props) {
    super(props);
    this.state = { huidigAntwoord: "" };
  }
  handleSubmitForm = e => {
    e.preventDefault();
    // Hieronder halen we het antwoord uit de state om deze te versturen.
    const antwoord = this.state.huidigAntwoord;
    console.log(antwoord);
    this.props.history.push({
      pathname: "/projectie",
      antwoord: this.state.huidigAntwoord
    });
  };

  handleRadioChange = e => {
    // Elke keer het antwoord verandert wordt deze aangepast in de state.
    this.setState({
      huidigAntwoord: e.currentTarget.value
    });
  };

  render() {
    return (
      <>
        <p>De gamemaster gaf je 2 opties</p>
        <form onSubmit={this.handleSubmitForm}>
          <input
            type="radio"
            name="naam"
            value="optie 1"
            checked={this.state.huidigAntwoord === "optie 1"}
            onChange={this.handleRadioChange}
          />{" "}
          {"optie 1"}
          <input
            type="radio"
            name="naam"
            value="optie 2"
            checked={this.state.huidigAntwoord === "optie 2"}
            onChange={this.handleRadioChange}
          />{" "}
          {"optie 2"}
          <input type="submit" value="Antwoorden" />
        </form>
      </>
    );
  }
}

export default withRouter(TweeKeuzeInput);
