import "./css/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import './css/sidebar.css'
function App() {
  return (
    <Router>
      <Switch>
        {/* Home */}
        <Route path="/" exact render={()=>{ return(
          <Layout>
            <Home />
          </Layout>)
        }}/>
        {/* Artist */}
        <Route path="/artist/:artistName" exact render={()=>{ return(
          <Layout>
            <Home />
          </Layout>)
        }}/>
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
