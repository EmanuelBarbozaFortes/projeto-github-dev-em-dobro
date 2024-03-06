import { baseUrl, repositoriesQuantity } from "../variables.js";

async function respositories(userName) {
  const response = await fetch(
    `${baseUrl}/${userName}/repos?per_page=${repositoriesQuantity}`
  );
  return await response.json();
}

export { respositories };
