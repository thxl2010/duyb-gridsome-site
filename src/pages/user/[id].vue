<template>
  <Layout>
    <h1>动态路由</h1>
    <p>path : {{ $route.path }}</p>
    <p>params : {{ JSON.stringify($route.params) }}</p>
    <p v-if="user">username: {{ user.name }}</p>
  </Layout>
</template>

<script>
export default {
  name: 'UserDetail',
  metaInfo: {
    title: 'UserDetail',
  },
  components: {},
  props: {},
  data() {
    return {
      user: null,
    };
  },
  computed: {},
  watch: {},
  created() {},
  async mounted() {
    const { id } = this.$route.params;
    const response = await fetch(`https://api.example.com/user/${id}`);

    this.user = await response.json();
  },
  methods: {},
};
</script>
