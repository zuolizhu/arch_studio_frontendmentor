<script>
  import Carousel from './Carousel.svelte';
  const slides = [
		{id: 1, projectName: 'Project Paramour', projectDesc: 'Project made for an art museum near Southwest London. Project Paramour is a statement of bold, modern architecture.'},
		{id: 2, projectName: 'Seraph Station', projectDesc: 'The Seraph Station project challenged us to design a unique station that would transport people through time. The result is a fresh and futuristic model inspired by space stations.'},
		{id: 3, projectName: 'Federal II Tower', projectDesc: 'A sequel theme project for a tower originally built in the 1800s. We achieved this with a striking look of brutal minimalism with modern touches.'},
		{id: 4, projectName: 'Trinity Bank Tower', projectDesc: 'Trinity Bank challenged us to make a concept for a 84 story building located in the middle of a city with a high earthquake frequency. For this project we used curves to blend design and stability to meet our objectives.'}
	];
</script>

<Carousel>
  {#each slides as slide (slide.id)}
  <div class="slide-content">
    <div class="slide-content__body">
      <div class="slide-content__body__container">
        <h2 class="slide-content__body__heading t-h1 t-white">{slide.projectName}</h2>
        <p class="slide-content__body__desc t-white t-body">{slide.projectDesc}</p>
        <a class="button button--hero" href="/portfolio">
          <span class="t-body--bold t-white">See Our Portfolio</span>
          <span class="button--hero__arrow"></span>
        </a>
      </div>
    </div>
    <div class="slide-content__bg slide-content__bg--{slide.id}"></div>
  </div>
  {/each}
</Carousel>

<style>
.slide-content {
	position: relative;
}

.slide-content__body {
	position: absolute;
	z-index: 1;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	padding: 11rem 3.2rem;
}
@media screen and (min-width: 768px) {
	.slide-content__body {
		padding: 18rem 5.8rem 17.9rem;
	}
}
@media screen and (min-width: 1366px) {
	.slide-content__body {
		padding: 18rem 0rem 17.9rem 19rem;
	}
}

.slide-content__body__container {
	height: 100%;
	width: 100%;
	display: flex;
	flex-flow: column nowrap;
}

.slide-content__body__heading {
	max-width: 54.4rem;
}
@media screen and (min-width: 1024px) {
	.slide-content__body__heading {
		margin-top: .5rem;
	}
}


.slide-content__bg {
	width: 100%;
	min-height: 56rem;
	position: relative;
}
@media screen and (min-width: 768px) {
	.slide-content__bg {
		min-height: 72rem;
	}
}

.slide-content__bg {
	background-repeat: no-repeat;
	background-size: cover;
}
/* bg overlay */
.slide-content__bg::before {
	content: '';
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: rgba(0, 0, 0, .35);
}

.slide-content__bg--1 {
	background-image: url(/home/mobile/image-hero-paramour.jpg);
	}
@media screen and (min-width: 768px) {
	.slide-content__bg--1 {
		background-image: url(/home/tablet/image-hero-paramour.jpg);
	}
}
@media screen and (min-width: 1024px) {
	.slide-content__bg--1 {
		background-image: url(/home/desktop/image-hero-paramour.jpg);
	}
}
.slide-content__bg--2 {
	background-image: url(/home/mobile/image-hero-seraph.jpg);
	}
@media screen and (min-width: 768px) {
	.slide-content__bg--2 {
		background-image: url(/home/tablet/image-hero-seraph.jpg);
	}
}
@media screen and (min-width: 1024px) {
	.slide-content__bg--2 {
		background-image: url(/home/desktop/image-hero-seraph.jpg);
	}
}
.slide-content__bg--3 {
	background-image: url(/home/mobile/image-hero-federal.jpg);
	}
@media screen and (min-width: 768px) {
	.slide-content__bg--3 {
		background-image: url(/home/tablet/image-hero-federal.jpg);
	}
}
@media screen and (min-width: 1024px) {
	.slide-content__bg--3 {
		background-image: url(/home/desktop/image-hero-federal.jpg);
	}
}
.slide-content__bg--4 {
	background-image: url(/home/mobile/image-hero-trinity.jpg);
	}
@media screen and (min-width: 768px) {
	.slide-content__bg--4 {
		background-image: url(/home/tablet/image-hero-trinity.jpg);
	}
}
@media screen and (min-width: 1024px) {
	.slide-content__bg--4 {
		background-image: url(/home/desktop/image-hero-trinity.jpg);
	}
}

.slide-content__body__desc {
	margin-top: 1.5rem;
	margin-bottom: auto;
}
@media screen and (min-width: 768px) {
	.slide-content__body__desc {
		margin-top: 1.4rem;
		max-width: 45.7rem;
	}
}
@media screen and (min-width: 1024px) {
	.slide-content__body__desc {
		margin-top: .95rem;
		max-width: 44.5rem;
	}
}
</style>