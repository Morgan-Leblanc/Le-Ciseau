import React from "react";
import "./Ranking.css";
import star from "./assets/pictures/Star_24682.png";

class Ranking extends React.Component {
  render() {
    return (
      <div className="ContainerRank1">
          <h1 className="display-2 mb-5">Ranking:</h1>
          {this.props.elem.map(obj => {
            return (
              <ul class="list-group">
                <li className="display-4 mb-5 mx-5">
                  {obj.name} {obj.rank} <img src={star} alt="étoilerank" />
                </li>
              </ul>
            );
          })}
      </div>
    );
  }
}
export default Ranking;
