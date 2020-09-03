<footer class="footer">
  <div class="footer-container">
    <a href="/" class="footer__logo">
      <span class="sr-only">Arch Logo</span>
      <img class="footer__logo__img" src="/logo-white.svg" alt="site footer logo">
    </a>
    <nav class="footer__nav">
      <ul class="footer__nav__menu">
        <li class="footer__nav__menu__item">
          <a class="t-body--bold t-mid-gray" href="/portfolio">Portfolio</a>
        </li>
        <li class="footer__nav__menu__item">
          <a class="t-body--bold t-mid-gray" href="/about">About Us</a>
        </li>
        <li class="footer__nav__menu__item">
          <a class="t-body--bold t-mid-gray" href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
    <a class="button button--hero footer__button" href="/portfolio">
      <span class="t-body--bold t-white">See Our Portfolio</span>
      <span class="button--hero__arrow"></span>
    </a>
  </div>
</footer>

<style>
  .footer {
    margin-top: 7.2rem;
  }
  @media screen and (min-width: 768px) {
    .footer {
      margin-top: 20rem;
    }
  }

  .footer-container {
    position: relative;
    text-align: center;
    padding-bottom: 4.8rem;
    background-color: var(--color-very-light-gray);
  }
  @media screen and (min-width: 768px) {
    .footer-container {
      display: flex;
      height: 12rem;
      padding-bottom: 0;
      align-items: center;
      flex-flow: row nowrap;
    }
  }
  @media screen and (min-width: 1024px) {
    .footer-container {
      height: 20rem;
      max-width: 111rem;
      margin: 0 auto;
    }
  }

  .footer-container::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 0;
    height: 6rem;
    background-color: var(--color-white);
  }
  @media screen and (min-width: 768px) {
    .footer-container::before {
      top: 0;
      right: 0;
      bottom: 0;
      height: 100%;
      left: 79.6875%;
    }
  }
  @media screen and (min-width: 768px) {
    .footer-container::before {
      left: 88.649%;
    }
  }

  .footer__logo {
    z-index: 1;
    width: 12rem;
    height: 12rem;
    position: relative;
    align-items: center;
    display: inline-flex;
    justify-content: center;
    background-color: var(--color-dark-blue);
  }
  @media screen and (min-width: 1024px) {
    .footer__logo {
      width: 20rem;
      height: 20rem;
    }
  }
  

  .footer__logo__img {
    width: 5.8rem;
    height: 2.3rem;
  }
  @media screen and (min-width: 1024px) {
    .footer__logo__img {
      width: 9.7rem;
      height: 4rem;
    }
  }

  .footer__nav {
    margin: 3.2rem 0;
  }
  @media screen and (min-width: 768px) {
    .footer__nav {
      margin: 0 4rem;
    }
  }
  @media screen and (min-width: 1024px) {
    .footer__nav {
      margin: 0;
      margin-left: 8.5rem;
    }
  }

  .footer__nav__menu__item:not(:last-of-type) {
    margin-bottom: 3.2rem;
  }
  @media screen and (min-width: 768px) {
    .footer__nav__menu__item:not(:last-of-type) {
      margin-bottom: 0;
    }
  }

  @media screen and (min-width: 768px) {
    .footer__nav__menu__item:nth-child(2) {
      margin-left: 5.6rem;
      margin-right: 4.8rem;
    }
  }


  @media screen and (min-width: 768px) {
    .footer__nav__menu {
      display: inline-flex;
    }
  }

  @media screen and (min-width: 768px) {
    .footer__button {
      z-index: 1;
      position: absolute;
      right: 0;
    }
  }
</style>