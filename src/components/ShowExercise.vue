<template>
  <b-row>
    <b-col cols="12">
      <h2>
        Edit Book
        <b-link href="#/">(Exercise List)</b-link>
      </h2>
      <b-jumbotron>
        <template slot="header">
          {{exercise.exercise}}
        </template>
        <template slot="lead">
          Exercise: {{exercise.exercise}}<br>
        </template>
        <hr class="my-4">
        <p>
          Updated Date: {{exercise.updated_date}}
        </p>
        <b-btn variant="success" @click.stop="editexercise(exercise._id)">Edit</b-btn>
        <b-btn variant="danger" @click.stop="deleteexercise(exercise._id)">Delete</b-btn>
      </b-jumbotron>
    </b-col>
  </b-row>
</template>

<script>

import axios from 'axios'

export default {
  name: 'ShowExercise',
  data () {
    return {
      exercise: []
    }
  },
  created () {
    axios.get(`http://localhost:3000/exercise/` + this.$route.params.id)
    .then(response => {
      this.exercise = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
  },
  methods: {
    editexercise (exerciseid) {
      this.$router.push({
        name: 'EditExercise',
        params: { id: exerciseid }
      })
    },
    deletebook (exerciseid) {
      axios.delete('http://localhost:3000/exercise/' + exerciseid)
      .then((result) => {
        this.$router.push({
          name: 'ExerciseList'
        })
      })
      .catch(e => {
        this.errors.push(e)
      })
    }
  }
}
</script>

<style>
  .jumbotron {
    padding: 2rem;
  }
</style>