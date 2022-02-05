<template>
  <v-app-bar app color="primary" dark>
    <div class="d-flex align-center">
      <v-img
        alt="Vuetify Logo"
        class="shrink mr-2"
        contain
        src="@/assets/slime.png"
        transition="scale-transition"
        width="40"
      />
      <div>Gopher Quest</div>
    </div>

    <v-spacer />

    <div style="margin-right: 56px">{{ userName }}</div>

    <v-spacer />

    <v-btn icon @click="moveGacha">
      <v-icon>mdi-pokeball</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>mdi-wrench</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "AppBar",
  computed: {
    userName(): string {
      return this.$store.state.name;
    },
  },
  methods: {
    moveGacha(): void {
      if (this.$router.currentRoute.name !== "Gacha")
        this.$router.push({ name: "Gacha" });
    },
  },
});
</script>
