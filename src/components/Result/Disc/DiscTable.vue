<template>
  <v-card>
    <!-- header -->
    <v-layout row wrap text-xs-center>
      <v-flex xs3>
        <v-card dark :color="'red darken-2'">
          <v-card-text>D</v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs3>
        <v-card dark :color="'red darken-2'">
          <v-card-text>I</v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs3>
        <v-card dark :color="'red darken-2'">
          <v-card-text>S</v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs3>
        <v-card dark :color="'red darken-2'">
          <v-card-text>C</v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
    <!-- body  -->
    <v-layout row wrap text-xs-center v-for="(data,index) in datas.d" :key="index">
      <v-flex xs3>
        <v-card :dark="d[index] != selectedD" height="20">{{ d[index] }}</v-card>
      </v-flex>
      <v-flex xs3>
        <v-card :dark="i[index] != selectedI" height="20">{{ i[index] }}</v-card>
      </v-flex>
      <v-flex xs3>
        <v-card :dark="s[index] != selectedS" height="20">{{ s[index] }}</v-card>
      </v-flex>
      <v-flex xs3>
        <v-card :dark="c[index] != selectedC" height="20">{{ c[index] }}</v-card>
      </v-flex>
    </v-layout>
  </v-card>
</template>

<script>
export default {
  props: ["datas", "answers"],
  data () {
    return {
      d: this.datas.d,
      i: this.datas.i,
      s: this.datas.s,
      c: this.datas.c,
      selectedD: this.answers.d,
      selectedI: this.answers.i,
      selectedS: this.answers.s,
      selectedC: this.answers.c
    }
  }
}
</script>
 