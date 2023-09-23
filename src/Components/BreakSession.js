import { FaArrowDown, FaArrowUp } from "react-icons/fa";

export const Length = ({
  handleIncrementSession,
  handleDecrementSession,

  time,
  type,
  changeTime,
  label,
  decrementId,
  incrementId,
  labelId,
  lengthId,
}) => {
  return (
    <div className="break-session-container">
      {/* <div id={labelId}>{label}</div> */}
      <div id="session-label">Session Length</div>
      <div className="break-right">
        {/* </div> <div id={decrementId} onClick={() => changeTime(-60, type)}> */}
        <div id="session-decrement" onClick={handleDecrementSession}>
          <FaArrowDown />
        </div>
        <div id="session-length">{time / 60}</div>

        {/* <div id={incrementId} onClick={() => changeTime(+60, type)}> */}
        <div id="session-increment" onClick={handleIncrementSession}>
          <FaArrowUp />
        </div>
      </div>
    </div>
  );
};
