import { Button } from "../Button/Button";

import "./Video.scss";

export const Video = () => {
  return (
    <div className="video-container">
      <div className="video-text">
        <h1>Our Partner</h1>
        <p>Visit ETNO LUX Kula website and check out our work!</p>
        <div>
          <a href="https://etnolux.rs/" target="_blank">
            <Button text="CHECK" onClickCallback={() => {}}></Button>
          </a>
        </div>
      </div>
      <div className="video-youtube">
        <iframe
          src="https://www.youtube.com/embed/lvsjucag5VE?autoplay=1&controls=0&loop=1&mute=1"
          frameBorder="0"
        ></iframe>
      </div>
    </div>
  );
};
