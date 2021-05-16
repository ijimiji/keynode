<template>
  <v-container style="width: 40%" fill-height fluid>
    <v-row align="center" justify="center">
      <v-col align="center">
        <h1>Registration</h1>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field
            v-model="name"
            :counter="10"
            :rules="nameRules"
            label="Name"
            required
          ></v-text-field>

          <v-text-field
            v-model="password"
            :rules="passwordRules"
            label="Password"
            type="password"
            required
          ></v-text-field>

          <v-select
            v-model="select"
            :items="genders"
            :rules="[(v) => !!v || 'Gender is required']"
            label="Gender"
            required
          ></v-select>

          <v-checkbox
            v-model="checkbox"
            :rules="[(v) => !!v || 'You must agree to continue!']"
            label="Do you accept our privacy policy?"
            required
          ></v-checkbox>

          <v-btn
            :disabled="!valid"
            color="success"
            class="mr-4"
            @click="validate"
          >
            Register
          </v-btn>

          <v-btn color="error" class="mr-4" @click="reset"> Reset Form </v-btn>

        </v-form>
        <v-snackbar v-model="snackbar" :timeout="2000">
          {{snackbar_text}}
          <template v-slot:action="{ attrs }">
            <v-btn color="blue" text v-bind="attrs" @click="snackbar = false">
              Close
            </v-btn>
          </template>
        </v-snackbar>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import apiConsumer from "../mixins/apiConsumer";
export default {
  mixins: [apiConsumer],
  data: () => ({
    valid: false,
    name: "",
    nameRules: [
      (v) => !!v || "Name is required",
      (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
    ],
    password: "",
    passwordRules: [
      (v) => !!v || "Password is required",
      (v) => /.{8,}$/.test(v) || "Password is too weak!",
    ],
    select: null,
    genders: [
      "Agender",
      "Androgyne",
      "Androgynous",
      "Bigender",
      "Cis",
      "Cisgender",
      "Cis Female",
      "Cis Male",
      "Cis Man",
      "Cis Woman",
      "Cisgender Female",
      "Cisgender Male",
      "Cisgender Man",
      "Cisgender Woman",
      "Female",
      "FTM",
      "Gender Fluid",
      "Gender Nonconforming",
      "Gender Questioning",
      "Gender Variant",
      "Genderqueer",
      "Intersex",
      "Male",
      "MTF",
      "Neither",
      "Neutrois",
      "Non-binary",
      "Other",
      "Pangender",
      "Trans",
      "Trans Female",
      "Trans Male",
      "Trans Man",
      "Trans Person",
      "Trans Woman",
      "Transfeminine",
      "Transgender",
      "Transgender Female",
      "Transgender Male",
      "Transgender Man",
      "Transgender Person",
      "Transgender Woman",
      "Transmasculine",
      "Transsexual",
      "Transsexual Female",
      "Transsexual Male",
      "Transsexual Man",
      "Transsexual Person",
      "Transsexual Woman",
      "Two-Spirit",
    ],
    checkbox: false,
    snackbar: false,
    snackbar_text: "Succesfull registration"

  }),

  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.post("/register", {
          username: this.name,
          password: this.password,
        });
        this.reset();
        if (this.response === "Ok"){
          this.snackbar_text = "Succesfull registration!"
        } else {
          this.snackbar_text = "Registration error"
        }
        this.snackbar = true;
      }
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
  },
};
</script>
