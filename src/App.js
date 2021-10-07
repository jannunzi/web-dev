import logo from './logo.svg';
import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import NavigationSidebar from "./components/NavigationSidebar/index";

function App() {
  return (
    <div className="container">
      <NavigationSidebar/>
    </div>
  );
}

export default App;
