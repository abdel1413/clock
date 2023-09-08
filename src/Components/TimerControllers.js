import { FaPause, FaPlay, FaSync } from "react-icons/fa";

export const TimerControllers = () => {
  return (
    <div>
      <div id="start_stop">
        <div className="fa-play">
          <FaPlay />
        </div>
        <div className="fa-pause">
          <FaPause />
        </div>
        <div className="fa-sync" id="reset">
          <FaSync />
        </div>
      </div>
    </div>
  );
};
