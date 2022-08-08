<script>
import CommonMethods from "@/mixins/CommonMethods";
import Related from "@/components/Related.vue";
import HtmlOutput from "@/components/HtmlOutput.vue";

export default {
  name: "Product",
  data() {
    return {
      enlargedImage: null,
      enlargedVideo: null,
      packingSelected: null,
      quantity: 1,
    };
  },
  components: {
    Related,
    HtmlOutput,
  },
  props: {
    id: { type: Number, required: true },
  },
  methods: {
    addToCart() {
      this.$store.dispatch("addToCart", {
        id: this.product.id,
        quantity: this.quantity,
        packing: this.packingSelected,
        price: this.product.prices[this.packingSelected] * this.quantity,
        uniqueId: this.product.id + this.packingSelected,
      });
      this.$store.state.sideBarOpen = "true";
    },
    enlargeImageThumbnail(img) {
      this.enlargedVideo = null;
      this.enlargedImage = img;
    },
    enlargeVideoThumbnail(video) {
      this.enlargedImage = null;
      this.enlargedVideo = video;
    },
  },
  mixins: [CommonMethods],
  computed: {
    product() {
      return this.$store.state.products.find(
        (product) => product.id === this.id
      );
    },
    props() {
      return this.product.props;
    },
  },
  created() {
    this.enlargedImage = this.product.gallery[0];
    this.packingSelected = Object.keys(this.product.prices)[0];
  },
};
</script>

<template>
  <div class="container">
    <div class="section">
      <div class="details">
        <div class="gallery">
          <img
            class="enlarged"
            v-if="this.enlargedImage"
            :src="/images/ + this.enlargedImage"
          />
          <video
            class="enlarged"
            v-if="this.enlargedVideo"
            :src="/images/ + this.enlargedVideo"
            controls
            autoplay
          />
          <div class="thumbnails">
            <img
              v-for="(picture, index) in product.gallery"
              :key="index"
              :src="'/images/' + picture"
              alt="product gallery thumbnail"
              @click="enlargeImageThumbnail(picture)"
            />
            <video
              v-for="(video, index) in product.videos"
              :key="index"
              :src="'/images/' + video"
              alt="product gallery video thumbnail"
              @click="enlargeVideoThumbnail(video)"
            />
          </div>
        </div>

        <div class="description">
          <div class="description-controls">
            <h3>{{ product.name[currentLang] }}</h3>
            <p class="price">
              {{ product.prices[packingSelected] * this.quantity }} грн
            </p>
            <div class="packing-select">
              <p>{{ localize.packing }}:</p>
              <select v-model="packingSelected" @change="this.quantity = 1">
                <option
                  v-for="(price, packing) in product.prices"
                  :key="packing"
                >
                  {{ packing }}
                </option>
              </select>
            </div>
            <form class="quantity-and-buy">
              <input
                class="incr-decr"
                type="button"
                value="-"
                @click="this.quantity > 1 ? this.quantity-- : this.quantity"
              />
              <input
                class="quantity-input"
                disabled="disabled"
                type="tel"
                :value="this.quantity"
              />
              <input
                class="incr-decr"
                type="button"
                value="+"
                @click="this.quantity < 99 ? this.quantity++ : this.quantity"
              />
            </form>
            <div class="btn-group product-btn-group">
              <Btn @click="addToCart">{{ localize.buyBtn }}</Btn>
              <Btn @click="this.$router.push({ path: '/', hash: '#catalog' })"
                >Назад</Btn
              >
            </div>
          </div>
          <HtmlOutput
            :data="product.desc[currentLang]"
            v-if="product.desc[currentLang]"
          />

          <div class="props" v-if="objectNotEmpty(product.props)">
            <p class="details-subtitle">Характеристики:</p>
            <table class="props-table">
              <tr
                v-for="(propkey, propvalue) in product.props"
                :key="propvalue"
              >
                <td>{{ propvalue }}</td>
                <td>{{ propkey }}</td>
              </tr>
            </table>
          </div>

          <div class="after-table" v-if="objectNotEmpty(product.afterProps)">
            <HtmlOutput :data="product.afterProps[currentLang]" />
          </div>
        </div>

        <Related />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.details {
  display: grid;
  gap: 1rem;
}

.details-subtitle {
  font-weight: 600;
}

.gallery {
  .enlarged {
    width: 100%;
    max-height: 65vh;
    object-fit: contain;
  }

  .thumbnails {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 5px;

    * {
      cursor: pointer;
      width: 80px;
      height: 80px;
      border: 1px solid rgb(221, 221, 221);
      transition: border-color 0.2s ease;

      &:hover {
        opacity: 0.5;
        border-color: var(--accent-green);
      }
    }
  }
}

.description-controls {
  display: flex;
  flex-direction: column;
  gap: 1rem;

  select,
  input {
    height: 2rem;
  }

  .price {
    font-size: var(--font-biger);
  }

  .quantity-and-buy {
    display: flex;
    gap: 0.5rem;

    .incr-decr {
      cursor: pointer;
      width: 2rem;
    }

    .quantity-input {
      width: 2rem;
      text-align: center;
    }

    .buy-btn {
      cursor: pointer;
      background-color: var(--accent-color);
      border-radius: 4px;
      border: none;
      color: white;
      padding-inline: 2rem;
    }
  }
}

.props-table {
  font-family: "Noto Sans", Arial, sans-serif;
  font-size: 14px;
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
  border: 1px solid #e8e8e8;

  th {
    padding: 5px;
    text-align: left;
    font-weight: normal;
    background: #e5e2e2;
  }
  td {
    width: 50%;
    padding: 10px;
    border-top: 1px #e5e5e5 solid;
    &:first-child {
      border-right: 1px #e5e5e5 solid;
    }
  }
}

@media (min-width: 850px) {
  .details {
    grid-template-columns: 1fr 2fr;
  }
}
</style>