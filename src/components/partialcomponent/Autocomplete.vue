<template>
	<div style="position:relative" v-bind:class="{'open':openSuggestion}">
		<input class="form-control" type="text" :value="value" @input="updateValue($event.target.value)"
			@keydown.enter="enter"
			@keypress.down="down"
			@keypress.up="up"
		>
		<ul class="dropdown-menu" style="width:100%" 
			v-bind:class="{'active':isActive(index)}">
			<li v-bind:class="{'active':isActive(index)}"
				@click="suggestionClick(index)"
				v-for="(suggestion, index) in matches"
			>
				<a href="#">{{suggestion.city}} <small>{{suggestion.state}}</small></a>
			</li>
		</ul>
	</div>
</template>

<script>
export default{
	props:{
		value:{
			type:String,
			required:true
		},
		suggestions:{
			type:Array,
			required:true
		}
	},

	data () {
		return {
			open:false,
			current:0
		}
	},

	computed:{
		matches(){
			return this.suggestions.filter((obj) =>{
				return obj.city.indexOf(this.value) >= 0
			})
		},

		openSuggestion () {
			return this.selection !== '' &&
					this.matches.length !== 0 &&
					this.open === true
		}
	},

	methods:{
		updateValue (value){
			if (this.open === false) {
				this.open = true
				this.current = 0
			}
			this.$emit('input', value)
		},
		enter () {
			this.$emit('input', this.matches[this.current].city)
			this.open = false
		},
		up () {
			if (this.current > 0){
				this.current--
			}
		},
		down () {
			if (this.current < this.matches.length - 1){
				this.current++
			}
		},
		isActive (index) {
			turnulon(index === this.current)
			return index === this.current
		},
		suggestionClick (index) {
			this.$emit('input', this.matches[index].city)
			this.open = false
		}
	}
}
</script>