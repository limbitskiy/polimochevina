<script>
import { translationsArray } from "@/language/Main.js";
import Catalog from "@/components/Catalog.vue";

export default {
  name: "Main",
  components: { Catalog },
  emits: ["addToCart", "hideSidebar"],
  props: ["currentLang", "products"],
  data() {
    return {
      translation: translationsArray,
    };
  },
  methods: {},
  mounted() {
    window.scrollTo({
      top: 0,
    });
    this.$emit("hideSidebar");
  },
};
</script>

<template>
  <div class="container">
    <div class="cta">
      <h1>{{ this.translation[this.currentLang].jTitle }}</h1>
      <ul>
        <li>{{ this.translation[this.currentLang].jSubtitle1 }}</li>
        <li>{{ this.translation[this.currentLang].jSubtitle2 }}</li>
        <li>{{ this.translation[this.currentLang].jSubtitle3 }}</li>
      </ul>
    </div>
    <section>
      <Catalog
        @addToCart="this.$emit('addToCart', $event)"
        :currentLang="currentLang"
        :products="products"
      />
    </section>

    <section>
      <h2 class="section-title">
        {{ this.translation[this.currentLang].wTitle }}
      </h2>
      <div class="w-items">
        <div class="w-item">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="64"
            height="64"
            viewBox="0 0 16.93 16.93"
          >
            <path
              fill="#ffc6a0"
              d="M1.52 3.2a.26.26 0 0 0-.27.25c0 .3.15.6.37.85.22.24.54.44.91.44H6.2c.08 0 .14.06.14.14 0 .37.3.68.68.68h1.84c.09 0 .15.06.15.14v.9l1.32.01V5.3c0-.36-.13-.7-.36-.92A1.3 1.3 0 0 0 9.04 4H7.82a.14.14 0 0 1-.14-.15c0-.36-.3-.67-.67-.67z"
            />
            <path
              fill="#ffaf7a"
              d="M1.52 3.2a.26.26 0 0 0-.27.25c0 .3.15.6.37.85.22.24.54.44.91.44H6.2c.08 0 .14.06.14.14 0 .37.3.68.68.68h1.84c.09 0 .15.06.15.14v.9h.52V5.18a.14.14 0 0 0-.14-.14H7.53a.68.68 0 0 1-.67-.68.14.14 0 0 0-.14-.14H3.06c-.38 0-.7-.2-.91-.44a1.43 1.43 0 0 1-.33-.58Z"
            />
            <path
              fill="#ffc6a0"
              d="M3.44.53a.26.26 0 0 0-.26.26c0 .37.17.73.45 1.04.28.3.67.55 1.13.55h4.77c.15 0 .26.12.26.27 0 .43.36.79.8.79h2.38c.15 0 .26.11.26.27v.79h1.32V3.18c0-.46-.15-.87-.44-1.15a1.6 1.6 0 0 0-1.15-.44h-1.32a.26.26 0 0 1-.26-.27.8.8 0 0 0-.8-.8z"
            />
            <path
              fill="#ffaf7a"
              d="M3.44.53a.26.26 0 0 0-.26.26c0 .37.17.73.45 1.04.28.3.67.55 1.13.55h4.77c.15 0 .26.12.26.27 0 .43.36.79.8.79h2.38c.15 0 .26.11.26.27v.79h.53V3.18a.26.26 0 0 0-.27-.27h-2.38a.8.8 0 0 1-.8-.8.26.26 0 0 0-.26-.26H5.3c-.46 0-.85-.24-1.13-.55-.2-.23-.36-.5-.42-.77Z"
            />
            <path
              fill="#e4eff8"
              d="M12.44 4.23h2.9a.53.53 0 1 1 0 1.06h-2.9a.53.53 0 1 1 0-1.06z"
            />
            <path fill="#549ad4" d="m12.44 5-.69 5.02h4.05L15.35 5h-2.91z" />
            <path
              fill="#3588cb"
              d="m12.44 5-.69 5.02h.53l.68-5c-.17 0-.34-.03-.52-.03zm2.9 0-.25.03h.26Z"
            />
            <path
              fill="#549ad4"
              d="m8.44 7.1-.4 2.92h3.1l-.27-2.91-2.43-.02z"
            />
            <path
              fill="#c4dcf0"
              d="M12.44 4.23a.53.53 0 1 0 0 1.06h2.9c.3 0 .54-.23.54-.53h-2.92a.53.53 0 0 1-.52-.53z"
            />
            <path
              fill="#3588cb"
              d="m8.44 7.1-.4 2.92h3.1-2.57l.39-2.89c-.16 0-.36-.04-.52-.04z"
            />
            <path
              fill="#e4eff8"
              d="M8.47 6.35h2.38a.53.53 0 1 1 0 1.06H8.47a.53.53 0 1 1 0-1.06z"
            />
            <path
              fill="#c4dcf0"
              d="M8.47 6.35a.53.53 0 1 0 0 1.06h2.38c.3 0 .53-.24.53-.53H9a.53.53 0 0 1-.53-.53z"
            />
            <path
              fill="#3588cb"
              d="m11.86 9.26-.1.76h4.04l-.07-.75a.77.77 0 0 0-.12-.01h-3.75zM8.14 9.26l-.1.76a269.69 269.69 0 0 1 3.1 0l-.07-.76H8.14z"
            />
            <path
              fill="#549ad4"
              d="M3.96 6.88a.26.26 0 0 0-.17.07L.62 9.85a.26.26 0 0 0-.1.2v5.56c0 .44.37.8.8.8h14.3a.8.8 0 0 0 .78-.8v-5.03a.8.8 0 0 0-.79-.8h-8.2V7.15a.26.26 0 0 0-.45-.2L4.23 9.46v-2.3a.26.26 0 0 0-.27-.27Z"
            />
            <path
              fill="#3588cb"
              d="m1.07 9.44-.45.42a.26.26 0 0 0-.1.2v5.55c0 .44.37.8.8.8h14.3a.8.8 0 0 0 .75-.57.78.78 0 0 1-.23.04H1.85a.8.8 0 0 1-.8-.8V9.53l.02-.09z"
            />
            <path
              fill="#e4eff8"
              d="M10.85 11.38a.53.53 0 0 0-.53.53v4.5h4.23v-4.5a.53.53 0 0 0-.53-.53z"
            />
            <path
              fill="#c4dcf0"
              d="M10.85 11.38a.53.53 0 0 0-.53.53h3.17c.3 0 .53.24.53.53v3.43h-3.7v.53h4.23v-4.5a.53.53 0 0 0-.53-.52z"
            />
            <path
              fill="#e4eff8"
              d="M2.98 11.11a.34.34 0 0 0-.33.34v.91c0 .19.15.34.33.34h1.97c.19 0 .34-.15.34-.34v-.91a.34.34 0 0 0-.34-.34z"
            />
            <path
              fill="#c4dcf0"
              d="M2.98 11.11a.34.34 0 0 0-.33.34v.91c0 .19.15.34.33.34h1.97c.19 0 .34-.15.34-.34v-.19H3.51a.34.34 0 0 1-.33-.34v-.72z"
            />
            <path
              fill="#e4eff8"
              d="M2.98 13.5a.34.34 0 0 0-.33.33v.92c0 .18.15.33.33.33h1.97c.19 0 .34-.15.34-.33v-.92a.34.34 0 0 0-.34-.33z"
            />
            <path
              fill="#c4dcf0"
              d="M2.98 13.5a.34.34 0 0 0-.33.33v.92c0 .18.15.33.33.33h1.97c.19 0 .34-.15.34-.33v-.2H3.51a.34.34 0 0 1-.33-.33v-.72z"
            />
            <path
              fill="#e4eff8"
              d="M6.42 11.11a.34.34 0 0 0-.33.34v.91c0 .19.15.34.33.34H8.4c.18 0 .34-.15.34-.34v-.91a.34.34 0 0 0-.34-.34z"
            />
            <path
              fill="#c4dcf0"
              d="M6.42 11.11a.34.34 0 0 0-.33.34v.91c0 .19.15.34.33.34H8.4c.18 0 .34-.15.34-.34v-.19H6.95a.34.34 0 0 1-.34-.34v-.72z"
            />
            <path
              fill="#e4eff8"
              d="M6.42 13.5a.34.34 0 0 0-.33.33v.92c0 .18.15.33.33.33H8.4c.18 0 .34-.15.34-.33v-.92a.34.34 0 0 0-.34-.33z"
            />
            <path
              fill="#c4dcf0"
              d="M6.42 13.5a.34.34 0 0 0-.33.33v.92c0 .18.15.33.33.33H8.4c.18 0 .34-.15.34-.33v-.2H6.95a.34.34 0 0 1-.34-.33v-.72z"
            />
          </svg>
          <div class="w-title">
            {{ this.translation[this.currentLang].wOneTitle }}<br />
          </div>
          <div class="w-desc">
            <span>{{ this.translation[this.currentLang].wOneDesc }}</span>
          </div>
        </div>

        <div class="w-item">
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
            <path
              d="M56.05 22.36H44.36L47.36 11.87C47.8529 10.0275 47.6094 8.06548 46.6808 6.39946C45.7523 4.73345 44.2117 3.49429 42.3854 2.94445C40.5591 2.3946 38.5904 2.57725 36.8964 3.4537C35.2025 4.33016 33.9161 5.83159 33.31 7.63999L31.11 14.69C30.3268 17.1749 28.981 19.4458 27.1772 21.3258C25.3735 23.2059 23.1603 24.6446 20.71 25.53C20.4182 25.6332 20.1655 25.824 19.9864 26.0765C19.8074 26.3289 19.7108 26.6305 19.71 26.94V56.94C19.7108 57.2495 19.8074 57.5511 19.9864 57.8035C20.1655 58.056 20.4182 58.2468 20.71 58.35C26.5772 60.4564 32.7661 61.5257 39 61.51H56.1C57.5454 61.51 58.9316 60.9358 59.9537 59.9137C60.9758 58.8916 61.55 57.5054 61.55 56.06V27.81C61.5487 27.0904 61.4051 26.3782 61.1277 25.7143C60.8502 25.0504 60.4442 24.4479 59.9331 23.9415C59.422 23.435 58.8158 23.0345 58.1494 22.7631C57.483 22.4917 56.7695 22.3547 56.05 22.36V22.36Z"
              fill="#FFD164"
            />
            <path
              d="M21.21 22.3599H4C3.17157 22.3599 2.5 23.0314 2.5 23.8599V60.0099C2.5 60.8383 3.17157 61.5099 4 61.5099H21.21C22.0384 61.5099 22.71 60.8383 22.71 60.0099V23.8599C22.71 23.0314 22.0384 22.3599 21.21 22.3599Z"
              fill="#275996"
            />
          </svg>
          <div class="w-title">
            {{ this.translation[this.currentLang].wTwoTitle }}<br />
          </div>
          <div class="w-desc">
            <span>{{ this.translation[this.currentLang].wTwoDesc }}</span>
          </div>
        </div>

        <div class="w-item">
          <img src="/images/van.png" />
          <div class="w-title">
            {{ this.translation[this.currentLang].wThreeTitle }}<br />
          </div>
          <div class="w-desc">
            <span>{{ this.translation[this.currentLang].wThreeDesc }}</span>
          </div>
        </div>

        <div class="w-item">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
            <defs></defs>
            <g id="_23_Flask" data-name="23 Flask">
              <path
                d="m104.74 99.89-30-50.1V16H53.31v33.78l-30 50.1A8 8 0 0 0 30.12 112h67.76a8 8 0 0 0 6.86-12.11Z"
                fill="#a5e4f1"
              />
              <path
                d="M25.26 99.89 54 51.9a8.93 8.93 0 0 0 1.27-4.59V16h-2v33.78l-30 50.1A8 8 0 0 0 30.12 112h2a8 8 0 0 1-6.86-12.11Z"
                fill="#c3edf5"
              />
              <path
                fill="#87dbec"
                d="m104.74 99.89-30-50.1V19.6c-4.21 0-.65-.67-20.39 4.4l14.55 1.11a2.8 2.8 0 0 1 2.59 2.79v17.25a8.59 8.59 0 0 0 1.22 4.42l28.82 48.06a8 8 0 0 1-6.86 12.11c-73.73 0-68.57.22-70.52-.5a7.87 7.87 0 0 0 6 2.75h67.73a8 8 0 0 0 6.86-12.1Z"
              />
              <path
                d="M76 24H52c-5.32 0-5.33-8 0-8h24c5.32 0 5.33 8 0 8Z"
                fill="#c3edf5"
              />
              <path
                fill="#e1f6fa"
                d="M52.82 16.82c26.25 0 24.9-.3 26.38.8C77.57 15.44 77.78 16 52 16a4 4 0 0 0-2.38 7.2 4 4 0 0 1 3.2-6.38Z"
              />
              <path
                d="M78.17 16.65a4 4 0 0 1-3.35 6.17c-25.93 0-24.79.24-26.17-.65C50.24 24.64 50.41 24 76 24a4 4 0 0 0 2.17-7.35Z"
                fill="#a5e4f1"
              />
              <path
                fill="#4d91bb"
                d="M30.12 106h67.76a2 2 0 0 0 1.72-3L87.34 82.55c-2.23-3.72-6.95-4.75-11-4.75-6.16 0-6.16 2-12.32 2s-6.16-2-12.32-2c-4.17 0-8.81 1.08-11 4.75L28.41 103a2 2 0 0 0 1.71 3Z"
              />
              <path
                fill="#7aaccc"
                d="M69.31 106H53.68a7.81 7.81 0 1 1 15.63 0ZM48 82a6.12 6.12 0 1 0 6.12 6.12A6.12 6.12 0 0 0 48 82Zm29.62 8.49c-5 0-5 7.49 0 7.49s4.96-7.46 0-7.46Z"
              />
              <path
                d="M63 64c0 5-7.49 5-7.49 0S63 59 63 64ZM73.88 71.55c0 3.39-5.13 3.39-5.13 0s5.13-3.39 5.13 0Z"
                fill="#c3edf5"
              />
            </g>
          </svg>
          <div class="w-title">
            {{ this.translation[this.currentLang].wFourTitle }}<br />
          </div>
          <div class="w-desc">
            <span>{{ this.translation[this.currentLang].wFourDesc }}</span>
          </div>
        </div>
      </div>
    </section>

    <section>
      <h2 class="section-title">
        {{ this.translation[this.currentLang].aboutTitle }}
      </h2>
      <div class="about-body">
        <p>
          {{ this.translation[this.currentLang].aboutBody }}
        </p>
        <img src="@/assets/about.jpg" />
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.cta {
  display: flex;
  flex-direction: column;
  gap: 2em;
  padding: 12em 0 8em;

  h1 {
    font-size: 42px;
    font-size: clamp(1.5em, calc(24px + 2vw), 46px);
    font-weight: 700;
    max-width: 70%;
  }

  li {
    font-size: 24px;
    font-size: clamp(1em, calc(16px + 1vw), 24px);
    font-weight: 500;
    line-height: 38px;
    list-style: none;
    margin-left: 2em;
  }
}

.about-body {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-items: center;
  grid-gap: 3em;

  > p {
    line-height: 1.5em;
  }

  img {
    max-height: 350px;
    border-radius: 25px;
  }
}

.w-items {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 3em;
  margin: 2em;
  justify-content: center;
}

.w-item {
  text-align: center;
  border: 1px solid rgb(200, 200, 200);
  border-radius: 25px;
  box-shadow: 2.8px 2.8px 2.2px rgba(0, 0, 0, 0.02),
    6.7px 6.7px 5.3px rgba(0, 0, 0, 0.028),
    12.5px 12.5px 10px rgba(0, 0, 0, 0.035),
    22.3px 22.3px 17.9px rgba(0, 0, 0, 0.042),
    41.8px 41.8px 33.4px rgba(0, 0, 0, 0.05),
    100px 100px 80px rgba(0, 0, 0, 0.07);
  padding: 2em 1.5em;
  background-color: white;
  color: black;

  svg {
    height: 50px;
  }

  img {
    height: 50px;
  }
}

.w-title {
  font-weight: 600;
  margin-top: 15px;
}

.w-desc {
  margin-top: 5px;
}

@media screen and (max-width: 1400px) {
  .cta {
    padding-left: 3em;
  }
}

@media screen and (max-width: 1200px) {
  .w-items {
    grid-template-columns: repeat(2, 300px);
  }
}

@media (max-width: 1000px) {
  .cta {
    align-items: center;
    padding: 6em 0;
    h1 {
      max-width: 100%;
      text-align: center;
    }
    li {
      margin: 0;
    }
  }

  .about-body {
    grid-template-columns: 1fr;
    grid-gap: 1em;
    padding: 1em;
    img {
      object-fit: contain;
      width: 100%;
    }
  }
}

@media screen and (max-width: 700px) {
  .w-items {
    grid-template-columns: 260px;
  }

  .w-item {
    padding: 1.5em 0.5em;
  }
}
</style>
