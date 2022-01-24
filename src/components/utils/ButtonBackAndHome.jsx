import { useNavigate } from "react-router-dom";

const ButtonBackAndHome = ({ backButtonText }) => {
  const navigate = useNavigate();

  return (
    <div>
      {backButtonText ? (
        <a href="/" className="homeButtonContainer" role="button" alt="">
          HOME
        </a>
      ) : (
        <a
          className="backButtonContainer"
          onClick={() => navigate(-1)}
          role="button"
        >
          BACK
        </a>
      )}
    </div>
  );
};

export default ButtonBackAndHome;
