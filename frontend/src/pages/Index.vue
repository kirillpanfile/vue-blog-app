<template>
  <Layout v-slot="{ searchText }">
    <v-tabs v-model="tab" grow>
      <v-tab>All events</v-tab>
      <v-tab>Coding</v-tab>
      <v-tab>Games</v-tab>
    </v-tabs>
    <v-row class="justify-space-around">
      <v-card
        width="280"
        class="mt-5"
        v-for="edge in getEvents(searchText)"
        :key="edge.node.id"
      >
        <v-card-title> {{ edge.node.title }}</v-card-title>
        <v-card-subtitle class="pb-0">
          {{ edge.node.date }}
        </v-card-subtitle>

        <v-card-actions>
          <v-btn
            color="orange"
            text
            @click="$router.push(`/events/${edge.node.id}`)"
          >
            More info
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-row>
  </Layout>
</template>

<page-query>
query {
 events: allEvent {
    edges{
      node {
				id
      	title
        description
        duration
        date
        category
      }
    }
	}
}
  </page-query>

<script>
export default {
  metaInfo: {
    title: "Hello, world!",
  },
  data() {
    return {
      tab: 0,
      events: [],
    };
  },
  watch: {
    tab(val) {
      if (this.tab == 0) this.showAllEvents();
      if (this.tab == 1) this.showEventsByType("Coding");
      if (this.tab == 2) this.showEventsByType("Games");
    },
  },
  mounted() {
    this.events = this.$page.events.edges;
  },
  methods: {
    showAllEvents() {
      this.events = this.$page.events.edges;
    },
    showEventsByType(val) {
      this.events = this.$page.events.edges.filter((edge) => {
        return edge.node.category == val;
      });
    },
    getEvents(searchText) {
      return this.events.filter((edge) => {
        return edge.node.title.toLowerCase().includes(searchText.toLowerCase());
      });
    },
  },
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
