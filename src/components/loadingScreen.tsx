import loadingAnimation from "../assets/animation/movieLoading.json";
import Lottie from "lottie-react";
import "../style/loadingScreen.scss";

const LoadingScreen = () => {
  return (
    <div className="loadingScreen">
      <div className="loadingScreen-wrapper">
        <Lottie style={{ width: 130, height: 130 }} animationData={loadingAnimation} loop />
        <div className="loadingScreen-title">
          <span>MOVIES</span>
          <span>APP</span>
        </div>
        <p>Loading...</p>
      </div>
    </div>
  );
};

export default LoadingScreen;
