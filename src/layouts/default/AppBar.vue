<template>
  <VCard>
    <VNavigationDrawer
      style="height: 6vh"
      v-model="drawer"
      :railWidth="2000"
      width="35vw"
      :rail="!rail"
      @click="rail = false"
      location="right"
      class="bg-primary"
    >
      <VRow justify="start">
        <div style="display: flex">
          <div class="pt-2">
            <BChevronBtn
              @click.stop="rail = !rail"
              :color="color"
              :icon="railIcon"
            />
          </div>

          <div v-if="!rail" class="pt-1">
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
        </div>
      </VRow>
    </VNavigationDrawer>
    <ContactView />
  </VCard>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BChevronBtn from "@/components/button/BChevronBtn.vue";
import ContactView from "@/views/ContactView.vue";
export default defineComponent({
  name: "AppBar",

  components: { BChevronBtn, ContactView },

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
