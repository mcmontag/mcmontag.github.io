const teamRegex = /team([0-9]+)/
const leagueId = 459936077;

const apiUrl = "https://mattmontag.one/api/v1/fantasy/hockey/setlineup"

async function fetchAsync (url) {
  let response = await fetch(url);
  let data = await response.json();
  return data;
}

function getCurrentUrl() {
  return window.location.pathname;
}

function getTeamId() {
  let teamIdMatchArray = getCurrentUrl().match(teamRegex);
  if (teamIdMatchArray.length > 1) {
    return teamIdMatchArray[1];
  } else {
    return 0;
  }
}

function setLineup() {
  let teamId = getTeamId();
  let requestData = {
    method: 'POST',
    mode: 'no-cors', // TODO: set up cors on the server-side
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ teamId: teamId, leagueId: leagueId })
  };
  
  return fetch(apiUrl, requestData).then(response => alert("Response received.  I can't tell you anything about it right now, though"));
  //return fetch(apiUrl, requestData).then(response => response.json()).then(text => alert(JSON.stringify(text)));
}
