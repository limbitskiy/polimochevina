<script>
import { translationsArray } from "@/language/FooterBox.js";

export default {
  data() {
    return {
      translation: translationsArray,
    };
  },
  props: ["currentLang"],
};
</script>

<template>
  <footer>
    <div class="footer-inner">
      <div class="footer-contacts">
        <p class="footer-subtitle">
          {{ this.translation[this.currentLang].contactsTitle }}
        </p>
        <p>{{ this.translation[this.currentLang].contactsBody }}</p>
      </div>

      <ul class="footer-links">
        <p class="footer-subtitle">
          {{ this.translation[this.currentLang].linksTitle }}
        </p>
        <li>
          <a href="https://himpost.com/">{{
            this.translation[this.currentLang].linksHimpost
          }}</a>
        </li>
        <li>
          <a href="https://himpost.prom.ua/">{{
            this.translation[this.currentLang].linksProm
          }}</a>
        </li>
        <li>
          <a href="https://www.youtube.com/channel/UCWMgCyrXRp25P7zk0iAo8Kg">{{
            this.translation[this.currentLang].linksYoutube
          }}</a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/people/%D0%A7%D0%BF-%D0%A5%D0%B8%D0%BC%D0%BF%D0%BE%D1%81%D1%82%D0%B0%D0%B2%D1%89%D0%B8%D0%BA/100016061283845"
            >{{ this.translation[this.currentLang].linksFacebook }}</a
          >
        </li>
      </ul>

      <div class="footer-contacts">
        <p class="footer-subtitle">
          {{ this.translation[this.currentLang].linksHoursTitle }}
        </p>
        <p>{{ this.translation[this.currentLang].linksHoursBody }}</p>
      </div>

      <div class="footer-contacts">
        <p class="footer-subtitle">
          {{ this.translation[this.currentLang].feedbackTitle }}
        </p>
        <p>+38 (050) 340-35-47</p>
        <p>+38 (050) 480-11-20</p>
        <p>office@himpost.com</p>
      </div>
    </div>
  </footer>
  <div class="copyright">
    <div class="container">
      <span>©2021 {{ this.translation[this.currentLang].copyright }}</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
* {
  margin: 0;
  padding: 0;
  --first-footer: transparent;
  --second-footer: transparent;
  --link-hover: white;
  --text-color: rgb(80, 80, 80);
}

footer {
  background-color: var(--first-footer);
  padding: 5em 0;
  line-height: 1.5em;
  color: var(--text-color);
  border-top: 1px solid white;
}

.footer-inner {
  display: grid;
  grid-template-columns: repeat(4, 250px);
  justify-content: center;
  justify-items: center;
  grid-gap: 3em;
}

.footer-links {
  list-style: none;
  a {
    &:visited {
      text-decoration: none;
      color: var(--text-color);
    }
    text-decoration: none;
    &:hover {
      color: var(--link-hover);
    }
  }
}

.footer-subtitle {
  font-weight: 600;
}

.copyright {
  padding: 1em;
  font-size: 14px;
  background-color: var(--second-footer);
  color: rgb(0, 0, 0);
  border-top: 1px solid rgb(255, 255, 255);
}

@media screen and (max-width: 1200px) {
  .footer-inner {
    grid-template-columns: repeat(2, 250px);
  }
}

@media screen and (max-width: 600px) {
  .footer-inner {
    grid-template-columns: 250px;
    justify-items: start;
  }
}
</style>