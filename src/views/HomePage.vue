<template>
  <div>
    <AppBar />
    <v-container>
      <v-row>
        <v-col>
          <v-data-table :headers="headers" :items="items" hide-default-footer>
            <template v-slot:[`item.icon`]="{ item }">
              <img :src="item.icon" style="width: 50px; height: 50px" />
            </template>
          </v-data-table>
        </v-col>
      </v-row>
    </v-container>
    <v-btn>aaaa</v-btn>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import axios from "axios";
import AppBar from "@/components/commons/AppBar.vue";

interface Item {
  name: string;
  icon: string;
  rarity: string;
}

export default Vue.extend({
  name: "HomePage",
  components: {
    AppBar,
  },
  mounted() {
    // const data = {
    //   token: "",
    // };
    const useAxios = axios.create({
      auth: {
        username: "1",
        password: "pass",
      },
      headers: {
        "x-token": "40d3635f-8593-11ec-8276-0242ac160002",
      },
    });
    useAxios.get("/character/list").then((res) => {
      this.makeTableItems(res.data["user_character"]);
    });
  },
  data() {
    return {
      headers: [
        {
          text: "名前",
          value: "name",
        },
        {
          text: "アイコン",
          value: "icon",
        },
        {
          text: "レア度",
          value: "rarity",
        },
      ],
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
