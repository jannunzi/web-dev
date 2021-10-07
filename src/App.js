import logo from './logo.svg';
import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import NavigationSidebar from "./components/NavigationSidebar/index";
import WhoToFollowListItem
    from "./components/WhoToFollowList/WhoToFollowListItem";
import WhoToFollowList from "./components/WhoToFollowList";
import PostSummaryItem from "./components/PostSummaryList/PostSummaryItem";

function App() {
  return (
    <div className="container">
        <NavigationSidebar active="home"/>
        <WhoToFollowList/>
        <PostSummaryItem post={{
            "topic": "",
            "userName": "JavaScript",
            "time": "1 day",
            "title": "JavaScript is programming language that can run on browsers as well as desktops",
            "image": "../../../images/js.png",
            "tweets": "123K"
        }}/>
    </div>
  );
}

export default App;
