<template>
  <v-menu offset-y>
    <template v-slot:activator="{ on, attrs }">
      <v-btn icon v-bind="attrs" v-on="on">
        <v-icon>mdi-wrench</v-icon>
      </v-btn>
    </template>

    <v-list>
      <v-list-item v-for="(item, index) in items" :key="index">
        <v-list-item-title @click="pushItem(index)">{{
          item.title
        }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "SettingMenu",
  data() {
    return {
      items: [{ title: "名前変更" }, { title: "ログアウト" }],
    };
  },
  methods: {
    pushItem(index: number): void {
      switch (index) {
        case 0:
          // this.$router.push({name: "EditName"})
          break;
        case 1:
          this.$router.push({ name: "Login" });
          this.$store.commit("initUser");
          break;
      }
    },
  },
});
</script>
