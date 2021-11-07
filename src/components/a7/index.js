import React from "react";
import {Route} from "react-router-dom";
import Practice from "./Practice";
import Build from "./Build";

const A7 = () => {
  return(
    <div>
      <Route path={["/a7", "/a7/practice"]} exact={true}>
        <Practice/>
      </Route>
      <Route path="/a7/twitter">
        <Build/>
      </Route>
    </div>
  )
}

export default A7;