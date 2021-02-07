<template>
<div id="modal-add" class="modal">
    <div class="modal-content">
        <div class="row">
            <div class="input-field col s12">
                    <input v-model="allPoisk" id="url" type="text" class="validate">
                    <label for="url" :class="{active: allPoisk.name}">введите любое название поиска</label>
            </div>
            <div class="input-field col s12">
                    <input  id="url" type="text" class="validate" :value="allPoisk.url">
                    <label for="url" :class="{active: allPoisk.url}">введите URL адрес</label>
            </div>
            <div class="input-field col s12">
                Время начала:
                <div class="input-field inline">
                    <input type="time" id="timeStart" name="timeStart" :value="allPoisk.timeStart"/>
                </div>
            </div>
            <div class="input-field col s12">
                Время окончания:
                <div class="input-field inline">
                    <input type="time" id="timeEnd" name="timeEnd" :value="allPoisk.timeEnd"/>
                </div>
            </div>
            <div class="input-field col s12">

                <select style="display:block" v-model="allPoisk.interval">
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
      <button href="#!" class="modal-close waves-effect waves-green btn-flat">Сохранить</button>
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
        console.log(event, value)
        // this.$store.commit('editDraftModal', input, val)
      }
    }
  },
  methods: {
    saveDraft (input, val) {
      this.$store.commit('editDraftModal', input, val)
    }
  }
}
</script>
