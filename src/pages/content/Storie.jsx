import React, { useState, useEffect } from "react";
import "./contentCss/standartSingle.css";
import { storie } from "../../api/StoriesStorie";
import Drawer from "../../components/utils/Drawer";

const Serie = () => {
  const [serieContent, setSerie] = useState([]);

  useEffect(() => {
    searchSerie();
  }, []);

  const searchSerie = async () => {
    try {
      var currentUrl = document.location.pathname;
      let id = currentUrl.split("/")[2];
      const valor = await storie(id);
      setSerie(valor.data.data.results);
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
      {serieContent.map((item) => (
        <div key={item.id} className="standartPrimaryContainer">
          <div className="standartSingleContentContainer">
            <div className="standartSingleThumbnail">
              <div className="standartSingleContentCard">
                <h1 className="standartSingleTitle">{item.title}</h1>
              </div>
            </div>

            <div className="standartSingleContent">
              <h1 className="standartSingleContentTitle">Creators:</h1>
              {item.creators.available > 0 ? (
                item.creators.items.map((creators) => (
                  <a
                    href={searchUrl(creators.resourceURI)}
                    className="standartSingleUrlAncor"
                    key={creators.resourceURI}
                  >
                    <div
                      className="standartSingleContentText standartSingleCreators"
                      role="button"
                    >
                      <p>
                        <span className="standartSingleContentSubTitle">
                          Name:
                        </span>{" "}
                        {creators.name}
                      </p>
                      <p>
                        <span className="standartSingleContentSubTitle">
                          Role:
                        </span>{" "}
                        {creators.role}
                      </p>
                    </div>
                  </a>
                ))
              ) : (
                <p className="standartSingleContentText">None</p>
              )}
            </div>

            <div className="standartSingleContent">
              <h1 className="standartSingleContentTitle">Characters:</h1>
              {item.characters.available > 0 ? (
                item.characters.items.map((characters) => (
                  <a
                    href={searchUrl(characters.resourceURI)}
                    className="standartSingleUrlAncor"
                    key={characters.resourceURI}
                  >
                    <div className="standartSingleContentText" role="button">
                      {characters.name}
                    </div>
                  </a>
                ))
              ) : (
                <p className="standartSingleContentText">None</p>
              )}
            </div>

            <div className="standartSingleContent">
              <h1 className="standartSingleContentTitle">Series:</h1>
              {item.series.items.length > 0 ? (
                item.series.items.map((series) => (
                  <a
                    href={searchUrl(series.resourceURI)}
                    className="standartSingleUrlAncor"
                    key={series.resourceURI}
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
              <h1 className="standartSingleContentTitle">Comics:</h1>
              {item.comics.items.length > 0 ? (
                item.comics.items.map((comics) => (
                  <a
                    href={searchUrl(comics.resourceURI)}
                    className="standartSingleUrlAncor"
                    key={comics.resourceURI}
                  >
                    <div className="standartSingleContentText" role="button">
                      {comics.name}
                    </div>
                  </a>
                ))
              ) : (
                <p className="standartSingleContentText">None</p>
              )}
            </div>

            <div className="standartSingleContent">
              <h1 className="standartSingleContentTitle">Events</h1>

              {item.events.items.length > 0 ? (
                item.events.items.map((events) => (
                  <a
                    href={searchUrl(events.resourceURI)}
                    className="standartSingleUrlAncor"
                    key={events.resourceURI}
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

            <div className="standartSinglePages">
              <h1 className="standartSingleContentTitle">Original Issue:</h1>
              <a
                href={searchUrl(item.originalIssue.resourceURI)}
                className="standartSingleUrlAncor"
              >
                <div
                  className="standartSingleContentText standartSingleMarginLeft"
                  role="button"
                >
                  {item.originalIssue.name}
                </div>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Serie;
