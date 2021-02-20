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
          <table>
            <thead>
              <tr>
                <th>Клиент</th>
                <th>Адрес</th>
                <th title="Временный картридж (подменка)">Подм</th>
                <th title="Забрать или отдать">З/о</th>
                <th style="min-width:88px"></th>
              </tr>
            </thead>
            <tbody>
              <Poisk
                v-for="item in allPoisk"
                :key="item.index"
                :data="item"
              />
            </tbody>
          </table>
        </div>
      </div>
      <Preloader :show="this.state.preloader"/>
  </div>
</template>
<script>
import Poisk from '../components/Poisk.vue'
import Preloader from '../components/Preloader.vue'
export default {
  components: {
    Poisk, Preloader
  },
  computed: {
    currentPage () {
      return this.$route.path
    },
    allPoisk () {
      return this.$store.state.leads
    }
  },
  mounted: function () {
    this.$store.dispatch('dbGetLogistic', this)
  },
  data: () => ({
    state: {
      preloader: false
    },
    links: [
      { to: '/', name: 'Все' },
      { to: '?curier=1', name: 'Влад' },
      { to: '?curier=2', name: 'Сергей' }
    ]
  })
}
</script>
