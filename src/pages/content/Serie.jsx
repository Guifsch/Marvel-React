import React, { useState, useEffect } from "react";
import "./contentCss/standartSingle.css";
import { serie } from "../../api/SeriesSerie";
import Drawer from "../../components/utils/Drawer";

const Serie = () => {
  const [comicContent, setComic] = useState([]);

  useEffect(() => {
    searchComic();
  }, []);

  const searchComic = async () => {
    try {
      var currentUrl = document.location.pathname;
      let id = currentUrl.split("/")[2];
      const valor = await serie(id);
      setComic(valor.data.data.results);
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
      {comicContent.map((item) => (
        <div key={item.id} className="standartPrimaryContainer">
          <div className="standartSingleContentContainer">
            <div className="standartSingleThumbnail">
              <h1 className="standartSingleTitle">{item.title}</h1>
              <div className="standartSingleContainerImg">
                <img
                  className="standartSingleImg"
                  src={item.thumbnail.path + ".jpg"}
                  alt=""
                />
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
                    <div
                      className="standartSingleContentText"
                      role="button"
                    ></div>
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
                    <div className="standartSingleContentText" role="button">
                      {stories.name}
                    </div>
                  </a>
                ))
              ) : (
                <p className="standartSingleContentText">None</p>
              )}
            </div>
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
          </div>
        </div>
      ))}
    </div>
  );
};

export default Serie;
