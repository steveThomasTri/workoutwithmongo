<template>
  <b-row v-bind:style="{color:activeColor,width:wrapper + '%'}">
    <b-col cols="12">
      <h2>
        Add Exercise
        <b-link href="#/">(Exercise List)</b-link>
      </h2>
      <b-form @submit="onSubmit">
        <b-form-group id="fieldsetHorizontal"
                  horizontal
                  :label-cols="4"
                  breakpoint="md"
                  label="Enter exercise">
          <b-form-input id="exercise" :state="state" v-model.trim="exercise.exercise"></b-form-input>
        </b-form-group>
        <b-form-group id="fieldsetHorizontal"
                  horizontal
                  :label-cols="4"
                  breakpoint="md"
                  label="Choose a Primary Muscle">
          <div style="text-align:left">
            <input type="radio" id="one" value="Shoulders" v-model="exercise.primaryMuscle" name="prim">
            <label for="one">Shoulders</label>
            <br>
            <input type="radio" id="two" value="Chest" v-model="exercise.primaryMuscle" name="prim">
            <label for="two">Chest</label>
            <br>
            <input type="radio" id="one" value="Biceps" v-model="exercise.primaryMuscle" name="prim">
            <label for="one">Biceps</label>
            <br>
            <input type="radio" id="two" value="Triceps" v-model="exercise.primaryMuscle" name="prim">
            <label for="two">Triceps</label>
            <br>
            <input type="radio" id="one" value="Forearms" v-model="exercise.primaryMuscle" name="prim">
            <label for="one">Forearms</label>
            <br>
            <input type="radio" id="two" value="Abs" v-model="exercise.primaryMuscle" name="prim">
            <label for="two">Abs</label>
            <br>
            <input type="radio" id="one" value="Upper Back" v-model="exercise.primaryMuscle" name="prim">
            <label for="one">Upper Back</label>
            <br>
            <input type="radio" id="two" value="Lower Back" v-model="exercise.primaryMuscle" name="prim">
            <label for="two">Lower Back</label>
            <br>
            <input type="radio" id="one" value="Upper Leg" v-model="exercise.primaryMuscle" name="prim">
            <label for="one">Upper Leg</label>
            <br>
            <input type="radio" id="two" value="Lower Leg" v-model="exercise.primaryMuscle" name="prim">
            <label for="two">Lower Leg</label>
            <br>
            <input type="radio" id="one" value="Cardio" v-model="exercise.primaryMuscle" name="prim">
            <label for="one">Cardio</label>
            <br>
            <input type="radio" id="two" value="Stretching" v-model="exercise.primaryMuscle" name="prim">
            <label for="two">Stretching</label>
            <br>
            <span>Primary Muscle: {{ exercise.primaryMuscle }}</span>
          </div>
        </b-form-group>
        <b-form-group id="fieldsetHorizontal"
                  horizontal
                  :label-cols="4"
                  breakpoint="md"
                  label="Choose Secondary Muscles">
          <div style="text-align:left">
            <input type="checkbox" id="secondary1" value="Shoulders" v-model="secondaryMuscles">
            <label for="secondary1">Shoulders</label>
            <input type="checkbox" id="secondary2" value="Chest" v-model="secondaryMuscles">
            <label for="secondary2">Chest</label>
            <input type="checkbox" id="secondary3" value="Biceps" v-model="secondaryMuscles">
            <label for="secondary3">Biceps</label>
            <input type="checkbox" id="secondary4" value="Triceps" v-model="secondaryMuscles">
            <label for="secondary4">Triceps</label>
            <input type="checkbox" id="secondary5" value="Forearms" v-model="secondaryMuscles">
            <label for="secondary5">Forearms</label>
            <input type="checkbox" id="secondary6" value="Abs" v-model="secondaryMuscles">
            <label for="secondary6">Abs</label>
            <input type="checkbox" id="secondary7" value="Upper Back" v-model="secondaryMuscles">
            <label for="secondary7">Upper Back</label>
            <input type="checkbox" id="secondary8" value="Lower Back" v-model="secondaryMuscles">
            <label for="secondary8">Lower Back</label>
            <input type="checkbox" id="secondary9" value="Upper Leg" v-model="secondaryMuscles">
            <label for="secondary9">Upper Leg</label>
            <input type="checkbox" id="secondary10" value="Lower Leg" v-model="secondaryMuscles">
            <label for="secondary10">Lower Leg</label>
            <input type="checkbox" id="secondary11" value="Cardio" v-model="secondaryMuscles">
            <label for="secondary11">Cardio</label>
            <input type="checkbox" id="secondary12" value="Stretching" v-model="secondaryMuscles">
            <label for="secondary12">Stretching</label>
            <br>
            <span>Secondary Muscles: {{ secondaryMuscles }}</span>
          </div>
        </b-form-group>
        <b-form-group id="fieldsetHorizontal"
                  horizontal
                  :label-cols="4"
                  breakpoint="md"
                  label="Equipment">
          <div style="text-align:left">
            <input type="checkbox" id="equipment1" value="Barbells" v-model="equipment">
            <label for="equipment1">Barbells</label>
            <input type="checkbox" id="equipment2" value="Dumbbells" v-model="equipment">
            <label for="equipment2">Dumbbells</label>
            <input type="checkbox" id="equipment3" value="Kettlebells" v-model="equipment">
            <label for="equipment3">Kettlebells</label>
            <input type="checkbox" id="equipment33" value="Treadmill" v-model="equipment">
            <label for="equipment33">Treadmill</label>
            <input type="checkbox" id="equipment4" value="Smith Machine" v-model="equipment">
            <label for="equipment4">Smith Machine</label>
            <input type="checkbox" id="equipment5" value="Leg Press Machine" v-model="equipment">
            <label for="equipment5">Leg Press Machine</label>
            <input type="checkbox" id="equipment6" value="Machine" v-model="equipment">
            <label for="equipment6">Machine</label>
            <input type="checkbox" id="equipment7" value="Cable Machine" v-model="equipment">
            <label for="equipment7">Cable Machine</label>
            <input type="checkbox" id="equipment8" value="Pull Up Bar" v-model="equipment">
            <label for="equipment8">Pull Up Bar</label>
            <input type="checkbox" id="equipment9" value="Bench" v-model="equipment">
            <label for="equipment9">Bench</label>
            <input type="checkbox" id="equipment10" value="Step Block" v-model="equipment">
            <label for="equipment10">Step Block</label>
            <input type="checkbox" id="equipment11" value="Rope Machine" v-model="equipment">
            <label for="equipment11">Rope Machine</label>
            <input type="checkbox" id="equipment12" value="Battling Ropes" v-model="equipment">
            <label for="equipment12">Battling Ropes</label>
            <input type="checkbox" id="equipment13" value="Jump Rope" v-model="equipment">
            <label for="equipment13">Jump Rope</label>
            <input type="checkbox" id="equipment14" value="None" v-model="equipment">
            <label for="equipment14">None</label>
            <br>
            <span>Equipment: {{ equipment }}</span>
          </div>
        </b-form-group>
        <b-form-group id="fieldsetHorizontal"
                  horizontal
                  :label-cols="4"
                  breakpoint="md"
                  label="measured by">
          <div style="text-align:left">
            <input type="checkbox" id="weight" value="Weight" v-model="checkedNames">
            <label for="jack">Weight</label>
            <select v-model="WeightUnit">
              <option value="pounds">pounds</option>
              <option value="kilograms">kilograms</option>
            </select>
          </div>
          <div style="text-align:left">
            <input type="checkbox" id="time" value="Time" v-model="checkedNames">
            <label for="jack">Time</label>
            <select v-model="TimeUnit">
              <option value="minutes">minutes</option>
              <option value="seconds">seconds</option>
              <option value="hours">hours</option>
            </select>
          </div>
          <div style="text-align:left">
            <input type="checkbox" id="dist" value="Distance" v-model="checkedNames">
            <label for="jack">Distance</label>
            <select v-model="DistanceUnit">
              <option value="miles">miles</option>
              <option value="meters">meters</option>
              <option value="kilometers">kilometers</option>
            </select>
          </div>
          <div style="text-align:left">
            <input type="checkbox" id="reps" value="Reps" v-model="checkedNames">
            <label for="jack">Reps</label>
          </div>
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
      activeColor:'red',
      wrapper:100,
      exercise: {},
      measurables: {},
      checkedNames: [],
      secondaryMuscles:[],
      equipment:[],
      DistanceUnit: {},
      WeightUnit: {},
      TimeUnit: {},
      picked: {},

    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      console.log(this.exercise);

      let a = this.exercise;
      a['secondaryMuscles'] = this.secondaryMuscles;
      a['equipment'] = this.equipment;
      a['data'] = [];

      if (this.checkedNames.length > 0){
        for(let i = 0; i<this.checkedNames.length; i++){
          let b = {};
          switch(this.checkedNames[i]){
            case 'Distance':
              b['measure'] = this.checkedNames[i];
              b['unit'] = this.DistanceUnit;
              break;
            case 'Time':
              b['measure'] = this.checkedNames[i];
              b['unit'] = this.TimeUnit;
              break;
            case 'Weight':
              b['measure'] = this.checkedNames[i];
              b['unit'] = this.WeightUnit;
              break;
            case 'Reps':
              b['measure'] = this.checkedNames[i];
              b['unit'] = null;
              break;
            default:
              break;
          }

          a['data'][i] = b;
        }

      }

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