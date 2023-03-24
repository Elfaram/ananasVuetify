<template>
  <VParallax src="../assets/paperWall.jpg" height="auto">
    <VImg src="../assets/logo.png" height="80px" class="mt-4" />
    <div>
      <div class="d-flex flex-column align-center text-white fill-height">
        <h1 class="text-h2 font-weight-thin mt-4">Ananas Corp</h1>
        <h4 class="mt-2">Simple et Rapide</h4>
        <p class="text-center text-body-3 pt-4 mx-10">
          Gagnez du temps dans votre prospection. Sourcer vos contacts et les
          engager grâce à l'exploitation intelligente des données et gérer
          efficacement vos prospections. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Corrupti nisi numquam laboriosam eos nulla provident
          nemo laudantium nostrum minima!
        </p>
        <br />
        <VCard width="40vw" class="pt-12">
          <h5 class="pl-6">Connexion à votre compte :</h5>
          <VCardText>
            <VContainer>
              <VForm @submit.prevent ref="form" lazy-validation>
                <VTextField
                  v-model="mail"
                  label="E-mail"
                  variant="outlined"
                  clearable
                  :rules="[rules.requiredEmailValid]"
                  append-icon="mdi-at"
                />

                <VTextField
                  v-model="password"
                  label="Mot de passe"
                  :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                  :type="show1 ? 'text' : 'password'"
                  variant="outlined"
                  @click:append="show1 = !show1"
                  clearable
                  :rules="[rules.required]"
                />
                <VCol align="center">
                  <VBtn
                    type="submit"
                    class="mt-2"
                    size="small"
                    @click="veriForm"
                    >Se connecter</VBtn
                  >
                </VCol>
              </VForm>
            </VContainer>
          </VCardText>
        </VCard>
      </div>
    </div>
  </VParallax>
  <InformationFooter />
</template>

<script lang="ts">
import { defineComponent } from "vue";

// Components
import InformationFooter from "@/components/InformationFooter.vue";

// Const
import rules from "@/const/rules";

export default defineComponent({
  name: "Accueil",
  components: {
    InformationFooter,
  },

  data() {
    return {
      rules,
      password: "",
      mail: "",
      show1: false,
    };
  },

  methods: {
    async veriForm() {
      const isFormValid = await (this.$refs.form as HTMLFormElement).validate();

      if (isFormValid.valid) {
        this.$router.push({ name: "contacts" });
      }
    },
    redirectTo(url: string) {
      this.$router.push(url);
    },
  },
});
</script>
