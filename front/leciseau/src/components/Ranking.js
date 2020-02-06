import React from "react";
import "./Ranking.css";
import star from "./assets/pictures/Star_24682.png";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return state;
};
class Ranking extends React.Component {
  render() {
    return (
      <div className="ContainerRank1">
        <h1 className="display-2 mb-5">Ranking:</h1>
      <p>{this.props.storeHaircut.haircut.map(item => (
        <li>{item.name} {item.rank} <img src={star}/></li>
      ))}</p>
      </div>
    );
  }
}
export default connect(mapStateToProps)(Ranking);
