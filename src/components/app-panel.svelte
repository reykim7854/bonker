<script>
   import {
    Icon,
    Link,
    List,
    ListItem,
    Page,
    Panel,
    Toolbar,
  } from "framework7-svelte";

  import Navbar from "./navbar.svelte";
  import ToggleTheme from "./toggle-theme.svelte";

  const appPanelItem = [
    {
      title: "Recurring",
      link: "/recurring/",
      md: "material:timer_fill",
      ios: "f7:timer_fill"
    }
  ]
</script>

<Panel id="app-panel" left cover>
  <Page>
    <Navbar title="Bonker" hidePanel />
    <List outlineIos strongIos menuList>
      {#each appPanelItem as item}
      <ListItem link={item.link} title={item.title} view="current" panelClose="#app-panel">
        <span slot="media">
          <Icon md={item.md} ios={item.ios} />
        </span>
      </ListItem>
      {/each}
    </List>
    <Toolbar position="bottom">
      <Link noLinkClass></Link>
      <ToggleTheme></ToggleTheme>
    </Toolbar>
  </Page>
</Panel>