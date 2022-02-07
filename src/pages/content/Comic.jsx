import React, { useState, useEffect } from "react";
import "./contentCss/standartSingle.css";
import { comic } from "../../api/ComicsComic";
import Drawer from "../../components/utils/Drawer";

var Barcode = require("react-barcode");

const Comic = () => {
  const [comicContent, setComic] = useState([]);
  const [textObjectsText, setTextObjects] = useState([]);

  useEffect(() => {
    searchComic();
  }, []);

  const searchComic = async () => {
    try {
      var currentUrl = document.location.pathname;
      let id = currentUrl.split("/")[2];
      const valor = await comic(id);
      setComic(valor.data.data.results);
      valor.data.data.results.map((item) => {
        if (item.textObjects.length > 1) {
          return setTextObjects(
            item.textObjects.filter(
              (obj) => obj.type === "issue_preview_text"
            )[0].text
          );
        } else {
          const string = item.textObjects.filter(
            (obj) => obj.type === "issue_solicit_text"
          )[0].text;
          return setTextObjects(string.replace(/<br>/g, ""));
        }
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
            {item.upc ? (
              <div className="standartSingleUpc">
                <Barcode value={item.upc} />
              </div>
            ) : (
              []
            )}

            <div className="standartSingleContent">
              {item.textObjects.length > 0 ? (
                item.textObjects.map((textObjects) => (
                  <div
                    className="standartSingleContentText"
                    key={textObjects.text}
                  >
                    {textObjectsText}
                  </div>
                ))
              ) : (
                <div className="standartSingleContentText">No description</div>
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
                    for <span className="standartUrlType">{url.type}</span>
                  </span>
                </div>
              ))}
            </div>

            <div className="standartSingleContent">
              {item.pageCount > 0 ? (
                <div className="standartSinglePages">
                  <h1 className="standartSingleContentTitle">Pages:</h1>{" "}
                  <span className="standartSingleContentText mx-2">
                    {item.pageCount}
                  </span>
                </div>
              ) : (
                <div className="standartSinglePages">
                  <h1 className="standartSingleContentTitle">Pages:</h1>
                  <span className="standartSingleContentText mx-2">
                    {" "}
                    Not avaiable
                  </span>
                </div>
              )}
            </div>

            <div className="standartSingleContent">
              {item.prices.length > 0 ? (
                item.prices.map((prices) => (
                  <div
                    key={prices.type}
                    className="standartSingleContentText standartSinglePrice"
                  >
                    <p>
                      <span className="standartSingleContentTitle">Type:</span>
                      <span className="standartSingleContentText standartSingleMarginLeft">
                        {prices.type === "printPrice"
                          ? "Print price"
                          : "Digital purchase price"}
                      </span>
                    </p>
                    <p>
                      <span className="standartSingleContentTitle">Price:</span>
                      <span className="standartSingleContentText standartSingleMarginLeft">
                        {new Intl.NumberFormat("de-DE", {
                          style: "currency",
                          currency: "USD",
                        }).format(prices.price)}
                      </span>
                    </p>
                  </div>
                ))
              ) : (
                <div>
                  <span className="standartSingleContentTitle">Price:</span>{" "}
                  <span className="standartSingleContentText standartSingleMarginLeft">
                    Not avaiable
                  </span>
                </div>
              )}
            </div>

            <div className="standartSingleContent">
              <h1 className="standartSingleContentTitle">Series:</h1>
              {item.series ? (
                <a
                  href={searchUrl(item.series.resourceURI)}
                  className="standartSingleUrlAncor"
                >
                  <div className="standartSingleContentText" role="button">
                    {item.series.name}
                  </div>
                </a>
              ) : (
                <p className="standartSingleContentText">None</p>
              )}
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
                        <span className="standartCreatorsName">
                          {creators.name}
                        </span>
                      </p>
                      <p>
                        <span className="standartSingleContentSubTitle">
                          Role:
                        </span>{" "}
                        <span className="standartCreatorsName">
                          {creators.role}
                        </span>
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
            <div>
              <h1 className="standartSingleContentTitle">Variant:</h1>
              {item.variants.length > 0
                ? item.variants.map((variants) => (
                    <a
                      href={searchUrl(variants.resourceURI)}
                      className="standartSingleUrlAncor"
                      key={variants.resourceURI}
                    >
                      <div className="standartSingleContentText" role="button">
                        {variants.name}
                      </div>
                    </a>
                  ))
                : [<p className="standartSingleContentText">None</p>]}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Comic;
