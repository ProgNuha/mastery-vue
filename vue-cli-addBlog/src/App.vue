<template>
  <div>
    <show-blogs></show-blogs> 
  </div>
</template>

<script>
import addBlog from './components/addBlog.vue';
import showBlogs from './components/showBlogs.vue';

export default {
  components: {
      'add-blog': addBlog,
      'show-blogs': showBlogs
  },
  data () {
      return {
      }
  },
  methods: {
  }  
}
</script>

<style scoped>
body{
  margin: 0;
  font-family: 'Nunito SemiBold';
}
</style>
