<template>
  <!-- <div class="item">
    <div class="details">
      <h4 class="heading">
        <slot name="heading"></slot>
      </h4>

      <p>
        <slot name="description"></slot>
      </p>
    </div>
  </div>-->

  <details class="item">
    <summary>
      <slot name="heading"></slot>
    </summary>

    <p class="details">
      <slot name="description"></slot>
    </p>
  </details>
</template>


<style scoped>
.item {
  border-radius: 15px;
  padding: 0.5rem 1rem 0.5rem 1rem;

  display: flex;
  flex-direction: column;
  border: 1px solid var(--color-accent);
}

h4 {
  transition: color 0.2s ease;
}

.item:hover .heading {
  color: var(--color-accent);
}

.item {
  margin-bottom: 1rem;
}

.details {
  flex: 1;
}
</style>
