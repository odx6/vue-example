

<script>
export default {
  name: 'MiElemento',
  props:['tipo'],
  render(createElement){
    return createElement(
        this.tipo,
        this.$slots.default,
    )
  }

}
</script >

<style scoped>
h1{
    color:red;
}
</style>