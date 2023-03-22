<template>
  <VCard class="bg-primary text-center d-flex flex-column">
    <div>
      <!-- refact VBtn -> component reutilisable -->
      <VBtn
        v-for="icon in icons"
        :key="icon"
        class="mx-4"
        :icon="icon"
        variant="text"
        size="x-large"
      ></VBtn>
    </div>
    <VDivider thickness="3px" />

    <div class="mx-4">
      <p class="font-weight-thin mt-4">
        Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet.
        Mauris cursus commodo interdum. Lorem ipsum dolor, sit amet consectetur
        adipisicing elit. Totam distinctio obcaecati veniam saepe repudiandae
        rerum autem vitae, nemo natus nostrum, illum doloremque corrupti quod!
        Molestias recusandae possimus tempore natus dignissimos! Deleniti
        consequuntur aut iusto recusandae eaque doloribus numquam perspiciatis
        perferendis nobis, corrupti veritatis doloremque accusantium molestiae
        deserunt! Cumque quaerat expedita laborum. Praesentium accusamus
      </p>
    </div>
    <br />
    <VDivider thickness="3px" />
    <div class="mt-2">
      <VBtn
        v-for="icon in iconsTech"
        :key="icon"
        class="mx-4"
        :icon="icon"
        variant="text"
        size="x-large"
      ></VBtn>
    </div>
  </VCard>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "InformationFooter",

  data() {
    return {
      icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
      iconsTech: ["mdi-vuejs", "mdi-vuetify"],
    };
  },
});
</script>
