<template>
  <Layout>
    <!-- Page Header-->
    <header
      class="masthead"
      :style="{
        backgroundImage: `url(${
          general.cover && general.cover.url
            ? 'http://localhost:1337' + general.cover.url
            : '/img/home-bg.jpg'
        })`,
      }"
    >
      <div class="container position-relative px-4 px-lg-5">
        <div class="row gx-4 gx-lg-5 justify-content-center">
          <div class="col-md-10 col-lg-8 col-xl-7">
            <div class="site-heading">
              <h1>{{ general.title }}</h1>
              <span class="subheading">{{ general.subtitle }}</span>
            </div>
          </div>
        </div>
      </div>
    </header>
    <!-- Main Content-->
    <div class="container px-4 px-lg-5">
      <div class="row gx-4 gx-lg-5 justify-content-center">
        <div class="col-md-10 col-lg-8 col-xl-7">
          <!-- Post preview-->
          <div
            v-for="edge in $page.posts.edges"
            :key="edge.id"
            class="post-preview"
          >
            <g-link :to="`/post/${edge.node.id}`">
              <h2 class="post-title">
                {{ edge.node.title }}
              </h2>
              <!-- <h3 class="post-subtitle">
                Problems look mighty small from 150 miles up
              </h3> -->
            </g-link>
            <p class="post-meta">
              Posted
              <!-- by
              <a href="#!">Start Bootstrap</a> -->
              on {{ edge.node.created_at }}
            </p>
            <p>
              <g-link
                v-for="tag in edge.node.tags"
                :key="tag.id"
                :to="`/tag/${tag.id}`"
                style="margin-right: 1em"
                >{{ tag.title }}</g-link
              >
            </p>
          </div>
          <!-- Divider-->
          <hr class="my-4" />
          <!-- Pager-->
          <Pager :info="$page.posts.pageInfo" class="pager" />
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query ($page: Int) {
  posts: allStrapiPost (perPage: 2, page: $page) @paginate {
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        title
        # content
        created_at
        updated_at
        tags {
          id
          title
        }
      }
    }
  }

  general: allStrapiGeneral {
    edges {
      node {
        title
        subtitle
        cover {
          url
        }
      }
    }
  }
}
</page-query>

<script>
import { Pager } from 'gridsome';

export default {
  name: 'Index',
  metaInfo: {
    title: 'Hello, world!',
  },
  components: {
    Pager,
  },
  computed: {
    general() {
      return this.$page.general.edges[0].node;
    },
  },
};
</script>

<style scoped>
.pager >>> a {
  margin: 2px 3px;
}
</style>
