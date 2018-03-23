<template>
  <b-row>
    <b-col cols="12">
      <h2>
        Edit Book
        <router-link :to="{ name: 'ShowExercise', params: { id: exercise._id } }">(Show Exercise)</router-link>
      </h2>
      <b-form @submit="onSubmit">
        <b-form-group id="fieldsetHorizontal"
                  horizontal
                  :label-cols="4"
                  breakpoint="md"
                  label="Enter ISBN">
          <b-form-input id="isbn" :state="state" v-model.trim="exercise.exercise"></b-form-input>
        </b-form-group>
        
        <b-button type="submit" variant="primary">Update</b-button>
      </b-form>
    </b-col>
  </b-row>
</template>

<script>

import axios from 'axios'

export default {
  name: 'EditExercise',
  data () {
    return {
      exercise: {}
    }
  },
  created () {
    axios.get(`http://localhost:3000/exercise/` + this.$route.params.id)
    .then(response => {
      this.book = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      axios.put(`http://localhost:3000/exercise/` + this.$route.params.id, this.exercise)
      .then(response => {
        this.$router.push({
          name: 'ShowExercise',
          params: { id: this.$route.params.id }
        })
      })
      .catch(e => {
        this.errors.push(e)
      })
    }
  }
}
</script>