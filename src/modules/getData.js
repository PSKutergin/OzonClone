const getData = () => {
  return fetch('https://ozonclone-default-rtdb.firebaseio.com/goods.json')
    .then((response) => {
        return response.json()
    })
}

export default getData