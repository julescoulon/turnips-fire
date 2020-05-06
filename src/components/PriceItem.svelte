<script>
  import { fade } from "svelte/transition";
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  export let username;
  export let price;
  export let dodocode;
  export let created;
  export let ttl;
  export let uid;
  export let isExpired;

  import { onMount } from "svelte";

  let time = 0;

  onMount(() => {
    const interval = setInterval(() => {
      time += 1;
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  });

  $: timeleft = new Date(created + (ttl / 60) * 3.6e6 - Date.now() - time);
  $: hours = ("0" + timeleft.getUTCHours()).slice(-2);
  $: minutes = ("0" + timeleft.getUTCMinutes()).slice(-2);
  $: seconds = ("0" + timeleft.getUTCSeconds()).slice(-2);

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async function checkifExpire() {
    while (new Date() < new Date(created + (ttl / 60) * 3.6e6)) {
      // console.log(uid + " n'est pas encore expiré");
      await sleep(10000);
    }
    // console.log(uid + " est expiré");
    isExpired = true;
  }
  checkifExpire();
</script>

<style>
  td {
    padding: 0.5rem;
    text-align: center;
  }

  td:first-child {
    font-weight: 700;
    background: var(--color-action);
    color: var(--color-accent);
  }
</style>

<tr transition:fade={{ delay: 250, duration: 500 }}>
  <td>{price}</td>
  <td>{username}</td>
  <td>
    {#if isExpired != true}{hours}:{minutes}:{seconds}{:else}Expiré{/if}
  </td>
  <td>{dodocode}</td>
</tr>
