<template>
<div id="modal-add" class="modal">
    <div class="modal-content">
        <div class="row">
            <div class="input-field col s12">
                    <input @input="setForm()" id="name" type="text" class="validate" :value="allPoisk.name">
                    <label for="name" :class="{active: allPoisk.name}">введите любое название поиска</label>
            </div>
            <div class="input-field col s12">
                    <input @input="setForm()" id="url" type="text" class="validate" :value="allPoisk.url">
                    <label for="url" :class="{active: allPoisk.url}">введите URL адрес</label>
            </div>
            <div class="input-field col s12">
                Время начала:
                <div class="input-field inline">
                    <input @input="setForm()" type="time" id="timeStart" name="timeStart" :value="allPoisk.timeStart"/>
                </div>
            </div>
            <div class="input-field col s12">
                Время окончания:
                <div class="input-field inline">
                    <input @input="setForm()" type="time" id="timeEnd" name="timeEnd" :value="allPoisk.timeEnd"/>
                </div>
            </div>
            <div class="input-field col s12">

                <select @input="setForm()" id="interval" style="display:block" v-model="allPoisk.interval">
                    <option value="" disabled selected>Выберите интервал</option>
                    <option value="1">1мин</option>
                    <option value="2">2мин</option>
                    <option value="5">5мин</option>
                    <option value="10">10мин</option>
                    <option value="20">20мин</option>
                    <option value="30">30мин</option>
                    <option value="45">45мин</option>
                    <option value="60">60мин</option>
                </select>
            </div>
        </div>
    </div>
    <div class="modal-footer">
      <button @click="setAllForm" href="#!" class="modal-close waves-effect waves-green btn-flat">Сохранить</button>
    </div>
</div>
</template>
<script>
export default {
  data () {
    return {
      url: ''
    }
  },
  computed: {
    allPoisk: {
      get () {
        return this.$store.state.modal
      },
      set (value) {
        // console.log(event.target.id, value)
        // this.$store.commit('editDraftModal', input, val)
      }
    }
  },
  methods: {
    setForm () {
      // console.log(event.target.value, event.target.id)
      this.$store.commit('editIdPoisk', { [event.target.id]: event.target.value })
    },
    setAllForm () {
      this.$store.dispatch('dbSetLogistic')
    }
  }
}
</script>
