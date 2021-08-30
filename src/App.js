import { Redirect, Route, Switch } from "react-router-dom";
import Layout from "./components/Layout";
import AllQuotes from "./pages/AllQuotes";

const App = () => {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <Redirect to='/quotes' />
        </Route>
        <Route path='/quotes' exact>
          <AllQuotes />
        </Route>
      </Switch>
    </Layout>
  );
};

export default App;
