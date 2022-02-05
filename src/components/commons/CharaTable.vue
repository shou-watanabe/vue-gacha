<template>
  <v-container>
    <v-data-table
      :headers="headers"
      :items="items"
      hide-default-footer
      :style="{ width: '400px' }"
    >
      <template v-slot:[`item.icon`]="{ item }">
        <img :src="item.icon" style="width: 50px; height: 50px" />
      </template>
    </v-data-table>
  </v-container>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import { Item } from "@/types/item";

export default Vue.extend({
  name: "CharaTable",
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
    };
  },
  props: {
    items: {
      type: Array as PropType<Item[]>,
      default: (): Item[] => [],
      required: true,
    },
  },
});
</script>
