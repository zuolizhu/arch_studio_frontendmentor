<script>
  const projects = [
    {id: 1, projectName: 'Project Del Sol'},
    {id: 2, projectName: '228B Tower'},
    {id: 3, projectName: 'Le Prototype'}
  ];
</script>


<div class="featured-projects">
  {#each projects as project (project.id)}
    <a class="featured-project featured-project--{project.id}" href="/portfolio">
      <h2 class="featured-project__number t-white">{project.id}</h2>
      <div class="featured-project__detail">
        <h3 class="t-h3 t-white">{project.projectName}</h3>
        <p class="t-body t-white featured-project__detail__view">View All Projects</p>
      </div>
    </a>
  {/each}
</div>

<style>
  .featured-project {
    width: 100%;
    height: 24rem;
    display: flex;
    padding: 2.4rem;
    position: relative;
    background-size: cover;
    flex-flow: column nowrap;
    justify-content: flex-end;
    background-repeat: no-repeat;
  }
  @media screen and (min-width: 560px) {
    .featured-project {
      padding: 4rem;
    }
  }
  @media screen and (min-width: 1024px) {
    .featured-project {
      height: 56rem;
    }
  }

  .featured-project:not(:last-of-type) {
    margin-bottom: 2.4rem;
  }
  @media screen and (min-width: 1024px) {
    .featured-project:not(:last-of-type) {
      margin-bottom: 0;
      margin-right: 3rem;
    }
  }

  /* overlay */
  .featured-project::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: linear-gradient(180deg, rgba(0,0,0,0.00) 0%, rgba(0,0,0,0.50) 100%);
  }

  .featured-project--1 {
    background-image: url(/portfolio/mobile/image-del-sol.jpg);
  }
  @media screen and (min-width: 560px) {
    .featured-project--1 {
      background-image: url(/portfolio/tablet/image-del-sol.jpg);
    }
  }
  @media screen and (min-width: 1024px) {
    .featured-project--1 {
      background-image: url(/portfolio/desktop/image-del-sol.jpg);
    }
  }
  .featured-project--2 {
    background-image: url(/portfolio/mobile/image-228b.jpg);
  }
  @media screen and (min-width: 560px) {
    .featured-project--2 {
      background-image: url(/portfolio/tablet/image-228b.jpg);
    }
  }
  @media screen and (min-width: 1024px) {
    .featured-project--2 {
      background-image: url(/portfolio/desktop/image-228b.jpg);
    }
  }
  .featured-project--3 {
    background-image: url(/portfolio/mobile/image-prototype.jpg);
  }
  @media screen and (min-width: 560px) {
    .featured-project--3 {
      background-image: url(/portfolio/tablet/image-prototype.jpg);
    }
  }
  @media screen and (min-width: 1024px) {
    .featured-project--3 {
      background-image: url(/portfolio/desktop/image-prototype.jpg);
    }
  }

  .featured-project__detail {
    position: relative;
    z-index: 1;
  }

  .featured-project__detail__view {
    opacity: .75;
    margin-top: .4rem;
  }

  .featured-project__number {
    display: none;
  }
  @media screen and (min-width: 560px) {
    .featured-project__number {
      opacity: .50;
      top: 2.37rem;
      display: flex;
      right: 1.6rem;
      line-height: 21rem;
      font-size: 20rem;
      position: absolute;
      letter-spacing: -.5rem;
      font-weight: var(--weight-bold);
    }
  }
  @media screen and (min-width: 1024px) {
    .featured-project__number {
      top: 3.95rem;
      right: -1.7rem;
    }
  }

  @media screen and (min-width: 1024px) {
    .featured-projects {
      display: flex;
      flex-flow: row nowrap;
    }
  }
</style>