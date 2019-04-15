<template>
    <footer>
        <p>{{copyright}} {{title}}</p>
    </footer>
</template>

<script>
import{bus} from '../main';
export default {
    props:{
        title:{
            type: String
        }
    },
    data(){
        return{
        copyright:'Copyright 2019'
        }
    },
    created(){
        bus.$on('titleChanged', (data) =>{
            this.title = data;
        })
    }   
}
</script>

<style scoped>
footer{
    background:#35495e;
    padding:5px;
}
p{
    color:white;
    text-align: center;
}
</style>
