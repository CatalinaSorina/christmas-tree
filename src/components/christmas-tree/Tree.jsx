import Emoji from "../Emoji";
import Branches from "./Branches";

const Tree = () => (
  <div className="tree">
    <Emoji name="star" icon="⭐" />
    <Branches />
    <div className="trunk" />
  </div>
);

export default Tree;
