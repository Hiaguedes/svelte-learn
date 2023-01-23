<script lang="ts">
  import Titulo from "./components/titulo.svelte";

</script>

<div class="app">
    <header>
        <Titulo titulo="Svelte Perfis" />
    </header>
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