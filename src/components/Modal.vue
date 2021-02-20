<template>
<div id="modal-add" class="modal">
    <div class="modal-content">
        <div class="row">
            <div class="input-field col s12">
                    <input @input="setForm()" id="name" type="text" class="validate" :value="allPoisk.name">
                    <label for="name" :class="{active: allPoisk.name}">Партнёр</label>
            </div>
            <div class="input-field col s12">
                    <input @input="setForm()" id="address" type="text" class="validate" :value="allPoisk.address">
                    <label for="address" :class="{active: allPoisk.address}">Адрес</label>
            </div>
            <div class="input-field col s12">
                <select @input="setForm()" id="action" v-model="allPoisk.action">
                    <option value="" disabled selected>Забрать/отдать</option>
                    <option value="о">Отдать</option>
                    <option value="з">Забрать</option>
                    <option value="о/з">Отдать/забрать</option>
                    <option value="к">Купить</option>
                    <option value="др">Другое</option>
                </select>
            </div>
            <div class="input-field col s12">
                    <input @input="setForm()" id="podmenka" type="text" class="validate" :value="allPoisk.podmenka">
                    <label for="podmenka" :class="{active: allPoisk.podmenka}">Подменка</label>
            </div>
            <div class="input-field col s12">
                    <input @input="setForm()" id="comment" type="text" class="validate" :value="allPoisk.comment">
                    <label for="comment" :class="{active: allPoisk.comment}">Комментарий</label>
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
      name: ''
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
      // this.$toast('работает')
    }
  }
}
</script>
