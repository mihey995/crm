<template>
  <div class="home">
    <div class="row">
        <div class="col s12">
          <ul class="collection waves-color-demo">
            <li class="collection-item" style="line-height:2.6rem">
              <Poisk/>
            </li>
          </ul>
        </div>
      </div>
  </div>
</template>
<script>
import Poisk from '../components/Poisk.vue'
export default {
  components: {
    Poisk
  }
}
</script>
