import { FaArrowDown, FaArrowUp } from "react-icons/fa";

export const BreakSession = () => {
  return (
    <div>
      <div>Break session</div>
      <div>
        <div>
          <div>
            <FaArrowDown id="break-increment" />
          </div>
          <div id="session-length">25</div>
          <div>
            <FaArrowUp id="session-increment" />
          </div>
        </div>
      </div>
    </div>
  );
};
