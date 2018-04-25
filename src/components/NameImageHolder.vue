<template>
  <div class="name-image-holder-container">
      <div class="image-holder">
          <img :src="src" :alt="imageSrc">
      </div>
      <div class="name-holder">
          <span>{{imageSrc}}</span>
      </div>
  </div>
</template>


<script>

export default {
    name: 'name-image-holder',
    data: () => ({
        
    }),
    props: ['imageSrc'],
    created () {
        this.src =  'static/img/' + this.imageSrc + '.png'
    }
  
}
</script>


<style scope>
.name-image-holder-container {
    position: relative;
    overflow: hidden;
    line-height: 40px;
}

.name-image-holder-container .image-holder {
    width: 40px;
    height: 40px;
    position: relative;
    float: left;
}

.image-holder img {
    width: 40px;
    height: 40px;
}

.name-image-holder-container .name-holder {
    font-size: 14px;
    float: left;
    margin-left: 5px;
}
</style>
