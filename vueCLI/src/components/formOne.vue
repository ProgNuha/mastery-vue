<template>
  <div>
    <form-helper>
        <div slot="form-header">
            <h3>Form One - Contact Us</h3>
            <p>Fill in this form to contact us</p>
        </div>
        <div slot="form-fields">
            <input type="text" placeholder="username" required/>
            <label>Your Message:</label>
            <textarea></textarea>
        </div>
        <div slot="form-controls">
            <button v-on:click="handleSubmit">Submit</button>
        </div>
    </form-helper>
  </div>
</template>

<script>
import formHelper from './formHelper.vue';

export default {
    components: {
        'form-helper': formHelper
    },
    data () {
        return {
        }
    },
    methods: {
        handleSubmit: function(){
            alert('thanks for submitting form one & contacting us');
        }
    }
}
</script>

<style scoped>
body{
    margin: 0;
    font-family: 'Nunito SemiBold';
}
</style>
