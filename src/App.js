import logo from './logo.svg';
import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import NavigationSidebar from "./components/NavigationSidebar/index";
import WhoToFollowListItem
    from "./components/WhoToFollowList/WhoToFollowListItem";

function App() {
  return (
    <div className="container">
        <NavigationSidebar/>
        <WhoToFollowListItem/>
    </div>
  );
}

export default App;
