import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import HelloWorld from "./components/HelloWorld";
import Practice from "./components/Practice";
import Build from "./components/Build";
import {BrowserRouter, Route} from "react-router-dom";
function App() {
  return (
      <BrowserRouter>
          <div className="container">
              <Route path="/hello" exact={true}>
                  <HelloWorld/>
              </Route>
              <Route path={["/", "/practice"]} exact={true}>
                  <Practice/>
              </Route>
              <Route path="/build" exact={true}>
                  <Build/>
              </Route>
          </div>
      </BrowserRouter>
  );
}

export default App;
