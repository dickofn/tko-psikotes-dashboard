<template>
  <div id="app">
    <v-app id="inspire">
      <!-- HEADER START -->
      <v-navigation-drawer fixed v-model="drawer" app>
        <v-list dense>
          <v-list-tile @click="$router.push({name : 'applicants'})">
            <v-list-tile-action>
              <v-icon>people</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Data Pelamar</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile @click="logout" v-if="isLoggedIn">
            <v-list-tile-action>
              <v-icon>logout</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Logout</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>
      <v-toolbar color="red darken-2" dark fixed app>
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <v-toolbar-title class="headline text-uppercase">
          <span>Dashboard Psikotes&nbsp;</span>
          <span class="font-weight-light">Tokoonderdil</span>
          <v-speed-dial right top absolute direction="bottom" open-on-hover>
            <template v-slot:activator>
              <v-btn color="red darken-2" dark>
                {{ $t('bahasa') }}
              </v-btn>
            </template>
            <v-btn dark small color="red darken-2" @click="changeLang('id')">
              Bahasa
            </v-btn>
            <v-btn dark small color="red darken-2" @click="changeLang('en')">
              English
            </v-btn>
          </v-speed-dial>
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
        <span class="white--text footer--custom">Tokoonderdil &copy; 2019</span>
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
  computed: {
    isLoggedIn () { return this.$store.getters.isLoggedIn }
  },
  methods: {
    logout () {
      this.$store.dispatch('logout')
        .then(() => {
          this.$router.push('/login')
        })
    },
    changeLang(lang){
      this.$i18n.locale = lang
    }
  },
  created () {
    if (this.$store.getters.isLoggedIn) {
      this.axios
        .post(process.env.VUE_APP_API_URL + "/user/validation", {
          token: this.$store.state.user.token
        })
        .catch(e => {
          if (
            e.response.status === 401 &&
            e.response.config &&
            !e.response.config.__isRetryRequest
          ) {
            this.$store.dispatch("logout");
            this.$router.push({ name: "login" });
          }
        });
    }
  }
}
</script>

<style lang="scss" scoped>
.footer--custom {
  padding: 0 16px;
}
</style>
