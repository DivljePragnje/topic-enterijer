import { BrowserRouter as Router, Route } from "react-router-dom";
import { Footer } from "./components/Footer/Footer";
import { Menu } from "./components/Menu/Menu";
import { Quotes } from "./components/Quotes/Quotes";

function App() {
  return (
    <Router>
      <div className="grid-container">
        <main>
          <Menu />
          <Quotes />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
      <Route></Route>
      <Route></Route>
      <Route></Route>
      <Route></Route>
    </Router>
  );
}

export default App;
