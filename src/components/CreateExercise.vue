<template>
  <b-row>
    <b-col cols="12">
      <h2>
        Add Book
        <b-link href="#/">(Exercise List)</b-link>
      </h2>
      <b-form @submit="onSubmit">
        <b-form-group id="fieldsetHorizontal"
                  horizontal
                  :label-cols="4"
                  breakpoint="md"
                  label="Enter exercise">
          <b-form-input id="isbn" :state="state" v-model.trim="exercise.exercise"></b-form-input>
        </b-form-group>
        <b-button type="submit" variant="primary">Save</b-button>
      </b-form>
    </b-col>
  </b-row>
</template>

<script>

import axios from 'axios'

export default {
  name: 'CreateExercise',
  data () {
    return {
      exercise: {}
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      axios.post(`http://localhost:3000/exercise`, this.exercise)
      .then(response => {
        this.$router.push({
          name: 'ShowExercise',
          params: { id: response.data._id }
        })
      })
      .catch(e => {
        this.errors.push(e)
      })
    }
  }
}
</script>