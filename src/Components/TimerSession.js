export const TimerSession = ({
  timeLeft,
  clockSessionStyle,
  timerLabel,
  currTitle,
}) => {
  return (
    <div className="clock-session" ref={clockSessionStyle}>
      <div id="timer-label">{currTitle}</div>
      <div id="time-left">{timeLeft}</div>
    </div>
  );
};
