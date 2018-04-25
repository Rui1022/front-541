<template>
  <div class="coin-table-container">
      <div class="table-header">
          <div class="index item-small">Index</div>
          <div class="coin item">CurrencyName</div>
          <div class="price item">Quote($)</div>
          <div class="rate item">Rate(%)</div>
          <!-- <div class="url item"> URL</div> -->
      </div>

      <div class="table-list">
          <div v-for="(item, itemIndex) in data" :key="itemIndex" >
              <coin-list-item :index="itemIndex" :data="item"/>
          </div>
      </div>
  </div>
</template>


<script>
import CoinListItem from "./CoinListItem";
export default {
  components: {
    CoinListItem
  },
  name: "coin-table",
  data: () => ({}),
  props: ["data"]
};
</script>


<style>
.coin-table-container {
  position: relative;
  min-width: 1000px;
  margin:auto;
}

.coin-table-container .table-header {
  overflow: hidden;
}

li {
  list-style-type: none;
  overflow: hidden;
}

.coin-table-container .item {
  position: relative;
  float: left;
  width: 20%;
  text-align: left;
  margin:auto;
}

.coin-table-container .item-small {
  position: relative;
  float: left;
  width: 10%;
  margin:auto;
}
</style>
