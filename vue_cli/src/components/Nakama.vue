<template>
    <div id="nakamas">
        <ul>
            <li v-for="nakama in nakamas" :key="nakama"
                v-on:click="nakama.show = !nakama.show">
                <h2>{{nakama.name}}</h2>
                <h3 v-show="nakama.show">{{nakama.speciality}}</h3>
            </li>
        </ul>
        <button v-on:click="deleteNakama">Delete Nakama</button>
    </div>
</template>

<script>
export default {
  props:{
    nakamas:{
        type: Array,
        required: true
    }
  },
  methods:{
      deleteNakama: function(){
        this.nakamas.pop()
      }
  } 
}
</script>

<style scoped>
#nakamas{
    width: 100%;
    max-width: 1200px;
    margin: 40px auto;
    padding: 0 20px;
    box-sizing: border-box;
}
ul{
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0;
}
li{
    flex-grow: 1;
    flex-basis: 300px;
    text-align: center;
    padding: 30px;
    border: 1px solid #35495e;
    margin: 10px;
}
h3{
    color:#42b883;
}
</style>
