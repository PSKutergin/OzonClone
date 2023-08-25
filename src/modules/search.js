import getData from "./getData"
import renderGoods from "./renderGoods"
import { funcFilter } from "./filters"
import { debounce } from "./helpers"

const search = () => {
    const searchInput = document.querySelector('.search-wrapper_input')
    const minInp = document.getElementById('min')
    const maxInp = document.getElementById('max')
    const checkInp = document.getElementById('discount-checkbox')
    const checkMark = document.querySelector('.filter-check_checkmark')

    const debounceFunc = debounce((min = '', max = '', checkValue = false, searchValue = '') => {
        getData().then((data) => {
            renderGoods(funcFilter(data, min, max, checkValue, searchValue))
          })
    }, 1000)

    searchInput.addEventListener('input', () => {
        debounceFunc(minInp.value, maxInp.value, checkInp.value, searchInput.value)
    })

    minInp.addEventListener('input', () => {
        debounceFunc(minInp.value, maxInp.value, checkInp.value, searchInput.value)
    })

    maxInp.addEventListener('input', () => {
        debounceFunc(minInp.value, maxInp.value, checkInp.value, searchInput.value)
    })

    checkInp.addEventListener('input', () => {
        if (checkInp.checked) {
            checkMark.classList.add('checked')
        } else {
            checkMark.classList.remove('checked')
        }
        debounceFunc(minInp.value, maxInp.value, checkInp.checked, searchInput.value)
    })
}

export default search