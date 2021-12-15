import Gifts from "./components/Gifts";
import Tree from "./components/christmas-tree/Tree";
import Fireplace from "./components/fireplace/Fireplace";

import "./styles.scss";
import ObjectsList from "./components/ObjectsList";

export default function Home() {
  return (
    <div className="Home">
      <div className="wall">
        <Tree />
        <ObjectsList name="wall-bricks" length={15} />
        <Fireplace />
        <Gifts />
      </div>
      <div className="floor" />
      <div className="cat">
        <div className="head">
          <div className="eyes" />
        </div>
        <div className="tail" />
      </div>
    </div>
  );
}
