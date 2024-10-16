<script>
  import { onMount } from "svelte";
  import Style1 from "../offers/Style1.svelte";
  import CasinoInfo from "./CasinoInfo.svelte";

  onMount(() => {
    new Splide("#hp-offers-slider", {
      arrows: false,
      pagination: true,
      gap: 30,
      autoplay: false,
      interval: 2500,
      type: "loop",
      perPage: 3,
      breakpoints: {
        1200: {
          perPage: 2,
        },
        768: {
          perPage: 1,
        },
      },
    }).mount();

    new Splide("#hp-tip-offers-slider", {
      arrows: false,
      pagination: false,
      gap: 100,
      autoplay: false,
      interval: 2500,
      type: "loop",
      perPage: 1,
    }).mount();
  });
</script>

<section class="hp-offers-slider">
  <div class="container">
    <div
      id="hp-tip-offers-slider"
      class="splide"
      aria-label="Tips offers slider"
    >
      <div class="splide__track">
        <div class="splide__list">
          {#each Array(3) as _, index}
            <div class="splide__slide">
              <CasinoInfo />
            </div>
          {/each}
        </div>
      </div>
    </div>

    <div id="hp-offers-slider" class="splide" aria-label="Offers Slidere">
      <div class="splide__track">
        <div class="splide__list">
          {#each Array(6) as _, index}
            <div class="splide__slide">
              <Style1 />
            </div>
          {/each}
        </div>
      </div>
    </div>
  </div>
</section>
