<script>
  import {
    f7,
    BlockTitle,
    Link,
    List,
    ListItem,
    PageContent,
    Sheet,
    useStore,
  } from "framework7-svelte";
  import { ToggleTheme } from "../js/utils/toggle-theme.js";

  const theme = new ToggleTheme();
  let storeTheme = useStore("bonkerAppTheme", (e) => (storeTheme = e));
  $: f7.setDarkMode(
    storeTheme === "true" ? true : storeTheme === "false" ? false : "auto",
  );
</script>

<Link
  iconOnly
  iconIos="f7:sun_max_fill"
  iconMd="material:light_mode"
  sheetOpen="#toggle-theme-sheet"
  panelClose="#app-panel"
></Link>

<Sheet
  id="toggle-theme-sheet"
  closeByOutsideClick
  swipeToClose
  swipeHandler="#toggle-theme-sheet-swipe-handler"
>
  <div id="toggle-theme-sheet-swipe-handler" class="swipe-handler" />

  <PageContent>
    <BlockTitle>Toggle Theme</BlockTitle>
    <List strongIos outlineIos dividersIos>
      <ListItem
        radio
        radioIcon="end"
        title="Same as System"
        name="toggle-theme"
        value="auto"
        checked={theme.fieldTheme === "auto"}
        onChange={(e) => theme.toggleTheme(e.target.value)}
      ></ListItem>
      <ListItem
        radio
        radioIcon="end"
        title="Light"
        value="false"
        name="toggle-theme"
        checked={theme.fieldTheme === "false"}
        onChange={(e) => theme.toggleTheme(e.target.value)}
      ></ListItem>
      <ListItem
        radio
        radioIcon="end"
        title="Dark"
        value={true}
        name="toggle-theme"
        checked={theme.fieldTheme === "true"}
        onChange={(e) => theme.toggleTheme(e.target.value)}
      ></ListItem>
    </List>
  </PageContent>
</Sheet>
