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

/**Creates a new observation */
export const createObservation = (observation) => fetch(
  `http://localhost:8080/observation`,
  {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(observation)
  }
)
  .then((res) => res.json())
