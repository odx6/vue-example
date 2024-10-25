<template>
  <div>
    <h1 style="color:red">
    <slot>Soy el componenteSlot</slot>
    </h1>
    <h2>
    <slot name="slotdos">
    hola  componenteSlot
    </slot>
    </h2>
    <hr>
    <slot name="slottres">
    slot tres popr defecto </slot>
  </div>
</template>

<script>
export default {
  name: 'ComponenteSlot',

}
</script >

<style>
</style>