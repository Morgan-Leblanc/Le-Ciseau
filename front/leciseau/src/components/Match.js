import React from "react";
import { withRouter, Link } from "react-router-dom";
import axios from "axios";
import "./Match.css";

class Match extends React.Component {
  state = {
    haircuts: [],
    haircut1: [],
    haircut2: [],
    isDisplayed: false
  };

  getHaircuts = () => {
    axios
      .get(
        `https://raw.githubusercontent.com/LeCiseau/Front-end-JSON/master/haircut.json`
      )
      .then(response => response.data)
      .then(data => {
        const haircuts = data.map((element, i) => {
          const haircut = {
            ...element,
            rank: 0,
            id: i
          };
          return haircut;
        });
        this.setState({ haircuts: haircuts }, () => {
          this.getRandom();
        });
      });
  };
  getRandom = () => {
    const random = Math.floor(Math.random() * 16);
    this.getSecondRandom(random);
  };

  getSecondRandom = random => {
    const random2 = Math.floor(Math.random() * 16);
    if (random === random2) {
      return this.getSecondRandom(random);
    }

    this.setState({
      haircut1: this.state.haircuts[random],
      haircut2: this.state.haircuts[random2]
    });
  };

  componentDidMount() {
    this.getHaircuts();
  }

  addHaircut = e => {
    const winner = this.state.haircuts.find(
      haircut => haircut.id == e.target.name
    );
    winner.rank += 1;
    const hairCuts = [...this.state.haircuts];
    hairCuts.splice(e.target.name, 1, winner);
    this.setState({ haircuts: hairCuts });
    this.getRandom();
  };

  handleNav = () => {
    this.props.handle(this.state.haircuts);
    this.props.history.push("/ranking");
  };

  render() {
    return (
      <>
        <div className="Container1">
          <div className="Container2">
            <h1 className="display-1">{this.state.haircut1.name}</h1>
            <img className="displayhair" src={this.state.haircut1.img} />
            <h5>{this.state.haircut1.misc}</h5>
            <button
              className="btn btn-danger px-5 py-4"
              name={this.state.haircut1.id}
              onClick={e => this.addHaircut(e)}
            >
              My Life Be Like
            </button>
          </div>
          <div className="Container3">
            <h1 className="display-1">{this.state.haircut2.name}</h1>
            <img className="displayhair" src={this.state.haircut2.img} />
            <h5>{this.state.haircut2.misc}</h5>
            <button
              className="btn btn-danger px-5 py-4"
              name={this.state.haircut2.id}
              onClick={e => this.addHaircut(e)}
            >
              My Life Be Like
            </button>
          </div>
        </div>
        <input
          className=" btn btn-dark px-5 py-4"
          type="button"
          value="See The best Haircut !"
          onClick={() => this.handleNav()}
        />
      </>
    );
  }
}

export default withRouter(Match);
