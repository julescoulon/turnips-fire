<script>
  import { auth, googleProvider } from "./firebase";
  import { authState } from "rxfire/auth";

  const unsubscribe = authState(auth).subscribe(u => (user = u));

  function login() {
    auth.signInWithPopup(googleProvider);
  }

  import Navbar from "./components/Navbar.svelte";
  import Prices from "./components/Prices.svelte";

  export let name;
  export let description;

  let user;
</script>

<style>
  main {
    flex-grow: 1;
  }
</style>

<Navbar {name} {description} {...user} on:login={login} />
<main>
  <div class="container">
    <!-- {#if user}
      <h2>Bienvenue {user.displayName},</h2>
    {:else}
      <h2>Bienvenue,</h2>
    {/if} -->
    <Prices {...user} />
  </div>
</main>
