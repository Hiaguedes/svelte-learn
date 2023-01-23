<script lang="ts">
  import Titulo from "./components/titulo.svelte";
  import type IUsuario from "./interfaces/IUsuario";
  import Usuario from "./components/Usuario.svelte";
  import Formulario from "./components/Formulario.svelte";

  let usuario: IUsuario | null = null

  const getUser = (evt: CustomEvent) => {
    console.log('evento personalizado: ', evt)
    usuario = evt.detail
  }

</script>

<div class="app">
    <header>
        <Titulo titulo="Svelte Perfis" />
        <Formulario on:updateUser={getUser} />

      </header>
      {#if usuario}
        <Usuario usuario={usuario}/>
      {/if}
</div>

<style>
   .app {
    max-height: 100vh;
  }

  header {    
    display: flex;
    align-items: center;
    justify-content: space-between;
  }


</style>