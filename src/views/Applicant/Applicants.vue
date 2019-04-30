<template>
  <v-card>
    <v-card-title>
      <h1 class="headline">Daftar Peserta</h1>
      <v-spacer></v-spacer>
      <v-text-field v-model="search" append-icon="search" label="Cari" single-line hide-details></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="applicants"
      class="elevation-1"
      :search="search"
      :pagination.sync="pagination"
      :rows-per-page-items="[10,25,{'text':'$vuetify.dataIterator.rowsPerPageAll','value':-1}]"
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
              @click="setDisc(props.item.applicantId)"
            >Perbaharui DISC</v-btn>
            <v-btn
              dark
              flat
              color="red darken-2"
              @click="seeReport(props.item.applicantId)"
            >Lihat Laporan</v-btn>
          </td>
        </tr>
      </template>
      <template v-slot:no-results>
        <v-alert
          :value="true"
          color="error"
          icon="warning"
        >Tidak ada hasil yang ditemukan dengan kata kunci "{{ search }}".</v-alert>
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
        { text: 'Tanggal Pengerjaan', value: 'examDate' },
        {
          text: 'Nama Pelamar',
          align: 'left',
          value: 'fullName'
        },
        { text: 'Tempat Lahir', value: 'placeBirth' },
        { text: 'Tanggal Lahir', value: 'dateBirth' },
        { text: 'Aksi', align: 'center', value: 'name', sortable: false }
      ]
    }
  },
  computed: {
    applicants () {
      return this.$store.state.applicant.applicants
    }
  },
  methods: {
    applicantClicked (item) {
      this.$router.push({ name: 'applicant', params: { applicantId: item.applicantId } })
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
