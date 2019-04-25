<template>
  <v-container grid-list-xs>
    <v-layout row wrap>
      <v-flex xs12>
        <v-container grid-list-xs>
          <v-layout row wrap justify-space-between>
            <v-flex md3 xs12 mb-5>
              <disc-table :datas="most" :answers="selectedMost" :key="refreshKey"></disc-table>
            </v-flex>
            <v-flex md3 xs12 mb-5>
              <disc-table :datas="least" :answers="selectedLeast" :key="refreshKey"></disc-table>
            </v-flex>
            <v-flex md3 xs12>
              <disc-table :datas="change" :answers="selectedChange" :key="refreshKey"></disc-table>
            </v-flex>
          </v-layout>
        </v-container>
      </v-flex>
    </v-layout>

    <v-layout row wrap>
      <v-flex xs12>
        <v-card>
          <v-card-title primary-title>
            <h1 class="headline">Set DISC Result</h1>
          </v-card-title>

          <v-card-text v-if="isLoaded">
            <v-container grid-list-xs>
              <v-layout row wrap>
                <v-flex md6 xs12>
                  <v-autocomplete label="Behavior Style" :items="discCodes" v-model="discCode"></v-autocomplete>
                </v-flex>
                <v-flex md6 xs12>
                  <v-text-field name="discResult" label="Pattern Name" :value="discResult" readonly></v-text-field>
                </v-flex>
              </v-layout>
              <v-layout row wrap>
                <v-flex xs12 text-xs-right>
                  <v-btn
                    color="red darken-2 white--text"
                    @click="submit"
                    :disabled="isDisabledSubmit"
                  >Submit</v-btn>
                </v-flex>
              </v-layout>

              <v-layout row wrap>
                <v-dialog v-model="dialogSuccess" persistent max-width="500">
                  <v-card>
                    <v-card-title class="headline" color="red darken-2">Berhasil!</v-card-title>
                    <v-card-text>Hasil DISC telah berhasil diperbaharui!</v-card-text>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn color="green darken-1" flat @click="back">Close</v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </v-layout>
            </v-container>
          </v-card-text>

          <v-card-text v-else>Tidak ada data DISC!</v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import discTable from '@/components/Applicant/Result/Disc/DiscTable'

export default {
  data () {
    return {
      most: {
        type: 'most',
        d: [21, 16, 15, '', '', 14, 13, '', 12, 11, 10, '', 9, '', 8, 7, 6, '', 5, 4, '', 3, '', '', 2, '', '', 1, '', 0, '', '', ''],
        i: [19, 11, '', 9, 8, 7, '', '', '', 6, 5, '', '', '', 4, '', '', '', 3, '', '', 2, '', '', '', '', 1, '', '', '', '', 0, ''],
        s: [20, '', 14, '', 12, '', 10, '', 9, '', 8, 7, '', '', 6, 5, '', 4, '', 3, '', '', '', 2, '', 1, '', '', 0, '', '', '', ''],
        c: [17, 13, 11, 9, 8, 7, '', '', '', '', 6, '', 5, '', '', 4, '', '', '', 3, '', '', '', 2, '', '', 1, '', '', 0, '', '', '']
      },
      least: {
        type: 'least',
        d: [0, '', 1, '', '', '', '', 2, '', '', '', 3, '', 4, '', 5, 6, '', 7, 8, '', 9, 10, 11, '', 12, '', 13, 14, 15, 16, '', 20],
        i: ['', 0, '', 1, '', '', '', '', 2, '', '', 3, '', '', '', 4, 5, '', '', '', 6, '', '', 7, '', 8, '', 9, '', 10, 11, 12, 19],
        s: [0, 1, '', 2, '', '', '', '', 3, '', '', 4, '', 5, '', 6, '', '', 7, '', 8, '', 9, '', '', 10, '', 11, '', 12, 13, 16, 19],
        c: [0, 1, '', '', 2, '', '', '', 3, '', '', 4, '', 5, '', 6, 7, '', 8, '', '', 9, '', 10, '', '', '', 11, 12, 13, '', 15, 17]
      },
      change: {
        type: 'change',
        d: [21, 18, 15, 14, 13, 12, 10, '', 9, 8, '', 7, '', 5, 3, 1, 0, -2, -3, -4, '', -6, -7, '', '', -10, '', -11, -12, '', -16, -20, ''],
        i: [18, 10, 8, '', 7, 6, '', 5, 4, '', 3, '', '', 2, 1, 0, -1, '', '' - 2, -3, '', -4, -5, '', -6, '', '', -8, -9, -10, -18, ''],
        s: [20, 15, 11, 10, 9, 8, 7, '', 5, 4, 3, '', 2, 1, 0, '', -1, -2, -3, -4, -5, '', -6, -7, '', -8, '', '', '', -10, '', -15, -18],
        c: [17, 10, 6, 5, 4, '', '', 3, 2, '', 1, '', '', 0, -1, -2, -3, -4, '', '', '', -5, -6, -7, '', -8, '', '', -10, -13, -15, -19, -22]
      },
      selectedMost: {
        d: 0,
        i: 0,
        s: 0,
        c: 0
      },
      selectedLeast: {
        d: 0,
        i: 0,
        s: 0,
        c: 0
      },
      selectedChange: {
        d: 0,
        i: 0,
        s: 0,
        c: 0
      },
      refreshKey: 0,
      discCodes: ["Pure D", "D equal I", "D equal I", "DS-SD", "DI", "DC", "DIC", "DIS", "Pure I", "IC", "ICS", "ID", "IDC", "IDS", "IS", "ISC", "ISD", "Pure S", "SC", "SCI", "SD", "SDC", "SI", "SIC", "Pure C", "CD", "CDS", "CI", "CIS", "CS", "CSI"],
      discCode: "",
      isLoaded: false,
      dialogSuccess: false
    }
  },
  computed: {
    discResult () {
      if (this.discCode == "Pure D") return "Establisher"
      else if (this.discCode == "D equal I") return "Influencer"
      else if (this.discCode == "DS-SD") return "Attainer"
      else if (this.discCode == "DI") return "Concluder"
      else if (this.discCode == "DC") return "Challenger"
      else if (this.discCode == "DIC") return "Chancellor"
      else if (this.discCode == "DIS") return "Director"
      else if (this.discCode == "Pure I") return "Director"
      else if (this.discCode == "IC") return "Assessor"
      else if (this.discCode == "ICS") return "Governor"
      else if (this.discCode == "ID") return "Persuader"
      else if (this.discCode == "IDC") return "Leader"
      else if (this.discCode == "IDS") return "Reformer"
      else if (this.discCode == "IS") return "Advisor"
      else if (this.discCode == "ISC") return "Governor"
      else if (this.discCode == "ISD") return "Motivator"
      else if (this.discCode == "Pure S") return "Specialist"
      else if (this.discCode == "SC") return "Peacemaker"
      else if (this.discCode == "SCI") return "Advocate"
      else if (this.discCode == "SD") return "Attainer"
      else if (this.discCode == "SDC") return "Inquirer"
      else if (this.discCode == "SI") return "Advisor"
      else if (this.discCode == "SIC") return "Advocate"
      else if (this.discCode == "Pure C") return "Logical Thinker"
      else if (this.discCode == "CD") return "Designer"
      else if (this.discCode == "CDS") return "Contemplator"
      else if (this.discCode == "CI") return "Assessor"
      else if (this.discCode == "CIS") return "Mediator"
      else if (this.discCode == "CS") return "Perfectionist"
      else if (this.discCode == "CSI") return "Practitioner"
      else return ""
    },
    isDisabledSubmit () {
      return this.discResult ? false : true
    }
  },
  methods: {
    submit () {
      const data = {
        applicantId: this.$route.params.applicantId,
        score: this.discCode,
        remarks: this.discResult
      }

      const auth = {
        headers: { Authorization: "Bearer " + localStorage.getItem("token") }
      };

      this.axios.post(process.env.VUE_APP_API_URL + "/exam/result/set/disc", data, auth)
        .then(res => {
          if (res.status == 200) {
            this.dialogSuccess = true
          }
        })
    },
    back () {
      this.$router.push({ name: 'applicants' })
    }
  },
  components: {
    discTable
  },
  created () {
    const auth = {
      headers: { Authorization: "Bearer " + localStorage.getItem("token") }
    };

    this.axios.get(process.env.VUE_APP_API_URL + "/exam/score/disc/" + this.$route.params.applicantId, auth)
      .then(res => {
        const ans = res.data.data
        this.selectedMost.d = ans.scoreM_D
        this.selectedMost.i = ans.scoreM_I
        this.selectedMost.s = ans.scoreM_S
        this.selectedMost.c = ans.scoreM_C
        this.selectedLeast.d = ans.scoreL_D
        this.selectedLeast.i = ans.scoreL_I
        this.selectedLeast.s = ans.scoreL_S
        this.selectedLeast.c = ans.scoreL_C
        this.selectedChange.d = ans.scoreC_D
        this.selectedChange.i = ans.scoreC_I
        this.selectedChange.s = ans.scoreC_S
        this.selectedChange.c = ans.scoreC_C
        if (!ans.debug) {
          this.isLoaded = true;

          const auth = {
            headers: { Authorization: "Bearer " + localStorage.getItem("token") }
          };

          this.axios.get(process.env.VUE_APP_API_URL + "/exam/result/get/" + this.$route.params.applicantId, auth)
            .then(res => {
              const examResult = res.data.data.examResult
              examResult.forEach(el => {
                if (el.examType.examTypeId == 1) this.discCode = el.score
              });
            })
        }
        this.refreshKey++;
      })
  }
}
</script>
