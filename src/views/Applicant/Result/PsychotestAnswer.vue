<template>
  <v-container grid-list-xs>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card>
          <v-card-title v-if="!isLoading && !valid">
            <h1 class="headline">{{ $t('dataTidakDitemukan') }}</h1>
          </v-card-title>
          <v-card-title v-if="!isLoading && valid">
            <h1 class="headline">{{ $t('jawabanPsikotes') }}</h1>
          </v-card-title>
          <v-card-text v-if="!isLoading && valid">
            <v-container grid-list-xs>
              <v-layout row wrap>
                <v-flex xs12 md6 lg3 text-xs-center>
                  <v-btn
                    :href="psikotestUrl + '/exam/disc/' + $route.params.examInfoId"
                    target="_blank"
                    color="red darken-2"
                    block
                    large
                    dark
                  >DISC</v-btn>
                </v-flex>
                <v-flex xs12 md6 lg3 text-xs-center>
                  <v-btn
                    :href="psikotestUrl + '/exam/apm/' + $route.params.examInfoId"
                    target="_blank"
                    color="red darken-2"
                    block
                    large
                    dark
                  >APM</v-btn>
                </v-flex>
                <v-flex xs12 md6 lg3 text-xs-center>
                  <v-btn
                    :href="psikotestUrl + '/exam/english/' + $route.params.examInfoId"
                    target="_blank"
                    color="red darken-2"
                    block
                    large
                    dark
                  >{{ $t('bahasaInggris') }}</v-btn>
                </v-flex>
                <v-flex xs12 md6 lg3 text-xs-center>
                  <v-btn
                    :href="psikotestUrl + '/exam/story/' + $route.params.examInfoId"
                    target="_blank"
                    color="red darken-2"
                    block
                    large
                    dark
                  >TKD-1</v-btn>
                </v-flex>
                <v-flex xs12 md6 lg3 text-xs-center>
                  <v-btn
                    :href="psikotestUrl + '/exam/math/' + $route.params.examInfoId"
                    target="_blank"
                    color="red darken-2"
                    block
                    large
                    dark
                  >TKD-5</v-btn>
                </v-flex>
                <v-flex xs12 md6 lg3 text-xs-center>
                  <v-btn
                    :href="psikotestUrl + '/exam/seq/' + $route.params.examInfoId"
                    target="_blank"
                    color="red darken-2"
                    block
                    large
                    dark
                  >TKD-6</v-btn>
                </v-flex>
                <v-flex xs12 md6 lg3 text-xs-center>
                  <v-btn
                    :href="psikotestUrl + '/exam/pap/' + $route.params.examInfoId"
                    target="_blank"
                    color="red darken-2"
                    block
                    large
                    dark
                  >Papikostik</v-btn>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      valid: false
    }
  },
  computed: {
    isLoading () {
      return this.$store.state.shared.isLoading
    },
    psikotestUrl () {
      return process.env.VUE_APP_PSIKOTEST_URL
    }
  },
  created () {
    this.$store.dispatch('setLoading', true)
    this.$store.dispatch('getApplicants')
      .then(res => {
        for (const data of res.data.data) {
          if (data.applicantId == this.$route.params.applicantId && data.examInfoId == this.$route.params.examInfoId) {
            this.valid = true;
          }
        }
        this.$store.dispatch('setLoading', false)
      })
  }
}
</script>
