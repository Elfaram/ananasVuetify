<template>
  <VNavigationDrawer
    style="height: 6vh"
    v-model="drawer"
    :railWidth="2000"
    width="35vw"
    :rail="!rail"
    @click="rail = false"
    location="right"
    class="bg-primary"
    permanent
  >
    <VRow>
      <div class="ma-2 pb-2 me-auto">
        <BChevronBtn
          @click.stop="rail = !rail"
          :color="color"
          :icon="railIcon"
        />
      </div>

      <div v-if="!rail" class="pb-2 me-auto">
        <VList>
          <VListItem
            v-for="(item, i) in items"
            :key="i"
            :title="item.title"
            :value="item.value"
          >
          </VListItem>
        </VList>
      </div>
      <div class="pb-2">
        <BHome :color="color" @click="$router.push({ name: 'acceuil' })" />
      </div>
    </VRow>
  </VNavigationDrawer>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// Components
import BChevronBtn from "@/components/button/BChevronBtn.vue";
import BHome from "./button/BHome.vue";

export default defineComponent({
  name: "AppBar",

  components: { BChevronBtn, BHome },

  data() {
    return {
      drawer: true,
      rail: true,
      color: "secondary",
      items: [{ icon: "mdi-phone", title: "Appel 1/12", value: "call" }],
    };
  },
  computed: {
    railIcon() {
      return this.rail ? "mdi-chevron-left" : "mdi-chevron-right";
    },
  },
});
</script>
