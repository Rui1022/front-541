<template>
  <div class="top-banner-container">
      <div class="item back-btn-container">
          <el-button type="primary" icon="el-icon-back" circle size="small" @click="backToList"></el-button>
      </div>

      <div class="item info-container">
          <name-image-holder :imageSrc="data.name"></name-image-holder>
      </div>

      <div class="item price-container">
          <currency-holder :currency="data.currency" :total="data.price"></currency-holder>
      </div>

  </div>
</template>


<script>
import NameImageHolder from './NameImageHolder'
import CurrencyHolder from './CurrencyHolder'

export default {
    components: {
        NameImageHolder, CurrencyHolder
    },
    name: 'top-banner',
    props: ['data'],
    data: () => ({

    }),
    methods: {
        backToList() {
            this.$router.push('/')
        }
    }
}
</script>



<style>
.top-banner-container {
    display: flex;
    flex-direction: row;
    line-height: 40px;
    padding: 20px 30px;
    background-color: gray;
}

.top-banner-container .info-container {
    margin-left: 20px;
}

.top-banner-container .price-container {
    margin-left: 40px;
}
</style>
