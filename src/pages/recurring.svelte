<script>
  import { Block, BlockTitle, Navbar, Page } from "framework7-svelte";
  import FriendAdder from "../components/friend-adder.svelte";
  import FriendList from "../components/friend-list.svelte";
</script>

<Page noToolbar>
  <Navbar title="Recurring" backLink="Back" />
  <BlockTitle>Simple Dexie App</BlockTitle>
  <Block>
    <FriendAdder />

    <h2>Result</h2>
    <FriendList />
  </Block>
</Page>
