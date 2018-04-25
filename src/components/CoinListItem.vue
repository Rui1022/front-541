<template>
  <div class="coin-list-item-container" @click="itemClick(data.url)">
      <div class="item-small index">{{index}}</div>
      <!-- <div class="item coin">


        <name-image-holder :imageSrc="data.currency_name"></name-image-holder>
      </div> -->

      <div class="item currency">
        <currency-holder :currency="data.currency_name" :total="data.name"/>
      </div>

      <div class="item price">
        <currency-holder :currency="data.quote" :total="data.quote" />
      </div>
      <div class="item rate">
         <currency-holder :currency="data.rate" :total="data.rate" />
      </div>
      <!-- <div class="item url">
        <currency-holder :currency="data.url" :total="data.url" />
      </div> -->


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
  name: "coin-list-item",
  data: () => ({}),
  methods: {
    itemClick(url) {
      this.$router.push({
        name: "DetailPage",
        params: { url: url }
      });
    }
  },
  props: ["index", "data"]
};
</script>


<style>
.coin-list-item-container {
  min-width: 1000px;
  position: relative;
  overflow: hidden;
  height: 40px;
  line-height: 40px;
  cursor: pointer;
  margin:auto;

}

.coin-list-item-container .item {
  position: relative;
  float: left;
  width: 20%;
  margin:auto;
}

.coin-list-item-container .item-small {
  position: relative;
  float: left;
  width: 10%;
  margin:auto;
}
</style>
