<script>
  import TodoItem from "./TodoItem.svelte";

  import { db } from "../firebase";
  import { collectionData } from "rxfire/firestore";
  import { startWith } from "rxjs/operators";

  // User ID passed from parent
  export let uid;

  // Form Text
  let price = "";
  let dodocode = "";
  let username = "";
  let ttl = 0;
  let isExpired = false;

  // Query requires an index, see screenshot below
  const collection = "prices";
  const query = db.collection(collection).orderBy("price", "desc");
  const prices = collectionData(query, "id").pipe(startWith([]));

  let isTaskadded = false;

  function add() {
    db.collection(collection)
      .doc(uid)
      .set({
        uid,
        price,
        dodocode,
        username,
        ttl,
        isExpired,
        created: Date.now()
      });
    isTaskadded = true;
  }

  function removeItem() {
    db.collection(collection)
      .doc(uid)
      .delete();
    isTaskadded = false;
  }

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async function waitforUID() {
    while (uid === undefined) {
      await sleep(500);
    }
    db.collection(collection)
      .doc(uid)
      .get()
      .then(docSnapshot => {
        if (docSnapshot.exists) {
          isTaskadded = true;
        }
      });
  }
  waitforUID();
</script>

<style>
  form {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 0.5rem;
    grid-auto-rows: minmax(2rem, auto);
    width: 50%;
  }
  @media screen and (max-width: 960px) {
    form {
      width: 100%;
    }
  }
  label {
    align-self: center;
    white-space: nowrap;
  }

  ::placeholder {
    color: var(--color-action);
    opacity: 50%;
  }

  input,
  button {
    background: none;
    border: none;
    color: var(--color-action);
    text-align: center;
  }
  button {
    background: var(--color-action);
    color: var(--color-accent);
    padding: 0.5rem 1.5rem;
    border-radius: 1rem;
    font-family: "Life Savers";
    cursor: pointer;
  }
  button span + i {
    margin-left: 0.5rem;
  }
  table {
    width: 100%;
    border-collapse: collapse;
  }
  th {
    border-bottom: solid 2px white;
    padding: 0.25rem;
  }

  .empty {
    text-align: center;
    padding: 2rem 1rem;
    animation: emptytable 1s;
  }

  .fa-spinner {
    animation: rotate 2s infinite cubic-bezier(0.68, -0.6, 0.32, 1.6);
  }

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(720deg);
    }
  }
</style>

<section id="form">
  {#if uid}
    {#if !isTaskadded}
      <h2>Partager votre prix actuel du navet</h2>

      <form on:submit|preventDefault={add}>
        <label for="username">Nom d'utilisateur :</label>
        <input
          type="text"
          bind:value={username}
          placeholder="Username"
          id="username"
          minlength="1"
          maxlength="24"
          required />
        <label for="price">Prix :</label>
        <input
          type="number"
          bind:value={price}
          placeholder="90"
          id="price"
          min="1"
          max="1000"
          required />
        <label for="dodocode">Dodocode :</label>
        <input
          type="text"
          bind:value={dodocode}
          id="dodocode"
          minlength="5"
          maxlength="5"
          required />
        <label for="ttl">TTL (en minutes):</label>
        <input type="input" bind:value={ttl} id="ttl" required />
        <button type="submit">Partager</button>
      </form>
    {:else}
      <button on:click={removeItem}>
        <span>Retirer votre prix</span>
        <i class="fas fa-eraser" />
      </button>
    {/if}
    <br />
  {/if}
  <h2>Liste des prix actuels du navet</h2>
  <table>
    <thead>
      <tr>
        <th>Prix</th>
        <th>Nom d'utilisateur</th>
        <th>Expire dans</th>
        <th>DodoCode</th>
      </tr>
    </thead>
    <tbody>
      {#each $prices as price}
        <TodoItem {...price} />
      {:else}
        <tr>
          <td class="empty" colspan="4">
            <i class="fas fa-spinner" />
            En cours de chargement...
          </td>
        </tr>
      {/each}
    </tbody>
  </table>
</section>
