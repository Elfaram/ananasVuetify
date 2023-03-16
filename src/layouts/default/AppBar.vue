<template>
  <VLayout>
    <VNavigationDrawer
      v-model="drawer"
      :rail="rail"
      permanent
      @click="rail = false"
      location="right"
      class="bg-indigo"
    >
      <BChevronBtn @clickClose="toggleRail" :color="color" :icon="railIcon" />
      <VDivider />

      <VList>
        <VListItem
          v-for="(item, i) in items"
          :key="i"
          :prepend-icon="item.icon"
          :title="item.title"
          :value="item.value"
        ></VListItem>
      </VList>
    </VNavigationDrawer>
    <ContactView />
  </VLayout>
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
      color: "grey",
      items: [{ icon: "mdi-phone", title: "Appel 1/12", value: "call" }],
    };
  },
  computed: {
    railIcon() {
      return this.rail ? "mdi-chevron-left" : "mdi-chevron-right";
    },
  },

  methods: {
    toggleRail() {
      this.rail = !this.rail;
      this.$emit("clickClose");
    },
  },
});
</script>
