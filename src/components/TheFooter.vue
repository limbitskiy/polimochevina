<script>
import CommonMethods from "@/mixins/CommonMethods";

export default {
  mixins: [CommonMethods],
};
</script>

<template>
  <footer>
    <div class="first-footer">
      <div class="footer-item">
        <p>{{ localize.contactsTitle }}</p>
        <p>{{ localize.contactsBody }}</p>
      </div>

      <div class="footer-item">
        <p>{{ localize.linksHoursTitle }}</p>
        <p>{{ localize.linksHoursBody }}</p>
      </div>

      <div class="footer-item">
        <p>{{ localize.feedbackTitle }}</p>
        <p>+38 (050) 340-35-47</p>
        <p>+38 (050) 480-11-20</p>
        <p>office@himpost.com</p>
      </div>
    </div>

    <div class="second-footer">
      <div class="container">
        <span>©2021 {{ localize.copyright }}</span>
        <ul class="footer-social">
          <li>
            <a
              href="https://www.facebook.com/people/%D0%A7%D0%BF-%D0%A5%D0%B8%D0%BC%D0%BF%D0%BE%D1%81%D1%82%D0%B0%D0%B2%D1%89%D0%B8%D0%BA/100016061283845"
            >
              <img src="/images/facebook.png" />
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/channel/UCWMgCyrXRp25P7zk0iAo8Kg">
              <img src="/images/youtube.png" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
footer {
  line-height: 1.5rem;
}

.first-footer {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  background: url("/images/cta-bg-cropped-minified2.jpg") center;
  padding: 5rem 3rem;
  color: white;

  .footer-item {
    p:first-child {
      font-size: var(--font-xsmall);
      font-weight: 700;
      text-transform: uppercase;
      margin-bottom: 0.8rem;
    }

    p:last-child {
      font-family: "Roboto", sans-serif;
    }
  }
}

.second-footer {
  font-family: "Roboto", sans-serif;
  background-color: black;
  color: white;
  font-size: 10px;
  padding-block: 0.6rem;

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    ul,
    li,
    a {
      display: flex;

      img {
        height: 30px;
      }
    }
  }
}

@media (min-width: 768px) {
  .first-footer {
    flex-direction: row;
    justify-content: space-evenly;
    padding: 8rem 3rem;

    .footer-item {
      max-width: 200px;
    }
  }
}
</style>