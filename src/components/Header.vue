<template>
<div>
   <nav class="nav-extended head-nav">
    <div class="nav-wrapper">
      <a href="#" class="brand-logo">Мои поиски</a>
      <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a href="sass.html">Sass</a></li>
        <li><a href="badges.html">Components</a></li>
        <li><a href="collapsible.html">JavaScript</a></li>
      </ul>
    </div>
    <div class="nav-content">
      <ul class="tabs tabs-transparent">
        <li
          v-for="link in links"
          class="tab "
          :key="link.url">
          <router-link
            :to="link.to"
            :class="{active: currentPage==link.to}"
          >
            {{link.name}}
          </router-link>
        </li>
      </ul>
    </div>
  </nav>

  <ul class="sidenav" id="mobile-demo">
    <li><a href="sass.html">Sass</a></li>
    <li><a href="badges.html">Components</a></li>
    <li><a href="collapsible.html">JavaScript</a></li>
  </ul>
  <div class="posb posr posfix">
    <a v-on:click="editId" href="#modal-add" class="waves-effect waves-light btn red modal-trigger" style="margin-right:15px"><i class="material-icons right">edit</i>Изменить</a>
    <a v-on:click="setId" href="#modal-add" class="waves-effect waves-light btn red modal-trigger"><i class="material-icons right">add</i>Новый</a>
  </div>
</div>
</template>
<script>
import M from 'materialize-css'
export default {
  components: {
  },
  name: 'Header',
  props: {
    msg: String
  },
  data: () => ({
    links: [
      { to: '/', name: 'Avito' },
      { to: '/youla', name: 'Youla' }
    ]
  }),
  computed: {
    currentPage () {
      return this.$route.path
    }
  },
  methods: {
    activeTabs: function () {
      console.log(111111)
    },
    setId () {
      this.$store.commit('DEFAULT_MUTATION_MODAL')
    },
    editId () {
    }
  },
  mounted: function () {
  }
}
document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.modal')
  // var modalAdd = document.getElementById('modal-add')
  M.Modal.init(elems)
  // var instance = M.Modal.getInstance(modalAdd)
  // instance.open()
  M.Sidenav.init(document.querySelectorAll('.sidenav'))
})
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
