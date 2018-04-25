<template>
  <section class="section-container">
      <coin-table :data="data"></coin-table>
  </section>
</template>


<script>
import CoinTable from "../components/CoinTable";
import axios from "axios";
import Vue from "vue";
import VueAxios from "vue-axios";
// import data from "./tmp.json";

Vue.use(VueAxios, axios);

export default {
  components: { CoinTable },
  data: () => ({ data: [] }),
   mounted() {
    var self = this;
    axios.get('http://127.0.0.1:5000/outlier/2018-04-10', { crossdomain:true})
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
  margin-left: 180px;
  
}

</style>




