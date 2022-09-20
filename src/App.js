import Home from "./Home.js";
import Navbar from "./Navbar.js"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Addnewmovie from "./Addnewmovie.js";
import MovieDetail from "./MovieDetail.js";
import Notfound from "./Notfound.js";
// import MoviesList from "./MoviesList.js";

function App() {

  return (
    <Router>
      <div id="app-content">

        <Navbar />

        <Switch>

          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/addMovie">
            <Addnewmovie />
          </Route>

          <Route path="/movieDetail:id">
            <MovieDetail />

          </Route>

          <Route path="*">
            <Notfound />
          </Route>

        </Switch>

      </div>

    </Router>

  );
}
export default App;
