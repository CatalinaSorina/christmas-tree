import { Fragment } from "react";
import Emoji from "../Emoji";

import { getBranches } from "../../utils";

const Branches = () => (
  <div className="branches">
    {getBranches().map(({ transform }, index) => (
      <Fragment key={index}>
        <div className="branch" style={{ transform }} />
        {index % 10 === 0 && (
          <Emoji name="globe" icon="✨" style={{ transform }} />
        )}
        <div className="branch_bg" style={{ transform }} />
      </Fragment>
    ))}
  </div>
);

export default Branches;
