<template>
  <div class="container-add">
    <app-navbar class="navbar"></app-navbar>
    <div class="add-grid box box-background box-border">
      <h2>Añadir un nuevo item<br> a la Base de Datos</h2>
      <hr><br>
      <form class="add-form" action="" method="get">
       
        <label for="name">Nombre: </label>
        <input type="text" placeholder="Escritorio Napoleón">

        <label for="name">Descripción: </label>
        <textarea name="description" id="" cols="30" rows="6asd"></textarea>
      
     
        <label for="name">Referencia: </label>
        <input type="text" placeholder="A234">
      
     
        <label for="number">Cantidad: </label>
        <input type="number" placeholder="1">
      
     
        <label for="name">Precio: </label>
        <input type="number" placeholder="300">

      </form>
    </div>
    <app-footer class="footer"></app-footer>
  </div>  
</template>

<script>
export default {
  data () {
    return {

    }
  }
}
</script>

<style>

</style>