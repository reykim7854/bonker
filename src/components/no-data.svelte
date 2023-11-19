<script>
  import { Block, BlockTitle, Icon } from "framework7-svelte";
</script>

<div class="msg-wrapper padding-left padding-right">
  <div
    class="msg-container display-flex flex-direction-column justify-content-center text-align-center"
  >
    <BlockTitle>No Data Found!</BlockTitle>
    <Block>
      <p>
        Add them by using the <Icon
          ios="f7:plus"
          md="material:add"
          size="16px"
        /> button
      </p>
    </Block>
  </div>
</div>

<style>
  .msg-wrapper {
    max-height: 100vh;
    height: 100%;
  }

  .msg-container {
    height: inherit;
  }
</style>
