<template>
  <div class="submit-form">
    <div v-if="!submitted">
        <div class="form-group">
        <label for="nome">Nome:</label>
        <input
            type="text"
            class="form-control"
            id="nome"
            required
            v-model="avenida.nome"
            name="nome"
        />
      </div>

      <div class="form-group">
        <label for="extensao">Extensão:</label>
        <input
            type="number"
            step="0.1"
            class="form-control"
            id="extensao"
            required
            v-model="avenida.extensao"
            name="extensao"
        />

      </div>
        <div class="form-group">
        <label for="ciclofaixa">Ciclofaixa:</label>
        <input
            type="checkbox"
            class="form-control"
            id="ciclofaixa"
            required
            v-model="avenida.ciclofaixa"
            name="ciclofaixa"
        />
      </div>

      <div class="form-group">
        <label for="extciclo">Extensão da Ciclofaixa:</label>
        <input
            type="number"
            step="0.1"
            class="form-control"
            id="extciclo"
            required
            v-model="avenida.extciclo"
            name="extciclo"
        />

      </div>

      <button @click="saveAvenida" class="btn btn-success">Cadastrar</button>
    </div>

    <div v-else>
      <h4>Cadastrado com sucesso</h4>
      <button class="btn btn-success" @click="newAvenida">Adicionar</button>
    </div>
  </div>
</template>

<script>
import AvenidaDataService from '../services/AvenidaDataService'

export default {
    name: 'add-avenida',
    data () {
        return {
            avenida: {
                id: null,
                nome: '',
                extensao: 0,
                ciclofaixa: false,
                extciclo: 0
            },
            submitted: false
        }
    },
    methods: {
        saveAvenida() {
            var data = {
                nome: this.avenida.nome,
                extensao: this.avenida.extensao,
                ciclofaixa: this.avenida.ciclofaixa,
                extciclo: this.avenida.extciclo
            }

            AvenidaDataService.create(data).then(response => {
                this.avenida.id = response.data.id
                console.log(response.data)
                this.submitted = true
            }).catch(e => {
                console.log(e)
            })
        },

        newAvenida() {
            this.submitted = false
            this.avenida = {
              nome: '',
              extensao: 0,
              ciclofaixa: false,
              extciclo: 0
            }
        }
    }
}
</script>

<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>
