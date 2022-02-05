<template>
  <div>
    <AppBar />
    <center class="mt-5">
      <h1>所持しているキャラ</h1>
      <CharaTable :items="items" />
    </center>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import axios from "axios";
import AppBar from "@/components/commons/AppBar.vue";
import CharaTable from "@/components/commons/CharaTable.vue";
import { Item } from "@/types/item";

export default Vue.extend({
  name: "HomePage",
  components: {
    AppBar,
    CharaTable,
  },
  computed: {
    userToken(): string {
      return this.$store.state.token;
    },
  },
  mounted() {
    const useAxios = axios.create({
      auth: {
        username: "1",
        password: "pass",
      },
      headers: {
        "x-token": this.userToken,
      },
    });
    useAxios.get("/character/list").then((res) => {
      if (res.data["user_character"] != null) {
        this.makeTableItems(res.data["user_character"]);
      }
    });
  },
  data() {
    return {
      items: [] as Array<Item>,
    };
  },
  methods: {
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
  },
});
</script>
