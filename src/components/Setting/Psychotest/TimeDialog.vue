<template>
  <v-card>
    <v-card-title primary-title>
      <h1 class="headline">{{ $t('pengaturanWaktuPsikotes') }} - {{ title }}</h1>
    </v-card-title>
    <v-card-text>
      <v-form ref="form" v-model="valid" @submit.prevent="submit">
        <v-container grid-list-xs>
          <v-layout row wrap>
            <v-flex xs12>
              <v-text-field name="value" :label="$t('waktu')+' ('+$t('milidetik')+')'" v-model="value" type="number" :rules="[rules.required]"></v-text-field>
            </v-flex>
            <v-flex xs12 text-xs-right>
              <v-btn type="submit" :disabled="!valid" color="red darken-2" :dark="valid">Submit</v-btn>
            </v-flex>
          </v-layout>
        </v-container>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: ['title', 'examId'],
  data () {
    return {
      valid: false,
      value: null,
      rules: {
        required: v => !!v || this.$t('wajibDiisi')+"!",
      }
    }
  },
  methods: {
    submit () {
      console.log(this.value);
    }
  }
}
</script>

<style>
</style>
