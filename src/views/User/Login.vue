<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <v-card class="elevation-12">
          <v-toolbar dark color="red darken-2">
            <v-toolbar-title>{{ $t('masukDashboard') }}</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
          <v-form @submit.prevent="login">
            <v-card-text>
              <v-text-field
                prepend-icon="person"
                name="username"
                label="Username"
                type="text"
                v-model="username"
              ></v-text-field>
              <v-text-field
                id="password"
                prepend-icon="lock"
                name="password"
                label="Password"
                type="password"
                v-model="password"
              ></v-text-field>
              <p v-if="wrong" style="color: red; text-align: right">* {{ $t('idPasswordSalah') }}</p>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn dark color="red darken-2" type="submit">{{ $t('masuk') }}</v-btn>
            </v-card-actions>
          </v-form>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      username: "",
      password: "",
      wrong: false
    }
  },
  methods: {
    login () {
      let data = { username: this.username, password: this.password }
      this.$store.dispatch('login', data)
        .then(() => this.$router.go())
        .catch(e => {
          if (e.response.status == 422) this.wrong = true
        })
    }
  }
}
</script>
