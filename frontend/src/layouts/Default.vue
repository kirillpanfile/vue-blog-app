<template>
  <v-app class="layout">
    <v-app-bar app>
      <v-toolbar-title>
        E-vents
      </v-toolbar-title>
      <v-text-field
        placeholder="Search"
        style="max-width:350px"
        class="ml-8"
        outlined
        rounded
        dense
        hide-details
      ></v-text-field>
      <v-spacer></v-spacer>
      <v-btn>Create Event</v-btn>
    </v-app-bar>
    <v-main>
      <slot />
    </v-main>
  </v-app>
</template>

<static-query>
query {
  metadata {
    siteName,
    siteDescription
  }
}
</static-query>

<style></style>
