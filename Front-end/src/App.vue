<template>
  <div id="app">
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <a href="#" class="navbar-brand">Cadastro de Avenidas</a>
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
          <a href="/avenidas" class="nav-link">Avenidas</a>
        </li>
        <li class="nav-item">
          <a href="/adicionar" class="nav-link">Adicionar</a>
        </li>
      </div>
    </nav>
    <div class="container mt-3">
      <router-view />
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>