<template>
  <Layout>
    <h1>{{ $page.event.title }}</h1>
    <p>{{ $page.event.description }}</p>
  </Layout>
</template>

<page-query>
query ($id: ID!) {
  event(id: $id) {
		id
      	title
        description
        duration
        date
    }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.event.title,
    };
  },
};
</script>
