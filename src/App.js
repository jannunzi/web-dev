import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import {BrowserRouter, Route} from "react-router-dom";
import HelloWorld from "./components/a6/HelloWorld";
import Practice from "./components/a6/Practice";
import HomeScreen from "./components/a7/Build/HomeScreen";
import ExploreScreen from "./components/a7/Build/ExploreScreen";
function App() {
  return (
      <BrowserRouter>
          <div className="container">
              <Route path={["/a7", "/a7/practice"]} exact={true}>
                  <Practice/>
              </Route>
              <Route path={["/", "/a7/twitter/home"]} exact={true} component={HomeScreen}/>
              <Route path="/a7/twitter/explore" exact={true} component={ExploreScreen}/>
          </div>
      </BrowserRouter>
  );
}

export default App;
