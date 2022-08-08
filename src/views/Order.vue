<script>
import CommonMethods from "@/mixins/CommonMethods";
import Cart from "@/components/Cart.vue";

export default {
  name: "Order",
  components: { Cart },
  mixins: [CommonMethods],
  methods: {
    sendData() {
      const form = document.querySelector("#form");
      const formData = new FormData(form);
      const cartNames = this.cart.map((item) => {
        // find product name by id
        const prodName = this.$store.state.products.find((prod) => {
          return prod.id === item.id;
        });
        return `${prodName.name[this.currentLang]} - ${item.packing} - x${
          item.quantity
        }`;
      });
      const cartData = cartNames.join("\n");
      formData.append("cartData", cartData);
      formData.append("total", this.total);

      // for (let value of formData.values()) {
      //   console.log(value);
      // }
      // console.log(formData.values());
      fetch("mail.php", {
        method: "post",
        body: formData,
      })
        .then(function (response) {
          return response.text();
        })
        .then(function (text) {
          console.log(text);
        })
        .catch(function (error) {
          console.error(error);
        });
    },
  },
};
</script>

<template>
  <div class="container">
    <div class="section">
      <div class="small-container">
        <div class="title-box">
          <h2 class="section-title">
            {{ localize.orderTitle }}
          </h2>
          <p class="section-subtitle">
            {{ localize.orderSubTitle }}
          </p>
        </div>
        <Cart />
        <Form />
        <div class="btn-group form-btn-group">
          <btn
            @click="
              this.$router.push('/thank-you');
              sendData();
              this.$store.commit('CLEAR_CART');
            "
          >
            {{ localize.orderBtn }}
          </btn>

          <btn @click="this.$router.push('/')">
            {{ localize.orderBtnBack }}
          </btn>
        </div>
      </div>
    </div>
  </div>
</template>
