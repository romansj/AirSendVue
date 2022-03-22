<template>
  <div class="item">
    <i>
      <slot name="icon"></slot>
    </i>
    <div class="details">
      <h3>
        <slot name="heading"></slot>
      </h3>

      <p>
        <slot name="price"></slot>
      </p>

      <p>
        <slot name="description"></slot>
      </p>
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
}

@media (hover: hover) {
  .item:hover {
    background-color: var(--color-accent);
  }
}

.item i {
  margin-left: 1rem;
}

.details {
  flex: 1;
}
</style>
