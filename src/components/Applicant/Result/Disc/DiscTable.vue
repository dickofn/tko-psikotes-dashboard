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
      <v-flex xs3 v-if="!checkMissingValueD">
        <v-card :dark="d[index] != selectedD" height="20">{{ d[index] }}</v-card>
      </v-flex>
      <v-flex xs3 v-else>
        <v-card :dark="d[index] != highD && d[index] != lowD" height="20">{{ d[index] }}</v-card>
      </v-flex>
      <v-flex xs3 v-if="!checkMissingValueI">
        <v-card :dark="i[index] != selectedI" height="20">{{ i[index] }}</v-card>
      </v-flex>
      <v-flex xs3 v-else>
        <v-card :dark="i[index] != highI && i[index] != lowI" height="20">{{ i[index] }}</v-card>
      </v-flex>
      <v-flex xs3 v-if="!checkMissingValueS">
        <v-card :dark="s[index] != selectedS" height="20">{{ s[index] }}</v-card>
      </v-flex>
      <v-flex xs3 v-else>
        <v-card :dark="s[index] != highS && s[index] != lowS" height="20">{{ s[index] }}</v-card>
      </v-flex>
      <v-flex xs3 v-if="!checkMissingValueC">
        <v-card :dark="c[index] != selectedC" height="20">{{ c[index] }}</v-card>
      </v-flex>
      <v-flex xs3 v-else>
        <v-card :dark="c[index] != highC && c[index] != lowC" height="20">{{ c[index] }}</v-card>
      </v-flex>
    </v-layout>
  </v-card>
</template>

<script>
export default {
  props: ["datas", "answers"],
  data () {
    return {
      type: this.datas.type,
      d: this.datas.d,
      i: this.datas.i,
      s: this.datas.s,
      c: this.datas.c,
      selectedD: this.answers.d,
      selectedI: this.answers.i,
      selectedS: this.answers.s,
      selectedC: this.answers.c,
      highD: null,
      lowD: null,
      highI: null,
      lowI: null,
      highS: null,
      lowS: null,
      highC: null,
      lowC: null
    }
  },
  computed: {
    checkMissingValueD () {
      var missing = true;
      for (let index = 0; index < this.d.length; index++) {
        const d = this.d[index];
        if (this.selectedD == d) {
          missing = false; break;
        }
      }
      return missing;
    },
    checkMissingValueI () {
      var missing = true;
      for (let index = 0; index < this.i.length; index++) {
        const i = this.i[index];
        if (this.selectedI == i) {
          missing = false; break;
        }
      }
      return missing;
    },
    checkMissingValueS () {
      var missing = true;
      for (let index = 0; index < this.s.length; index++) {
        const s = this.s[index];
        if (this.selectedS == s) {
          missing = false; break;
        }
      }
      return missing;
    },
    checkMissingValueC () {
      var missing = true;
      for (let index = 0; index < this.c.length; index++) {
        const c = this.c[index];
        if (this.selectedC == c) {
          missing = false; break;
        }
      }
      return missing;
    },
  },
  methods: {
    findNearestValueD () {
      var temp = [];
      for (let index = 0; index < this.d.length; index++) {
        const el = this.d[index];
        if (el != "") {
          temp.push(el)
        }
      }
      if (this.type != 'least') {
        for (let index = 0; index < temp.length; index++) {
          const d = temp[index];
          if (this.selectedD > d && d != "") {
            if (this.selectedD < temp[index - 1]) {
              this.highD = temp[index - 1]
              this.lowD = d
            }
          }
        }
      } else {
        for (let index = 0; index < temp.length; index++) {
          const d = temp[index];
          if (this.selectedD < d) {
            if (this.selectedD > temp[index - 1]) {
              this.highD = temp[index - 1]
              this.lowD = d
            }
          }
        }
      }
    },
    findNearestValueI () {
      var temp = [];
      for (let index = 0; index < this.i.length; index++) {
        const el = this.i[index];
        if (el != "") {
          temp.push(el)
        }
      }
      if (this.type != 'least') {
        for (let index = 0; index < temp.length; index++) {
          const i = temp[index];
          if (this.selectedI > i) {
            if (this.selectedI < temp[index - 1]) {
              this.highI = temp[index - 1]
              this.lowI = i
            }
          }
        }
      } else {
        for (let index = 0; index < temp.length; index++) {
          const i = temp[index];
          if (this.selectedI < i) {
            if (this.selectedI > temp[index - 1]) {
              this.highI = temp[index - 1]
              this.lowI = i
            }
          }
        }
      }
    },
    findNearestValueS () {
      var temp = [];
      for (let index = 0; index < this.s.length; index++) {
        const el = this.s[index];
        if (el != "") {
          temp.push(el)
        }
      }
      if (this.type != 'least') {
        for (let index = 0; index < temp.length; index++) {
          const s = temp[index];
          if (this.selectedS > s && s != "") {
            if (this.selectedS < temp[index - 1]) {
              this.highS = temp[index - 1]
              this.lowS = s
            }
          }
        }
      } else {
        for (let index = 0; index < temp.length; index++) {
          const s = temp[index];
          if (this.selectedS < s && s != "") {
            if (this.selectedS > temp[index - 1]) {
              this.highS = s
              this.lowS = temp[index - 1]
            }
          }
        }
      }
    },
    findNearestValueC () {
      var temp = [];
      for (let index = 0; index < this.c.length; index++) {
        const el = this.c[index];
        if (el != "") {
          temp.push(el)
        }
      }
      if (this.type != 'least') {
        for (let index = 0; index < temp.length; index++) {
          const c = temp[index];
          if (this.selectedC > c) {
            if (this.selectedC < temp[index - 1]) {
              this.highC = temp[index - 1]
              this.lowC = c
            }
          }
        }
      } else {
        for (let index = 0; index < temp.length; index++) {
          const c = temp[index];
          if (this.selectedC < c) {
            if (this.selectedC > temp[index - 1]) {
              this.highC = temp[index - 1]
              this.lowC = c
            }
          }
        }
      }
    }
  },
  created () {
    if (this.checkMissingValueD) { this.findNearestValueD() }
    if (this.checkMissingValueI) { this.findNearestValueI() }
    if (this.checkMissingValueS) { this.findNearestValueS() }
    if (this.checkMissingValueC) { this.findNearestValueC() }
  }
}
</script>
 