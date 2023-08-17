import Notify from 'simple-notify'

const getData = () => {
  return fetch('https://ozonclone-default-rtdb.firebaseio.com/goods.json').then((response) => {
      if (response.ok) {
        return response.json()
      } else {
        throw new Error('Ошибка запроса!')
      }
    })
    .catch(error => {
      new Notify({
        status: 'error',
        title: 'Ошибка!',
        text: error.message,
        effect: 'slide',
        type: 3,
        autoclose: true
      })
    })
}

export default getData
