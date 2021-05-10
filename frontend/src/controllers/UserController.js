export const userRegister = (user) =>
  fetch(`http://localhost:8080/users/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((res) => {
      if (res.status === 200) {
        return res.json();
      } else {
        alert("Registeration failed.");
        return null;
      }
    })
    .then((data) => {
      if (data !== null) {
        return data;
      }
      return null;
    })
;

export const userLogin = (user) =>
  fetch(`http://localhost:8080/users/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((res) => {
      if (res.status === 200) {
        return res.json();
      } else {
        alert("Invalid username/password.");
        return null;
      }
    })
    .then((data) => {
      if (data !== null) {
        localStorage.setItem("loggedUser", JSON.stringify(data));
        return data;
      }
      return null;
    })
;

export const getUserObservations = (id) => {
  fetch(`http://localhost:8080/users/${id}/observations`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      return data;
    })
    .catch((error) => alert("Error fetching user observations", error));
};
