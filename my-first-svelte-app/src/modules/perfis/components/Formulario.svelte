<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import type IUserGithub from "../interfaces/IUserGithub";
  import type IUsuario from "../interfaces/IUsuario";

  let inputValue: string;
  let messageError: Boolean;

  const dispatch = createEventDispatcher<{
    updateUser: IUsuario;
  }>();

  const onSubmit = async () => {
    const res = await fetch(`https://api.github.com/users/${inputValue}`);

    if (res.ok) {
      messageError = false;
      const user: IUserGithub = await res.json();
      dispatch("updateUser", {
        avatar_url: user.avatar_url,
        login: user.login,
        nome: user.name,
        perfil_url: user.url,
        repositorios_publicos: user.public_repos,
        seguidores: user.followers,
      });
    } else {
      messageError = true;
      dispatch("updateUser", null)
    }
  };
</script>

<div class="busca-usuario">
  <form on:submit|preventDefault={onSubmit}>
    <input
      placeholder="Pesquise o usuario do github"
      bind:value={inputValue}
      type="text"
      class="input"
      class:erro-input={messageError}
    />

    {#if messageError}
      <span class="erro">Usuario nao encontrado</span>
    {/if}

    <div class="botao-container">
      <button type="submit" class="botao">Buscar</button>
    </div>
  </form>
</div>

<style>
    .erro {
        position: absolute;
        bottom: -25px;
        left: 0;
        font-style: italic;
        font-weight: normal;
        font-size: 16px;
        line-height: 19px;
        z-index: -1;
        color: #ff003e;
    }
    
    
    .busca-usuario {
        position: relative;
        width: 70%;
    }
    
    .input {
        padding: 15px 25px;
        width: calc(100% - 8.75rem);
        font-size: 1rem;
        border-radius: 8px;
        border: 1px solid #2e80fa;
        box-shadow: 0px 17px 52px rgba(222, 231, 247, 0.4);
        outline: 0;
    }

    .erro-input {
      border: 1px solid #ff003e;
    }

  .input::placeholder {
    font-family: "Roboto";
    font-style: italic;
    font-weight: 300;
    font-size: 19.5px;
    line-height: 26px;
    color: #6e8cba;
  }

  .botao-container {
    position: absolute;
    width: 9.625rem;
    right: 0;
    top: 0;
    bottom: 0;
    display: flex;
  }

  .botao {
    padding: 15px 24px;
    border-radius: 8px;
    border: none;
    background: #2e80fa;
    line-height: 26px;
    color: #fff;
    font-size: 22px;
    cursor: pointer;

    transition: background-color 0.2s;

    display: flex;
    align-items: center;
    gap: 13px;
  }

  .botao:hover {
    background: #4590ff;
  }
</style>
