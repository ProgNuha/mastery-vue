<template>
  <div id="add-blog">
    <h2>Add a New Blog Post</h2>
    <form v-if="!submitted"> 
      <label>Blog Title:</label>
      <input type="text" v-model.lazy="blog.title" required>
      <label>Blog Content:</label>
      <textarea v-model.lazy.trim="blog.content"></textarea>
      <div id="checkboxes">
        <input type="checkbox" value="ninja" v-model="blog.categories" />
        <label>Ninja</label>
        <input type="checkbox" value="nakama" v-model="blog.categories" />
        <label>Nakama</label>
        <input type="checkbox" value="wizard" v-model="blog.categories" />
        <label>Wizard</label>
        <input type="checkbox" value="witch" v-model="blog.categories" />
        <label>Witch</label>
        <input type="checkbox" value="all" v-model="blog.categories" />
        <label>All</label>
      </div>
      <label>Author:</label>
      <select v-model="blog.author">
        <option v-for="author in authors" v-bind:key="author">{{author}}</option>
      </select>
      <button v-on:click.prevent="post" submitted=true>Add Blog</button>
    </form>
    <div v-if="submitted">
      <h3>Thanks for adding your post</h3>
    </div>
    <div v-if="submitted" id="preview">
      <h3>Preview Blog</h3>
      <p>Blog title: {{blog.title}}</p>
      <p>Blog content: </p>
      <p>{{blog.content}}</p>
      <p>Blog categories: </p>
      <ul>
        <li v-for="category in blog.categories" v-bind:key="category">{{category}}</li>
      </ul>
      <p>Author: {{blog.author}}</p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
      return {
          blog: {
              title: '',
              content: '',
              categories:[],
              author:''
          },
          authors: ['The Net Ninja', 'The Angular Avenger', 'The Vue Vindicator'],
          submitted: false
      }
  },
  methods: {
    post: function(){
      this.$http.post('http://jsonplaceholder.typicode.com/posts',{
        title: this.blog.title,
        body: this.blog.content,
        userId: 1
      }).then(function(data){
        console.log(data);
        this.submitted = true;
      });
    }
  }
}
</script>

<style>
#add-blog *{
  box-sizing:border-box;
}
#add-blog{
  margin: 20px auto;
  max-width: 500px;
}
label{
  display:block;
  margin:20px o 10px;
}
input[type="text"],textarea{
  display:block;
  width: 100%;
  padding: 8px;
}
#preview{
  padding: 10px 20px;
  border: 1px dotted #ccc;
  margin: 30px 0;
}
h3{
  margin-top: 10px;
}
#checkboxes input{
  display: inline-block;
}
#checkboxes label{
  display: inline-block;
  margin-right: 17px;
}
</style>
