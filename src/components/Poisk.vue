<template>
    <div>
        Бумага
        <a class="btn-floating waves-effect waves-light red secondary-content" style="margin-left: 10px;"><i class="material-icons">delete</i></a>
        <a v-on:click="setId" href="#modal-add" class="modal-trigger btn-floating waves-effect waves-light red secondary-content"><i class="material-icons">edit</i></a>
    </div>
</template>
<script>
export default {
  data: () => ({
  }),
  methods: {
    setId () {
      this.$store.commit('editIdPoisk', {
        name: 'Бумага',
        idPoisk: 11,
        url: 'https://avito.ru/svetocopy',
        timeStart: '09:10',
        timeEnd: '21:20',
        interval: 45
      })
    }
  }
}
</script>
