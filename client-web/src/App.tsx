import { BrowserRouter as Router, Route } from "react-router-dom";
import { Footer } from "./components/Footer/Footer";
import { Navbar } from "./components/Navbar/Navbar";
import { StickyNavbar } from "./components/Navbar/StickyNavbar";
import AboutScreen from "./screens/AboutScreen/AboutScreen";
import ContactScreen from "./screens/ContactScreen/ContactScreen";
import FaqScreen from "./screens/FaqScreen/FaqScreen";
import HomeScreen from "./screens/HomeScreen/HomeScreen";
import { ABOUT_US, CONTACT_US, FAQ } from "./utilities/constants";

function App() {
  return (
    <Router>
      <div className="grid-container">
        <div className="navbar-container">
          <StickyNavbar />
          <Navbar />
        </div>
        <main>
          <Route path={`/${CONTACT_US}`} component={ContactScreen} />
          <Route path={`/${ABOUT_US}`} component={AboutScreen} />
          <Route path={`/${FAQ}`} component={FaqScreen} />
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
