import Characters from "./pages/content/Characters";
import Character from "./pages/content/Character";
import Comics from "./pages/content/Comics";
import Comic from "./pages/content/Comic";
import Creators from "./pages/content/Creators";
import Creator from "./pages/content/Creator";
import Events from "./pages/content/Events";
import Event from "./pages/content/Event";
import Series from "./pages/content/Series";
import Serie from "./pages/content/Serie";
import Stories from "./pages/content/Stories";
import Storie from "./pages/content/Storie";
import Home from "./pages/content/Home";
import ButtonTopBottomArrows from "./components/utils/ButtonTopBottomArrows";

import { BrowserRouter as Router, useRoutes } from "react-router-dom";

const App = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "characters", element: <Characters /> },
    { path: `/characters/:Id`, element: <Character /> },
    { path: "comics", element: <Comics /> },
    { path: `/comics/:Id`, element: <Comic /> },
    { path: "creators", element: <Creators /> },
    { path: `/creators/:Id`, element: <Creator /> },
    { path: "events", element: <Events /> },
    { path: `/events/:Id`, element: <Event /> },
    { path: "series", element: <Series /> },
    { path: `/series/:Id`, element: <Serie /> },
    { path: "stories", element: <Stories /> },
    { path: `/stories/:Id`, element: <Storie /> },
    { path: "/", element: <Home /> },
  ]);
  return routes;
};

const AppWraper = () => {
  return (
    <Router>
      <div className="backgroundImage" />
      <ButtonTopBottomArrows showBelow={250} />
      <ButtonTopBottomArrows showBelow={250} someValue={"someValue"} />
      <App />
    </Router>
  );
};
export default AppWraper;
