import { FaArrowDown, FaArrowUp } from "react-icons/fa";
export const Length2 = ({
  time,
  handleIncrementLength,
  handleDecrementLength,
}) => {
  return (
    <div className="break-length-container">
      <div id="break-label"> Break Length</div>
      <div className="break-left">
        <div id="break-decrement" onClick={() => handleDecrementLength(time)}>
          <FaArrowDown />
        </div>
        <div id="break-length">{time / 60}</div>
        <div id="break-increment" onClick={() => handleIncrementLength(time)}>
          <FaArrowUp />
        </div>
      </div>
    </div>
  );
};
