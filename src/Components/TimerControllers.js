import { FaPause, FaPlay, FaSync } from "react-icons/fa";

export const TimerControllers = ({ reset, playPause, isPlaying }) => {
  return (
    <div>
      <div id="controller">
        <div id="start_stop" onClick={playPause}>
          {isPlaying ? <FaPause /> : <FaPlay />}
        </div>
        <div className="fa-sync" id="reset" onClick={reset}>
          <FaSync />
        </div>
      </div>
    </div>
  );
};
