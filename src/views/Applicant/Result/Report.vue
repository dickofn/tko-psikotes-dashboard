<template>
  <v-container grid-list-xs v-if="result" class="padding-cheat">
    <v-layout row wrap>
      <v-flex xs12>
        <v-card>
          <v-card-title primary-title>
            <v-container grid-list-xs>
              <v-layout row wrap>
                <v-flex xs12 text-xs-center>
                  <h1 class="headline" text-xs-center>
                    <u>FORM A</u>
                    <br>PERSONNEL SCREENING
                  </h1>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-title>
          <v-card-text>
            <v-container grid-list-xs>
              <v-layout row wrap>
                <v-flex xs6>
                  <v-text-field
                    label="Nama Lengkap"
                    name="applicantName"
                    :value="result.applicantData.fullName"
                    readonly
                  ></v-text-field>
                </v-flex>
                <v-flex xs6>
                  <v-text-field
                    label="Jenis Kelamin"
                    name="applicantGender"
                    :value="applicantGender"
                    readonly
                  ></v-text-field>
                </v-flex>
              </v-layout>

              <v-layout row wrap>
                <v-flex xs6>
                  <v-text-field
                    label="Tanggal Lahir"
                    name="applicantBirthDate"
                    :value="result.applicantData.dateBirth"
                    readonly
                  ></v-text-field>
                </v-flex>
                <v-flex xs6>
                  <v-text-field
                    label="Umur"
                    name="applicantAge"
                    :value="result.applicantData.age"
                    readonly
                  ></v-text-field>
                </v-flex>
              </v-layout>

              <v-layout row wrap>
                <v-flex xs6>
                  <v-text-field
                    label="Pendidikan"
                    name="applicantEducation"
                    :value="result.applicantData.education.educationType.educationName + ' - ' + result.applicantData.education.major"
                    readonly
                  ></v-text-field>
                </v-flex>
                <v-flex xs6>
                  <v-text-field
                    label="Tujuan Pemeriksaan"
                    name="applicantPurpose"
                    v-model="applicantPurpose"
                  ></v-text-field>
                </v-flex>
              </v-layout>

              <v-layout row wrap>
                <v-flex xs6>
                  <v-menu
                    :close-on-content-click="false"
                    v-model="applicantCheckDateMenu"
                    :nudge-right="40"
                    lazy
                    transition="scale-transition"
                    offset-y
                    full-width
                    min-width="290px"
                  >
                    <v-text-field
                      slot="activator"
                      v-model="applicantCheckDate"
                      label="Tanggal Periksa (YYYY-MM-DD)"
                      readonly
                    ></v-text-field>
                    <v-date-picker
                      v-model="applicantCheckDate"
                      @input="applicantCheckDateMenu = false"
                      :allowedDates="allowedDates"
                    ></v-date-picker>
                  </v-menu>
                </v-flex>
                <v-flex xs6>
                  <v-text-field
                    label="Jabatan yang Dilamar"
                    name="applicantJob"
                    v-model="applicantJob"
                  ></v-text-field>
                </v-flex>
              </v-layout>

              <v-layout row wrap>
                <v-flex xs6>
                  <v-text-field
                    label="Hasil diberikan ke"
                    name="applicantReceiver"
                    v-model="applicantReceiver"
                  ></v-text-field>
                </v-flex>
                <v-flex xs6>
                  <v-text-field
                    label="IPK"
                    name="applicantGrade"
                    :value="result.applicantData.education.gpa"
                    readonly
                  ></v-text-field>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>

    <v-layout row wrap>
      <v-flex xs6>
        <v-card height="100%">
          <v-card-text>
            <p>Dilihat dari aspek kecerdasan, Ybs memiliki daya tangkap {{ rating(a1) }} dan daya nalar {{ rating(a2) }}. Kemampuan berkomunikasi yang dimiliki oleh Ybs {{ rating(a3) }}. Ybs memiliki kemampuan yang {{ rating(a4) }} dalam bidang angka dan {{ rating(a5) }} dalam bidang analisa.</p>
            <br>
            <p>Ybs tergolong {{ result.interpretasi.z }}, serta Ybs mempunyai pendekatan emosi {{ result.interpretasi.e }}. Ybs menyukai suka {{ result.interpretasi.k }}.</p>
            <p>Dalam relasi sosial Ybs {{ result.interpretasi.o }}. Dan Ybs {{ result.interpretasi.b }}, Ybs {{ result.interpretasi.x }}, namun Ybs memiliki {{ result.interpretasi.s }}</p>
            <br>
            <p>Dalam pekerjaan Ybs {{ result.interpretasi.n }}, namun Ybs {{ result.interpretasi.g }}, serta Ybs memiliki {{ result.interpretasi.a }}</p>
            <p>Dalam melakukan aktivitas Ybs {{ result.interpretasi.t }}, namun Ybs {{ result.interpretasi.v }}</p>
            <br>
            <p>Dalam peran pemimpin, Ybs merupakan seorang yang {{ result.interpretasi.l }}. Namun {{ result.interpretasi.p }}.</p>
            <br>
            <p>Dari gaya bekerja Ybs mempunyai {{ result.interpretasi.d }}, namun menyukai hal yang {{ result.interpretasi.c }} dan {{ result.interpretasi.r }}</p>
            <p>Ybs tergolong {{ result.interpretasi.f }}, namun Ybs perlu {{ result.interpretasi.w }}</p>
          </v-card-text>
        </v-card>
      </v-flex>

      <v-flex xs6>
        <v-card height="100%">
          <v-card-text>
            <div class="scrollable">
              <table class="tableIntro">
                <thead>
                  <tr>
                    <th>Kurang</th>
                    <th>Sedang</th>
                    <th>Baik</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1 = Sangat Kurang</td>
                    <td>3 = Sedang</td>
                    <td>5 = Baik</td>
                  </tr>
                  <tr>
                    <td>2 = Kurang</td>
                    <td>4 = Cukup Baik</td>
                    <td>6 = Sangat Baik</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div class="scrollable">
              <table class="tableMain">
                <thead>
                  <tr>
                    <th rowspan="2">Aspek Penilaian Psikologis</th>
                    <th colspan="2">Kurang</th>
                    <th colspan="2">Sedang</th>
                    <th colspan="2">Baik</th>
                  </tr>
                  <tr>
                    <th class="fixed-width">1</th>
                    <th class="fixed-width">2</th>
                    <th class="fixed-width">3</th>
                    <th class="fixed-width">4</th>
                    <th class="fixed-width">5</th>
                    <th class="fixed-width">6</th>
                  </tr>
                </thead>
                <thead class="sub-thead">
                  <tr>
                    <th colspan="7">A. Aspek Kecerdasan</th>
                  </tr>
                </thead>
                <tbody class="score-tbody">
                  <tr>
                    <td>1. Daya Tangkap</td>
                    <td :class="{ active : a1 == 1}"></td>
                    <td :class="{ active : a1 == 2}"></td>
                    <td :class="{ active : a1 == 3}"></td>
                    <td :class="{ active : a1 == 4}"></td>
                    <td :class="{ active : a1 == 5}"></td>
                    <td :class="{ active : a1 == 6}"></td>
                  </tr>
                  <tr>
                    <td>2. Daya Nalar</td>
                    <td :class="{ active : a2 == 1}"></td>
                    <td :class="{ active : a2 == 2}"></td>
                    <td :class="{ active : a2 == 3}"></td>
                    <td :class="{ active : a2 == 4}"></td>
                    <td :class="{ active : a2 == 5}"></td>
                    <td :class="{ active : a2 == 6}"></td>
                  </tr>
                  <tr>
                    <td>3. Kemampuan Verbal</td>
                    <td :class="{ active : a3 == 1}"></td>
                    <td :class="{ active : a3 == 2}"></td>
                    <td :class="{ active : a3 == 3}"></td>
                    <td :class="{ active : a3 == 4}"></td>
                    <td :class="{ active : a3 == 5}"></td>
                    <td :class="{ active : a3 == 6}"></td>
                  </tr>
                  <tr>
                    <td>4. Kemampuan Numerik</td>
                    <td :class="{ active : a4 == 1}"></td>
                    <td :class="{ active : a4 == 2}"></td>
                    <td :class="{ active : a4 == 3}"></td>
                    <td :class="{ active : a4 == 4}"></td>
                    <td :class="{ active : a4 == 5}"></td>
                    <td :class="{ active : a4 == 6}"></td>
                  </tr>
                  <tr>
                    <td>5. Kemampuan Analisa</td>
                    <td :class="{ active : a5 == 1}"></td>
                    <td :class="{ active : a5 == 2}"></td>
                    <td :class="{ active : a5 == 3}"></td>
                    <td :class="{ active : a5 == 4}"></td>
                    <td :class="{ active : a5 == 5}"></td>
                    <td :class="{ active : a5 == 6}"></td>
                  </tr>
                </tbody>
                <thead class="sub-thead">
                  <tr>
                    <th colspan="7">B. Aspek Sosial dan Emosi</th>
                  </tr>
                </thead>
                <tbody class="score-tbody">
                  <tr>
                    <td>1. Kematangan Emosi</td>
                    <td :class="{ active : b1 == 1}"></td>
                    <td :class="{ active : b1 == 2}"></td>
                    <td :class="{ active : b1 == 3}"></td>
                    <td :class="{ active : b1 == 4}"></td>
                    <td :class="{ active : b1 == 5}"></td>
                    <td :class="{ active : b1 == 6}"></td>
                  </tr>
                  <tr>
                    <td>2. Penyesuaian Diri</td>
                    <td :class="{ active : b2 == 1}"></td>
                    <td :class="{ active : b2 == 2}"></td>
                    <td :class="{ active : b2 == 3}"></td>
                    <td :class="{ active : b2 == 4}"></td>
                    <td :class="{ active : b2 == 5}"></td>
                    <td :class="{ active : b2 == 6}"></td>
                  </tr>
                  <tr>
                    <td>3. Motivasi</td>
                    <td :class="{ active : b3 == 1}"></td>
                    <td :class="{ active : b3 == 2}"></td>
                    <td :class="{ active : b3 == 3}"></td>
                    <td :class="{ active : b3 == 4}"></td>
                    <td :class="{ active : b3 == 5}"></td>
                    <td :class="{ active : b3 == 6}"></td>
                  </tr>
                </tbody>
                <thead class="sub-thead">
                  <tr>
                    <th colspan="7">C. Aspek Sikap Dalam Bekerja</th>
                  </tr>
                </thead>
                <tbody class="score-tbody">
                  <tr>
                    <td>1. Perencanaan Kerja</td>
                    <td :class="{ active : c1 == 1}"></td>
                    <td :class="{ active : c1 == 2}"></td>
                    <td :class="{ active : c1 == 3}"></td>
                    <td :class="{ active : c1 == 4}"></td>
                    <td :class="{ active : c1 == 5}"></td>
                    <td :class="{ active : c1 == 6}"></td>
                  </tr>
                  <tr>
                    <td>2. Sistematik Kerja</td>
                    <td :class="{ active : c2 == 1}"></td>
                    <td :class="{ active : c2 == 2}"></td>
                    <td :class="{ active : c2 == 3}"></td>
                    <td :class="{ active : c2 == 4}"></td>
                    <td :class="{ active : c2 == 5}"></td>
                    <td :class="{ active : c2 == 6}"></td>
                  </tr>
                  <tr>
                    <td>3. Ketelitian</td>
                    <td :class="{ active : c3 == 1}"></td>
                    <td :class="{ active : c3 == 2}"></td>
                    <td :class="{ active : c3 == 3}"></td>
                    <td :class="{ active : c3 == 4}"></td>
                    <td :class="{ active : c3 == 5}"></td>
                    <td :class="{ active : c3 == 6}"></td>
                  </tr>
                  <tr>
                    <td>4. Inisiatif</td>
                    <td :class="{ active : c4 == 1}"></td>
                    <td :class="{ active : c4 == 2}"></td>
                    <td :class="{ active : c4 == 3}"></td>
                    <td :class="{ active : c4 == 4}"></td>
                    <td :class="{ active : c4 == 5}"></td>
                    <td :class="{ active : c4 == 6}"></td>
                  </tr>
                  <tr>
                    <td>5. Ketekunan</td>
                    <td :class="{ active : c5 == 1}"></td>
                    <td :class="{ active : c5 == 2}"></td>
                    <td :class="{ active : c5 == 3}"></td>
                    <td :class="{ active : c5 == 4}"></td>
                    <td :class="{ active : c5 == 5}"></td>
                    <td :class="{ active : c5 == 6}"></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <v-container grid-list-xs>
              <v-layout row wrap>
                <v-flex xs12 text-xs-center class="tableDisc" pa-2>
                  <h4>Rangkuman DISC kandidat (personality)</h4>
                </v-flex>
                <v-flex xs6 class="tableDisc" style="border-bottom-left-radius: 20px;" px-2>
                  <v-text-field label="Profil DISC" name="discName" :value="disc.name" readonly></v-text-field>
                </v-flex>
                <v-flex xs6 class="tableDisc" px-2>
                  <v-text-field label="Tipe DISC" name="discCode" :value="disc.code" readonly></v-text-field>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>

    <v-layout row wrap>
      <v-flex xs12>
        <v-card>
          <v-card-text>
            <v-container grid-list-xs>
              <v-layout row wrap>
                <v-flex xs12>
                  <h4>Rekomendasi HRD:</h4>
                  <v-divider></v-divider>
                </v-flex>
                <v-flex xs12>
                  <div class="flex-space-between">
                    <div>
                      <input type="radio" name="recom" id="1" value="1" v-model="recommendedOption">
                      <label for="1">Dapat direkomendasikan untuk interview</label>
                    </div>
                    <div>
                      <input type="radio" name="recom" id="2" value="2" v-model="recommendedOption">
                      <label for="2">Dipertimbangkan untuk interview</label>
                    </div>
                    <div>
                      <input type="radio" name="recom" id="3" value="3" v-model="recommendedOption">
                      <label for="3">Tidak direkomendasikan</label>
                    </div>
                    <br>
                  </div>
                </v-flex>
              </v-layout>

              <v-layout row wrap>
                <v-flex xs12>
                  <h4>Rangkuman Singkat HRD dan Memo untuk Kandidat:</h4>
                  <v-divider></v-divider>
                </v-flex>
                <v-flex xs12>
                  <v-textarea name="hrdNote" v-model="hrdNote" :rows="2"></v-textarea>
                </v-flex>
              </v-layout>

              <v-layout row wrap>
                <v-flex xs12>
                  <div class="scrollable">
                    <table class="tableForm">
                      <tbody>
                        <tr>
                          <td class="question">Posisi yang disetujui</td>
                          <td class="separator">:</td>
                          <td class="answer"></td>
                        </tr>
                        <tr>
                          <td class="question">Diinterview Oleh</td>
                          <td class="separator">:</td>
                          <td class="answer"></td>
                        </tr>
                        <tr>
                          <td class="question">Dengan hasil</td>
                          <td class="separator">:</td>
                          <td class="answer"></td>
                        </tr>
                        <tr>
                          <td
                            class="question"
                          >Hasil ekplorasi karir pribadi dengan arah minat bidang</td>
                          <td class="separator">:</td>
                          <td class="answer"></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </v-flex>
              </v-layout>

              <v-layout row wrap>
                <v-flex xs12>
                  <div class="scrollable">
                    <table class="tableSign">
                      <thead>
                        <tr>
                          <th>Submitted By :</th>
                          <th>Verified and Recommended by :</th>
                          <th>Approval By :</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <div class="sign-field">
                              <hr>(Head / Superior / User)
                            </div>
                          </td>
                          <td>
                            <div class="sign-field">
                              <hr>(HRD)
                            </div>
                          </td>
                          <td>
                            <div class="sign-field">
                              <hr>(Director)
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-text>
          <div class="print" v-if="result">
            <v-card-text>
              <v-container grid-list-xs>
                <v-layout row wrap>
                  <v-flex xs12 text-xs-right>
                    <v-btn
                      large
                      color="red darken-2"
                      @click="print"
                      :disabled="!applicantJob || !applicantJob.trim()"
                    >
                      <v-icon color="white">print</v-icon>
                    </v-btn>
                  </v-flex>
                  <v-flex
                    xs12
                    text-xs-right
                    style="color: red"
                    v-if="!applicantJob || !applicantJob.trim()"
                  >* Jabatan yang dilamar mohon diisi</v-flex>
                </v-layout>
              </v-container>
            </v-card-text>
          </div>
        </v-card>
      </v-flex>
      <div class="printDisc" id="printDisc">
        <v-flex xs12>
          <v-card v-if="!disc.name">
            <v-card-text>
              <v-container grid-list-xs>
                <v-layout row wrap>
                  <v-flex xs12>
                    <h1 class="headline">Tidak ada data DISC</h1>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card-text>
          </v-card>
          <v-card v-else>
            <v-card-text>
              <v-container grid-list-xs>
                <v-layout row wrap>
                  <v-flex xs12>
                    <v-text-field
                      label="Nama Lengkap"
                      name="applicantName"
                      :value="result.applicantData.fullName"
                      readonly
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs6>
                    <v-text-field label="Profil DISC" name="discName" :value="disc.name" readonly></v-text-field>
                  </v-flex>
                  <v-flex xs6>
                    <v-text-field label="Tipe DISC" name="discCode" :value="disc.code" readonly></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row wrap>
                  <v-flex xs12>
                    <p style="white-space: pre-line">{{ discDesc.discText }}</p>
                    <br>
                    <p style="white-space: pre-line">{{ discDesc.footerText }}</p>
                  </v-flex>
                </v-layout>
                <div class="print">
                  <v-layout row wrap>
                    <v-flex xs12 text-xs-right>
                      <v-btn large color="red darken-2" @click="printDisc">
                        <v-icon color="white">print</v-icon>
                      </v-btn>
                    </v-flex>
                  </v-layout>
                </div>
              </v-container>
            </v-card-text>
          </v-card>
        </v-flex>
      </div>
    </v-layout>
  </v-container>
</template>

<script>
import { Printd } from 'printd'

export default {
  data () {
    return {
      applicantPurpose: "Seleksi masuk karyawan",
      applicantCheckDateMenu: false,
      allowedDates: val => parseInt(val.split('-').join('')) <= parseInt(new Date().toISOString().substr(0, 10).split('-').join('')), // can only choose today or before
      applicantCheckDate: "",
      applicantJob: "",
      applicantReceiver: "Tokoonderdil",
      recommendedOption: "",
      hrdNote: "",
      discDesc: ""
    }
  },
  computed: {
    result () {
      return this.$store.state.result.result
    },
    applicantGender () {
      if (this.result.applicantData.sex == "F") return "Perempuan"
      else return "Laki-laki"
    },
    a1 () {
      const examResult = this.result.examResult
      var value = 0
      examResult.forEach(el => {
        if (el.examType.examTypeId == 2) value = el.score
      });
      return value
    },
    a2 () {
      const examResult = this.result.examResult
      var value = 0
      examResult.forEach(el => {
        if (el.examType.examTypeId == 4) value = el.score
      });
      return value    },
    a3 () {
      const examResult = this.result.examResult
      var value = 0
      examResult.forEach(el => {
        if (el.examType.examTypeId == 3) value = el.score
      });
      return value
    },
    a4 () {
      const examResult = this.result.examResult
      var value = 0
      examResult.forEach(el => {
        if (el.examType.examTypeId == 5) value = el.score
      });
      return value
    },
    a5 () {
      const examResult = this.result.examResult
      var value = 0
      examResult.forEach(el => {
        if (el.examType.examTypeId == 6) value = el.score
      });
      return value
    },
    b1 () {
      const examResult = this.result.examResult
      var value = 0
      examResult.forEach(el => {
        if (el.examType.examTypeId == 7 && el.remarks == "KEMATANGAN EMOSI") value = el.score
      });
      return value
    },
    b2 () {
      const examResult = this.result.examResult
      var value = 0
      examResult.forEach(el => {
        if (el.examType.examTypeId == 7 && el.remarks == "PENYESUAIAN DIRI") value = el.score
      });
      return value
    },
    b3 () {
      const examResult = this.result.examResult
      var value = 0
      examResult.forEach(el => {
        if (el.examType.examTypeId == 7 && el.remarks == "MOTIVASI") value = el.score
      });
      return value
    },
    c1 () {
      const examResult = this.result.examResult
      var value = 0
      examResult.forEach(el => {
        if (el.examType.examTypeId == 7 && el.remarks == "PERENCANAAN KERJA") value = el.score
      });
      return value
    },
    c2 () {
      const examResult = this.result.examResult
      var value = 0
      examResult.forEach(el => {
        if (el.examType.examTypeId == 7 && el.remarks == "SISTEMATIS KERJA") value = el.score
      });
      return value
    },
    c3 () {
      const examResult = this.result.examResult
      var value = 0
      examResult.forEach(el => {
        if (el.examType.examTypeId == 7 && el.remarks == "KETELITIAN") value = el.score
      });
      return value
    },
    c4 () {
      const examResult = this.result.examResult
      var value = 0
      examResult.forEach(el => {
        if (el.examType.examTypeId == 7 && el.remarks == "INISIATIF") value = el.score
      });
      return value
    },
    c5 () {
      const examResult = this.result.examResult
      var value = 0
      examResult.forEach(el => {
        if (el.examType.examTypeId == 7 && el.remarks == "KETEKUNAN") value = el.score
      });
      return value
    },
    disc () {
      const examResult = this.result.examResult
      var disc = {}
      examResult.forEach(el => {
        if (el.examType.examTypeId == 1) disc = { name: el.remarks, code: el.score }
      });
      return disc
    }
  },
  watch: {
    result (v) {
      if (v) {
        if (this.result.report.reportCheck != null) this.applicantCheckDate = this.result.report.reportCheck
        if (this.result.report.reportFor != null) this.applicantReceiver = this.result.report.reportFor
        if (this.result.report.reportPurpose != null) this.applicantPurpose = this.result.report.reportPurpose
        if (this.result.report.applicantPositionFor != null) this.applicantJob = this.result.report.applicantPositionFor
        if (this.result.report.recommendation != null) this.recommendedOption = this.result.report.recommendation
        if (this.result.report.memo != null) this.hrdNote = this.result.report.memo
      }
    }
  },
  methods: {
    rating (payload) {
      if (payload == 6) return "sangat baik"
      else if (payload == 5) return "baik"
      else if (payload == 4) return "cukup baik"
      else if (payload == 3) return "sedang"
      else if (payload == 2) return "kurang"
      else if (payload == 1) return "sangat kurang"
    },
    print () {
      const d = new Printd()
      const styles = [
        'https://cdn.jsdelivr.net/npm/vuetify/dist/vuetify.min.css',
        `.padding-cheat { padding : 0 !important; margin : 0 !important }
          .print { display: none }
          .scrollable { overflow-x: auto; }
          .tableIntro { border: 1px solid #ddd; width: 100%; border-collapse: collapse; text-align: center; }
          .tableIntro td, .tableIntro th { padding: 1px 5px; border: 1px solid #ddd; }
          .tableMain { border: 1px solid #ddd; width: 100%; border-collapse: collapse; }
          .tableMain .sub-thead { text-align: left; background-color: #555; color: #fff; }
          .tableMain td, .tableMain th { padding: 1px 5px; border: 1px solid #ddd; }
          .tableMain .fixed-width { width: 30px; }
          .tableDisc { padding: 1px 5px; border: 1px solid #ddd; }
          .flex-space-between { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; }
          .flex-space-between label { padding-left: 10px; }
          .score-tbody .active { background-color: #d32f2f; }
          .tableForm { width: 100%; margin-bottom: 20px; }
          .tableForm td, .tableForm th { padding: 1px 5px; }
          .tableForm .question { width: 25%; }
          .tableForm .separator { width: 1%; }
          .tableForm .answer { width: 74%; border-bottom: 1px solid #000; }
          .tableSign { border: 1px solid #000; width: 100%; border-collapse: collapse; }
          .tableSign td, .tableSign th { width: 33%; padding: 1px 5px; border: 1px solid #000; }
          .tableSign .sign-field { padding: 10px 10px; padding-top: 150px; text-align: center; }`
      ]

      const scripts = [
        'document.body.style.zoom=1.0;this.blur();'
      ]

      const data = {
        applicantId: this.$route.params.applicantId,
        reportCheck: this.applicantCheckDate,
        reportFor: this.applicantReceiver,
        reportPurpose: this.applicantPurpose,
        applicantPositionFor: this.applicantJob,
        recommendation: this.recommendedOption,
        memo: this.hrdNote
      }

      const auth = {
        headers: { Authorization: "Bearer " + localStorage.getItem("token") }
      };

      this.axios.post(process.env.VUE_APP_API_URL + "/applicant/report/new", data, auth)
        .then(res => {
          if (res.status == 200) {
            d.print(this.$el, styles, scripts);
          }
        })
    },
    printDisc () {
      const d = new Printd()
      const styles = [
        'https://cdn.jsdelivr.net/npm/vuetify/dist/vuetify.min.css',
        `.padding-cheat { padding : 0 !important; margin : 0 !important }
          .print { display: none }
          .scrollable { overflow-x: auto; }
          .tableIntro { border: 1px solid #ddd; width: 100%; border-collapse: collapse; text-align: center; }
          .tableIntro td, .tableIntro th { padding: 1px 5px; border: 1px solid #ddd; }
          .tableMain { border: 1px solid #ddd; width: 100%; border-collapse: collapse; }
          .tableMain .sub-thead { text-align: left; background-color: #555; color: #fff; }
          .tableMain td, .tableMain th { padding: 1px 5px; border: 1px solid #ddd; }
          .tableMain .fixed-width { width: 30px; }
          .tableDisc { padding: 1px 5px; border: 1px solid #ddd; }
          .flex-space-between { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; }
          .flex-space-between label { padding-left: 10px; }
          .score-tbody .active { background-color: #d32f2f; }
          .tableForm { width: 100%; margin-bottom: 20px; }
          .tableForm td, .tableForm th { padding: 1px 5px; }
          .tableForm .question { width: 25%; }
          .tableForm .separator { width: 1%; }
          .tableForm .answer { width: 74%; border-bottom: 1px solid #000; }
          .tableSign { border: 1px solid #000; width: 100%; border-collapse: collapse; }
          .tableSign td, .tableSign th { width: 33%; padding: 1px 5px; border: 1px solid #000; }
          .tableSign .sign-field { padding: 10px 10px; padding-top: 150px; text-align: center; }`
      ]
      const scripts = [
        'document.body.style.zoom=1.8;this.blur();'
      ]
      const el = document.getElementById('printDisc')
      d.print(el, styles, scripts);
    }
  },
  created () {
    this.$store.dispatch('getResult', this.$route.params.applicantId)
      .then(() => {
        const auth = {
          headers: { Authorization: "Bearer " + localStorage.getItem("token") }
        }
        const data = {
          discProfileCode: this.disc.code,
          language: "ID"
        }
        this.axios.post(process.env.VUE_APP_API_URL + "/exam/result/get/disc", data, auth)
          .then(res => {
            this.discDesc = res.data.data
          })
          .catch(e => {
            console.log(e)
          })
      })
      .catch(e => {
        console.log(e)
      })
  },
  beforeDestroy () {
    this.$store.dispatch('clearResult')
  }
}
</script>

<style lang="scss" scoped>
.scrollable {
  overflow-x: auto;
}

.tableIntro {
  border: 1px solid #ddd;
  width: 100%;
  border-collapse: collapse;
  text-align: center;

  td,
  th {
    padding: 1px 5px;
    border: 1px solid #ddd;
  }
}

.tableMain {
  border: 1px solid #ddd;
  width: 100%;
  border-collapse: collapse;

  .sub-thead {
    text-align: left;
    background-color: #555;
    color: #fff;
  }

  td,
  th {
    padding: 1px 5px;
    border: 1px solid #ddd;
  }

  .fixed-width {
    width: 30px;
  }
}

.tableDisc {
  padding: 1px 5px;
  border: 1px solid #ddd;
}

.flex-space-between {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  label {
    padding-left: 10px;
  }
}

.score-tbody {
  .active {
    background-color: #d32f2f;
  }
}

.tableForm {
  width: 100%;
  margin-bottom: 20px;

  td,
  th {
    padding: 1px 5px;
  }

  .question {
    width: 25%;
  }

  .separator {
    width: 1%;
  }

  .answer {
    width: 74%;
    border-bottom: 1px solid #000;
  }
}

.tableSign {
  border: 1px solid #000;
  width: 100%;
  border-collapse: collapse;

  td,
  th {
    width: 33%;
    padding: 1px 5px;
    border: 1px solid #000;
  }

  .sign-field {
    padding: 10px 10px;
    padding-top: 150px;
    text-align: center;
  }
}
</style>
