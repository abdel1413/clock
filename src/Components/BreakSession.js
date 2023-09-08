import { FaArrowDown, FaArrowUp } from "react-icons/fa";

export const BreakSession = () => {
  return (
    <div className="break-session-container">
      <div id="session-label">Break session</div>
      <div className="break-right">
        <div id="session-decrement">
          <FaArrowDown />
        </div>
        <div id="session-length">25</div>
        <div id="session-increment">
          <FaArrowUp />
        </div>
      </div>
    </div>
  );
};
