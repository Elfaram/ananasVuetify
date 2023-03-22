<template>
  <AppBar />
  <VCard height="auto">
    <ProfilInfoCard ref="profilInfoCard" />
    <VForm ref="form" lazy-validation>
      <VCol>
        <p>Notes</p>
        <VDivider />
        <br />
        <div class="ma-4">
          <VTextarea
            v-model="note"
            clearable
            label="Take some notes"
            variant="outlined"
            color="grey"
            :rules="[rules.required]"
          />
        </div>
      </VCol>
      <VCol>
        <p>Résultat de l'appel</p>
        <VDivider />
        <br />
        <div class="ma-4">
          <VSelect
            variant="outlined"
            color="grey"
            clearable
            v-model="callResult"
            :items="callResults"
            label="Sélectionnez..."
            :rules="[rules.required]"
          />
        </div>
      </VCol>
      <VCol align="center" class="pr-12">
        <BSave @click="veriFormAndNext" />
      </VCol>
    </VForm>
  </VCard>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// Components
import BSave from "@/components/button/BSave.vue";
import ProfilInfoCard from "@/components/ProfilInfoCard.vue";
import AppBar from "@/components/AppBar.vue";

// Const
import rules from "@/const/rules";

export default defineComponent({
  name: "ContactView",
  components: { BSave, ProfilInfoCard, AppBar },

  data() {
    return {
      rules,
      callResult: "",
      note: "",
      callResults: ["Engagé", "Répondeur", "RDV pris", "A rappeler plus tard"],
      navdraw: true,
    };
  },

  methods: {
    async veriFormAndNext() {
      const isFormValid = await (this.$refs.form as HTMLFormElement).validate();

      if (isFormValid.valid) {
        this.saveAndNext();
        this.resetForm();
      }
    },

    saveAndNext() {
      const data = {
        note: this.note,
        callResult: this.callResult,
      };
      //envoi de la data
      console.log(data);
      this.$refs.profilInfoCard.nextProfil();
      this.resetForm();
    },
    resetForm: function () {
      this.note = "Take some notes";
      this.callResult = "Sélectionnez...";
    },
  },
});
</script>
