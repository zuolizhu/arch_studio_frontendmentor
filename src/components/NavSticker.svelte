<script>
  export let sticker = 'home';
</script>

<div id="nav-sticker">
  <div class="nav-sticker__line"></div>
  <h1 class="t-nav-sticker">{sticker}</h1>
</div>

<style>
  #nav-sticker {
    display: none;
  }
  @media screen and (min-width: 768px) {
    #nav-sticker {
      top: 0;
      left: 0;
      display: flex;
      position: absolute;
      align-items: center;
      flex-flow: row nowrap;
      transform-origin: left bottom;
      transform: translateY(-100%) translateX(3.9rem) rotate(90deg);
    }
  }
  @media screen and (min-width: 1280px) {
    #nav-sticker {
      transform: translateY(-100%) translateX(6.4rem) rotate(90deg);
    }
  }

  .nav-sticker__line {
    width: 10.4rem;
    height: .1rem;
    background-color: var(--color-light-gray);
    margin-right: 4.8rem;
  }

  .t-nav-sticker {
    font-size: 1.5rem;
    line-height: 2.5rem;
    letter-spacing: 1.5rem;
    font-weight: var(--weight-mid);
    color: var(--color-light-gray);
    text-transform: uppercase;
  }
</style>