<template>
  <v-card>
    <v-card-title>
      <h1 class="headline">{{ $t('dataPelamar') }}</h1>
      <v-spacer></v-spacer>
      <v-text-field v-model="search" append-icon="search" :label="$t('cari')" single-line hide-details></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="applicants"
      class="elevation-1"
      :search="search"
      :pagination.sync="pagination"
      :rows-per-page-items="[10,25,{'text':'$vuetify.dataIterator.rowsPerPageAll','value':-1}]"
      :loading="isLoading"
    >
      <template v-slot:items="props">
        <tr>
          <td class="custom-td" @click="applicantClicked(props.item)">{{ props.item.examDate }}</td>
          <td class="custom-td" @click="applicantClicked(props.item)">{{ props.item.fullName }}</td>
          <td class="text-xs-left">{{ props.item.placeBirth }}</td>
          <td class="text-xs-left">{{ props.item.dateBirth }}</td>
          <td class="justify-center layout px-0">
            <v-btn
              dark
              flat
              color="red darken-2"
              @click="seeAnswer(props.item.applicantId, props.item.examInfoId)"
            >{{ $t('jawabanPsikotes') }}</v-btn>
            <v-btn
              dark
              flat
              color="red darken-2"
              @click="setDisc(props.item.applicantId)"
            >{{ $t('perbaharuiDisc') }}</v-btn>
            <v-btn
              dark
              flat
              color="red darken-2"
              @click="seeReport(props.item.applicantId)"
            >{{ $t('lihatLaporan') }}</v-btn>
          </td>
        </tr>
      </template>
      <template v-slot:no-results>
        <v-alert
          :value="true"
          color="error"
          icon="warning"
        >{{ $t('kataKunciTidakDitemukan') }} "{{ search }}".</v-alert>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
export default {
  data () {
    return {
      search: '',
      pagination: {
        sortBy: "examDate",
        descending: "false"
      },
      headers: [
        { text: this.$t('tanggalPengerjaan'), value: 'examDate' },
        {
          text: this.$t('namaPelamar'),
          align: 'left',
          value: 'fullName'
        },
        { text: this.$t('tempatLahir'), value: 'placeBirth' },
        { text: this.$t('tanggalLahir'), value: 'dateBirth' },
        { text: this.$t('aksi'), align: 'center', value: 'name', sortable: false }
      ]
    }
  },
  computed: {
    applicants () {
      return this.$store.state.applicant.applicants
    },
    isLoading () {
      return this.$store.state.shared.isLoading
    }
  },
  methods: {
    applicantClicked (item) {
      this.$router.push({ name: 'applicant', params: { applicantId: item.applicantId } })
    },
    seeAnswer(applicantId, examInfoId) {
      this.$router.push({ name: 'psychotestAnswer', params: { applicantId, examInfoId } })
    },
    setDisc (applicantId) {
      this.$router.push({ name: 'discResult', params: { applicantId: applicantId } })
    },
    seeReport (applicantId) {
      this.$router.push({ name: 'report', params: { applicantId: applicantId } })
    }
  },
  created () {
    this.$store.dispatch('getApplicants')
      .catch(e => {
        console.log(e)
      })
  }
}
</script>

<style lang="scss" scoped>
.custom-td {
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    color: red;
  }
}
</style>
