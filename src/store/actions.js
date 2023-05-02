import axiosClient from '../axios'

export function searchMeal({ commit }, keyWord) {
    axiosClient.get(`search.php?s=${keyWord}`)
        .then(({ data }) => {
            commit('setSearchedMeal', data.meals)
            return data
        })
}

export function searchByLetter({ commit }, letter) {
    axiosClient.get(`search.php?f=${letter}`)
        .then(({ data }) => {
            commit('setSearchByLetter', data.meals)
            return data
        })
}

export function searchByIngredient({ commit }, ing) {
    axiosClient.get(`filter.php?i=${ing}`)
        .then(({ data }) => {
            commit('setSearchByIngredient', data.meals)
            return data
        })
}
