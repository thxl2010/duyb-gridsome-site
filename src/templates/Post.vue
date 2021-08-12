<template>
  <Layout>
    <div class="template-post">
      <h1>{{ $page.post.title }}</h1>
      <article>{{ $page.post.content }}</article>
    </div>
  </Layout>
</template>

<page-query>
query ($id: ID!) {
  post (id: $id) {
    id
    title
    content
  }
}
</page-query>

<script>
export default {
  name: 'PostPage',
};
</script>

<style scoped></style>
