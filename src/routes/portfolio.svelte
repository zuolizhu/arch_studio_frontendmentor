<script>
	import NavSticker from '../components/NavSticker.svelte';
	let sticker = 'Portfolio';

	const projects = [
		{ id: 1, name: 'Seraph Station', date: 'September 2019' },
		{ id: 2, name: 'Eebox Building', date: 'August 2017' },
		{ id: 3, name: 'Federal II Tower', date: 'March 2017' },
		{ id: 4, name: 'Project Del Sol', date: 'January 2016' },
		{ id: 5, name: 'Le Prototype', date: 'October 2015' },
		{ id: 6, name: '228B Tower', date: 'April 2015' },
		{ id: 7, name: 'Grand Edelweiss Hotel', date: 'December 2013' },
		{ id: 8, name: 'Netcry Tower', date: 'August 2012' },
		{ id: 9, name: 'Hypers', date: 'January 2012' },
		{ id: 10, name: 'SXIV Tower', date: 'March 2011' },
		{ id: 11, name: 'Trinity Bank Tower', date: 'September 2010' },
		{ id: 12, name: 'Project Paramour', date: 'February 2008' }
	];
</script>

<svelte:head>
	<title>Portfolio | Arch Studio Website Challenge | Frontend Mentor</title>
</svelte:head>

<NavSticker sticker={sticker}/>

<section class="portfolio">
	<div class="container">
		{#each projects as project (project.id)}
		<div class="portfolio-project portfolio-project--{project.id}">
			<div class="portfolio-project__details">
				<p class="portfolio-project__details__name t-project-name t-white">{project.name}</p>
				<p class="portfolio-project__details__date t-body t-white t-op75">{project.date}</p>
			</div>
		</div>
		{/each}
	</div>
</section>

<style>
	.portfolio {
		margin-top: 5.6rem;
	}
	@media screen and (min-width: 768px) {
		.portfolio {
			margin-top: 0;
		}
	}
	
	.portfolio > .container {
		padding: 0 3.2rem;
		display: grid;
		row-gap: 2.4rem;
	}
	@media screen and (min-width: 768px) {
		.portfolio > .container {
			padding: 0 9.8rem 0 9.7rem;
		}
	}
	@media screen and (min-width: 1024px) {
		.portfolio > .container {
			margin: 0 auto;
			row-gap: 2.4rem;
			max-width: 111rem;
			column-gap: 2.4rem;
			grid-template-columns: repeat(3, 1fr);
		}
	}
	@media screen and (min-width: 1366px) {
		.portfolio > .container {
			padding: 0;
			row-gap: 3.2rem;
			column-gap: 3rem;
		}
	}
	
	.portfolio-project {
		width: 100%;
		height: 24rem;
		display: flex;
		cursor: pointer;
		position: relative;
		padding-left: 2.4rem;
		background-size: cover;
		padding-bottom: 2.4rem;
		flex-flow: column nowrap;
		justify-content: flex-end;
		background-repeat: no-repeat;
	}
	@media screen and (min-width: 768px) {
		.portfolio-project {
			padding-left: 4rem;
			padding-bottom: 4rem;
		}
	}
	@media screen and (min-width: 1024px) {
		.portfolio-project {
			height: 56rem;
		}
	}
	.portfolio-project::after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		opacity: 0;
		z-index: 1;
		background-color: var(--color-white);
		transition: var(--transition) opacity;
	}
	.portfolio-project:hover::after {
		opacity: .50;
	}

	.portfolio-project::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-image: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.50) 100%);
	}


	.portfolio-project__details {
		z-index: 2;
		position: relative;
	}

	.portfolio-project__details__date {
		margin-top: .4rem;
	}

	.portfolio-project--1 {
		background-image: url(/portfolio/mobile/image-seraph.jpg);
	}
	@media screen and (min-width: 520px) {
		.portfolio-project--1 {
			background-image: url(/portfolio/tablet/image-seraph.jpg);
		}
	}
	@media screen and (min-width: 1024px) {
		.portfolio-project--1 {
			background-image: url(/portfolio/desktop/image-seraph.jpg);
		}
	}
	.portfolio-project--2 {
		background-image: url(/portfolio/mobile/image-eebox.jpg);
	}
	@media screen and (min-width: 520px) {
		.portfolio-project--2 {
			background-image: url(/portfolio/tablet/image-eebox.jpg);
		}
	}
	@media screen and (min-width: 1024px) {
		.portfolio-project--2 {
			background-image: url(/portfolio/desktop/image-eebox.jpg);
		}
	}
	.portfolio-project--3 {
		background-image: url(/portfolio/mobile/image-federal.jpg);
	}
	@media screen and (min-width: 520px) {
		.portfolio-project--3 {
			background-image: url(/portfolio/tablet/image-federal.jpg);
		}
	}
	@media screen and (min-width: 1024px) {
		.portfolio-project--3 {
			background-image: url(/portfolio/desktop/image-federal.jpg);
		}
	}
	.portfolio-project--4 {
		background-image: url(/portfolio/mobile/image-del-sol.jpg);
	}
	@media screen and (min-width: 520px) {
		.portfolio-project--4 {
			background-image: url(/portfolio/tablet/image-del-sol.jpg);
		}
	}
	@media screen and (min-width: 1024px) {
		.portfolio-project--4 {
			background-image: url(/portfolio/desktop/image-del-sol.jpg);
		}
	}
	.portfolio-project--5 {
		background-image: url(/portfolio/mobile/image-prototype.jpg);
	}
	@media screen and (min-width: 520px) {
		.portfolio-project--5 {
			background-image: url(/portfolio/tablet/image-prototype.jpg);
		}
	}
	@media screen and (min-width: 1024px) {
		.portfolio-project--5 {
			background-image: url(/portfolio/desktop/image-prototype.jpg);
		}
	}
	.portfolio-project--6 {
		background-image: url(/portfolio/mobile/image-228b.jpg);
	}
	@media screen and (min-width: 520px) {
		.portfolio-project--6 {
			background-image: url(/portfolio/tablet/image-228b.jpg);
		}
	}
	@media screen and (min-width: 1024px) {
		.portfolio-project--6 {
			background-image: url(/portfolio/desktop/image-228b.jpg);
		}
	}
	.portfolio-project--7 {
		background-image: url(/portfolio/mobile/image-edelweiss.jpg);
	}
	@media screen and (min-width: 520px) {
		.portfolio-project--7 {
			background-image: url(/portfolio/tablet/image-edelweiss.jpg);
		}
	}
	@media screen and (min-width: 1024px) {
		.portfolio-project--7 {
			background-image: url(/portfolio/desktop/image-edelweiss.jpg);
		}
	}
	.portfolio-project--8 {
		background-image: url(/portfolio/mobile/image-netcry.jpg);
	}
	@media screen and (min-width: 520px) {
		.portfolio-project--8 {
			background-image: url(/portfolio/tablet/image-netcry.jpg);
		}
	}
	@media screen and (min-width: 1024px) {
		.portfolio-project--8 {
			background-image: url(/portfolio/desktop/image-netcry.jpg);
		}
	}
	.portfolio-project--9 {
		background-image: url(/portfolio/mobile/image-hypers.jpg);
	}
	@media screen and (min-width: 520px) {
		.portfolio-project--9 {
			background-image: url(/portfolio/tablet/image-hypers.jpg);
		}
	}
	@media screen and (min-width: 1024px) {
		.portfolio-project--9 {
			background-image: url(/portfolio/desktop/image-hypers.jpg);
		}
	}
	.portfolio-project--10 {
		background-image: url(/portfolio/mobile/image-sxiv.jpg);
	}
	@media screen and (min-width: 520px) {
		.portfolio-project--10 {
			background-image: url(/portfolio/tablet/image-sxiv.jpg);
		}
	}
	@media screen and (min-width: 1024px) {
		.portfolio-project--10 {
			background-image: url(/portfolio/desktop/image-sxiv.jpg);
		}
	}
	.portfolio-project--11 {
		background-image: url(/portfolio/mobile/image-trinity.jpg);
	}
	@media screen and (min-width: 520px) {
		.portfolio-project--11 {
			background-image: url(/portfolio/tablet/image-trinity.jpg);
		}
	}
	@media screen and (min-width: 1024px) {
		.portfolio-project--11 {
			background-image: url(/portfolio/desktop/image-trinity.jpg);
		}
	}
	.portfolio-project--12 {
		background-image: url(/portfolio/mobile/image-paramour.jpg);
	}
	@media screen and (min-width: 520px) {
		.portfolio-project--12 {
			background-image: url(/portfolio/tablet/image-paramour.jpg);
		}
	}
	@media screen and (min-width: 1024px) {
		.portfolio-project--12 {
			background-image: url(/portfolio/desktop/image-paramour.jpg);
		}
	}
</style>