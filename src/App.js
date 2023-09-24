import { useEffect, useRef, useState } from "react";
import "./App.css";
import { Length2 } from "./Components/BreakLength";
import { Length } from "./Components/BreakSession";
import { TimerControllers } from "./Components/TimerControllers";
import { TimerSession } from "./Components/TimerSession";
import { Author } from "./Components/Author";

function App() {
  const [breakLength, setBreakLength] = useState(5 * 60);
  const [sessionLength, setSessionLength] = useState(25 * 60);
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [timerLabel, setTimerLabel] = useState("SESSION");
  const [isPlaying, setIsPlaying] = useState(false);
  const [onBreak, setOnBreak] = useState(false);
  let clockSessionStyle = useRef();
  const aud = useRef("beep");

  let currTitle = timerLabel === "SESSION" ? "Session" : "Break";

  useEffect(() => {
    timeUpStyle(timeLeft);
    if (isPlaying) {
      let interval = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 0 && onBreak === false) {
            setOnBreak(true);
            setTimerLabel("Break");
            playAudio();
            return breakLength;
          } else if (prev <= 0 && onBreak === true) {
            setOnBreak(false);
            setTimerLabel("SESSION");
            playAudio();
            return sessionLength;
          } else {
            return prev - 1;
          }
        });
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [isPlaying, timeLeft, breakLength, sessionLength, onBreak]);

  //

  const reset = () => {
    setIsPlaying(false);
    setOnBreak(false);
    setBreakLength(5 * 60);
    setSessionLength(25 * 60);
    setTimeLeft(25 * 60);
    setTimerLabel("SESSION");
    stopAudio();
  };

  // useEffect(() => {
  // const interval = setInterval(() => {
  //   if (isPlaying === true) {
  //     setTimeLeft((prv) => {
  //       if (prv <= 0 && onBreak === false) {
  //         playAudio();
  //         setOnBreak(true);
  //         setTimerLabel("Break");
  //         return breakLength;
  //       } else if (prv <= 0 && onBreak === true) {
  //         playAudio();
  //         setOnBreak(false);
  //         setTimerLabel("Session");
  //         return sessionLength;
  //       } else {
  //         // console.log("prev timelf", prv, timeLeft);
  //         // prv < 60
  //         //   ? clockSessionStyle.current.classList.add("clockSessionStyle")
  //         //   : clockSessionStyle.current.classList.remove("clockSessionStyle");
  //         return prv - 1;
  //       }
  //     });
  //   }
  // }, 1000);
  // return () => clearInterval(interval);
  //}, [isPlaying, breakLength, sessionLength, onBreak]);

  const handleIncrementLength = () => {
    if (!isPlaying) {
      if (breakLength < 3600) setBreakLength(breakLength + 60);
      setTimerLabel("Break");
      setTimeLeft(breakLength + 60);
    }
  };

  const handleDecrementLength = () => {
    if (!isPlaying) {
      if (breakLength > 60) {
        setBreakLength(breakLength - 60);
        setTimerLabel("Break");
        setTimeLeft(breakLength - 60);
      }
    }
  };

  //increment session only when it is not playing
  const handleDecrementSession = () => {
    if (sessionLength > 60) {
      setSessionLength(sessionLength - 60);
      if (!isPlaying) {
        setTimerLabel("SESSION");
        setTimeLeft(sessionLength - 60);
      }
    }
  };

  //decrement session only when is not playing
  const handleIncrementSession = () => {
    if (sessionLength < 3600) {
      setSessionLength(sessionLength + 60);
      if (!isPlaying) {
        setTimerLabel("SESSION");
        setTimeLeft(sessionLength + 60);
      }
    }
  };

  // construct a defaut 25:00 mm: ss timer
  //convert 25min in secs => 1500
  //then divide by 60 => 25 min (or take the reminder ope)
  //then subtruct time left from the product of minutes * 60
  //add leading zeroes when minutes /secs get < 10;
  const timeBuilder = (time) => {
    let minutes = Math.floor(time / 60);
    //let seconds = time - minutes * 60;
    let seconds = time % 60;
    let minuteFormat = minutes < 10 ? "0" + minutes : minutes;
    let secondFormat = seconds < 10 ? "0" + seconds : seconds;

    return `${minuteFormat}:${secondFormat}`;
  };

  const playPause = () => {
    setIsPlaying(!isPlaying);
  };

  const playAudio = () => {
    let audio = document.getElementById("beep");
    audio.currentTime = 0;
    audio.play();
    // aud.current.currentTime = 0;
    // aud.play();
  };

  const stopAudio = () => {
    let audio = document.getElementById("beep");
    audio.currentTime = 0;
    audio.pause();
    // aud.current.currentTime = 0;
    // aud.current.pause();
  };

  const timeUpStyle = (time) => {
    time < 60
      ? clockSessionStyle.current.classList.add("clockSessionStyle")
      : clockSessionStyle.current.classList.remove("clockSessionStyle");
  };

  const changeTime = (time, type) => {
    if (isPlaying === false) {
      if (type === "break") {
        if (
          (breakLength <= 60 && time < 0) ||
          (breakLength >= 3600 && time > 0)
        ) {
          //  alert("You can't further");
          return;
        }
        setBreakLength((prev) => prev + time);
        if (!isPlaying) {
          setTimeLeft(breakLength + time);
        }
      } else if (type === "session") {
        if (
          (sessionLength <= 60 && time < 0) ||
          (sessionLength >= 3600 && time > 0)
        ) {
          // alert("You can't further");
          return;
        }
        setSessionLength((pr) => pr + time);
        if (!isPlaying) {
          setTimeLeft(sessionLength + time);
        }
      }
    }
  };

  return (
    <div className="container">
      <div className="App">
        <div className="header"> 25 + 5 Clock</div>
        <div className="breaks">
          {/* <Length
          type={"break"}
          label={"Break Length"}
          labelId={"break-label"}
          lengthId={"break-length"}
          decrementId={"break-decrement"}
          incrementId={"break-increment"}
          time={breakLength}
          changeTime={changeTime}
        />
          <Length
            type={"session"}
            label={"Session Length"}
            labelId={"session-label"}
            decrementId={"session-decrement"}
            incrementId={"session-increment"}
            lengthId={"session-length"}
            time={sessionLength}
            changeTime={changeTime}
        /> */}

          <Length2
            handleIncrementLength={handleIncrementLength}
            handleDecrementLength={handleDecrementLength}
            time={breakLength}
          />
          <Length
            handleDecrementSession={handleDecrementSession}
            handleIncrementSession={handleIncrementSession}
            time={sessionLength}
          />
        </div>
        <TimerSession
          currTitle={currTitle}
          timeLeft={timeBuilder(timeLeft)}
          timerLabel={currTitle}
          clockSessionStyle={clockSessionStyle}
        />
        <TimerControllers
          isPlaying={isPlaying}
          playPause={playPause}
          reset={reset}
          play={isPlaying}
        />

        <audio
          ref={aud}
          id="beep"
          preload="auto"
          src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
        />
      </div>
      <div className="author">
        <Author />
      </div>
    </div>
  );
}

export default App;
