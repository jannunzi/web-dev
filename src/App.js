import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import {BrowserRouter, Route} from "react-router-dom";
import Practice from "./components/a6/Practice";
import HomeScreen from "./components/a7/Build/HomeScreen";
import ExploreScreen from "./components/a7/Build/ExploreScreen";
import tweets from "./reducers/tweets";
import who from "./reducers/who";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";

const reducer = combineReducers({tweets: tweets, who})
const store = createStore(reducer);

function App() {
  return (
      <Provider store={store}>
          <BrowserRouter>
              <div className="container">
                  <Route path={["/a7", "/a7/practice"]} exact={true}>
                      <Practice/>
                  </Route>
                  <Route path={["/", "/a7/twitter/home"]} exact={true} component={HomeScreen}/>
                  <Route path="/a7/twitter/explore" exact={true} component={ExploreScreen}/>
              </div>
          </BrowserRouter>
      </Provider>
  );
}

export default App;
