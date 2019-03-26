<template>
  <div id="app">
    <v-app id="inspire">

      <!-- HEADER START -->
      <v-navigation-drawer fixed v-model="drawer" app>
        <v-list dense>
          <v-list-tile>
            <!-- dummies -->
            <!-- <v-list-tile @click=""> TODO: @click / routerlink to= -->
            <v-list-tile-action>
              <v-icon>home</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Home</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile>
            <!-- dummies -->
            <!-- <v-list-tile @click> TODO: @click / routerlink to= -->
            <v-list-tile-action>
              <v-icon>contact_mail</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Contact</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>
      <v-toolbar color="red darken-2" dark fixed app>
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <v-toolbar-title class="headline text-uppercase">
          <span>Dashboard Psikotes&nbsp;</span>
          <span class="font-weight-light">Tokoonderdil</span>
        </v-toolbar-title>
      </v-toolbar>
      <!-- HEADER END -->

      <!-- CONTENT START -->
      <v-content>
        <router-view/>
      </v-content>
      <!-- CONTENT END -->

      <!-- FOOTER START -->
      <v-footer color="red darken-2" app inset>
        <span class="white--text">&copy; 2019</span>
      </v-footer>
      <!-- FOOTER END -->
    </v-app>
  </div>
</template>

<script>
export default {
  name: "App",
  data () {
    return {
      drawer: null
    }
  },
  props: {
    source: String
  }
}
</script>