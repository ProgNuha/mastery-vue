<template>
  <div class="hello">
    <h1>Hi, {{ name }}</h1>
    <input type="text" 
          placeholder="Input Your Name" 
          v-model="name"/>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data(){
    return{
      title: 'My First App',
      name: ""
    }
  }
}
</script>

<style scoped>
input{
  margin-bottom: 3%;
}
</style>
