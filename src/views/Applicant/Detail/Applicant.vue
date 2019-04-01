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
            </v-container>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
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
          fullAddress = this.addressFull(address.detailAddress, address.kelurahan.name, address.kecamatan.name, address.city.name, address.province.name, address.postalCode)
        }
      });
      return fullAddress;
    }
  },
  created () {
    this.$store.dispatch('getApplicant', this.$route.params.applicantId)
  },
  beforeDestroy(){
    this.$store.dispatch('clearApplicant')
  }
}
</script>
