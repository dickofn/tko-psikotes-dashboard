<template>
  <v-container grid-list-xs>
    <v-layout row>
      <v-flex xs12>
        <v-card>
          <v-card-title primary-title>
            <h1 class="headline">Data Diri Kandidat Karyawan</h1>
          </v-card-title>
          <v-card-text>
            <v-container grid-list-xs>
              <v-layout row wrap>
                <v-flex md8 offset-md2 xs12>
                  <v-text-field
                    label="Nama Lengkap"
                    name="name"
                    id="name"
                    :value="applicant.applicant.applicant.fullName"
                    readonly
                  ></v-text-field>
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
/**
 * TODO: saat vuex state loading container utama jangan di load
 * TODO: Bikin container baru yang isinya bunderan muter-muter buat loading saat vuex state loading
 */
export default {
  computed: {
    applicant () {
      return this.$store.state.applicant.applicant
    }
  },
  created () {
    this.$store.dispatch('getApplicant', this.$route.params.applicantId)
  }
}
</script>
