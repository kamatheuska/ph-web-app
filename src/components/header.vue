<template>
    <div class="box box-background box-border">
      <img class="" src="../assets/logo/logoEngraved.png" alt="Logo">
      <p>Bienvenido, <span>{{users[1]}}</span>...</p> 
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
