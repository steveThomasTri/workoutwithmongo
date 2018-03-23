<template>
  <b-row>
    <b-col cols="12">
      <h2>
        Book List
        <b-link href="#/add-exercise">(Add Exercise)</b-link>
      </h2>
      <b-table striped hover :items="exercises" :fields="fields">
        <template slot="actions" scope="row">
          <b-btn size="sm" @click.stop="details(row.item)">Details</b-btn>
        </template>
      </b-table>
      <ul v-if="errors && errors.length">
        <li v-for="error of errors">
          {{error.message}}
        </li>
      </ul>
    </b-col>
  </b-row>
</template>

<script>

import axios from 'axios'

export default {
  name: 'ExerciseList',
  data () {
    return {
      fields: {
        exercise: { label: 'Exercise', sortable: true },
        actions: { label: 'Action', 'class': 'text-center' }
      },
      exercises: [],
      errors: []
    }
  },
  created () {
    axios.get(`http://localhost:3000/exercise`)
    .then(response => {
      this.exercises = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
  },
  methods: {
    details (exercise) {
      this.$router.push({
        name: 'ShowExercise',
        params: { id: exercise._id }
      })
    }
  }
}
</script>