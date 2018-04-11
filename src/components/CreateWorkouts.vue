<template>
	<b-row v-bind:style="{color:activeColor,width:wrapper + '%'}">
		<b-col cols="12">
			<Autocomplete :suggestions="suggestions" v-model="selection"></Autocomplete>
		</b-col>
	</b-row>
</template>

<script>

import axios from 'axios'
import Autocomplete from './partialcomponent/Autocomplete'

export default {
	name: 'CreateWorkouts',
	components: {Autocomplete},
	data () {
		return {
			activeColor:'red',
		    wrapper:100,
		    fields: {
		        exercise: { label: 'Exercise', sortable: true },
		        primaryMuscle: {label: 'Primary', sortable: true},
		        dataum: {label: 'Measured By', sortable: true},
		    },
			exercises: [],
			errors: [],
			selection:'',
			suggestions:[
				{ city: 'Bangalore', state: 'Karnataka' },
        { city: 'Chennai', state: 'Tamil Nadu' },
        { city: 'Delhi', state: 'Delhi' },
        { city: 'Kolkata', state: 'West Bengal' },
        { city: 'Mumbai', state: 'Maharashtra' }
			]
		}
	},
	created () {
		axios.get(`http://localhost:3000/exercise`)
	    .then(response => {
	      this.exercises = response.data;
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