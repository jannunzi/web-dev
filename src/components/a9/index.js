import React from "react";
import {Route} from "react-router-dom";
import Practice from "./Practice";
import Twitter from "./Twitter";

const A9 = () => {
  return(
    <div>
      <Route path="/a9/practice" exact={true}>
        <Practice/>
      </Route>
      <Route path="/a9/twitter" exact={true}>
        <Twitter/>
      </Route>
    </div>
  )
}

export default A9;