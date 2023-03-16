<template>
  <BChevronBtn
    :profilNext="profilNext"
    :profils="profils"
    :profil="profil"
    @previousBtn="previousProfil"
    @nextBtn="nextProfil"
  />
  <div>
    <div class="pl-16 ml-12">
      <VRow justify="center">
        <VAvatar size="98px">
          <VImg :src="profil.picture" alt="Profil picture"
        /></VAvatar>
        <VCol cols="3">
          <h4>{{ profil.first_name }} {{ profil.last_name }}</h4>
          <p>{{ profil.role }} | {{ profil.company_name }}</p>
          <VIcon icon="mdi-phone" class="pa-4" />
          <span> {{ profil.phone }}</span>
        </VCol>
      </VRow>
    </div>
    <div class="ma-2">
      <VRow class="pa-4 mt-8">
        <VDivider />
        <VCol cols="4">
          <VIcon icon="mdi-phone" />
          <span> Step : {{ profil.step }} - {{ profil.campaign }}</span>
        </VCol>
        <VDivider />
      </VRow>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import BChevronBtn from "@/components/button/BChevronBtn.vue";

export default defineComponent({
  name: "ProfilInfoCard",
  components: { BChevronBtn },

  data() {
    return {
      profilNext: true,
      profils: [],
      profil: {},
      profilIndex: 0,
    };
  },

  async mounted() {
    await this.fetchData();
    this.profil = this.profils[this.profilIndex];
  },

  methods: {
    async fetchData() {
      const response = await fetch("/src/assets/data.json");
      const data = await response.json();
      this.profils = data.profils;
      this.$emit("update:profil-loaded", {
        campaign: this.profil.campaign,
        step: this.profil.step,
      });
    },

    nextProfil() {
      this.profilIndex++;
      if (this.profilIndex >= this.profils.length) {
        this.profilIndex = 0;
      }
      this.profil = this.profils[this.profilIndex];
    },

    previousProfil() {
      this.profilIndex--;
      if (this.profilIndex < 0) {
        this.profilIndex = this.profils.length - 1;
      }
      this.profil = this.profils[this.profilIndex];
    },
  },
});
</script>
