<template>
  <v-data-table :headers="headers" :items="applicants" class="elevation-1">
    <template v-slot:items="props">
      <tr>
        <td class="custom-td" @click="applicantClicked(props.item)">{{ props.item.fullName }}</td>
        <td class="text-xs-left">{{ props.item.placeBirth }}</td>
        <td class="text-xs-left">{{ props.item.dateBirth }}</td>
        <td class="justify-center layout px-0">
          <v-btn dark flat color="red darken-2" @click="setDisc(props.item.applicantId)">Set DISC</v-btn>
          <v-btn dark flat color="red darken-2" @click="seeResult">See Result</v-btn>
        </td>
      </tr>
    </template>
  </v-data-table>
</template>

<script>
export default {
  data () {
    return {
      headers: [
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
    seeResult(){
      return
    }
  },
  created () {
    this.$store.dispatch('getApplicants')
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
