import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";

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

import "./App.css";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <div className="backgroundImage" />
    <Routes>
      <Route path="/home" element={<App />} />
      <Route path="characters" element={<Characters />} />
      <Route path={`/characters/:Id`} element={<Character />} />
      <Route path="comics" element={<Comics />} />
      <Route path={`/comics/:Id`} element={<Comic />} />
      <Route path="creators" element={<Creators />} />
      <Route path={`/creators/:Id`} element={<Creator />} />
      <Route path="events" element={<Events />} />
      <Route path={`/events/:Id`} element={<Event />} />
      <Route path="series" element={<Series />} />
      <Route path={`/series/:Id`} element={<Serie />} />
      <Route path="stories" element={<Stories />} />
      <Route path={`/stories/:Id`} element={<Storie />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);
