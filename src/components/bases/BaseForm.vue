<template>
  <v-form ref="form" v-model="valid" @submit.prevent>
    <slot name="inputs" />
    <slot name="submits" />
  </v-form>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "BaseForm",
  data() {
    return {
      valid: true,
    };
  },
  methods: {
    resetValidation(): void {
      (
        this.$refs.form as Vue & {
          resetValidation: () => void;
        }
      ).resetValidation();
    },
    resetForm(): void {
      (this.$refs.form as Vue & { reset: () => void }).reset();
    },
    validate(): boolean {
      return (this.$refs.form as Vue & { validate: () => boolean }).validate();
    },
  },
});
</script>
