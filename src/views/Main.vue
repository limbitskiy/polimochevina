<script>
import CommonMethods from "@/mixins/CommonMethods";
import Catalog from "@/components/Catalog.vue";

export default {
  name: "Main",
  data() {
    return {
      about1Open: false,
      about2Open: false,
      about3Open: false,
    };
  },
  mixins: [CommonMethods],
  components: { Catalog },
  computed: {
    showAbout() {
      return this.$store.state.showAbout;
    },
    showWhyUs() {
      return this.$store.state.showWhyUs;
    },
    transitionDelay() {
      return this.$store.state.transitionDelay;
    },
  },
};
</script>

<template>
  <div class="container-main">
    <div class="cta">
      <transition name="slide-right" appear>
        <h1 :style="{ transitionDelay: this.transitionDelay * 2 + 's' }">
          {{ localize.jTitle }}
        </h1>
      </transition>
      <ul>
        <transition name="slide-right" appear>
          <li :style="{ transitionDelay: this.transitionDelay * 3 + 's' }">
            {{ localize.jSubtitle1 }}
          </li>
        </transition>
        <transition name="slide-right" appear>
          <li :style="{ transitionDelay: this.transitionDelay * 4 + 's' }">
            {{ localize.jSubtitle2 }}
          </li>
        </transition>
        <transition name="slide-right" appear>
          <li :style="{ transitionDelay: this.transitionDelay * 5 + 's' }">
            {{ localize.jSubtitle3 }}
          </li>
        </transition>
      </ul>
    </div>

    <div class="container">
      <div class="section" id="catalog">
        <Catalog />
      </div>

      <div class="section" v-if="showAbout">
        <transition name="slide-right" appear>
          <div class="title-box">
            <h2 class="section-title">
              {{ localize.aboutTitle }}
            </h2>
            <p class="section-subtitle">
              {{ localize.aboutSubtitle }}
            </p>
          </div>
        </transition>
        <div class="about-body">
          <transition name="slide-up" appear>
            <figure :style="{ transitionDelay: this.transitionDelay + 's' }">
              <img src="/images/about1.jpg" />
              <figcaption :class="{ open1: about1Open }">
                {{ localize.about1 }}
              </figcaption>
              <span @click="about1Open = !about1Open"
                >{{ localize.readMore }}<i class="fas fa-arrow-right"></i
              ></span>
            </figure>
          </transition>

          <transition name="slide-up" appear>
            <figure
              :style="{ transitionDelay: this.transitionDelay * 2 + 's' }"
            >
              <img src="/images/about2.jpg" />
              <figcaption :class="{ open2: about2Open }">
                {{ localize.about2 }}
              </figcaption>
              <span @click="about2Open = !about2Open"
                >{{ localize.readMore }}<i class="fas fa-arrow-right"></i
              ></span>
            </figure>
          </transition>

          <transition name="slide-up" appear>
            <figure
              :style="{ transitionDelay: this.transitionDelay * 3 + 's' }"
            >
              <img src="/images/about3.jpg" />
              <figcaption :class="{ open3: about3Open }">
                {{ localize.about3 }}
              </figcaption>
              <span @click="about3Open = !about3Open"
                >{{ localize.readMore }}<i class="fas fa-arrow-right"></i
              ></span>
            </figure>
          </transition>
        </div>
      </div>

      <transition name="slide-right" appear>
        <div class="w-body" v-if="showWhyUs">
          <div class="w-item">
            <div class="w-icon">
              <img src="/images/w-icon1.png" />
            </div>
            <div class="w-text">
              <p>{{ localize.wOneTitle }}</p>
              <p>{{ localize.wOneDesc }}</p>
            </div>
          </div>

          <div class="w-item">
            <div class="w-icon">
              <img src="/images/w-icon2.png" />
            </div>
            <div class="w-text">
              <p>{{ localize.wTwoTitle }}</p>
              <p>{{ localize.wTwoDesc }}</p>
            </div>
          </div>

          <div class="w-item">
            <div class="w-icon">
              <img src="/images/w-icon3.png" />
            </div>
            <div class="w-text">
              <p>{{ localize.wThreeTitle }}</p>
              <p>{{ localize.wThreeDesc }}</p>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container-main {
  min-height: 100vh;
  width: 100%;
}

.cta {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2em;
  padding: 7rem 1rem;
  background: url("/images/cta-bg-cropped-minified2.jpg") center no-repeat;
  color: white;

  h1 {
    font-size: clamp(1.5rem, calc(1.5rem + 2vw), 3rem);
    max-width: min-content;
    line-height: 3rem;
  }

  li {
    font-size: clamp(1rem, calc(1rem + 1vw), 1.5rem);
    font-weight: 500;
    line-height: 2rem;
  }
}

.about-body {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 2rem;

  > p {
    max-width: 50vw;
  }

  figure {
    flex: 0 1 400px;

    img {
      width: 100%;
    }
  }

  figcaption {
    font-family: "Roboto", sans-serif;
    color: var(--medium-grey-color);
    margin-block: 1rem;
    overflow: hidden;
    height: 6.5ch;
    transition: all 0.3s ease;

    &.open1 {
      height: 30ch;
    }

    &.open2 {
      height: 28ch;
    }

    &.open3 {
      height: 34ch;
    }
  }

  span {
    font-size: var(--font-small);
    font-weight: 600;
    cursor: pointer;
    transition: color 0.3s ease;

    &:hover {
      color: black;
    }

    &:hover i {
      transform: translateX(5px);
    }
  }

  i {
    font-size: 12px;
    margin-left: 0.5rem;
    transition: transform 0.3s ease;
  }
}

.w-body {
  font-family: "Roboto", sans-serif;
  display: flex;
  flex-direction: column;

  .w-item {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    padding: 1.5rem 2rem;

    &:nth-child(2n) {
      background-color: #dae9ff;
    }

    &:nth-child(2n - 1) {
      background-color: #fcdfdf;
    }

    p:first-child {
      font-size: var(--font-xsmall);
      font-weight: 500;
      margin-bottom: 0.2rem;
      text-transform: uppercase;
    }

    p:last-child {
      font-size: var(--font-small);
      color: var(--medium-grey-color);
    }
  }
}

@media (min-width: 768px) {
  .container-main {
    // width: 100%;
    min-height: 2100px;
  }

  .cta {
    align-items: flex-start;
    padding: 10rem;

    h1 {
      max-width: 25ch;
    }

    li {
      margin-left: 4em;
      line-height: 2.6rem;
    }
  }

  .about-body {
    figcaption {
      &.open1 {
        height: 24ch;
      }

      &.open2 {
        height: 19ch;
      }

      &.open3 {
        height: 26ch;
      }
    }
  }

  .w-body {
    flex-direction: row;
  }
}
</style>
