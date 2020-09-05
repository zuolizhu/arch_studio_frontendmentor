<script>
	import Siema from 'siema'
	import { onMount, createEventDispatcher } from 'svelte'
	
	export let perPage = 1
	export let loop = true
	export let autoplay = 3600
	export let duration = 200
	export let easing = 'ease-out'
	export let startIndex = 0
	export let draggable = true
	export let multipleDrag = true	
	export let threshold = 20
	export let rtl = false
	let currentIndex = startIndex;
	
	let siema
	let controller
	let timer
	const dispatch = createEventDispatcher()
	$: pips = controller ? controller.innerElements : []
	$: currentPerPage = controller ? controller.perPage : perPage
	$: totalDots = controller ? Math.ceil(controller.innerElements.length / currentPerPage) : []
	
	onMount(() => {
		controller = new Siema({
			selector: siema,
			perPage: typeof perPage === 'object' ? perPage : Number(perPage),
			loop,
  			duration,
  			easing,
  			startIndex,
  			draggable,
 			multipleDrag,
  			threshold,
  			rtl,
			onChange: handleChange
		})
		
		if(autoplay) {
			timer = setInterval(right, autoplay);
		}
		return () => {
			autoplay && clearInterval(timer)
			controller.destroy()
		}
	})
	export function isDotActive (currentIndex, dotIndex) {
        if (currentIndex < 0) currentIndex = pips.length + currentIndex;
        return currentIndex >= dotIndex*currentPerPage && currentIndex < (dotIndex*currentPerPage)+currentPerPage
    }
	
	export function left () {
		controller.prev()
	}
	
	export function right () {
		controller.next()
	}
	export function go (index) {
		controller.goTo(index)
	}
	
	export function pause() {
		clearInterval(timer);
	}
	export function resume() {
		if (autoplay) {
			timer = setInterval(right, autoplay);
		}
	}
	function handleChange (event) {
		currentIndex = controller.currentSlide
		dispatch('change', {
			currentSlide: controller.currentSlide,
			slideCount: controller.innerElements.length
		} )
	}
</script>

<div class="carousel">
	<div class="slides" bind:this={siema}>
		<slot></slot>
	</div>
	<ul class="carousel-nav">
		{#each {length: totalDots} as _, i}
		<li on:click={() => go(i*currentPerPage)} class={isDotActive(currentIndex, i) ? "active" : ""}>0{i + 1}</li>
		{/each}
	</ul>
</div>

<style>
	.carousel {
		position: relative;
		width: 100%;
		justify-content: center;
		align-items: center;
	}
  
  .carousel-nav {
    display: none;
	}
	@media screen and (min-width: 1024px) {
		.carousel-nav {
			height: 8rem;
			width: 32rem;
			left: -8rem;
			bottom: 0;
			position: absolute;
			display: inline-flex;
		}
	}

	.carousel-nav li {
		width: 8rem;
		height: 8rem;
		display: flex;
		cursor: pointer;
		font-size: 1.5rem;
		line-height: 2.5rem;
		align-items: center;
		justify-content: center;
		color: var(--color-mid-gray);
		font-weight: var(--weight-bold);
		background-color: var(--color-white);
		transition: var(--transition) background-color;
	}
	.carousel-nav li.active {
		color: var(--color-white);
		background-color: var(--color-dark-blue);
	}

	.carousel-nav li:not(.active):hover {
		background-color: var(--color-very-light-gray);
	}
</style>

