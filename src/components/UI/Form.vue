<script>
import CommonMethods from "@/mixins/CommonMethods";

export default {
  name: "Form",
  data() {
    return {
      name: "",
      tel: "",
      comment: "",
    };
  },
  mixins: [CommonMethods],
};
</script>

<template>
  <form id="form">
    <div class="form-input-group">
      <label for="name"
        ><span class="asterisk">*</span> {{ localize.fName }}</label
      >
      <input v-model="name" type="text" name="name" />
    </div>

    <div class="form-input-group">
      <label for="tel"
        ><span class="asterisk">*</span>{{ localize.fTel }}</label
      >
      <input v-model="tel" type="tel" name="tel" />
    </div>

    <div class="form-input-group">
      <label for="comment">{{ localize.fComment }}</label>
      <textarea v-model="comment" name="comment" rows="3" />
    </div>
  </form>
</template>

<style lang="scss" scoped>
form {
  display: grid;
  grid-gap: 1.6em;
  margin-bottom: 25px;

  textarea,
  input {
    border: 1px solid var(--lightgrey-color);
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
    color: var(--accent-color2);
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