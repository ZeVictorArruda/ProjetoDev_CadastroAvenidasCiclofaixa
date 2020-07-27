<template>
  <!--<pre>{{currentAvenida}}</pre>-->
  <div v-if="currentAvenida" class="edit-form">
    <h4>Avenida</h4>
    <form>
      <div class="form-group">
        <label for="nome">Nome</label>
        <input type="text" class="form-control" id="nome"
          v-model="currentAvenida.nome"
        />
      </div>
      <div class="form-group">
        <label for="extensao">Extensão</label>
        <input type="number" step="0.1" class="form-control" id="extensao"
          v-model="currentAvenida.extensao"
        />
      </div>
      <div class="form-group">
        <label><strong>Ciclofaixa:</strong></label>
        <input type="checkbox" name="ciclofaixa" id="ciclofaixa"
        v-model="currentAvenida.ciclofaixa"
        />
      </div>

      <div class="form-group">
        <label for="extciclo">Extensão da ciclofaixa</label>
        <input type="number" step="0.1" class="form-control" id="extciclo"
          v-model="currentAvenida.extciclo"
        />
      </div>
      
    </form>
    <button class="badge badge-danger mr-2"
      @click="deleteAvenida"
    >
      Deletar
    </button>

    <button type="submit" class="badge badge-success"
      @click="updateAvenida"
    >
      Atualizar
    </button>
    <p>{{ message }}</p>
  </div>

  <div v-else>
    <br />
    <p>Por favor, escolha uma avenida...</p>
  </div>
</template>

<script>
import AvenidaDataService from '../services/AvenidaDataService'

export default {
    name: 'avenida',
    data() {
        return {
            currentAvenida: null,
            message: ''
        }
    },
    methods: {
        getAvenida(id) {
            AvenidaDataService.get(id).then(response => {
                this.currentAvenida = response.data
                console.log(response.data)
            }).catch(e => {
                console.log(e)
            })
        },
        updateAvenida() {
            AvenidaDataService.update(this.currentAvenida.id, this.currentAvenida).then(response => {
                console.log(response.data)
                this.message = 'Avenida atualizada com sucesso'
                this.$router.push({name: 'avenidas'})
            }).catch(e => {
                console.log(e)
            })
        },
        deleteAvenida() {
            AvenidaDataService.delete(this.currentAvenida.id).then(response => {
                console.log(response.data)
                this.$router.push({name: 'avenidas'})
            }).catch(e => {
                console.log(e)
            })
        }
    },
    mounted() {
        this.message = ''
        this.getAvenida(this.$route.params.id)
    }
}
</script>

<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>