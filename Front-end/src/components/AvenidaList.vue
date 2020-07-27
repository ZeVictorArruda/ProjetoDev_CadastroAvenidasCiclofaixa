<template>
  <div class="list row">
    <div class="col-md-8">
      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Busca por nome"
          v-model="nome"/>
        <div class="input-group-append">
          <button class="btn btn-outline-secondary" type="button"
            @click="searchName"
          >
            Busca
          </button>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <h4>Lista de Avenidas</h4>
      <ul class="list-group">
        <li class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(avenida, index) in avenidas"
          :key="index"
          @click="setActiveAvenida(avenida, index)"
        >
          {{ avenida.nome }}
        </li>
      </ul>
    </div>
    <div class="col-md-6">
      <div v-if="currentAvenida">
        <h4>Avenida</h4>
        <div>
          <label><strong>Nome:</strong></label> {{ currentAvenida.nome }}
        </div>
        <div>
          <label><strong>Porcentagem coberta por ciclofaixa:</strong></label> {{ currentAvenida.porcentagem }}
        </div>

        <a class="badge badge-warning"
          :href="'/avenidas/' + currentAvenida.id"
        >
          Editar
        </a>
      </div>
      <div v-else>
        <br />
        <p>Por favor, clique numa avenida...</p>
      </div>
    </div>
  </div>
</template>

<script>
import AvenidaDataService from '../services/AvenidaDataService'

export default {
    name: 'avenidas-list',
    data() {
        return {
            avenidas: [],
            currentAvenida: null,
            currentIndex: -1,
            nome: ''
        }
    },
    methods: {
        retrieveAvenidas() {
            AvenidaDataService.getAll().then(response => {
                this.avenidas = response.data
                console.log(response.data)
            }).catch(e => {
                console.log(e)
            })
        },
        refreshList() {
            this.retrieveAvenidas()
            this.currentAvenida = null
            this.currentIndex = -1
        },
        setActiveAvenida(avenida, index) {
            this.currentAvenida = avenida
            this.currentIndex = index
        },
        searchName() {
            AvenidaDataService.findByName(this.nome).then(response => {
                this.avenidas = response.data
                console.log(response.data)
            }).catch(e => {
                console.log(e)
            })
        }
    },
    mounted() {
        this.retrieveAvenidas()
    }
}
</script>

<style>
.list {
  text-align: left;
  max-width: 750px;
  margin: auto;
}
</style>
