<script>
	import Nav from '../components/Nav.svelte';
	import NavSticker from '../components/NavSticker.svelte';
	
	export let segment;
</script>

<style>

</style>
<Nav {segment}/>

<main>
	<slot></slot>
</main>