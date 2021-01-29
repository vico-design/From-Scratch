import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import Search from "./pages/search";
import Detail from "./pages/detail";
import "./styles.css";

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <Switch>
        <div className="route-container">
          <Route exact path="/" component={Search} />
          <Route exact path="/detail" component={Detail} />
        </div>
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
