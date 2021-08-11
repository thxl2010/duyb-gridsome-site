<template>
  <Layout>
    <div>
      <h1>Posts 1</h1>
      <p>不是预渲染的</p>
      <ul>
        <li v-for="post in posts" :key="post.id">{{ post.title }}</li>
      </ul>
    </div>
  </Layout>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Posts1',
  data() {
    return {
      posts: [],
    };
  },
  async created() {
    const { data } = await axios.get(
      'https://jsonplaceholder.typicode.com/posts'
    );
    this.posts = data;
  },
};
</script>

<style></style>
