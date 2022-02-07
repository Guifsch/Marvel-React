import React, { useState, useEffect } from "react";
import "./contentCss/standartMultiSearch.css";
import { stories } from "../../api/StoriesStorie";
import { Link } from "react-router-dom";
import ReactLoading from "react-loading";
import Pagination from "@mui/material/Pagination";
import Drawer from "../../components/utils/Drawer";

const Stories = () => {
  const [storiesContent, setStories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pageTotal, setPageTotal] = useState(1);
  const [page, setPage] = useState(1);

  useEffect(() => {
    searchStories((page - 1) * 20);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const searchStories = async (offset) => {
    try {
      setLoading(true);
      const valor = await stories(offset);
      setStories(valor.data.data.results);
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

  return (
    <div className="standartMultiSearchContent">
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
      <div className="standartMultiGrid">
        {storiesContent.map((item) => (
          <Link to={`/stories/${item.id}`} key={item.id}>
            <h1 className="standartMultiSearchTitleStories">{item.title}</h1>
          </Link>
        ))}
      </div>
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

export default Stories;
