import React from "react";
import "./style.css";
class Card extends React.Component {
  render() {
    return (
      <div className="tc bg-light-green dib br3 pa3 ma3 grow bw2 shadow-5">
        <img
          src={`https://picsum.photos/seed/${this.props.id}/200/`}
          alt="phoss-1"
        />
        <h2> {this.props.name} </h2>
        <p> {this.props.email} </p>
      </div>
    );
  }
}
export default Card;
