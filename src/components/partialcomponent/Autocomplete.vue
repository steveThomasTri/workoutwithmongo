<template>
	<b-form>
		<b-form-group id="fieldset1" description="Let us know your name." label="Enter your name" label-for="input1" :invalid-feedback="invalidFeedback" :valid-feedback="validFeedback" :state="state">
				<b-form-input v-model="text1" type="text" placeholder="Enter Your Name"></b-form-input>
				<p>{{text1}}</p>
		</b-form-group>
		<b-form-group id="fieldset1" description="Let us know your name." label="Enter your name" label-for="input1" :invalid-feedback="invalidFeedback" :valid-feedback="validFeedback" :state="state">
				<b-form-input v-model="text2" type="text" placeholder="Enter Your Name"></b-form-input>
				<p>{{text2}}</p>
		</b-form-group>
	</b-form>
</template>

<script>
export default{
	data () {
		return {
			text1: '',
			text2: ''
		}
	}
}
</script>