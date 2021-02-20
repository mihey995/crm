<template>
<div id="app">
  <Header/>
  <Modal/>
  <router-view/>
</div>
</template>
<script>
import Header from '@/components/Header'
import Modal from '@/components/Modal'
import M from 'materialize-css'
export default {
  components: {
    Header, Modal
  },
  mounted () {
    M.AutoInit()
    window.w = M
  }
}
</script>
