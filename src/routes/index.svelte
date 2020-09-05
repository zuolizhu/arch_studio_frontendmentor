<script>
	import NavSticker from '../components/NavSticker.svelte';
	import HomeSlider from '../components/HomeSlider.svelte';
	import FeaturedProjects from '../components/FeaturedProjects.svelte';
	import PageTransition from '../components/PageTransition.svelte';
	let sticker = 'Home';

	
</script>

<svelte:head>
	<title>Home | Arch Studio Website Challenge | Frontend Mentor</title>
</svelte:head>

<NavSticker sticker={sticker}/>
<PageTransition>
<section class="hero">
	<HomeSlider/>	
</section>

<section class="welcome">
	<div class="container">
		<h2 class="welcome__bg t-h1-l t-very-light-gray">Welcome</h2>
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

<section class="smallteam">
	<div class="container">
		<div class="smallteam__content">
			<h2 class="t-h2 t-white smallteam__content__heading">Small team,<br>big ideas</h2>
			<a class="button button--smallteam" href="/about">
				<span class="t-body--bold t-white">About Us</span>
				<span class="button--smallteam__arrow"></span>
			</a>
		</div>
	</div>
</section>

<section class="featured">
	<div class="container">
		<div class="featured__heading">
			<h2 class="t-h2 t-dark-blue featured__heading__text">Featured</h2>
			<a class="button button--all featured__button featured__button--top" href="/portfolio">
				<span class="t-body--bold t-white button--all__text">See All</span>
				<span class="button--all__arrow"></span>
			</a>
		</div>
		<FeaturedProjects/>
		<a class="button button--all featured__button featured__button--bottom" href="/portfolio">
			<span class="t-body--bold t-white button--all__text">See All</span>
			<span class="button--all__arrow"></span>
		</a>
	</div>
</section>
</PageTransition>
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
	
	/* Smallteam Section */
	.smallteam > .container {
		width: 100%;
		height: 56rem;
		position: relative;
		padding: 18rem 3.2rem;
		background-size: cover;
		background-repeat: no-repeat;
		background-image: url(/home/mobile/image-small-team.jpg);
	}
	@media screen and (min-width: 768px) {
		.smallteam > .container {
			width: 74.609%;
			margin: 0 auto;
			padding: 16.8rem 0rem 16.8rem 5.8rem;
			background-image: url(/home/tablet/image-small-team.jpg);
		}
	}
	@media screen and (min-width: 1024px) {
		.smallteam > .container {
			width: 80%;
			max-width: 111rem;
			padding: 17.1rem 0rem 19rem 19rem;
			background-image: url(/home/desktop/image-small-team.jpg);
		}
	}

	/* overlay */
	.smallteam > .container::before {
		position: absolute;
		content: '';
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: rgba(0, 0, 0, .50);
	}

	.smallteam__content {
		z-index: 1;
		height: 100%;
		position: relative;
	}

	.smallteam__content__heading {
		margin-bottom: 3.2rem;
	}
	@media screen and (min-width: 768px) {
		.smallteam__content__heading {
			margin-bottom: 3.6rem;
		}
	}

	/* Featured Section */
	.featured {
		margin-top: 7.2rem;
	}
	@media screen and (min-width: 768px) {
		.featured {
			margin-top: 20rem;
		}
	}

	.featured > .container {
		padding: 0 3.2rem;
	}
	@media screen and (min-width: 768px) {
		.featured > .container {
			padding: 0 9.8rem 0 9.7rem;
		}
	}
	@media screen and (min-width: 1024px) {
		.featured > .container {
			padding: 0 3.2rem;
			margin: 0 auto;
			max-width: 111rem;
		}
	}
	@media screen and (min-width: 1200px) {
		.featured > .container {
			padding: 0;
		}
	}

	.featured__heading {
		margin-bottom: 4.8rem;
	}
	@media screen and (min-width: 560px) {
		.featured__heading {
			width: 100%;
			align-items: center;
			display: inline-flex;
			margin-bottom: 8.5rem;
			justify-content: space-between;
		}
	}
	@media screen and (min-width: 1024px) {
		.featured__heading {
			margin-bottom: 6.4rem;
		}
	}

	.featured__heading__text {
		margin-top: .65rem;
	}

	.featured__button {
		margin-top: 2.4rem;
	}
	@media screen and (min-width: 560px) {
		.featured__button {
			margin-top: 0;
		}
	}

	.featured__button--top {
		display: none;
	}
	@media screen and (min-width: 560px) {
		.featured__button--top {
			display: inline-flex;
		}
	}
	.featured__button--bottom {
		display: inline-flex;
	}
	@media screen and (min-width: 560px) {
		.featured__button--bottom {
			display: none;
		}
	}
</style>
