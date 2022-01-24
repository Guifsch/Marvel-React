import React, { useState, useEffect } from "react";
import "./contentCss/standartSingle.css";
import { creator } from "../../api/CreatorsCreator";
import Drawer from "../../components/utils/Drawer";

const Creator = () => {
  const [creatorContent, setCreator] = useState([]);

  useEffect(() => {
    searchCreator();
  }, []);

  const searchCreator = async () => {
    try {
      var currentUrl = document.location.pathname;
      let id = currentUrl.split("/")[2];
      const valor = await creator(id);
      setCreator(valor.data.data.results);
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
      {creatorContent.map((item) => (
        <div key={item.id} className="standartPrimaryContainer">
          <div className="standartSingleContentContainer">
            <div className="standartSingleThumbnail">
              <div className="standartSingleContentCard">
                <h1 className="standartSingleTitle">{item.fullName}</h1>
                <div className="standartSingleContainerImg">
                  <img
                    className="standartSingleImg"
                    src={item.thumbnail.path + ".jpg"}
                    alt=""
                  />
                </div>
              </div>
            </div>
            {item.urls.map((url) => (
              <div key={url.url}>
                <span className="standartSingleContentText standartSingleMarginRight">
                  Click
                </span>
                <a
                  className="standartSingleUrl standartSingleContentTitle"
                  href={url.url}
                  alt=""
                  rel="noreferrer"
                  target="_blank"
                >
                  here
                </a>
                <span className="standartSingleContentText standartSingleMarginLeft">
                  for {url.type}
                </span>
              </div>
            ))}
            <div className="standartSingleContent">
              <h1 className="standartSingleContentTitle">COMICS</h1>
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
              <h1 className="standartSingleContentTitle">Stories:</h1>
              {item.stories.available > 0 ? (
                item.stories.items.map((stories) => (
                  <a
                    href={searchUrl(stories.resourceURI)}
                    className="standartSingleUrlAncor"
                    key={stories.resourceURI}
                  >
                    <div
                      key={stories.name}
                      className="standartSingleContentText"
                      role="button"
                    >
                      {stories.name}
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
                    key={events.name}
                  >
                    <div
                      key={events.resourceURI}
                      className="standartSingleContentText"
                      role="button"
                    >
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

export default Creator;
