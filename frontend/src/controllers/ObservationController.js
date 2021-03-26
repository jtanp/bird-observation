/**Fetch birds from database and return array of birds */
export const getBirds = () => fetch(
  `http://localhost:8080/birds`,
  {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }
)
  .then((res) => res.json())

/**Fetch observations from database and return array of observations */
export const getObservations = () => fetch(
  `http://localhost:8080/observations`,
  {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }
)
  .then((res) => res.json())

/** Saves given observation data to database */
export async function create(observation) {
    const response = await fetch("http://localhost:8080/observation", {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(observation) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
}
