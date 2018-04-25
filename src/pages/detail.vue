<template>
  <div class="detail-container">
      <top-banner :data="data"></top-banner>

      <div class="chart-container">
          <ve-line :data="chartData" :settings="chartSettings"></ve-line>
      </div>
  </div>

</template>

<script>
import TopBanner from "../components/TopBanner";
import axios from "axios";
import VeLine from "v-charts/lib/line";
// import data from "./tmp_detail.json";
export default {
  name: "detail-container",
  data() {
    return {
      chartData: {
        columns: ["date", "quote"],
        rows: []
      }
    };
  },

  // this.$router.params.coinId
  mounted() {
    var self = this;
    var port = "http://127.0.0.1:5000/";
    console.log("-----", this.$route.params.url);
    axios
      .get(port + this.$route.params.url, { crossdomain: true })
      .then(function(res) {
        self.chartData = {
          columns: ["date", "quote"],
          rows: res.data.result
        };
        self.chartSettings={
          metrics: ["quote"],
          dimension: ["date"]
        };
      });
  },
  components: {
    VeLine: VeLine
  },
  created() {}
};
</script>



<style>
.detail-container{
  margin-left: 185px;
  background: rgba(255, 255, 255, 1);
}

</style>