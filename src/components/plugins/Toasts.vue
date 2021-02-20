<script>
export default {
  install (Vue, options) {
    // 1. add global method or property
    Vue.prototype.$toast = function (text) {
      window.M.toast({ html: text })
    }
  }
}
</script>
