import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Input from './Input.jsx';

const App = () => {
  const [sunset, setSunset] = useState('');
  const [runTime, setRunTime] = useState('');
  const [leaveTime, setLeaveTime] = useState('');

  const getSunset = (e, zip, distance, pace) => {
    e.preventDefault();
    const options = {
      url: `http://localhost:3001/sunset/${zip}`,
      method: 'get'
    }

    axios(options)
    .then((response) => {
      runCalc(response.data, distance, pace);
    })
    .catch((error) => {
      console.log(error);
    })
  }

  const runCalc = (sunset, distance, pace) => {
    let localSunset = findLocalSunset(sunset);
    let runLength = findRunTime(distance, pace);
    let timeToLeave = findLeaveTime(localSunset, runLength);
    setSunset(militaryToStandard(localSunset));
    setRunTime(runLength);
    setLeaveTime(timeToLeave);
  }

  const findLocalSunset = (time) => {
    let [month, date, year] = new Date().toLocaleDateString('en-US', { timeZone: 'Europe/London' }).split('/');
    let local = new Date(`${month}/${date}/${year} ${time} UTC`)
    let localTime = local.toTimeString();
    return localTime;
  }

  const findRunTime = (distance, pace) => {
    let numDist = Number(distance);
    let totalSeconds = minutesToSeconds(pace);
    let runTimeInSeconds = numDist * totalSeconds;
    let runTime = secondsToMinutes(runTimeInSeconds);
    return runTime;
  }

  const findLeaveTime = (sundown, run) => {
    let sunsetSeconds = hoursToSeconds(sundown);
    let runSeconds = minutesToSeconds(run);
    let leaveTimeInSeconds = sunsetSeconds - runSeconds;
    let leaveTime = secondsToHours(leaveTimeInSeconds);
    return leaveTime;
  }

  const minutesToSeconds = time => {
    let parts = time.split(':');
    parts = parts.map(Number);
    return (parts[0] * 60) + parts[1];
  }

  const secondsToMinutes = time => {
    let minutes = Math.floor(time / 60);
    let seconds = time - minutes * 60;
    return minutes + ':' + seconds;
  }

  const hoursToSeconds = time => {
    let parts = time.split(/[ :]+/);
    parts = parts.map(Number);
    return (parts[0] * 3600) + (parts[1] * 60) + parts[2];
  }

  const secondsToHours = time => {
    let hours = Math.floor(time / 3600);
    time = time - hours * 3600;
    let minutes = Math.floor(time / 60);
    let seconds = time - minutes * 60;
    let ampm = 'PM'
    if (minutes < 10) {
      minutes = '0' + minutes;
    }
    if (hours < 12) {
      ampm = 'AM'
    }
    if (hours > 12) {
      hours -= 12;
    }
    return hours + ':' + minutes + ' ' + ampm;
  }

  const militaryToStandard = time => {
    let parts = time.split(/[ :]+/);
    let hours = Number(parts[0]);
    let minutes = Number(parts[1]);
    let ampm = 'PM'
    console.log(hours, minutes)
    if (minutes < 10) {
      minutes = '0' + minutes;
    }
    if (hours < 12) {
      ampm = 'AM'
    }
    if (hours > 12) {
      hours -= 12;
    }
    return hours + ':' + minutes + ' ' + ampm;
  }

  return (
    <div>
      <h1>Before Dark</h1>
      <Input getSunset={getSunset} />
      <div>Tonight's sunset is at {sunset}</div>
      <div>Your run should take approximately {runTime}</div>
      <div>Leave by {leaveTime} to get home before dark!</div>
    </div>
  );
};

export default App;