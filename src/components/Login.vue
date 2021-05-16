<template>
  <v-container style="width: 30%" fill-height fluid>
    <v-row align="center" justify="center">
      <v-col align="center">
        <h1>Login</h1>
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

          <v-btn
            :disabled="!valid"
            color="success"
            class="mr-4"
            @click="validate"
          >
            Sign in
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
    snackbar: false,
    snackbar_text: "Succesfull login!",
  }),

  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.post("/login", {
          username: this.name,
          password: this.password,
        });
        this.reset();
        if (this.response === "Ok"){
          this.snackbar_text = "Succesfull login!"
        } else {
          this.snackbar_text = "Login error!"
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

