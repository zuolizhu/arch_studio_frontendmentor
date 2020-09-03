<script>
	import Nav from '../components/Nav.svelte';
	import NavSticker from '../components/NavSticker.svelte';
	import Footer from '../components/Footer.svelte';

	export let segment;
</script>

<style>

</style>
<Nav {segment}/>

<main>
	<slot></slot>
</main>

<Footer/>