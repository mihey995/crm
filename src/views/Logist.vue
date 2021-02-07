<template>
  <div class="home">
    <div class="row curiers">
      <div class="col s12" style="margin-top:15px">
        <router-link
          v-for="link in links"
          class="chip"
          :key="link.url"
          :to="link.to"
          :class="{active: currentPage==link.to}">
            {{link.name}}
        </router-link>
      </div>
    </div>
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
  },
  computed: {
    currentPage () {
      return this.$route.path
    }
  },
  data: () => ({
    links: [
      { to: '/', name: 'Все' },
      { to: '?curier=1', name: 'Влад' },
      { to: '?curier=2', name: 'Сергей' }
    ]
  })
}
</script>
