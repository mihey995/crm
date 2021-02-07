<template>
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
      <tr>
        <td>ооо сокращённое название</td>
        <td>казанское ш. д5 этаж 1 ресепшн, правая дверь отдельный вход и тд и тп. ещё пару строй и как раз априапри апри</td>
        <td>tn2375 </td>
        <td>о/з</td>
        <td>
          <a class="btn-small btn-floating waves-effect waves-light red secondary-content" style="margin-left: 10px;"><i class="material-icons">delete</i></a>
          <a v-on:click="setId" href="#modal-add" class="btn-small modal-trigger btn-floating waves-effect waves-light red secondary-content"><i class="material-icons">edit</i></a>
        </td>
      </tr>
      <tr>
        <td>Alan</td>
        <td>Jellybean</td>
        <td>33</td>
        <td>44</td>
        <td>
          <a class="btn-small btn-floating waves-effect waves-light red secondary-content" style="margin-left: 10px;"><i class="material-icons">delete</i></a>
          <a v-on:click="setId" href="#modal-add" class="btn-small modal-trigger btn-floating waves-effect waves-light red secondary-content"><i class="material-icons">edit</i></a>
        </td>
      </tr>
      <tr>
        <td>Jonathan</td>
        <td>Lollipop</td>
        <td>333</td>
        <td>444</td>
        <td>
          <a class="btn-small btn-floating waves-effect waves-light red secondary-content" style="margin-left: 10px;"><i class="material-icons">delete</i></a>
          <a v-on:click="setId" href="#modal-add" class="btn-small modal-trigger btn-floating waves-effect waves-light red secondary-content"><i class="material-icons">edit</i></a>
        </td>
      </tr>
    </tbody>
  </table>
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
