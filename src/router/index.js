import Vue from 'vue'
import Router from 'vue-router'
import ExerciseList from '@/components/ExerciseList'
import ShowExercise from '@/components/ShowExercise'
import CreateExercise from '@/components/CreateExercise'
import EditExercise from '@/components/EditExercise'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ExerciseList',
      component: ExerciseList
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
    }
  ]
})
