export function setSearchedMeal(state, meals) {
    state.searchedMeals = meals || []
}

export function setSearchByLetter(state, meals) {
    state.searchByLetter = meals || []
}

export function setSearchByIngredient(state, meals) {
    state.searchByIngredient = meals || []
}