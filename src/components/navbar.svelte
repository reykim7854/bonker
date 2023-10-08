<script>
  import { Navbar, NavLeft, NavTitle, Link } from "framework7-svelte";

  export let title = "Bonker";
  export let backLink = false;
  export let hidePanel = false;
</script>

<!-- Top Navbar -->
<Navbar {backLink}>
  {#if !backLink && !hidePanel}
    <NavLeft>
      <Link iconIos="f7:menu" iconMd="material:menu" panelOpen="#app-panel" />
    </NavLeft>
  {/if}
  <NavTitle>{title}</NavTitle>
</Navbar>
