<template>
  <tr>
    <td>{{data.name}}</td>
    <td>{{data.address}}</td>
    <td>{{data.podmenka}}</td>
    <td>{{data.action}}</td>
    <td>
      <a class="btn-small btn-floating waves-effect waves-light red secondary-content" style="margin-left: 10px;"><i class="material-icons">delete</i></a>
      <a v-on:click="setId" href="#modal-add" class="btn-small modal-trigger btn-floating waves-effect waves-light red secondary-content"><i class="material-icons">edit</i></a>
    </td>
  </tr>
</template>
<script>
export default {
  data: () => ({
  }),
  props: [
    'data'
  ],
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
