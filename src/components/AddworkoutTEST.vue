<template>
   <b-row v-bind:style="{color:activeColor,width:wrapper + '%'}">
		<b-col cols="12">
			<div>
                <input class="form-control" 
                        type="text" 
                        :value="value"
                        @input="updateValue($event.target.value)"
                >
                <div v-for="check in exercises">
                    {{check.exercise}}
                </div>
            </div>
		</b-col>
	</b-row> 
</template>

<script>
import axios from 'axios'

export default{
    props:{
        value:{
            type:String,
            required:true
        }
    },

    data (){
        return {
            exercises:[]
        }
    },
    created () {
        axios.get(`http://localhost:3000/exercise`)
            .then(response => {
                this.exercises = response.data
            }).catch(e => {
                this.errors.push(e)
            })
    }
}
</script>