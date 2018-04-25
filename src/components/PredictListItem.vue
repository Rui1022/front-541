<template>
  <div class="predict-list-container" @click="itemClick(data.url)">
      <div class="item-small index">{{index}}</div>
      <!-- <div class="item coin">
        <name-image-holder :imageSrc="data.currency_name"></name-image-holder>
      </div> -->

      <div class="item currency">
        <currency-holder :currency="data.currency" :total="data.name"/>
      </div>

      <div class="item open">
        <currency-holder :currency="data.open" :total="data.open" />
      </div>
      <div class="item last">
        <currency-holder :currency="data.latest" :total="data.latest" />
      </div>
      <div class="item rate">
         <currency-holder :currency="data.rate" :total="data.rate" />
      </div>
      


  </div>
</template>

<script>
import CurrencyHolder from "./CurrencyHolder";
import NameImageHolder from "./NameImageHolder";
var self = this;

export default {
  components: {
    CurrencyHolder,
    NameImageHolder
  },
  name: "predict-list-item",
  data: () => ({}),
  methods: {
    itemClick(url) {
      this.$router.push({
        name: "DetailPage2",
        params: { url: url }
      });
    }
  },
  props: ["index", "data"]
};
</script>


<style>
.predict-list-container {
  min-width: 1000px;
  position: relative;
  overflow: hidden;
  height: 40px;
  line-height: 40px;
  cursor: pointer;
}

.predict-list-container .item {
  position: relative;
  float: left;
  width: 20%;
}

.predict-list-container.item-small {
  position: relative;
  float: left;
  width: 10%;
}
</style>
