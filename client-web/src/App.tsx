import { BrowserRouter as Router, Route } from "react-router-dom";
import { Footer } from "./components/Footer/Footer";
import { Navbar } from "./components/Navbar/Navbar";
import AboutScreen from "./screens/AboutScreen/AboutScreen";
import ContactScreen from "./screens/ContactScreen/ContactScreen";
import HomeScreen from "./screens/HomeScreen/HomeScreen";

function App() {
  return (
    <Router>
      <div className="grid-container">
        <div className="navbar-container">
          <Navbar />
        </div>
        <main>
          <Route path="/contact-us" component={ContactScreen} />
          <Route path="/about-us" component={AboutScreen} />
          <Route path="/" component={HomeScreen} exact />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </Router>
  );
}

export default App;
