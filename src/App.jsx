import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import ActorMovement from "./Pages/ActorMovement";
import CreativeDirector from "./Pages/CreativeDirector";
import Dancer from "./Pages/Dancer";
import TheLyric from "./Pages/TheLyric";
import Photographer from "./Pages/Photographer";
import { Route, Switch } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./App.css";
import NavBar from "./Components/NavBar-Pages";

function App() {
  return (
    <div className="App">
      <Route>
        <NavBar homeColour={"light"} colour={"light"} />
        <Route
          render={({ location }) => (
            <TransitionGroup>
              <CSSTransition
                key={location.key}
                timeout={1000}
                classNames="fade"
              >
                <Switch>
                  {/* Project pages */}
                  <Route exact path="/home" component={Home} />

                  <Route
                    exact
                    path="/actormovement"
                    component={ActorMovement}
                  />
                  <Route
                    exact
                    path="/creativedirector"
                    component={CreativeDirector}
                  />
                  <Route exact path="/dancer" component={Dancer} />
                  <Route exact path="/thelyric" component={TheLyric} />
                  <Route
                    exact
                    path="/photographer"
                    component={Photographer}
                  />
                  <Route exact path="/contact" component={Contact} />

                  {/* Lost page */}

                  <Route path="*" component={Home} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )}
        />
      </Route>
    </div>
  );
}

export default App;
