<template>     
  <div class="actions box box-background box-border">
    <p>Acciones rápidas:</p>
    <div class="buttons">
      <div v-for="button in buttons">
        <button >{{ button }}</button>
      </div>        
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      buttons: ['buscar', 'agregar', 'editar', 'borrar']

    }
  }
}
</script>

<style>

</style>