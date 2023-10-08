<script>
  import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    Link,
    Page,
  } from "framework7-svelte";
  import Navbar from "../components/navbar.svelte";
</script>

<Page name="accounts">
  <Navbar title="Accounts" />
  <Card>
    <CardHeader
      class="no-padding-bottom flex-direction-column align-items-flex-start"
    >
      <div>GoPay</div>
      <small class="label">0000000000000000</small>
    </CardHeader>
    <CardContent>
      <div class="label">Balance</div>
      <h2 class="no-margin-vertical">Rp2.903.345.123.756</h2>
    </CardContent>
    <CardFooter>
      <Link>Edit</Link>
      <Link>Details</Link>
    </CardFooter>
  </Card>
</Page>

<style scoped>
  .label {
    opacity: 0.5;
    font-size: medium;
  }
</style>
