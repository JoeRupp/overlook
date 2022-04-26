const fetchErrorMessage = document.querySelector('.fetch-error-message')

// GET
const fetchData = (extension) => {
  return fetch(`http://localhost:3001/api/v1/${extension}`)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw Error(response.statusText);
      }
    })
    .catch(err => {
      fetchErrorMessage.classList.remove('collapsed');
      console.log(err)});
};

const fetchAllData = () => {
  return Promise.all([
    fetchData("customers"),
    fetchData("rooms"),
    fetchData("bookings"),
  ])
}

// POST
const postData = (data) => {
  return fetch(`http://localhost:3001/api/v1/bookings`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw Error(response.statusText);
      }
    })
    .catch(err => console.log(err));
};

export { fetchAllData };
export { postData };