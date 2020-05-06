<script>
  import { auth, googleProvider } from "../firebase";
  import { authState } from "rxfire/auth";
  const unsubscribe = authState(auth).subscribe(u => (user = u));

  export let name;
  export let description;
  export let user;

  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  function login() {
    dispatch("login", "");
  }
</script>

<style>
  nav {
    background: var(--color-action);
    color: var(--color-heavy);
    height: 5rem;
    box-shadow: -4px 0px 8px var(--color-heavy);
    z-index: 1;
    margin-bottom: 2rem;
  }

  .container {
    display: flex;
    align-items: center;
    height: 100%;
  }

  .brand {
    display: flex;
  }

  .brand img {
    height: 3rem;
    margin-right: 1rem;
  }

  .brand .name {
    font-size: 2rem;
    font-family: "Life Savers", cursive;
    font-weight: 800;
  }

  .user {
    margin-left: auto;
    text-align: right;
  }

  .user button {
    background: none;
    border: none;
    padding: none;
  }
</style>

<nav>
  <div class="container">
    <div class="brand">
      <img src="./navet.svg" alt="" />
      <div>
        <span class="name">{name}</span>
        <br />
        <span class="description">{description}</span>
      </div>
    </div>
    <div class="user">
      {#if user}
        <span>Déconnexion</span>
        <button on:click={() => auth.signOut()}>
          <i class="fas fa-sign-out-alt" />
        </button>
      {:else}
        <span>Connexion</span>
        <button on:click={login}>
          <i class="fas fa-sign-in-alt" />
        </button>
      {/if}
    </div>
  </div>

</nav>
