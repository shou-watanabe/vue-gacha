<template>
  <div>
    <v-container>
      <v-row justify="center" class="align-center" style="height: 450px">
        <BaseForm ref="form">
          <template #inputs>
            <h1>名前を入力してください</h1>
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

export default Vue.extend({
  name: "LoginPage",
  components: {
    BaseForm,
  },
  data: () => ({
    name: "",
    nameRules: [
      (v: string) => !!v || "Name is required",
      (v: string) =>
        (v && v.length <= 10) || "Name must be less than 10 characters",
    ],
  }),
  methods: {
    createUser(): void {
      if (this.isValid()) {
        console.log("Hello");
        this.resetForm();
        this.resetValidation();
        const data = {
          name: this.name,
          auth: { username: "1", password: "pass" },
        };
        const useAxios = axios.create({
          auth: {
            username: "1",
            password: "pass",
          },
        });
        try {
          useAxios
            .post("/user/create", data)
            .then((response) => console.log(response.data));
        } catch (error) {
          alert(error);
        }
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
