import React, { useState, useEffect } from "react";
import "./contentCss/standartMultiSearch.css";
import { characters } from "../../api/CharactersCharacter";
import { Link } from "react-router-dom";
import ReactLoading from "react-loading";
import Pagination from "@mui/material/Pagination";
import SearchField from "react-search-field";
import ImageNotFound from "../../assets/image_not_available.jpg";
import Drawer from "../../components/utils/Drawer";

const Characters = () => {
  const [charactersContent, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pageTotal, setPageTotal] = useState(1);
  const [page, setPage] = useState(1);
  const [searchValue, setSearchValue] = useState([]);

  useEffect(() => {
    searchCharacters((page - 1) * 20);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  useEffect(() => {
    searchCharacters();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue]);

  const searchCharacters = async (offset) => {
    try {
      setLoading(true);
      const valor = await characters(offset, searchValue);
      setCharacters(valor.data.data.results);
      const roundPages = Math.round(valor.data.data.total / 20);
      setPageTotal(roundPages);
    } catch (e) {
      console.log(e.response.data.status);
    } finally {
      setLoading(false);
    }
  };

  const handleChangePagination = (e, value) => {
    setPage(value);
  };

  const handleChangeSearch = (value, e) => {
    setSearchValue(value);
  };

  return (
    <div className="row standartMultiSearchContent">
      <div className="standartMultiDrawer">
        <Drawer className="standartMultiDrawer" />
      </div>

      {loading ? (
        <ReactLoading
          type={"spokes"}
          color={"black"}
          height={"10%"}
          width={"10%"}
          className="standartLoading"
        />
      ) : (
        false
      )}

      <div className="standartSingleSearchBarContainer">
        <SearchField
          placeholder="Press Enter to search..."
          onEnter={handleChangeSearch}
          classNames="standartSingleSearchBar"
        />
      </div>
      {charactersContent.map((item) => (
        <Link
          to={`/characters/${item.id}`}
          className="pb-4 col-12 col-sm-6 col-lg-3"
          key={item.id}
        >
          <h1 className="standartMultiSearchTitle">{item.name}</h1>
          <div className="standartMultiSearchThumbnailContainer">
            <img
              className="standartMultiSearchThumbnail"
              src={item.thumbnail.path + ".jpg"}
              alt=""
              onError={({ currentTarget }) => {
                currentTarget.onerror = null; // prevents looping
                currentTarget.src = ImageNotFound;
              }}
            />
          </div>
        </Link>
      ))}
      <div className="standartMultiPaginationContainer">
        <Pagination
          className="standartMultiPagination"
          count={pageTotal}
          onChange={handleChangePagination}
          shape="rounded"
        />
      </div>
    </div>
  );
};

export default Characters;
