<template>
  <v-data-table :headers="headers" :items="applicants" class="elevation-1">
    <template v-slot:items="props">
      <tr style="cursor: pointer" @click="applicantClicked(props.item)">
        <td>{{ props.item.fullName }}</td>
        <td class="text-xs-left">{{ props.item.placeBirth }}</td>
        <td class="text-xs-left">{{ props.item.dateBirth }}</td>
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
    }
  },
  created () {
    this.$store.dispatch('getApplicants')
  }
}
</script>

<style>
</style>
