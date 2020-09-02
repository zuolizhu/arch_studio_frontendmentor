<script>
	import NavSticker from '../components/NavSticker.svelte';
	import HomeSlider from '../components/HomeSlider.svelte';
	
	let sticker = 'Home';

	
</script>

<svelte:head>
	<title>Home | Arch Studio Website Challenge | Frontend Mentor</title>
</svelte:head>

<NavSticker sticker={sticker}/>

<section class="hero">
	<HomeSlider/>	
</section>


<style>
	.hero {
		width: 100%;
	}
	@media screen and (min-width: 768px) {
		.hero {
			width: 74.609%;
			margin: 0 auto;
		}
	}
	@media screen and (min-width: 1024px) {
		.hero {
			width: 80%;
			max-width: 111rem;
		}
	}
</style>
