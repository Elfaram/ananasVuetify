const rules = {
  required: (value: number) => !!value || "* Champs Obligatoire ",
  requiredEmailValid: (v) =>
    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
    "* L'adresse n'est pas valide",
};

export default rules;
