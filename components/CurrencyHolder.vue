<template>
    <div class="currency-holder-container">
        <div class="currency">{{currency}}</div>
        <!-- <div class="total">{{total}}</div> -->
    </div>
</template>

<script>
export default {
    name: 'currency-holder',
    data: () => ({

    }),
    props: ['currency']
}
</script>


<style>
.currency-holder-container {
    display: flex;
    flex-direction: row;
}

.currency-holder-container .currency {
    width: 20px;
    color: gray;    
}

.currency-holder-container .total {
    margin-left: 5px;
}
</style>
