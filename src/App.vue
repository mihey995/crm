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
export default {
  components: {
    Header, Modal
  }
}
</script>
