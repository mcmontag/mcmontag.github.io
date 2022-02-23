const teamRegex = /team[0-9]+/

async function fetchAsync (url) {
  let response = await fetch(url);
  let data = await response.json();
  return data;
}

function getCurrentUrl() {
  return window.location.pathname
}

function getTeamId() {
  let teamIdMatchArray = getCurrentUrl().match(teamRegex)
  if (teamIdMatchArray.length > 0) {
    console.log(teamIdMatchArray[1].match(/[0-9]+/)[1])
    return teamIdMatchArray[1].match(/[0-9]+/)[1]
  } else {
    return 0
  }
}

function askToSetLineup() {
  let url = getCurrentUrl()
}
