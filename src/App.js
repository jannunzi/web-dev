import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import HelloWorld from "./components/lectures/w6/HelloWorld";
import Practice from "./components/Practice";
import {BrowserRouter, Route} from "react-router-dom";
import HomeScreen from "./components/Build/HomeScreen";
import ExploreScreen from "./components/Build/ExploreScreen";
import Todo from "./components/lectures/w6/Todo";

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
              <Route path="/twitter/home" component={HomeScreen}/>
              <Route path="/twitter/explore" component={ExploreScreen}/>
              <Route path="/lectures/w6/todo">
                <Todo/>
              </Route>
          </div>
      </BrowserRouter>
  );
}

export default App;
