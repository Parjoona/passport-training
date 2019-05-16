<template>
    <div class="mdc-layout-grid">
      <div class="mdc-layout-grid__inner">
        <div class="mdc-layout-grid__cell"></div>
        <div class="mdc-layout-grid__cell">
          <div class="mdc-card">
            <div class="mdc-card__media card-title--body">
                <i class="material-icons">lock</i>
                <p class="mdc-typography--body1">Login or Register</p>
            </div>

            <div class="mdc-card__actions">
              <button class="mdc-button mdc-card__action mdc-card__action--button">
                <span class="mdc-button__label">Login</span>
              </button>
              <button class="mdc-button mdc-card__action mdc-card__action--button">
                <span class="mdc-button__label">Register</span>
              </button>
            </div>
          </div>
        </div>
        <div class="mdc-layout-grid__cell"></div>
      </div>
    </div>
</template>


<script>
export default {
  data() {
    return {

    }
  }
}
</script>

<style>
  .card-title--body {
    margin: 1.5rem 0 0;
    text-align: center;
  }
</style>
