<script>
  import {
    Link,
    Toolbar,
    View,
    Views,
  } from "framework7-svelte";
  import { _ } from "svelte-i18n";
</script>

<!-- Views/Tabs container -->
<Views tabs class="safe-areas">
  <!-- Tabbar for switching views-tabs -->
  <Toolbar tabbar icons bottom>
    <Link
      tabLink="#view-overview"
      tabLinkActive
      iconIos="f7:chart_bar_alt_fill"
      iconMd="material:assessment"
      text={$_("tab_view.tab_overviews_label")}
    />
    <Link
      tabLink="#view-accounts"
      iconIos="f7:wallet_fill"
      iconMd="material:account_balance_wallet"
      text={$_("tab_view.tab_accounts_label")}
    />
  </Toolbar>

  <!-- Your main view/tab, should have "view-main" class. It also has "tabActive" prop -->
  <View id="view-overview" name="overview" main tab tabActive url="/" />

  <!-- Accounts View -->
  <View id="view-accounts" name="accounts" tab url="/accounts/" />
</Views>