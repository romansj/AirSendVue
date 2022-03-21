<template>
  <div class="item">
    <div class="details">
      <details>
        <summary>
            <slot name="heading"></slot>
        </summary>
        <p>
          <slot name="price"></slot>
        </p>

        <p>
          <slot name="description"></slot>
        </p>
      </details>
    </div>
  </div>
</template>


<style scoped>
.item {
  border-radius: 15px;
  padding: 1rem;

  display: flex;
  flex-direction: column;
  transition: 0.4s;
  border: 1px solid var(--color-accent);

  margin-bottom: 1rem;
}

.item i {
  margin-bottom: 1rem;
}

.details {
  flex: 1;
}
</style>
