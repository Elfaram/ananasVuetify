<template>
  <div v-if="profilNext" align="center" class="d-flex mb-6">
    <VRow>
      <VCol cols="2" class="ma-2 pa-2 me-auto">
        <VBtn
          :color="color"
          icon="mdi-chevron-left"
          variant="text"
          @click="$emit('previousBtn')"
        />
        <p>Previous</p>
      </VCol>
      <VCol cols="2" class="ma-2 pa-2">
        <VBtn
          :color="color"
          icon="mdi-chevron-right"
          variant="text"
          @click="$emit('nextBtn')"
        />
        <p>Next</p>
      </VCol>
    </VRow>
  </div>
  <div v-else>
    <VBtn
      :color="color"
      :icon="icon"
      variant="text"
      @click="$emit('clickClose')"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BChevronBtn",
  props: {
    color: String,
    icon: String,
    profilNext: Boolean,
    profils: Array,
    profil: Object,
  },
  emits: ["previousBtn", "nextBtn", "clickClose"],
});
</script>
