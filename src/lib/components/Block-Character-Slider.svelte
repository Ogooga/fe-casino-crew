<script>
  import { onMount } from "svelte";

  onMount(() => {
    new Splide("#block-character-slider", {
      arrows: false,
      pagination: true,
      gap: 30,
      autoplay: true,
      interval: 2500,
      type: "loop",
      perPage: 1,
    }).mount();
  });
</script>

<div class="block-character-slider mb-4 mb-md-5">
  <div class="container">
    <div id="block-character-slider" class="splide">
      <div class="splide__track">
        <div class="splide__list">
          <div class="splide__slide">
            <a href="https://placehold.co/100x100">
              <div class="name">JAMES</div>
              <img
                src="/images/character-slider-placeholder.png"
                alt="placeholder"
              />
              <p>James has the best info for you</p>
            </a>
          </div>

          <div class="splide__slide">
            <a href="https://placehold.co/100x100">
              <div class="name">FINN</div>
              <img
                src="/images/character-slider-placeholder.png"
                alt="placeholder"
              />
              <p>Finn has the best info for you</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
