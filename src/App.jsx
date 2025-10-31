import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./App.css";
import NavBar from "./Components/NavBar-Pages";
import { PopupProvider } from './PopupContext';

// Lazy load page components for code splitting
const Home = React.lazy(() => import("./Pages/Home"));
const Contact = React.lazy(() => import("./Pages/Contact"));
const ActorMovement = React.lazy(() => import("./Pages/ActorMovement"));
const CreativeDirector = React.lazy(() => import("./Pages/CreativeDirector"));
const Dancer = React.lazy(() => import("./Pages/Dancer"));
const TheLyric = React.lazy(() => import("./Pages/TheLyric"));
const Photographer = React.lazy(() => import("./Pages/Photographer"));
const Film = React.lazy(() => import("./Pages/Film"));

function App() {
  return (
    <div className="App">
      <PopupProvider>
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
                  <Suspense fallback={
                    <div style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      height: '50vh',
                      fontSize: '18px',
                      color: '#666'
                    }}>
                      Loading...
                    </div>
                  }>
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
                      <Route exact path="/film" component={Film} />
                      <Route exact path="/contact" component={Contact} />

                      {/* Lost page */}

                      <Route path="*" component={Home} />
                    </Switch>
                  </Suspense>
                </CSSTransition>
              </TransitionGroup>
            )}
          />
        </Route>
      </PopupProvider>
    </div>
  );
}

export default App;
