<template>
  <div class="header-logo box box-background box-border">
    <img class="" src="../assets/logo/logoEngraved.png" alt="Logo">
    <p>Bienvenido, <span>{{users[1]}}</span>...</p>
    <div class="actions-box">
      <p>Dime que necesitas:</p>
      <div>
        <button>Buscar</button>
        <button>Agregar</button>
        <button>Editar</button>
        <button>Borrar</button>
      </div>  
    </div>
    
  </div>
</template>

<script>
export default {
  data () {
    return {
      users: ['Ivonne', 'Nicolas', 'Francisco']
    }
  }
}
</script>

<style>

</style>