<script>
import { translationsArray } from "@/language/Form.js";

export default {
  name: "Form",
  data() {
    return {
      name: "",
      tel: "",
      comment: "",
      translation: translationsArray,
    };
  },
  props: ["currentLang"],
};
</script>

<template>
  <form id="form">
    <div class="form-input-group">
      <label for="name"
        ><span class="asterisk">*</span>
        {{ this.translation[this.currentLang].fName }}</label
      >
      <input v-model="name" type="text" name="name" />
    </div>

    <div class="form-input-group">
      <label for="tel"
        ><span class="asterisk">*</span
        >{{ this.translation[this.currentLang].fTel }}</label
      >
      <input v-model="tel" type="tel" name="tel" />
    </div>

    <div class="form-input-group">
      <label for="comment">{{
        this.translation[this.currentLang].fComment
      }}</label>
      <textarea v-model="comment" name="comment" rows="3" />
    </div>
  </form>
</template>

<style lang="scss" scoped>
* {
  --input-bg: #fff;
}

form {
  display: grid;
  grid-gap: 1.6em;
  margin-bottom: 25px;

  textarea,
  input {
    background-color: var(--input-bg);
    border: none;
    border-radius: 3px;
    padding: 0.8em;
    font-size: 18px;
  }

  textarea {
    &:focus,
    &:hover {
      outline: none;
    }
  }

  input {
    &:focus,
    &:hover {
      outline: none;
    }
  }
  .asterisk {
    color: rgb(92, 92, 92);
  }
  .form-input-group {
    display: grid;
  }
}

textarea,
input,
button {
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
}
</style>