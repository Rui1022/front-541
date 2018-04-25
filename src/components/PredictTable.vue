<template>
  <div class="predict-table-container">
      <div class="table-header">
          <div class="index item-small">Index</div>
          <div class="currency item">CurrencyName</div>
          <div class="open item">Opening Quotation($)</div>
          <div class="last item">Newest Quotation($)</div>
          <div class="rate item"> Rate(%)</div>
      </div>

      <div class="table-list">
          <div v-for="(item, itemIndex) in data" :key="itemIndex" >
              <predict-list-item :index="itemIndex" :data="item"/>
          </div>
      </div>
  </div>
</template>


<script>
import PredictListItem from "./PredictListItem";
export default {
  components: {
    PredictListItem
  },
  name: "predict-table",
  data: () => ({}),
  props: ["data"]
};
</script>


<style>
.predict-table-container {
  position: relative;
  min-width: 1000px;
}

.predict-table-container .table-header {
  overflow: hidden;
}

li {
  list-style-type: none;
  overflow: hidden;
}

.predict-table-container .item {
  position: relative;
  float: left;
  width: 20%;
  text-align: left;
}

.predict-table-container .item-small {
  position: relative;
  float: left;
  width: 10%;
}
</style>
