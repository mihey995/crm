<template>
  <div v-show="show" class="preloader">
    <div class="preloader-wrapper big active">
        <div class="spinner-layer spinner-red-only">
        <div class="circle-clipper left">
            <div class="circle"></div>
        </div><div class="gap-patch">
            <div class="circle"></div>
        </div><div class="circle-clipper right">
            <div class="circle"></div>
        </div>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  props: [
    'show'
  ]
}
</script>
