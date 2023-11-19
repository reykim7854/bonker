<script>
  import { Page, useStore } from "framework7-svelte";
  import { Account } from "../js/utils/account.js";
  import AccountCard from "../components/accounts/account-card.svelte";
  import Fab from "../components/fab.svelte";
  import Grid from "../components/grid.svelte";
  import Navbar from "../components/navbar.svelte";
  import NoData from "../components/no-data.svelte";
  import { accountStore } from "../js/stores/account.js";
  import { onMount } from "svelte";

  $: accounts = useStore(accountStore, "accounts", (e) => (accounts = e));

  onMount(() => {
    new Account().getAccounts();
  });
</script>

<Page name="accounts">
  <Navbar title="Accounts" />
  {#if accounts.length <= 0}
    <NoData></NoData>
  {:else}
    <Grid --min-column="300px">
      {#each accounts as account (account.id)}
        <AccountCard {...account} />
      {/each}
    </Grid>
  {/if}
  <Fab></Fab>
</Page>
