<script>
  import { onMount } from "svelte";
  import {
    f7,
    BlockTitle,
    Link,
    List,
    ListItem,
    PageContent,
    Sheet,
  } from "framework7-svelte";

  let theme = "auto";

  /**
   * For toggling light or dark theme
   *
   * @param event button properties for toggling theme
   */
  const toggleTheme = (event) => {
    const value = event.target.value;
    theme = value;

    f7.setDarkMode(
      value === "true" ? true : value === "false" ? false : "auto",
    );

    const storage = JSON.parse(window.localStorage.getItem("bonker"));
    window.localStorage.setItem(
      "bonker",
      JSON.stringify({ ...storage, ...{ theme: value } }),
    );
  };

  onMount(() => {
    const storage = JSON.parse(window.localStorage.getItem("bonker"));
    theme = storage && storage?.theme ? storage.theme : "auto";
  });
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
        checked={theme === "auto"}
        onChange={toggleTheme}
      ></ListItem>
      <ListItem
        radio
        radioIcon="end"
        title="Light"
        value="false"
        name="toggle-theme"
        checked={theme === "false"}
        onChange={toggleTheme}
      ></ListItem>
      <ListItem
        radio
        radioIcon="end"
        title="Dark"
        value="true"
        name="toggle-theme"
        checked={theme === "true"}
        onChange={toggleTheme}
      ></ListItem>
    </List>
  </PageContent>
</Sheet>
