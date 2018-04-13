import Vue from 'vue'
import Router from 'vue-router'
import ExerciseList from '@/components/ExerciseList'
import ShowExercise from '@/components/ShowExercise'
import CreateExercise from '@/components/CreateExercise'
import EditExercise from '@/components/EditExercise'
import Splash from '@/components/Splash'
import CreateWorkouts from '@/components/CreateWorkouts'
import AddworkoutTEST from '@/components/AddworkoutTEST'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Splash',
      component: Splash
    },
    {
      path: '/show-exercise/:id',
      name: 'ShowExercise',
      component: ShowExercise
    },
    {
      path: '/add-exercise',
      name: 'CreateExercise',
      component: CreateExercise
    },
    {
      path: '/edit-exercise/:id',
      name: 'EditExercise',
      component: EditExercise
    },
    {
      path: '/exercise-list',
      name: 'ExerciseList',
      component: ExerciseList
    },
    {
      path: '/create-workouts',
      name: 'CreateWorkouts',
      component: CreateWorkouts
    },
    {
      path: '/add-workout',
      name: 'AddworkoutTEST',
      component: AddworkoutTEST
    }
  ]
})
