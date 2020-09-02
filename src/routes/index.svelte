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

<section class="welcome">
	<div class="container">
		<h1 class="welcome__bg t-h1-l t-very-light-gray">Welcome</h1>
		<h2 class="t-h2 t-dark-blue welcome__heading">Welcome to<br>Arch Studio</h2>
		<p class="t-body t-dark-gray welcome__body">
			We have a unique network and skillset to help bring your projects to life. Our small team of highly skilled individuals combined with our large network put us in a strong position to deliver exceptional results.
			<br><br>
			Over the past 10 years, we have worked on all kinds of projects. From stations to high-rise buildings, we create spaces that inspire and delight.
			<br><br>
			We work closely with our clients so that we understand the intricacies of each project. This allows us to work in harmony the surrounding area to create truly stunning projects that will stand the test of time.
		</p>
	</div>
</section>


<style>
	/* Hero Section */
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

	/* Welcome Section */
	.welcome {
		margin-top: 7.2rem;
		padding: 0 3.2rem;
		overflow: hidden;
	}
	@media screen and (min-width: 768px) {
		.welcome {
			margin-top: 7.4rem;
			padding: 0 9.8rem;
		}
	}
	@media screen and (min-width: 1024px) {
		.welcome {
			margin-top: 9.5rem;
			padding: 0;
			max-width: 111rem;
			margin-left: auto;
			margin-right: auto;
		}
	}

	.welcome > .container {
		padding: 6.8rem 0 9.7rem;
		position: relative;
	}
	@media screen and (min-width: 768px) {
		.welcome > .container {
			padding: 17.5rem 0 20rem;
		}
	}
	@media screen and (min-width: 1024px) {
		.welcome > .container {
			background-repeat: no-repeat;
			background-size: 35rem 56.8rem;
			padding: 18rem 0 20rem 18.9rem;
			background-position: right top 10rem;
			background-image: url(/home/desktop/image-welcome.jpg);
		}
	}

	@media screen and (max-width: 767px) {
		.welcome > .container::before {
			content: '';
			top: 0;
			left: 0;
			height: .1rem;
			width: 6.5rem;
			position: absolute;
			background-color: var(--color-light-gray);
		}
	}
	@media screen and (min-width: 768px) {
		.welcome > .container::before {
			content: none;
		}
	}

	.welcome__bg {
		display: none;
	}
	@media screen and (min-width: 768px) {
		.welcome__bg {
			display: block;
			position: absolute;
			top: 0;
			left: 0;
		}
	}
	@media screen and (min-width: 1024px) {
		.welcome__bg {
			display: block;
			position: absolute;
			top: 1.3rem;
			left: 0;
		}
	}
	

	.welcome__body {
		margin-top: 2.9rem;
	}
	@media screen and (min-width: 768px) {
		.welcome__body {
			margin-top: 5.6rem;
		}
	}
	@media screen and (min-width: 1024px) {
		.welcome__body {
			width: 44.4rem;
			margin-top: 5.15rem;
		}
	}
	
	@media screen and (min-width: 1024px) {
		.welcome__heading {
			position: relative;
			z-index: 1;
		}
	}
	
</style>
