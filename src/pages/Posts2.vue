<template>
  <Layout>
    <div>
      <h1>Posts 2: 生产模式下静态化预渲染</h1>
      <p>
        <a href="https://gridsome.org/docs/querying-data/" target="_blank"
          >查询节点</a
        >
      </p>
      <ul>
        <li v-for="edge in $page.posts.edges" :key="edge.node.id">
          <g-link :to="edge.node.path">{{ edge.node.title }}</g-link>
        </li>
      </ul>
    </div>
  </Layout>
</template>

<page-query>
query {
  posts: allPost {
    edges {
      node {
        id
        title
        path
      }
    }
  }
}
</page-query>

<script>
export default {
  name: 'Posts2',
  data() {
    return {};
  },
};
</script>

<style></style>
