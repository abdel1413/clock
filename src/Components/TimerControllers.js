import {
  FaAdjust,
  FaArrowUp,
  FaPause,
  FaPlay,
  FaStarHalfAlt,
} from "react-icons/fa";

export const TimerControllers = () => {
  return (
    <div>
      <div id="start_stop">
        <FaPlay />
        <FaPause />
      </div>
      <div id="reset">fa refresh will go here</div>
    </div>
  );
};
