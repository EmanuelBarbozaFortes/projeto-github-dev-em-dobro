import { baseUrl } from "../variables.js";

async function getEvents(userName) {
  const response = await fetch(`${baseUrl}/${userName}/events`);
  const led = await response.json();
  console.log(led);
}

export { getEvents };