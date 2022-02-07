import React, { useState, useEffect } from "react";
import "./contentCss/standartSingle.css";
import { character } from "../../api/CharactersCharacter";
import Drawer from "../../components/utils/Drawer";

const Character = () => {
  const [characterContent, setCharacter] = useState([]);

  useEffect(() => {
    searchCharacter();
  }, []);

  const searchCharacter = async () => {
    try {
      var currentUrl = document.location.pathname;
      let id = currentUrl.split("/")[2];

      const valor = await character(id);

      setCharacter(valor.data.data.results);
    } catch (e) {
      console.log(e, "error");
    }
  };

  function searchUrl(valor) {
    const windowsHref = window.location.href.split("/")[2];
    const urlValor = valor.slice(35);
    return window.location.protocol + "//" + windowsHref + urlValor;
  }

  return (
    <div>
      <div className="standartMultiDrawer">
        <Drawer className="standartMultiDrawer" />
      </div>
      {characterContent.map((item) => (
        <div key={item.id} className="standartPrimaryContainer">
          <div className="standartSingleContentContainer">
            <div className="standartSingleThumbnail">
              <h1 className="standartSingleTitle">{item.name}</h1>
              <div className="standartSingleContainerImg">
                <img
                  className="standartSingleImg"
                  src={item.thumbnail.path + ".jpg"}
                  alt=""
                />
              </div>
            </div>
            <div className="standartSingleContent">
              <h1 className="standartSingleContentTitle">COMICS</h1>

              {item.comics.items.length > 0 ? (
                item.comics.items.map((comics) => (
                  <a
                    key={comics.resourceURI}
                    href={searchUrl(comics.resourceURI)}
                    className="standartSingleUrlAncor"
                  >
                    <div className="standartSingleContentText">
                      {comics.name}
                    </div>
                  </a>
                ))
              ) : (
                <p className="standartSingleContentText">None</p>
              )}
            </div>
            <div className="standartSingleContent">
              <h1 className="standartSingleContentTitle">Series</h1>
              {item.series.items.length > 0 ? (
                item.series.items.map((series) => (
                  <a
                    key={series.name}
                    href={searchUrl(series.resourceURI)}
                    className="standartSingleUrlAncor"
                  >
                    <div className="standartSingleContentText" role="button">
                      {series.name}
                    </div>
                  </a>
                ))
              ) : (
                <p className="standartSingleContentText">None</p>
              )}
            </div>
            <div className="standartSingleContent">
              <h1 className="standartSingleContentTitle">Stories</h1>
              {item.stories.items.length > 0 ? (
                item.stories.items.map((stories) => (
                  <a
                    key={stories.name}
                    href={searchUrl(stories.resourceURI)}
                    className="standartSingleUrlAncor"
                  >
                    <div className="standartSingleContentText" role="button">
                      {stories.name}
                    </div>
                  </a>
                ))
              ) : (
                <p className="standartSingleContentText">None</p>
              )}
            </div>
            <div>
              <h1 className="standartSingleContentTitle">Events</h1>

              {item.events.items.length > 0 ? (
                item.events.items.map((events) => (
                  <a
                    key={events.name}
                    href={searchUrl(events.resourceURI)}
                    className="standartSingleUrlAncor"
                  >
                    <div className="standartSingleContentText" role="button">
                      {events.name}
                    </div>
                  </a>
                ))
              ) : (
                <p className="standartSingleContentText">None</p>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Character;
