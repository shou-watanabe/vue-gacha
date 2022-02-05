<template>
  <div>
    <AppBar />
    <v-container>
      <v-row justify="center" class="align-center">
        <v-text-field
          label="回数"
          :style="{ maxWidth: '200px' }"
          v-model="times"
          type="number"
          suffix="回"
        />
        <v-btn @click="gachaDraw">ガチャる</v-btn>
      </v-row>
      <v-row justify="center" class="align-center">
        <div v-if="items.length !== 0">
          <CharaTable :items="items" />
        </div>
      </v-row>
      <v-row justify="center" class="align-center">
        <v-btn @click="moveHome">ホームに戻る</v-btn>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import axios from "axios";
import AppBar from "@/components/commons/AppBar.vue";
import CharaTable from "@/components/commons/CharaTable.vue";
import { Item } from "@/types/item";

export default Vue.extend({
  name: "GachaPage",
  components: {
    AppBar,
    CharaTable,
  },
  computed: {
    userToken(): string {
      return this.$store.state.token;
    },
  },
  data() {
    return {
      items: [] as Array<Item>,
      times: "",
    };
  },
  methods: {
    gachaDraw(): void {
      const useAxios = axios.create({
        auth: {
          username: "1",
          password: "pass",
        },
        headers: {
          "x-token": this.userToken,
        },
      });
      useAxios
        .post("/gacha/draw", { times: parseInt(this.times) })
        .then((res) => {
          if (res.data["results"] != null) {
            this.makeTableItems(res.data["results"]);
          }
        });
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    makeTableItems(res: Array<any>): void {
      this.items = res.map((item) => {
        return {
          name: item["name"],
          icon: item["icon_url"],
          rarity: item["rarity"],
        } as Item;
      });
    },
    moveHome(): void {
      this.$router.push({ name: "Home" });
    },
  },
});
</script>
