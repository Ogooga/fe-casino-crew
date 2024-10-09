<script>
  import { onMount } from "svelte";

  onMount(() => {
    new Splide("#hp-characters-guide-carousel", {
      arrows: false,
      pagination: false,
      gap: 10,
      autoplay: true,
      interval: 2500,
      type: "loop",
      perPage: 4,
      autoplay: false,
      breakpoints: {
        1200: {
          autoplay: true,
          perPage: 2,
        },
        768: {
          perPage: 1,
        },
      },
    }).mount();
  });

  const characters = [
    {
      charImg: "character thumbnail alex.png",
    },
    {
      charImg: "character thumbnail ana.png",
    },
    {
      charImg: "character thumbnail finn.png",
    },
    {
      charImg: "character thumbnail james.png",
    },
  ];
</script>

<section class="hp-characters-guide">
  <div class="container">
    <div class="heading">
      <h2 class="title">Your Map to Casino Adventure – Bonuses and Beyond!</h2>
      <p>
        Quisque consectetur fermentum ante sed volutpat. In id augue maximus,
        posuere est nec, lobortis enim. Suspendisse maximus, massa nec faucibus
        tristique, ex ligula volutpat turpis.
      </p>
    </div>

    <div
      id="hp-characters-guide-carousel"
      class="splide"
      aria-label="Characters Carousel Guide"
    >
      <div class="splide__track">
        <div class="splide__list">
          {#each characters as character, index}
            <div class="splide__slide">
              <div
                class="card"
                style={`background-image: url('/images/homepage/guide/${character.charImg}')`}
              >
                <div class="match-ctn">
                  <div class="match">90%</div>
                  <div class="bonus">MATCH</div>
                </div>
                <div class="content">
                  <div
                    class="d-flex align-items-center justify-content-between mb-3"
                  >
                    <div class="name">FINN</div>
                    <div class="role">The Jester</div>
                  </div>
                  <a href="https://placehold.co/100x100" class="btn btn--1"
                    >CHOOSE GUIDE</a
                  >
                </div>
              </div>
            </div>
          {/each}
        </div>
      </div>
    </div>
  </div>
</section>
