import ObjectsList from "../ObjectsList";
import Decorations from "./Decorations";

import "./styles.scss";

const Fireplace = () => (
  <div className="fireplace">
    <div className="bottom" />
    <ObjectsList name="top" length={10} />
    <ObjectsList name="bricks" length={15} />
    <div className="chimney" />
    <div className="chimney-shadow" />
    <div className="chimney-fire-wrapper">
      <ObjectsList name="wood" length={9} />
      <div className="fire" />
      <ObjectsList name="embers" length={7} />
    </div>
    <Decorations />
  </div>
);

export default Fireplace;
