<template>
  <v-container grid-list-xs>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card>
          <v-card-title primary-title>
            <h1 class="headline">{{ $t('pengaturanWaktuPsikotes') }}</h1>
          </v-card-title>
          <v-card-text>
            <v-container grid-list-xs>
              <v-layout row wrap>
                <v-flex xs12 md6 lg3 text-xs-center>
                  <v-dialog v-model="timeSettingDialogDisc" max-width="700px">
                    <template v-slot:activator="{ on }">
                      <v-btn v-on="on" color="red darken-2" block large dark>DISC</v-btn>
                    </template>
                    <time-dialog :title="'DISC'" :examId="1"></time-dialog>
                  </v-dialog>
                </v-flex>
                <v-flex xs12 md6 lg3 text-xs-center>
                  <v-dialog v-model="timeSettingDialogApm" max-width="700px">
                    <template v-slot:activator="{ on }">
                      <v-btn v-on="on" color="red darken-2" block large dark>APM</v-btn>
                    </template>
                    <time-dialog :title="'APM'" :examId="2"></time-dialog>
                  </v-dialog>
                </v-flex>
                <v-flex xs12 md6 lg3 text-xs-center>
                  <v-dialog v-model="timeSettingDialogEng" max-width="700px">
                    <template v-slot:activator="{ on }">
                      <v-btn
                        v-on="on"
                        color="red darken-2"
                        block
                        large
                        dark
                      >{{ $t('bahasaInggris') }}</v-btn>
                    </template>
                    <time-dialog :title="$t('bahasaInggris')" :examId="3"></time-dialog>
                  </v-dialog>
                </v-flex>
                <v-flex xs12 md6 lg3 text-xs-center>
                  <v-dialog v-model="timeSettingDialogTkd1" max-width="700px">
                    <template v-slot:activator="{ on }">
                      <v-btn v-on="on" color="red darken-2" block large dark>TKD-1</v-btn>
                    </template>
                    <time-dialog :title="'TKD-1'" :examId="4"></time-dialog>
                  </v-dialog>
                </v-flex>
                <v-flex xs12 md6 lg3 text-xs-center>
                  <v-dialog v-model="timeSettingDialogTkd5" max-width="700px">
                    <template v-slot:activator="{ on }">
                      <v-btn v-on="on" color="red darken-2" block large dark>TKD-5</v-btn>
                    </template>
                    <time-dialog :title="'TKD-5'" :examId="5"></time-dialog>
                  </v-dialog>
                </v-flex>
                <v-flex xs12 md6 lg3 text-xs-center>
                  <v-dialog v-model="timeSettingDialogTkd6" max-width="700px">
                    <template v-slot:activator="{ on }">
                      <v-btn v-on="on" color="red darken-2" block large dark>TKD-6</v-btn>
                    </template>
                    <time-dialog :title="'TKD-6'" :examId="6"></time-dialog>
                  </v-dialog>
                </v-flex>
                <v-flex xs12 md6 lg3 text-xs-center>
                  <v-dialog v-model="timeSettingDialogPap" max-width="700px">
                    <template v-slot:activator="{ on }">
                      <v-btn v-on="on" color="red darken-2" block large dark>Papikostik</v-btn>
                    </template>
                    <time-dialog :title="'Papikostik'" :examId="7"></time-dialog>
                  </v-dialog>
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
import timeDialog from '@/components/Setting/Psychotest/TimeDialog'

export default {
  data () {
    return {
      timeSettingDialogDisc: false,
      timeSettingDialogApm: false,
      timeSettingDialogEng: false,
      timeSettingDialogTkd1: false,
      timeSettingDialogTkd5: false,
      timeSettingDialogTkd6: false,
      timeSettingDialogPap: false
    }
  },
  components: {
    timeDialog
  }
}
</script>

<style>
</style>
