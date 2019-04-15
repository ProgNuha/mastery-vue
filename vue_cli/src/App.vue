<template>
  <div id="app">
    <app-header v-bind:title="title" 
                v-on:changeTitle="updateTitle($event)">
    </app-header>
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld></HelloWorld>
    <app-nakama v-bind:nakamas="nakamas"></app-nakama>
    <app-footer v-bind:title="title"></app-footer>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Nakamas from './components/Nakama.vue'
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    'app-header':Header,
    'app-footer': Footer,
    'app-nakama': Nakamas,
    HelloWorld
  },
  data(){
    return{
        nakamas: [
            {name: 'Luffy', speciality:'Captain', show:false},
            {name: 'Zoro', speciality:'Swordsman', show:false},
            {name: 'Sanji', speciality:'Chef', show:false},
            {name: 'Nami', speciality:'Navigator', show:false},
            {name: 'Usopp', speciality:'Sniper', show:false},
            {name: 'Robin', speciality:'Arkeolog', show:false},
            {name: 'Chopper', speciality:'Doctor', show:false},
            {name: 'Franky', speciality:'Cyborg', show:false},
            {name: 'Brook', speciality:'Musician', show:false}
        ],
        title:'Vue Nuha'
    }
  },
  methods:{
    updateTitle: function(updatedTitle){
      this.title = updatedTitle;
    }
  }
}
</script>

<style>
img{
  margin-top:3%;
  height:100px;
  width:100px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
