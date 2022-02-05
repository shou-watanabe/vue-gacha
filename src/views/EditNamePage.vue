<template>
  <div>
    <AppBar />
    <v-container>
      <v-row justify="center" class="align-center" style="height: 450px">
        <BaseForm ref="form">
          <template #inputs>
            <h1>変更後の名前を入力してください</h1>
            <v-text-field
              v-model="name"
              :counter="10"
              :rules="nameRules"
              label="Name"
              required
            />
          </template>
          <template #submits>
            <v-btn depressed color="primary" @click="createUser">決定</v-btn>
          </template>
        </BaseForm>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import axios from "axios";
import BaseForm from "@/components/bases/BaseForm.vue";
import AppBar from "@/components/commons/AppBar.vue";

export default Vue.extend({
  name: "EditNamePage",
  components: {
    BaseForm,
    AppBar,
  },
  data: () => ({
    name: "",
    nameRules: [
      (v: string) => !!v || "Name is required",
      (v: string) =>
        (v && v.length <= 10) || "Name must be less than 10 characters",
    ],
  }),
  computed: {
    userToken(): string {
      return this.$store.state.token;
    },
  },
  methods: {
    createUser(): void {
      if (this.isValid()) {
        const useAxios = axios.create({
          auth: {
            username: "1",
            password: "pass",
          },
          headers: {
            "x-token": this.userToken,
          },
        });
        this.$store.commit("setUserName", this.name);
        try {
          useAxios.put("/user/update", { name: this.name }).then((response) => {
            this.$router.push({ name: "Home" });
            this.$store.commit("setUserToken", response.data.token as string);
          });
        } catch (error) {
          alert(error);
        }
        this.resetForm();
        this.resetValidation();
      }
    },
    isValid(): boolean {
      return (this.$refs.form as InstanceType<typeof BaseForm>).valid;
    },
    resetForm(): void {
      (this.$refs.form as InstanceType<typeof BaseForm>).resetForm();
    },
    resetValidation(): void {
      (this.$refs.form as InstanceType<typeof BaseForm>).resetValidation();
    },
  },
});
</script>
