import { FaArrowDown, FaArrowUp } from "react-icons/fa";
export const BreakLength = () => {
  return (
    <div>
      <div id="break-label"> Break Length</div>
      <div id="break-decrement">
        <FaArrowDown />
      </div>
      <div id="break-length">5</div>
      <div id="session-decrement">
        <FaArrowUp />
      </div>
    </div>
  );
};
