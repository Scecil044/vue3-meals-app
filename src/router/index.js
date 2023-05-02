import { createWebHistory, createRouter } from 'vue-router'
import Home from '../views/Home.vue'
import NotFound from '../views/NotFound.vue'
import MealList from '../views/MealList.vue'
import MealsByName from '../views/MealsByName.vue'
import MealsByLetter from '../views/MealsByLetter.vue'
import MealsByIngredient from '../views/MealsByIngredient.vue'
import DefaultLayout from '../components/DefaultLayout.vue'
import Login from '../views/Login.vue'
import MealDetails from '../views/MealDetails.vue'
import Ingredients from '../views/Ingredients.vue'

const routes = [
    {
        path: '/',
        name: 'defaultLayout',
        component: DefaultLayout,
        children: [
            {
                path: '/',
                name: 'home',
                component: Home
            },
            {
                path: '/letter/:letter',
                name: 'byLetter',
                component: MealList
            },
            {
                path: '/ingredients',
                name: 'ingredients',
                component: Ingredients
            },
            {
                path: '/by-ingredient/:ingredient',
                name: 'byIngredient',
                component: MealsByIngredient
            },
            {
                path: '/by-letter/:letter?',
                name: 'byLetter',
                component: MealsByLetter
            },
            {
                path: '/by-name/:name?',
                name: 'byName',
                component: MealsByName
            },
            {
                path: '/details/:id',
                name: 'details',
                component: MealDetails
            }
        ]
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/:pathMatch(.*)',
        name: 'not-found',
        component: NotFound
    },



]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router