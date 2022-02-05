<template>
  <v-app-bar app color="primary" dark>
    <div class="d-flex align-center" @click="moveHome">
      <v-img
        alt="Vuetify Logo"
        class="shrink mr-2"
        contain
        src="@/assets/slime.png"
        transition="scale-transition"
        width="40"
      />
      <h2>Gopher Quest</h2>
    </div>

    <v-spacer />

    <h1 style="margin-right: 56px">{{ userName }}</h1>

    <v-spacer />

    <div v-if="!isLoginPage">
      <v-btn icon @click="moveGacha">
        <v-icon>mdi-pokeball</v-icon>
      </v-btn>
      <SettingMenu />
    </div>
  </v-app-bar>
</template>

<script lang="ts">
import Vue from "vue";
import SettingMenu from "@/components/commons/SettingMenu.vue";

export default Vue.extend({
  name: "AppBar",
  components: {
    SettingMenu,
  },
  computed: {
    userName(): string {
      return this.$store.state.name;
    },
    isLoginPage(): boolean {
      return this.$router.currentRoute.name === "Login";
    },
  },
  methods: {
    moveGacha(): void {
      if (this.$router.currentRoute.name !== "Gacha")
        this.$router.push({ name: "Gacha" });
    },
    moveHome(): void {
      if (
        this.$router.currentRoute.name !== "Home" &&
        this.$router.currentRoute.name !== "Login"
      )
        this.$router.push({ name: "Home" });
    },
  },
});
</script>
