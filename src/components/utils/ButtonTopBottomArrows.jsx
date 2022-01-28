import React, { useState, useEffect } from "react";
import IconButton from "@mui/material/IconButton";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const ButtonTopBottomArrows = ({ showBelow, someValue }) => {
  const [show, setShow] = useState(showBelow ? false : true);
  const handleScroll = () => {
    if (
      window.pageYOffset > showBelow &&
      window.matchMedia("(max-width: 768px)").matches
    ) {
      if (!show) setShow(true);
    } else {
      if (show) setShow(false);
    }
  };

  useEffect(() => {
    if (showBelow) {
      window.addEventListener(`scroll`, handleScroll);
      return () => window.removeEventListener(`scroll`, handleScroll);
    }
  });

  if (someValue) {
    const handleClick = () => {
      window["scrollTo"]({ top: 9999999, behavior: `smooth` });
    };

    return (
      <div>
        {show && (
          <IconButton
            onClick={handleClick}
            className="standartMultiButtonGoToBotton"
          >
            <ArrowDropDownIcon />
          </IconButton>
        )}
      </div>
    );
  } else {
    const handleClick = () => {
      window["scrollTo"]({ top: 0, behavior: `smooth` });
    };

    return (
      <div>
        {show && (
          <IconButton
            onClick={handleClick}
            className="standartMultiButtonBackToTop"
          >
            <ArrowDropUpIcon />
          </IconButton>
        )}
      </div>
    );
  }
};
export default ButtonTopBottomArrows;
