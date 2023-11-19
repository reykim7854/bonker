<div class="grid-wrapper">
  <div class="grid-container">
    <slot />
  </div>
</div>

<style scoped>
  @media only screen and (width >= 768px) {
    .grid-container {
      display: grid;
      width: 100%;
      grid-template-columns: repeat(
        auto-fill,
        minmax(var(--min-column, 1fr), 1fr)
      );
    }
  }

  @media only screen and (width >= 1024px) {
    .grid-wrapper {
      display: flex;
      justify-content: center;
    }

    .grid-container {
      width: clamp(1024px, 100%, 1440px);
    }
  }
</style>
