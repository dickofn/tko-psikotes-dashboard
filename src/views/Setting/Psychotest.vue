<template>
  <v-container grid-list-xs>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card>
          <v-card-title primary-title>
            <h1 class="headline">{{ $t('pengaturanPsikotes') }}</h1>
          </v-card-title>
          <v-card-text>
            <v-container grid-list-xs>
              <v-layout row wrap>
                <v-flex xs12 md6>
                  <v-btn
                    color="red darken-2"
                    block
                    large
                    dark
                    @click="$router.push({name : 'settingPsychotestTime'})"
                  >{{ $t('pengaturanWaktu') }}</v-btn>
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

}
</script>
