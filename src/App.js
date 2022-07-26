import { Route, Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/navbar";
import Popularsection from "./components/sub-components/Popularsection";
import Landingpage from "./pages/landingpage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Navbar />
          <Route to='landingpage'>
            <Landingpage />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
