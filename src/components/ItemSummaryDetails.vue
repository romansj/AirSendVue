<template>
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
  padding: 0.5rem 1rem 0.5rem 0rem;

  display: flex;
  flex-direction: column;
  border: 1px solid var(--color-accent);
  margin-bottom: 1rem;
}

summary{
  padding-left: 1rem;
}

@media (min-width: 1024px) {
  .item{
      padding: 0.5rem 1rem 0.5rem 1rem;
  }

  summary{
  padding-left: 0;
}
}

h4 {
  transition: color 0.2s ease;
}

.item:hover .heading {
  color: var(--color-accent);
}



.details {
  flex: 1;
}
</style>
