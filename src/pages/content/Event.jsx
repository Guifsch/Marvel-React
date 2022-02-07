import React, { useState, useEffect } from "react";
import "./contentCss/standartSingle.css";
import { event } from "../../api/EventsEvent";
import { format } from "date-fns";
import Drawer from "../../components/utils/Drawer";

const Event = () => {
  const [eventContent, setEvent] = useState([]);
  const [startDateFormated, setStartDateFormated] = useState([]);
  const [endDateFormated, setEndDateFormated] = useState([]);

  useEffect(() => {
    searchEvent();
  }, []);

  const searchEvent = async () => {
    try {
      var currentUrl = document.location.pathname;
      let id = currentUrl.split("/")[2];
      const valor = await event(id);
      setEvent(valor.data.data.results);
      valor.data.data.results.map((date) => {
        return (
          setStartDateFormated(format(new Date(date.start), "dd/MM/yyyy")),
          setEndDateFormated(format(new Date(date.end), "dd/MM/yyyy"))
        );
      });
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
      {eventContent.map((item) => (
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

            <div className="standartSingleContent">
              {item.description ? (
                <div className="standartSingleContentTitle">
                  {item.description}
                </div>
              ) : (
                []
              )}
            </div>

            <div className="standartSingleContent">
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
            </div>

            <div className="standartSingleContent">
              {item.start != null ? (
                <div className="standartSinglePages">
                  <h1 className="standartSingleContentTitle">Start:</h1>
                  <span className="standartSingleContentText mx-2">
                    {startDateFormated}
                  </span>
                </div>
              ) : (
                <div className="standartSinglePages">
                  <h1 className="standartSingleContentTitle">Start:</h1>
                  <span className="standartSingleContentText mx-2">
                    {" "}
                    Not avaiable
                  </span>
                </div>
              )}

              {item.end != null ? (
                <div className="standartSinglePages">
                  <h1 className="standartSingleContentTitle">End:</h1>{" "}
                  <span className="standartSingleContentText mx-2">
                    {endDateFormated}
                  </span>
                </div>
              ) : (
                <div className="standartSinglePages">
                  <h1 className="standartSingleContentTitle">End:</h1>
                  <span className="standartSingleContentText mx-2">
                    {" "}
                    Not avaiable
                  </span>
                </div>
              )}
            </div>
            <div className="standartSingleContent">
              <h1 className="standartSingleContentTitle">Creators:</h1>
              {item.creators.available > 0 ? (
                item.creators.items.map((creators) => (
                  <a
                    href={searchUrl(creators.resourceURI)}
                    className="standartSingleUrlAncor"
                  >
                    <div
                      className="standartSingleContentText standartSingleCreators"
                      onClick={() => searchUrl(creators.resourceURI)}
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

            <div>
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
          </div>
        </div>
      ))}
    </div>
  );
};

export default Event;
