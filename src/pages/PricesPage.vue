<template>
  <section class="section-container">
      <predict-table :data="data"></predict-table>
  </section>
</template>


<script>
import PredictTable from "../components/PredictTable";
import axios from "axios";
import Vue from "vue";
import VueAxios from "vue-axios";
// import data from "./tmp.json";

Vue.use(VueAxios, axios);

export default {
  components: { PredictTable },
  data: () => ({ data: [] }),
   mounted() {
    var self = this;
    axios.get('http://127.0.0.1:5000/top_currencies', { crossdomain:true})
        .then(function(res) {
            console.log(res)
            self.data = res.data.result
            
        })
    self.data = data.result;
  }
};
</script>


<style>
.section-container{
  margin-left: 185px;
  background: rgba(255, 255, 255, 0.8);
}

</style>




