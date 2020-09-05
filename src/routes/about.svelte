<script>
	import NavSticker from '../components/NavSticker.svelte';
	import PageTransition from '../components/PageTransition.svelte';
	
	let sticker = 'About Us';
	const leaders = [
		{ id: 1, name: 'Jake Richards', title: 'Chief Architect', avatar: '/about/desktop/avatar-jake.jpg' },
		{ id: 2, name: 'Thompson Smith', title: 'Head of Finance', avatar: '/about/desktop/avatar-thompson.jpg' },
		{ id: 3, name: 'Jackson Rourke', title: 'Lead Designer', avatar: '/about/desktop/avatar-jackson.jpg' },
		{ id: 4, name: 'Maria Simpson', title: 'Senior Architect', avatar: '/about/desktop/avatar-maria.jpg' },
	];
</script>

<svelte:head>
	<title>About Us | Arch Studio Website Challenge | Frontend Mentor</title>
</svelte:head>

<NavSticker sticker={sticker}/>

<PageTransition>
<section class="aboutintro">
	<div class="container">
		<div class="aboutintro__hero"></div>
		<div class="aboutintro__content">
			<h1 class="t-h1-l t-very-light-gray aboutintro__bg">About</h1>
			<h2 class="t-h2 t-dark-blue aboutintro__content__heading">Your team of<br>professionals</h2>
			<p class="t-body t-dark-gray">Our small team of world-class professionals will work with you every step of the way. 
			Strong relationships are at the core of everything we do. This extends to the 
			relationship our projects have with their surroundings.</p>
		</div>
	</div>
</section>

<section class="heritage">
	<div class="container">
		<h2 class="t-h2 t-dark-blue heritage__heading">Our<br>Heritage</h2>
		<p class="t-body t-dark-gray heritage__body">Founded in 2007, we started as a trio of architects. Our complimentary skills and 
		relentless attention to detail turned Arch into one of the most sought after boutique 
		firms in the country.
		<br><br>
		Speciliazing in Urban Design allowed us to focus on creating exceptional structures that 
		live in harmony with their surroundings. We consider every detail from every surrounding 
		element to inform our designs. 
		<br><br>
		Our small team of world-class professionals provides input on every project.</p>
	</div>
</section>

<section class="leaders">
	<div class="container">
		<h2 class="leaders__heading t-h2 t-dark-blue">The<br>Leaders</h2>
		<div class="leaders__gird">
			{#each leaders as leader (leader.id)}
			<div class="leader">
				<div class="leader__avatar">
					<img src="{leader.avatar}" alt="leader avatar">
				</div>
				<div class="leader__details">
					<p class="leader__detail__name t-leader-name t-dark-blue">{leader.name}</p>
					<p class="leader__detail__title t-body t-dark-blue t-op75">{leader.title}</p>
				</div>
				<div class="leader__socials">
					<a class="social" href="https://www.linkedin.com/" target="_blank">
						<span class="sr-only">LinkedIn</span>
						<svg class="social__icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40"><path fill="#1B1D23" d="M36 0H4C1.8 0 0 1.8 0 4v32c0 2.2 1.8 4 4 4h32c2.2 0 4-1.8 4-4V4c0-2.2-1.8-4-4-4zM12 34H6V16h6v18zM9 12.6C7 12.6 5.4 11 5.4 9S7 5.4 9 5.4 12.6 7 12.6 9 11 12.6 9 12.6zM34 34h-6V23.4c0-1.6-1.4-3-3-3s-3 1.4-3 3V34h-6V16h6v2.4c1-1.6 3.2-2.8 5-2.8 3.8 0 7 3.2 7 7V34z"/></svg>
					</a>
					<a class="social" href="https://twitter.com/" target="_blank">
						<span class="sr-only">Twitter</span>
						<svg class="social__icon" xmlns="http://www.w3.org/2000/svg" width="40" height="33"><path fill="#1B1D23" d="M40 4.262a16.384 16.384 0 01-4.713 1.291 8.22 8.22 0 003.608-4.54 16.44 16.44 0 01-5.212 1.992 8.193 8.193 0 00-5.99-2.592c-5.298 0-9.191 4.944-7.995 10.075C12.88 10.147 6.833 6.88 2.785 1.915.635 5.603 1.67 10.428 5.323 12.872a8.172 8.172 0 01-3.715-1.027c-.09 3.802 2.635 7.358 6.582 8.15a8.225 8.225 0 01-3.707.14 8.213 8.213 0 007.667 5.698A16.5 16.5 0 010 29.233a23.232 23.232 0 0012.58 3.687c15.237 0 23.845-12.868 23.325-24.41A16.708 16.708 0 0040 4.262z"/></svg>
					</a>
				</div>
			</div>
			{/each}
		</div>
	</div>
</section>
</PageTransition>
<style>
	/* About Intro Section */
	@media screen and (min-width: 768px) {
		.aboutintro {
			padding-left: 9.7rem;
			padding-right: 9.8rem;
		}
	}
	@media screen and (min-width: 1024px) {
		.aboutintro {
			max-width: 111rem;
			margin: 0 auto;
		}
	}
	@media screen and (min-width: 1366px) {
		.aboutintro {
			padding: 0;
		}
	}

	@media screen and (min-width: 768px) {
		.aboutintro > .container {
			display: flex;
			position: relative;
			padding-top: 28.9rem;
			flex-flow: row nowrap;
			background-size: cover;
			justify-content: flex-end;
			background-repeat: no-repeat;
			background-image: url(/about/tablet/image-hero.jpg);
		}
	}
	@media screen and (min-width: 1024px) {
		.aboutintro > .container {
			padding-top: 21.7rem;
			background-size: 63.5rem 72rem;
			background-image: url(/about/desktop/image-hero.jpg);
		}
	}

	.aboutintro__hero {
		height: 24rem;
		position: relative;
		background-size: cover;
		background-repeat: no-repeat;
		background-image: url(/about/mobile/image-hero.jpg);
	}
	@media screen and (min-width: 768px) {
		.aboutintro__hero {
			background: none;
			display: none;
		}
	}

	.aboutintro__hero::before {
		bottom: 0;
		content: '';
		left: 0;
		right: 8.534%;
		height: 4.5rem;
		position: absolute;
		background-color: var(--color-white);
	}
	@media screen and (min-width: 768px) {
		.aboutintro__hero::before {
			content: none;
		}
	}

	.aboutintro__content {
		padding: 3.5rem 3.2rem 0;
	}
	@media screen and (min-width: 768px) {
		.aboutintro__content {
			width: 51.5rem;
			position: relative;
			padding: 16.3rem 0 0 5.9rem;
			background-color: var(--color-white);
		}
	}
	@media screen and (min-width: 1024px) {
		.aboutintro__content {
			width: 62.8rem;
			padding: 23.5rem 0 0 18.2rem;
		}
	}

	@media screen and (min-width: 768px) {
		.aboutintro__content::before {
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
		.aboutintro__content::before {
			top: 16rem;
			left: 18.2rem;
		}
	}

	.aboutintro__content__heading {
		margin-bottom: 1.2rem;
	}
	@media screen and (min-width: 768px) {
		.aboutintro__content__heading {
			margin-top: .4rem;
			margin-bottom: 5.3rem;
		}
	}

	.aboutintro__bg {
		display: none;
	}
	@media screen and (min-width: 768px) {
		.aboutintro__bg {
			right: .1rem;
			top: -9.1rem;
			display: block;
			position: absolute;
		}
	}
	@media screen and (min-width: 1024px) {
		.aboutintro__bg {
			right: 0rem;
    	top: -8.7rem;
		}
	}

	/* Heritage Section */
	.heritage {
		margin-top: 7.2rem;
		padding: 0 3.2rem;
	}
	@media screen and (min-width: 768px) {
		.heritage {
			margin-top: 20rem;
			padding: 0 9.7rem;
		}
	}
	@media screen and (min-width: 1366px) {
		.heritage {
			padding: 0;
		}
	}

	.heritage > .container {
		position: relative;
		padding-top: 6.8rem;
	}
	@media screen and (min-width: 768px) {
		.heritage > .container {
			padding-top: 7.5rem;
		}
	}
	@media screen and (min-width: 1024px) {
		.heritage > .container {
			margin: 0 auto;
			max-width: 111rem;
			padding-top: 10rem;
		}

		.heritage > .container::after {
			content: '';
			top: 0;
			right: 0;
			bottom: 0;
			width: 48.649%;
			position: absolute;
			background-size: cover;
			background-repeat: no-repeat;
			background-image: url(/about/desktop/image-heritage.jpg);
		}
	}
	
	.heritage > .container::before {
		content: '';
		top: 0;
		left: 0;
		width: 6.5rem;
		height: .1rem;
		position: absolute;
		background-color: var(--color-light-gray);
	}

	.heritage__body {
		margin-top: 2.9rem;
	}
	@media screen and (min-width: 768px) {
		.heritage__body {
			margin-top: 5.6rem;
		}
	}
	@media screen and (min-width: 1024px) {
		.heritage__body {
			margin-top: 5.3rem;
			max-width: 44.4rem;
			width: 46%;
		}
	}

	@media screen and (min-width: 1024px) {
		.heritage__heading {
			margin-top: .3rem;
		}
	}

	/* Leaders Section */
	.leaders {
		margin-top: 7.2rem;
		padding: 0 3.2rem;
	}
	@media screen and (min-width: 768px) {
		.leaders {
			margin-top: 7.2rem;
			padding: 0 9.9rem 0 9.7rem;
		}
	}
	@media screen and (min-width: 1024px) {
		.leaders {
			margin-top: 20rem;
		}
	}
	@media screen and (min-width: 1366px) {
		.leaders {
				padding: 0;
			}
	}

	@media screen and (min-width: 1024px) {
		.leaders > .container {
			display: flex;
			align-items: flex-start;
			justify-content: space-between;
			max-width: 111rem;
			margin: 0 auto;
		}
	}

	.leader {
		max-width: 35rem;
	}
	@media screen and (min-width: 1024px) {
		.leader {
			position: relative;
			cursor: pointer;
		}
		.leader:hover > .leader__socials {
			opacity: 1;
		}
		.leader:hover > .leader__socials > .social {
			transform: scale(1) translateY(0);
		}
	}
	
	.leader__avatar {
		height: 28.4rem;
		overflow: hidden;
	}
	@media screen and (min-width: 768px) {
		.leader__avatar {
			height: 25.6rem;
		}
	}
	@media screen and (min-width: 1024px) {
		.leader__avatar {
			height: 32rem;
		}
	}
	
	.leader__avatar img {
		width: 100%;
	}
	@media screen and (min-width: 1024px) {
		.leader__avatar img {
	    object-fit: cover;
    	height: 100%
		}
	}

	.leaders__gird {
		display: grid;
		row-gap: 4rem;
		margin-top: 6.4rem;
		justify-content: center;
	}
	@media screen and (min-width: 640px) {
		.leaders__gird {
			grid-template-columns: repeat(2, 1fr);
			row-gap: 6.4rem;
			max-width: 60rem;
			column-gap: 1.1rem;
			margin: 6.4rem auto 0;
		}
	}
	@media screen and (min-width: 1024px) {
		.leaders__gird {
			margin: 0;
			width: 66%;
			column-gap: 3rem;
			max-width: 73rem;
		}
	}

	.leader__details {
		margin-top: 2.4rem;
	}

	.leader__detail__name {
		margin-bottom: .4rem;
	}

	.leader__socials {
		width: 9rem;
		display: flex;
		height: 3.2rem;
		margin-top: .8rem;
		align-items: center;
		flex-flow: row nowrap;
		justify-content: space-between;
	}
	@media screen and (min-width: 1024px) {
		.leader__socials {
			width: 100%;
			top: 0;
			left: 0;
			right: 0;
			opacity: 0;
			margin-top: 0;
			position: absolute;
			height: calc(100% - 7.8rem);
			justify-content: center;
			transition: var(--transition) opacity;
			background-color: rgba(0, 0, 0, .50);
		}
	}
	

	.social {
		display: inline-flex;
		align-items: center;
		transform: scale(.8);
	}
	@media screen and (min-width: 1024px) {
		.social {
			transform: scale(1) translateY(2rem);
			transition: var(--transition) transform;
		}
		.social:not(:last-of-type) {
			margin-right: 3.2rem;
		}
	}

	@media screen and (min-width: 1024px) {
		.social__icon path {
			fill: var(--color-white);
		}
	}

</style>