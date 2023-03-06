<template>
  <div class="item">
    <i>
      <slot name="icon"></slot>
    </i>
    <div class="details">
      <h3>
        <slot name="heading"></slot>
      </h3>
      <p><slot></slot></p>
    </div>
  </div>
</template>

<style scoped>
/* .item {
  margin-top: 2rem;
  display: flex;
  flex-direction: row;
} */


/* .details {
  flex: 1;
  margin-left: 1rem;
} */

i {
  display: flex;
  place-items: center;
  place-content: center;
  width: 32px;
  height: 32px;

  color: var(--color-text);
  border-radius: 8px;
  border: 1px solid var(--color-border);
  background: var(--color-background);
      /* top: calc(50% - 25px); */

}

.item {
  margin-top: 2rem;
  display: flex;
}

/* left: -26px; */
/* position: absolute; */
/* i {
    top: calc(50% - 25px);

    border: 1px solid var(--color-border);
    background: var(--color-background);
    border-radius: 8px;
    width: 50px;
    height: 50px;
  } */

h3 {
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
}
@media (max-width: 1024px) {
  .item{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 1rem;
  }

  .details{
    display: flex;
    flex-direction: column;
  }

  i {
    margin-bottom: 0.4rem;
  }
}

@media (min-width: 1024px) {
  i {
    width: 50px;
    height: 50px;
  }

  .details {
    flex: 1;
    margin-left: 1rem;
}
}



.item {
  margin-top: 0;
  /* padding: 0.4rem 0 1rem calc(var(--section-gap) / 2); */
  padding: 0.4rem 0 1rem 0;
}

/* .item:before {
    content: " ";
    border-left: 1px solid var(--color-border);
    position: absolute;
    left: 0;
    bottom: calc(50% + 25px);
    height: calc(50% - 25px);
  } */

/* .item:after {
    content: " ";
    border-left: 1px solid var(--color-border);
    position: absolute;
    left: 0;
    top: calc(50% + 25px);
    height: calc(50% - 25px);
  } */

.item:first-of-type:before {
  display: none;
}

.item:last-of-type:after {
  display: none;
}
/* } */
</style>
