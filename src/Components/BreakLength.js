import { FaArrowDown, FaArrowUp } from "react-icons/fa";
export const BreakLength = () => {
  return (
    <div className="break-length-container">
      <div id="break-label"> Break Length</div>
      <div className="break-left">
        <div id="break-decrement">
          <FaArrowDown />
        </div>
        <div id="break-length">5</div>
        <div id="break-increment">
          <FaArrowUp />
        </div>
      </div>
    </div>
  );
};
