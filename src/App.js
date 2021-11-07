import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome-pro/css/all.css';
import {BrowserRouter, Link, Route} from "react-router-dom";
import Practice from "./components/a7/Practice";
import Build from "./components/a7/Build";
import A6 from "./components/a6";
import A7 from "./components/a7";
import A9 from "./components/a9";

function App() {
  return (
      <BrowserRouter>
          <div className="container">

            <Link to="/a6/practice">A6</Link> |
            <Link to="/a7/practice">A7</Link> |

<Link to="/a9/practice">A9</Link>
<Route path="/a9">
  <A9/>
</Route>

            <Route path="/a6">
              <A6/>
            </Route>
            <Route path="/a7">
              <A7/>
            </Route>
              {/*<Route path={["/", "/a7", "/a7/practice"]} exact={true}>*/}
              {/*    <Practice/>*/}
              {/*</Route>*/}
              {/*<Route path="/a7/twitter">*/}
              {/*    <Build/>*/}
              {/*</Route>*/}
          </div>
      </BrowserRouter>
  );
}

export default App;
