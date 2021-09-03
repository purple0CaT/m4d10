import "./css/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Album from "./components/Album";
import Artist from "./components/Artist";
function App() {
  return (
    <Router>
      <Switch>
        {/* Home */}
        <Route
          path="/"
          exact
          render={(routerProps) => {
            return (
              <Layout>
                {" "}
                <Home {...routerProps}/>
              </Layout>
            );
          }}
        />
        {/* Artist */}
        <Route
          path="/artist/:artistName"
          render={(routerProps) => {
            return (
              <Layout>
                <Artist {...routerProps}/>
              </Layout>
            );
          }}
        />
        {/* Album */}
        <Route
          path="/album/:albumId"
          render={(routerProps) => {
            return (
              <Layout>
                <Album {...routerProps}/>{" "}
              </Layout>
            );
          }}
        />
        {/* DEFAULT */}
        <Route
          render={() => (
            <h1 className="text-danger text-center pt-5">404 - NOT FOUND</h1>
          )}
        />
      </Switch>
    </Router>
  );
}

export default App;
