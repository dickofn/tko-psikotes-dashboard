<template>
  <v-container grid-list-xs v-if="!applicant">
    <v-layout row>
      <v-flex xs12>
        <v-card>
          <v-card-title primary-title>
            <h1 class="headline">Data tidak ditemukan!</h1>
          </v-card-title>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
  <v-container grid-list-xs v-else>
    <v-layout row>
      <v-flex xs12>
        <v-card>
          <v-card-title primary-title>
            <h1 class="headline">Data Diri Kandidat Karyawan</h1>
          </v-card-title>
          <v-card-text>
            <v-container grid-list-xs>
              <v-layout row wrap>
                <v-flex md8 xs12>
                  <v-text-field
                    label="Nama Lengkap"
                    name="applicantName"
                    id="applicantName"
                    :value="applicant.applicant.applicant.fullName"
                    readonly
                  ></v-text-field>
                </v-flex>
              </v-layout>

              <v-layout row wrap>
                <v-flex xs12>
                  <h4>Tempat dan Tanggal Lahir</h4>
                </v-flex>
                <v-flex md4 xs6>
                  <v-text-field
                    label="Tempat Lahir"
                    name="applicantBirthPlace"
                    id="applicantBirthPlace"
                    :value="applicant.applicant.applicant.placeBirth"
                    readonly
                  ></v-text-field>
                </v-flex>
                <v-flex md4 xs6>
                  <v-text-field
                    label="Tanggal Lahir"
                    name="applicantBirthDate"
                    id="applicantBirthDate"
                    :value="applicant.applicant.applicant.dateBirth"
                    readonly
                  ></v-text-field>
                </v-flex>
              </v-layout>

              <v-layout row wrap>
                <v-flex md8 xs12>
                  <v-textarea
                    label="Alamat Sekarang"
                    name="applicantCurrentAddress"
                    id="applicantCurrentAddress"
                    :value="getAddressApplicant(1)"
                    :rows="3"
                    readonly
                  ></v-textarea>
                </v-flex>
              </v-layout>

              <v-layout row wrap>
                <v-flex md8 xs12>
                  <v-textarea
                    label="Alamat Tetap"
                    name="applicantPermanentAddress"
                    id="applicantPermanentAddress"
                    :value="getAddressApplicant(2)"
                    :rows="3"
                    readonly
                  ></v-textarea>
                </v-flex>
              </v-layout>

              <v-layout row wrap>
                <v-flex md8 xs12>
                  <v-textarea
                    label="Alamat Orang Tua"
                    name="applicantParentAddress"
                    id="applicantParentAddress"
                    :value="getAddressApplicant(3)"
                    :rows="3"
                    readonly
                  ></v-textarea>
                </v-flex>
              </v-layout>

              <v-layout row wrap>
                <v-flex md4 xs6>
                  <v-text-field
                    label="HP"
                    name="applicantNumberMobile"
                    id="applicantNumberMobile"
                    :value="applicant.applicant.applicant.handphone"
                    readonly
                  ></v-text-field>
                </v-flex>
                <v-flex md4 xs6>
                  <v-text-field
                    label="Telephone"
                    name="applicantNumberHome"
                    id="applicantNumberHome"
                    :value="applicant.applicant.applicant.telephone"
                    readonly
                    :disabled="!applicant.applicant.applicant.telephone"
                  ></v-text-field>
                </v-flex>
              </v-layout>

              <v-layout row wrap>
                <v-flex md8 xs12>
                  <v-text-field
                    label="Alamat E-mail"
                    name="applicantEmail"
                    id="applicantEmail"
                    :value="applicant.applicant.applicant.emailAddress"
                    readonly
                  ></v-text-field>
                </v-flex>
              </v-layout>

              <v-layout row wrap>
                <v-flex md8 xs12>
                  <v-text-field
                    label="Agama"
                    name="applicantReligion"
                    id="applicantReligion"
                    :value="applicant.applicant.applicant.religion"
                    readonly
                  ></v-text-field>
                </v-flex>
              </v-layout>

              <v-layout row wrap>
                <v-flex md2 xs3>
                  <v-text-field
                    label="Berat Badan"
                    name="applicantWeight"
                    id="applicantWeight"
                    :value="applicant.applicant.applicant.weight"
                    readonly
                    :disabled="!applicant.applicant.applicant.weight"
                  ></v-text-field>
                </v-flex>
                <v-flex md2 xs3>
                  <v-text-field
                    label="Tinggi Badan"
                    name="applicantHeight"
                    id="applicantHeight"
                    :value="applicant.applicant.applicant.height"
                    readonly
                    :disabled="!applicant.applicant.applicant.height"
                  ></v-text-field>
                </v-flex>
                <v-flex md4 xs6>
                  <v-text-field
                    label="Kelainan Fisik"
                    name="applicantImpairment"
                    id="applicantImpairment"
                    :value="applicant.applicant.applicant.physicalImpairment"
                    readonly
                    :disabled="!applicant.applicant.applicant.physicalImpairment"
                  ></v-text-field>
                </v-flex>
              </v-layout>

              <v-layout row wrap>
                <v-flex md2 xs4>
                  <v-text-field
                    label="Jenis Identitas"
                    name="applicantIdentityType"
                    id="applicantIdentityType"
                    :value="applicant.applicant.applicant.idType"
                    readonly
                  ></v-text-field>
                </v-flex>
                <v-flex md4 xs8>
                  <v-text-field
                    label="Nomor Identitas"
                    name="applicantIdentityNumber"
                    id="applicantIdentityNumber"
                    :value="applicant.applicant.applicant.idNumber"
                    readonly
                  ></v-text-field>
                </v-flex>
                <v-flex md2 xs12>
                  <v-text-field
                    label="Golongan Darah"
                    name="applicantBloodType"
                    id="applicantBloodType"
                    :value="applicant.applicant.applicant.typeBlood"
                    readonly
                    :disabled="!applicant.applicant.applicant.typeBlood"
                  ></v-text-field>
                </v-flex>
              </v-layout>

              <v-layout row wrap>
                <v-flex md4 xs6>
                  <v-text-field
                    label="Kewarganegaraan"
                    name="applicantNationality"
                    id="applicantNationality"
                    :value="applicant.applicant.applicant.nationality"
                    readonly
                  ></v-text-field>
                </v-flex>
                <v-flex md4 xs6>
                  <v-text-field
                    label="Hobby / Minat"
                    name="applicantHobby"
                    id="applicantHobby"
                    :value="applicant.applicant.applicant.hobby"
                    readonly
                    :disabled="!applicant.applicant.applicant.hobby"
                  ></v-text-field>
                </v-flex>
              </v-layout>

              <v-layout row wrap>
                <v-flex md4 xs6>
                  <v-text-field
                    label="Status Pernikahan"
                    name="applicantMartialStatus"
                    id="applicantMartialStatus"
                    :value="applicant.applicant.applicant.martialStatus"
                    readonly
                  ></v-text-field>
                </v-flex>
                <v-flex md4 xs6>
                  <v-text-field
                    label="Tanggal Menikah / Berpisah"
                    name="applicantMartialDate"
                    id="applicantMartialDate"
                    :value="applicant.applicant.applicant.martialDate"
                    readonly
                    v-if="applicant.applicant.applicant.martialDate"
                  ></v-text-field>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-text>

          <v-card-title primary-title>
            <h1 class="headline">Data Keluarga</h1>
          </v-card-title>
          <v-card-text>
            <v-container grid-list-xs>
              <v-layout row wrap>
                <v-flex md8 xs12>
                  <h4>Kontak yang dapat dihubungi dalam keadaan darurat</h4>
                </v-flex>
                <v-flex md8 xs12>
                  <v-text-field
                    label="Nama Lengkap"
                    name="emergencyName"
                    id="emergencyName"
                    :value="applicant.applicantDetail.applicantEmergency.emergencyName"
                    readonly
                  ></v-text-field>
                </v-flex>
                <v-flex md8 xs12>
                  <v-text-field
                    label="Jenis Relasi"
                    name="emergencyRelationshipType"
                    id="emergencyRelationshipType"
                    :value="applicant.applicantDetail.applicantEmergency.relationshipType.relationshipName"
                    readonly
                  ></v-text-field>
                </v-flex>
                <v-flex md8 xs12>
                  <v-textarea
                    label="Alamat"
                    name="emergencyAddress"
                    id="emergencyAddress"
                    :value="getAddressDetail(4)"
                    :rows="3"
                    readonly
                  ></v-textarea>
                </v-flex>
              </v-layout>

              <v-layout
                row
                wrap
                mb-3
                v-if="applicant.applicantDetail.applicantFamily.applicantDependent"
              >
                <v-flex md8 xs12>
                  <h4>Data Tanggungan</h4>
                </v-flex>
                <v-flex md8 xs12>
                  <div class="table">
                    <v-table :data="applicant.applicantDetail.applicantFamily.applicantDependent">
                      <thead slot="head">
                        <th>Hubungan Keluarga</th>
                        <th>Nama</th>
                        <th>M / F</th>
                        <th>Tempat Lahir</th>
                        <th>Tanggal Lahir</th>
                        <th>Pendidikan</th>
                        <th>Pekerjaan</th>
                        <th>Keterangan</th>
                      </thead>
                      <tbody slot="body" slot-scope="{displayData}">
                        <tr v-for="row in displayData" :key="row.id">
                          <td>{{ row.relationshipType.relationshipName }}</td>
                          <td>{{ row.name }}</td>
                          <td>{{ row.sex }}</td>
                          <td>{{ row.placeBirth }}</td>
                          <td>{{ row.dateBirth }}</td>
                          <td>{{ row.educationType.educationName }}</td>
                          <td>{{ row.occupation }}</td>
                          <td>{{ row.description }}</td>
                        </tr>
                      </tbody>
                    </v-table>
                  </div>
                </v-flex>
              </v-layout>

              <v-layout row wrap mb-3>
                <v-flex md8 xs12>
                  <h4>Susunan Keluarga</h4>
                </v-flex>
                <v-flex md8 xs12>
                  <div class="table">
                    <v-table :data="applicant.applicantDetail.applicantFamily.applicantFamily">
                      <thead slot="head">
                        <th>Hubungan Keluarga</th>
                        <th>Nama</th>
                        <th>M / F</th>
                        <th>Tempat Lahir</th>
                        <th>Tanggal Lahir</th>
                        <th>Pendidikan</th>
                        <th>Pekerjaan</th>
                        <th>Keterangan</th>
                      </thead>
                      <tbody slot="body" slot-scope="{displayData}">
                        <tr v-for="row in displayData" :key="row.id">
                          <td>{{ row.relationshipType.relationshipName }}</td>
                          <td>{{ row.name }}</td>
                          <td>{{ row.sex }}</td>
                          <td>{{ row.placeBirth }}</td>
                          <td>{{ row.dateBirth }}</td>
                          <td>{{ row.educationType.educationName }}</td>
                          <td>{{ row.occupation }}</td>
                          <td>{{ row.description }}</td>
                        </tr>
                      </tbody>
                    </v-table>
                  </div>
                </v-flex>
              </v-layout>

              <v-layout row wrap mb-3>
                <v-flex md8 xs12>
                  <h4>Kontak yang Dapat Dihubungi</h4>
                </v-flex>
                <v-flex md8 xs12>
                  <div class="table">
                    <v-table :data="applicant.applicantDetail.applicantContact">
                      <thead slot="head">
                        <th>Jenis Hubungan</th>
                        <th>Nama</th>
                        <th>M / F</th>
                        <th>Alamat</th>
                        <th>No Telepon</th>
                        <th>Pekerjaan</th>
                        <th>Keterangan</th>
                      </thead>
                      <tbody slot="body" slot-scope="{displayData}">
                        <tr v-for="row in displayData" :key="row.id">
                          <td>{{ row.relationshipType.relationshipName }}</td>
                          <td>{{ row.name }}</td>
                          <td>{{ row.sex }}</td>
                          <td>{{ row.address.detailAddress }}</td>
                          <td>{{ row.contact }}</td>
                          <td>{{ row.occupation }}</td>
                          <td>{{ row.description }}</td>
                        </tr>
                      </tbody>
                    </v-table>
                  </div>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-text>

          <v-card-title primary-title>
            <h1 class="headline">Riwayat Pendidikan</h1>
          </v-card-title>
          <v-card-text>
            <v-container grid-list-xs>
              <v-layout row wrap mb-3>
                <v-flex md8 xs12>
                  <div class="table">
                    <v-table :data="applicant.applicantDetail.applicantEducation">
                      <thead slot="head">
                        <th>Jenjang Pendidikan</th>
                        <th>Institusi</th>
                        <th>Periode</th>
                        <th>Jurusan</th>
                        <th>Peringkat</th>
                        <th>Keterangan</th>
                      </thead>
                      <tbody slot="body" slot-scope="{displayData}">
                        <tr v-for="row in displayData" :key="row.id">
                          <td>{{ row.educationType.educationName }}</td>
                          <td>{{ row.institution }}</td>
                          <td>{{ row.startYear }} - {{ row.endYear }}</td>
                          <td>{{ row.major }}</td>
                          <td>{{ row.gpa }}</td>
                          <td>{{ row.description }}</td>
                        </tr>
                      </tbody>
                    </v-table>
                  </div>
                </v-flex>
              </v-layout>

              <v-layout row wrap>
                <v-flex md8 xs12>
                  <v-textarea
                    label="Alasan Memilih Jurusan"
                    name="applicantMajorDesc"
                    id="applicantMajorDesc"
                    :value="applicant.applicant.applicant.educationMajorDesc"
                    :rows="3"
                    readonly
                    :disabled="!applicant.applicant.applicant.educationMajorDesc"
                  ></v-textarea>
                </v-flex>
                <v-flex md8 xs12>
                  <v-textarea
                    label="Penjelasan Karya Ilmiah"
                    name="applicantMajorDesc"
                    id="applicantMajorDesc"
                    :value="applicant.applicant.applicant.educationPaperDesc"
                    :rows="3"
                    readonly
                    :disabled="!applicant.applicant.applicant.educationPaperDesc"
                  ></v-textarea>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-text>

          <v-card-title primary-title>
            <h1 class="headline">Data Profesionalitas</h1>
          </v-card-title>
          <v-card-text>
            <v-container grid-list-xs>
              <v-layout
                row
                wrap
                mb-3
                v-if="applicant.applicantExperience.applicantOrganization.length"
              >
                <v-flex md8 xs12>
                  <h4>Pengalaman Organisasi</h4>
                </v-flex>
                <v-flex md8 xs12>
                  <div class="table">
                    <v-table :data="applicant.applicantExperience.applicantOrganization">
                      <thead slot="head">
                        <th>Nama Organisasi</th>
                        <th>Jabatan</th>
                        <th>Periode</th>
                      </thead>
                      <tbody slot="body" slot-scope="{displayData}">
                        <tr v-for="row in displayData" :key="row.id">
                          <td>{{ row.organizationName }}</td>
                          <td>{{ row.organizationTitle }}</td>
                          <td>{{ row.startYear }} - {{ row.endYear }}</td>
                        </tr>
                      </tbody>
                    </v-table>
                  </div>
                </v-flex>
              </v-layout>

              <v-layout row wrap mb-3 v-if="applicant.applicantExperience.applicantTraining.length">
                <v-flex md8 xs12>
                  <h4>Pengalaman Kursus & Training</h4>
                </v-flex>
                <v-flex md8 xs12>
                  <div class="table">
                    <v-table :data="applicant.applicantExperience.applicantTraining">
                      <thead slot="head">
                        <th>Nama Acara</th>
                        <th>Tahun Diselenggarakan</th>
                        <th>Nama Penyelenggara</th>
                        <th>Peringkat</th>
                      </thead>
                      <tbody slot="body" slot-scope="{displayData}">
                        <tr v-for="row in displayData" :key="row.id">
                          <td>{{ row.trainingName }}</td>
                          <td>{{ row.year }}</td>
                          <td>{{ row.trainingInstitution }}</td>
                          <td>{{ row.trainingGrade }}</td>
                        </tr>
                      </tbody>
                    </v-table>
                  </div>
                </v-flex>
              </v-layout>

              <v-layout row wrap mb-3 v-if="applicant.applicantExperience.applicantLanguage.length">
                <v-flex md8 xs12>
                  <h4>Bahasa Asing yang Dikuasai</h4>
                </v-flex>
                <v-flex md8 xs12>
                  <div class="table">
                    <v-table :data="applicant.applicantExperience.applicantLanguage">
                      <thead slot="head">
                        <th>Bahasa</th>
                        <th>Mendengar</th>
                        <th>Membaca</th>
                        <th>Berbicara</th>
                        <th>Menulis</th>
                        <th>Score</th>
                      </thead>
                      <tbody slot="body" slot-scope="{displayData}">
                        <tr v-for="row in displayData" :key="row.id">
                          <td>{{ row.language }}</td>
                          <td>{{ row.listening }}</td>
                          <td>{{ row.reading }}</td>
                          <td>{{ row.speaking }}</td>
                          <td>{{ row.written }}</td>
                          <td>{{ row.toefl }}</td>
                        </tr>
                      </tbody>
                    </v-table>
                  </div>
                </v-flex>
              </v-layout>

              <v-layout row wrap>
                <v-flex md8 xs12>
                  <h4>Pengalaman Kerja</h4>
                </v-flex>
                <v-flex md8 xs12>
                  <v-data-iterator
                    :items="applicant.applicantExperience.applicantCompany"
                    hide-actions
                    row
                    wrap
                  >
                    <v-flex slot="item" slot-scope="props" xs12>
                      <v-card>
                        <v-card-title class="subheading font-weight-bold">{{ props.item.company }}</v-card-title>

                        <v-divider></v-divider>

                        <v-list dense>
                          <v-list-tile>
                            <v-list-tile-content>Periode:</v-list-tile-content>
                            <v-list-tile-content
                              class="align-end"
                            >{{ props.item.startYear }} - {{ props.item.endYear }}</v-list-tile-content>
                          </v-list-tile>

                          <v-list-tile>
                            <v-list-tile-content>Alamat Perusahaan:</v-list-tile-content>
                            <v-list-tile-content
                              class="align-end"
                            >{{ props.item.address.detailAddress }}</v-list-tile-content>
                          </v-list-tile>

                          <v-list-tile>
                            <v-list-tile-content>Kontak Perusahaan:</v-list-tile-content>
                            <v-list-tile-content class="align-end">{{ props.item.companyContact }}</v-list-tile-content>
                          </v-list-tile>

                          <v-list-tile>
                            <v-list-tile-content>Jabatan Awal:</v-list-tile-content>
                            <v-list-tile-content class="align-end">{{ props.item.firstTitleRole }}</v-list-tile-content>
                          </v-list-tile>

                          <v-list-tile>
                            <v-list-tile-content>Jabatan Akhir:</v-list-tile-content>
                            <v-list-tile-content class="align-end">{{ props.item.lastTitleRole }}</v-list-tile-content>
                          </v-list-tile>

                          <v-list-tile>
                            <v-list-tile-content>Nama Atasan Langsung:</v-list-tile-content>
                            <v-list-tile-content class="align-end">{{ props.item.directSupervisor }}</v-list-tile-content>
                          </v-list-tile>

                          <v-list-tile>
                            <v-list-tile-content>Alasan Berhenti:</v-list-tile-content>
                            <v-list-tile-content class="align-end">{{ props.item.resignReason }}</v-list-tile-content>
                          </v-list-tile>

                          <v-list-tile>
                            <v-list-tile-content>Gaji Terakhir:</v-list-tile-content>
                            <v-list-tile-content class="align-end">{{ props.item.lastSalary }}</v-list-tile-content>
                          </v-list-tile>
                        </v-list>
                      </v-card>
                    </v-flex>
                  </v-data-iterator>
                </v-flex>
              </v-layout>

              <v-layout row wrap>
                <v-flex md8 xs12>
                  <v-textarea
                    label="Deskripsi Pekerjaan Sebelumnya"
                    name="applicantMajorDesc"
                    id="applicantMajorDesc"
                    :value="applicant.applicant.applicant.experienceJobDesc"
                    :rows="3"
                    readonly
                    :disabled="!applicant.applicant.applicant.experienceJobDesc"
                  ></v-textarea>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-text>

          <div class="print">
            <v-card-text>
              <v-container grid-list-xs>
                <v-layout row wrap>
                  <v-flex md-1 offset-md7 xs1 offset-xs11>
                    <v-btn dark large color="red darken-2" @click="print">
                      <v-icon dark>print</v-icon>
                    </v-btn>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card-text>
          </div>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { Printd } from 'printd'

export default {
  computed: {
    applicant () {
      return this.$store.state.applicant.applicant
    }
  },
  methods: {
    addressFull (detail, kelurahan, kecamatan, kota, propinsi, pos) {
      return detail + "\n" + kelurahan + ", " + kecamatan + ", " + kota + "\n" + propinsi + " " + pos
    },
    getAddressApplicant (id) {
      var fullAddress = null
      this.applicant.applicant.applicantAddress.forEach(address => {
        if (address.addressType.addressTypeId == id) {
          fullAddress = this.addressFull(address.detailAddress, address.kelurahan.name, address.kecamatan.name, address.city.name, address.province.name, address.postalCode)
        }
      });
      return fullAddress;
    },
    getAddressDetail (id) {
      var fullAddress = null
      this.applicant.applicantDetail.applicantAddress.forEach(address => {
        if (address.addressType.addressTypeId == id) {
          if (address.addressType.addressTypeId == 5) {
            fullAddress = address.detailAddress
          } else {
            fullAddress = this.addressFull(address.detailAddress, address.kelurahan.name, address.kecamatan.name, address.city.name, address.province.name, address.postalCode)
          }
        }
      });
      return fullAddress;
    },
    print () {
      const d = new Printd()
      const styles = [
        'https://cdn.jsdelivr.net/npm/vuetify/dist/vuetify.min.css',
        `.print { visibility: hidden }
        table { border-collapse: collapse; border-spacing: 0; width: 100%; border: 1px solid #ddd; }
        thead { border: 1px solid #ddd; }
        th, td { text-align: left; padding: 5px; padding-right: 8px; }
        th { padding: 20px 8px; background-color: #000000; color: #ffffff; }
        tr:nth-child(even) { background-color: #f2f2f2; }`
      ]

      const scripts = [
        'document.body.style.zoom=1.2;this.blur();'
      ]

      d.print(this.$el, styles, scripts);
    }
  },
  created () {
    this.$store.dispatch('getApplicant', this.$route.params.applicantId)
  },
  beforeDestroy () {
    this.$store.dispatch('clearApplicant')
  }
}
</script>

<style lang="scss" scoped>
.table {
  overflow-x: auto;
  table {
    border-collapse: collapse;
    border-spacing: 0;
    width: 100%;
    border: 1px solid #ddd;
  }

  thead {
    border: 1px solid #ddd;
  }

  th,
  td {
    text-align: left;
    padding: 5px;
    padding-right: 8px;
  }

  th {
    padding: 20px 8px;
    background-color: #000;
    color: #fff;
  }

  tr:nth-child(even) {
    background-color: #f2f2f2;
  }
}

.dragon {
  color: red;
}
</style>
