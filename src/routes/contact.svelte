<script context="module">
	export async function preload({ params }, session) {
		const apikey = session.apikey;
		return { apikey };
  }
</script>

<script>
	import NavSticker from '../components/NavSticker.svelte';
	import ContactForm from '../components/ContactForm.svelte';
	import { onMount } from 'svelte';
	import { mapSkin } from '../components/MapSkin.js';
	export let apikey;
	let sticker = 'Contact';
	let map;

	const defaultZoomLevel = 5.2;

	// locations need to be pinned on map
	const officeLocations = [
		['Main Office', 35.133276, -85.717512],
		['office II', 31.998111, -94.7753252]
	];
	
	function viewLocationOnMap() {
		map.setZoom(10);
		map.panTo({
			lat: officeLocations[this.dataset.locationid][1],
			lng: officeLocations[this.dataset.locationid][2]
		});
	}

	onMount(async () => {
		if (document.getElementById('scr-googlemap')) {
			// refresh this page to reload the google map api
			location.reload();
		} else {
			// loading Google map
			const script = document.createElement('script');
			script.setAttribute('id', 'scr-googlemap');
			script.src = `https://maps.googleapis.com/maps/api/js?key=${apikey}&callback=initMap`;
			script.defer = true;
	
			// Placing markers on map
			function setMarkers(map) {
				const icon = '/icons/icon-location.svg';
				for (let i = 0; i < officeLocations.length; i++) {
					const office = officeLocations[i];
					const marker = new google.maps.Marker({
						map: map,
						icon: icon,
						title: office[0],
						animation: google.maps.Animation.DROP,
						position: { lat: office[1], lng: office[2] }
					});
	
					marker.addListener('click', () => {
						map.setZoom(10);
						map.panTo(marker.getPosition());
					});
				}
			}
	
			
			// Init map
			window.initMap = function() {
				map = new google.maps.Map(document.getElementById('map'), {
					zoom: defaultZoomLevel,
					disableDefaultUI: true,
					center: {lat: 33.6628839, lng: -90.8873037},
					styles: mapSkin
				});
	
				// placing markers on map
				setMarkers(map);
	
				// back to init center
				map.addListener('click', () => {
					map.setZoom(defaultZoomLevel);
					map.setCenter({lat: 33.6628839, lng: -90.8873037});
				});
			};
			document.head.appendChild(script);
		}
	});

</script>

<svelte:head>
	<title>Contact | Arch Studio Website Challenge | Frontend Mentor</title>
</svelte:head>

<NavSticker sticker={sticker}/>

<section class="contactintro">
	<div class="container">
		<div class="contactintro__hero"></div>
		<div class="contactintro__content">
			<h1 class="t-h1-l t-very-light-gray contactintro__bg">Contact</h1>
			<h2 class="t-h2 t-dark-blue contactintro__content__heading">Tell us about<br>your project</h2>
			<p class="t-body t-dark-gray">We’d love to hear more about your project. Please, leave a message below or give 
			us a call. We have two offices, one in Texas and one in Tennessee. If you find 
			yourself nearby, come say hello!</p>
		</div>
	</div>
</section>

<section class="contactdetails">
	<div class="container">
		<h2 class="t-h2 t-dark-blue contactdetails__heading">Contact Details</h2>
		<div class="contactdetails__offices">
			<div class="contactdetails__office">
				<h3 class="contactdetails__office__name t-office-name t-dark-gray">Main Office</h3>
				<div class="contactdetails__office__info__wrap">
					<div class="contactdetails__office__info t-office-detail t-dark-gray">
						<span>Mail:</span><span>archone@mail.com</span>
						<span>Address:</span><span>1892 Chenoweth Drive TN</span>
						<span>Phone:</span><span>123-456-3451</span>
					</div>
					<div
					on:click={viewLocationOnMap}
					data-locationid="0"
					class="contactdetails__office__view">
						<span class="t-body--bold t-dark-blue contactdetails__office__view__text">View on Map</span>
						<span class="contactdetails__office__view__arrow"></span>
					</div>
				</div>

			</div>
			<div class="contactdetails__office">
				<h3 class="contactdetails__office__name t-office-name t-dark-gray">Office II</h3>
				<div class="contactdetails__office__info__wrap">
					<div class="contactdetails__office__info t-office-detail t-dark-gray">
						<span>Mail:</span><span>archtwo@mail.com</span>
						<span>Address:</span><span>3399 Wines Lane TX</span>
						<span>Phone:</span><span>832-123-4321</span>
					</div>
					<div 
					on:click={viewLocationOnMap}
					data-locationid="1"
					class="contactdetails__office__view">
						<span class="t-body--bold t-dark-blue contactdetails__office__view__text">View on Map</span>
						<span class="contactdetails__office__view__arrow"></span>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<section class="contactmap">
	<div class="container">
		<div id="map"></div>
	</div>
</section>

<section class="contactform">
	<ContactForm/>
</section>

<style>
	@media screen and (min-width: 768px) {
		.contactintro {
			padding-left: 9.7rem;
			padding-right: 9.8rem;
		}
	}
	@media screen and (min-width: 1024px) {
		.contactintro {
			max-width: 111rem;
			margin: 0 auto;
		}
	}
	@media screen and (min-width: 1366px) {
		.contactintro {
			padding: 0;
		}
	}

	@media screen and (min-width: 768px) {
		.contactintro > .container {
			display: flex;
			position: relative;
			padding-top: 28.9rem;
			flex-flow: row nowrap;
			background-size: cover;
			justify-content: flex-end;
			background-repeat: no-repeat;
			background-image: url(/contact/tablet/image-hero.jpg);
		}
	}
	@media screen and (min-width: 1024px) {
		.contactintro > .container {
			padding-top: 21.7rem;
			background-size: 63.5rem 72rem;
			background-image: url(/contact/desktop/image-hero.jpg);
		}
	}

	.contactintro__hero {
		height: 24rem;
		position: relative;
		background-size: cover;
		background-repeat: no-repeat;
		background-image: url(/contact/mobile/image-hero.jpg);
	}
	@media screen and (min-width: 768px) {
		.contactintro__hero {
			background: none;
			display: none;
		}
	}

	.contactintro__hero::before {
		bottom: 0;
		content: '';
		left: 0;
		right: 8.534%;
		height: 4.5rem;
		position: absolute;
		background-color: var(--color-white);
	}
	@media screen and (min-width: 768px) {
		.contactintro__hero::before {
			content: none;
		}
	}

	.contactintro__content {
		padding: 3.5rem 3.2rem 0;
	}
	@media screen and (min-width: 768px) {
		.contactintro__content {
			width: 51.5rem;
			position: relative;
			padding: 16.3rem 0 0 5.9rem;
			background-color: var(--color-white);
		}
	}
	@media screen and (min-width: 1024px) {
		.contactintro__content {
			width: 62.8rem;
			padding: 23.5rem 0 0 18.2rem;
		}
	}

	@media screen and (min-width: 768px) {
		.contactintro__content::before {
			content: '';
			top: 8.8rem;
			left: 6rem;
			width: 6.5rem;
			height: .1rem;
			position: absolute;
			background-color: var(--color-light-gray);
		}
	}
	@media screen and (min-width: 1024px) {
		.contactintro__content::before {
			top: 16rem;
			left: 18.2rem;
		}
	}

	.contactintro__content__heading {
		margin-bottom: 1.2rem;
	}
	@media screen and (min-width: 768px) {
		.contactintro__content__heading {
			margin-top: .4rem;
			margin-bottom: 5.3rem;
		}
	}

	.contactintro__bg {
		display: none;
	}
	@media screen and (min-width: 768px) {
		.contactintro__bg {
			right: .1rem;
			top: -9.1rem;
			display: block;
			position: absolute;
		}
	}
	@media screen and (min-width: 1024px) {
		.contactintro__bg {
			right: 0rem;
    	top: -8.7rem;
		}
	}

	/* Contact Details Section */
	.contactdetails {
		padding: 0 3.2rem;
		margin-top: 7.2rem;
	}
	@media screen and (min-width: 768px) {
		.contactdetails {
			margin-top: 20rem;
			padding: 0 9.8rem 0 9.7rem;
		}
	}

	.contactdetails > .container {
		position: relative;
		padding-top: 6.8rem;
	}
	@media screen and (min-width: 768px) {
		.contactdetails > .container {
			padding-top: 7.5rem;
		}
	}
	@media screen and (min-width: 1200px) {
		.contactdetails > .container {
			display: flex;
			margin: 0 auto;
			max-width: 111rem;
			flex-flow: row nowrap;
			align-items: flex-start;
		}
	}

	.contactdetails > .container::before {
		content: '';
		top: 0;
		left: 0;
		width: 6.5rem;
		height: .1rem;
		position: absolute;
		background-color: var(--color-light-gray);
	}

	.contactdetails__heading {
		width: 20rem;
	}
	@media screen and (min-width: 768px) {
		.contactdetails__heading {
			width: auto;
		}
	}
	@media screen and (min-width: 1200px) {
		.contactdetails__heading {
			width: 22.5rem;
		}
	}

	.contactdetails__office__view {
		cursor: pointer;
		display: inline-flex;
		align-items: center;
	}
	
	.contactdetails__office__view__text {
		text-decoration: none;
	}

	.contactdetails__office__view:hover > .contactdetails__office__view__text {
		text-decoration: underline;
	}
	.contactdetails__office__view:hover > .contactdetails__office__view__arrow {
		margin-left: 1.2rem;
	}

	.contactdetails__office__info {
		display: grid;
		margin-top: .8rem;
		margin-bottom: 1.6rem;
		grid-template-columns: 8rem 1fr;
	}
	@media screen and (min-width: 768px) {
		.contactdetails__office__info {
			margin-bottom: 0;
		}
	}
	@media screen and (min-width: 1200px) {
		.contactdetails__office__info {
			margin-bottom: 3.2rem;
			grid-template-columns: 11.3rem 1fr;
		}
	}

	.contactdetails__office__view__arrow {
		width: 2.4rem;
		height: 1.8rem;
		margin-left: 2.4rem;
		display: inline-block;
		background-size: cover;
		background-position: center;
		transition: var(--transition) margin-left;
		background-image: url(/icons/icon-arrow-s.svg);
	}
	

	.contactdetails__offices {
		margin-top: 4.8rem;
	}
	@media screen and (min-width: 768px) {
		.contactdetails__offices {
			margin-top: 6.4rem;
		}
	}
	@media screen and (min-width: 1200px) {
		.contactdetails__offices {
			display: flex;
			width: 73rem;
			margin-top: 0;
			margin-left: auto;
			flex-flow: row nowrap;
		}
	}

	.contactdetails__office:not(:last-of-type) {
		margin-bottom: 4rem;
	}
	@media screen and (min-width: 1200px) {
		.contactdetails__office:not(:last-of-type) {
			margin-bottom: 0;
			margin-right: 5.6rem;
		}
	}

	@media screen and (min-width: 768px) {
		.contactdetails__office__info__wrap {
			display: flex;
			align-items: center;
			flex-flow: row nowrap;
			justify-content: space-between;
		}
	}
	@media screen and (min-width: 1200px) {
		.contactdetails__office__info__wrap {
			align-items: flex-start;
			flex-flow: column nowrap;
		}
	}

	/* Contact Map Section */
	#map {
		height: 36.7rem;
	}
	@media screen and (min-width: 768px) {
		#map {
			height: 56rem;
		}
	}

	:global(.gmnoprint) {
		opacity: 0;
	}

	.contactmap {
		margin-top: 7.2rem;
	}
	@media screen and (min-width: 768px) {
		.contactmap {
			margin-top: 20rem;
			padding: 0 9.8rem;
		}
	}

	.contactmap > .container {
		max-width: 111rem;
		margin: 0 auto;
	}
	
	/* Contact Form Section */
	.contactform {
		margin-top: 7.2rem;
		padding: 0 3.2rem;
	}
	@media screen and (min-width: 768px) {
		.contactform {
			margin-top: 20rem;
			padding: 0 9.8rem;
		}
	}
	@media screen and (min-width: 1024px) {
		.contactform {
			margin-top: 16rem;
		}
	}
</style>