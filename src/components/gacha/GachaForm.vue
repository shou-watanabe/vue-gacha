<template>
  <BaseForm ref="form">
    <template #inputs>
      <v-text-field
        label="回数"
        :style="{ maxWidth: '200px' }"
        v-model="times"
        type="number"
        suffix="回"
      />
    </template>
    <template #submits>
      <v-btn color="primary" @click="gachaDraw">ガチャる</v-btn>
    </template>
  </BaseForm>
</template>

<script lang="ts">
import Vue from "vue";
import BaseForm from "@/components/bases/BaseForm.vue";

export default Vue.extend({
  name: "GachaForm",
  components: {
    BaseForm,
  },
  data: () => ({
    times: null as string | null,
    timesRules: [(v: string) => !!v || "times is required"],
  }),
  methods: {
    gachaDraw(): void {
      if (this.isValid() && !!this.times)
        this.$emit("emit-gacha-draw", parseInt(this.times));
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
