import React from 'react';

function ModeToggler() {
  let darkModeOn = false;
  const darkMode = <h1>Dark Mode Is On</h1>;
  const lightMode = <h1>Light Mode Is On</h1>;

  function handleClick() {
    darkModeOn = !darkModeOn;
    darkModeOn ? console.log("Dark Mode is on") : console.log("Light Mode is on");
  }

  return (
    <div>
        {darkModeOn ? darkMode : lightMode}
        <button onClick={handleClick}>Click Me!</button>
    </div>
  );
}

export default ModeToggler;
