import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import Search from "./pages/search";
import Detail from "./pages/detail";

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/" component={Search} />
        <Route exact path="/detail" component={Detail} />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
