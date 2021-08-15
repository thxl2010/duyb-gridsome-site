<template>
  <Layout>
    <!-- Page Header-->
    <header class="masthead" style="background-image: url('/img/home-bg.jpg')">
      <div class="container position-relative px-4 px-lg-5">
        <div class="row gx-4 gx-lg-5 justify-content-center">
          <div class="col-md-10 col-lg-8 col-xl-7">
            <div class="site-heading">
              <h1>Clean Blog</h1>
              <span class="subheading">A Blog Theme by Start Bootstrap</span>
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
            <a href="post.html">
              <h2 class="post-title">
                {{ edge.node.title }}
              </h2>
              <!-- <h3 class="post-subtitle">
                Problems look mighty small from 150 miles up
              </h3> -->
            </a>
            <p class="post-meta">
              Posted
              <!-- by
              <a href="#!">Start Bootstrap</a> -->
              on {{ edge.node.created_at }}
            </p>
            <p>
              <a
                v-for="tag in edge.node.tags"
                :key="tag.id"
                href=""
                style="margin-right: 1em"
                >{{ tag.title }}</a
              >
            </p>
          </div>
          <!-- Divider-->
          <hr class="my-4" />
          <!-- Pager-->
          <Pager :info="$page.posts.pageInfo" />
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
};
</script>
