<script>
  import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    Link,
  } from "framework7-svelte";

  export let accountName = "-";
  export let accountNumber = "-";
  export let balance = 0;
</script>

<Card>
  <CardHeader
    class="no-padding-bottom flex-direction-column align-items-flex-start"
  >
    <div>{accountName}</div>
    <small class="label">{accountNumber}</small>
  </CardHeader>
  <CardContent>
    <div class="label">Balance</div>
    <h2 class="no-margin-vertical">Rp. {balance}</h2>
  </CardContent>
  <CardFooter>
    <Link>Edit</Link>
    <Link>Details</Link>
  </CardFooter>
</Card>

<style scoped>
  .label {
    opacity: 0.5;
    font-size: medium;
  }
</style>
