// GET
const fetchData = (extension) => {
  return fetch(`http://localhost:3001/api/v1/${extension}`)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw Error(response.statusText)
      }
    })
    .catch(err => console.log(err));
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
    .catch(err => console.log(err))
};

// DELETE
const deleteData = (data) => {

}

export { fetchAllData };
export { postData };
export { deleteData };