import { useNavigate } from "react-router-dom";

const ButtonBackAndHome = ({ backButtonText }) => {
  const navigate = useNavigate();

  return (
    <div>
      {backButtonText ? (
        <a href="/home" className="homeButtonContainer" role="button" alt="">
          HOME
        </a>
      ) : (
        <div
          className="backButtonContainer"
          onClick={() => navigate(-1)}
          role="button"
        >
          BACK
        </div>
      )}
    </div>
  );
};

export default ButtonBackAndHome;
