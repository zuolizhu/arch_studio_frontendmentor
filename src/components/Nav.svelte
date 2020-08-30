<script>
	import { fly } from 'svelte/transition';
	export let segment;
	let active = false;
</script>

<header class="header">
	<div class="header-container{active ? ' active': ''}">
		<a class="header__logo" href="/">
			<span class="sr-only">Arch Logo</span>
			<img src="/logo.svg" alt="site logo">
		</a>
		<button
			aria-label="trigger to open the side menu"
			title="trigger to open the side menu"
			class="button button--burger"
			on:click="{() => { active = !active }}"
		>
		<span class="sr-only">Burger button</span>
		{#if active}
			<svg xmlns="http://www.w3.org/2000/svg" width="20" height="21"><path fill="#1B1D23" fill-rule="evenodd" d="M17.425.954l2.12 2.121-7.424 7.425 7.425 7.425-2.121 2.12L10 12.622l-7.425 7.425-2.12-2.121L7.878 10.5.454 3.075 2.575.955 10 8.378 17.425.954z"/></svg>
		{:else}
			<svg xmlns="http://www.w3.org/2000/svg" width="24" height="17"><g fill="#1B1D23" fill-rule="evenodd"><path d="M0 0h24v3H0zM0 7h24v3H0zM0 14h24v3H0z"/></g></svg>
		{/if}
		</button>
		<nav class="header__main-nav">
			<ul class="header__main-nav__menu">
				<li class="header__main-nav__menu__item"><a class="t-main-nav" aria-current="{segment === 'portfolio' ? 'page' : undefined}" href="portfolio">Portfolio</a></li>
				<li class="header__main-nav__menu__item"><a class="t-main-nav" aria-current="{segment === 'about' ? 'page' : undefined}" href="about">About Us</a></li>
				<li class="header__main-nav__menu__item"><a class="t-main-nav" aria-current="{segment === 'contact' ? 'page' : undefined}" href="contact">Contact</a></li>
			</ul>
		</nav>
	</div>

	{#if active}
	<div 
		transition:fly="{{ x: 200, duration: 300 }}"
		class="header__sidebar"
		on:click="{() => { active = !active }}"
	>
		<ul class="sidebar__menu">
			<li class="sidebar__menu__item">
				<a href="/portfolio" class="t-sidebar">Portfolio</a>
			</li>
			<li class="sidebar__menu__item">
				<a href="/about" class="t-sidebar">About Us</a>
			</li>
			<li class="sidebar__menu__item">
				<a href="/contact" class="t-sidebar">Contact</a>
			</li>
		</ul>
	</div>
	{/if}
</header>

<style>
	/* Type specs */
  .t-sidebar {
    font-size: 1.8rem;
    line-height: 2.5rem;
    color: var(--color-dark-blue);
    font-weight: var(--weight-bold);
	}
	
	.t-main-nav {
		font-size: 1.5rem;
		line-height: 2.5rem;
		color: var(--color-mid-gray);
		font-weight: var(--weight-bold);
	}

	.header {
		position: relative;
    height: 9.6rem;
		width: 100%;
		text-align: center;
	}

	@media screen and (max-width: 767px) {
		.header__sidebar {
			position: fixed;
			top: 9.6rem;
			left: 0;
			right: 0;
			bottom: 0;
			background-color: rgba(0, 0, 0, .50);
			display: flex;
			flex-direction: row;
			justify-content: flex-end;
		}
	}
	@media screen and (min-width: 768px) {
		.header__sidebar {
			display: none;
		}
	}

	.header-container {
		padding: 3.2rem;
    display: inline-flex;
    align-items: center;
    width: 100%;
	}
	@media screen and (min-width: 768px) {
		.header-container {
			padding: 5.6rem 9.8rem 5.6rem 9.7rem;
			max-width: 111rem;
		}
	}
	@media screen and (min-width: 1280px) {
		.header-container {
			padding: 5.6rem 0;
		}
	}

	.header-container.active {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
		height: 9.6rem;
	}
	
	.header__logo {
		display: inline-flex;
    width: 7.7rem;
    height: 3.2rem;
    overflow: hidden;
	}
	@media screen and (min-width: 768px) {
		.header__logo {
			width: 9.7rem;
    	height: 4rem;
		}
	}

	.header__logo img {
		width: 100%;
		height: 100%;
	}

	.button--burger {
		margin-left: auto;
	}
	@media screen and (min-width: 768px) {
		.button--burger {
			display: none;
		}
	}

	.sidebar__menu {
    width: 91.467%;
    padding: 4.8rem;
    height: 23.5rem;
    background-color: var(--color-very-light-gray);
	}
	
	.sidebar__menu__item:not(:last-of-type) {
    margin-bottom: 3.2rem;
  }

	[aria-current] {
		position: relative;
		display: inline-block;
	}
	.t-main-nav[aria-current] {
		color: var(--color-dark-blue);
	}

	[aria-current]::after {
		position: absolute;
		content: '';
		width: 2.4rem;
		height: .1rem;
		background-color: var(--color-dark-blue);
		display: block;
		bottom: -.7rem;
		left: 50%;
		transform: translateX(-50%);
	}

	.header__main-nav {
		display: none;
	}
	@media screen and (min-width: 768px) {
		.header__main-nav {
			display: inline-flex;
		}
	}

	.header__main-nav__menu {
		margin-left: 7.8rem;
		display: inline-flex;
	}
	@media screen and (min-width: 1280px) {
		.header__main-nav__menu {
			margin-left: 9.4rem;
		}
	}

	.header__main-nav__menu__item:nth-child(2) {
		margin-left: 5.6rem;
		margin-right: 4.8rem;
	}

</style>