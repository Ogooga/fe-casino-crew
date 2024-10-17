<script>
  import BlockCharacterCasino from "../lib/components/Block-Character-Casino.svelte";
  import BlockProsCons from "../lib/components/BlockProsCons.svelte";
  import CharactersCardSlider from "../lib/components/CharactersCardSlider.svelte";
  import CharactersGuide from "../lib/components/CharactersGuide.svelte";
  import CharactersMap from "../lib/components/CharactersMap.svelte";
  import OffersSlider from "../lib/components/OffersSlider.svelte";
</script>

<!-- hp hero area -->
<section class="hp-hero">
  <video autoplay muted loop>
    <source src="/images/boat-demo-video.mp4" type="video/mp4" />
  </video>

  <div class="container content">
    <h1 class="title">
      Quisque consectetur fermentum ante sed volutpat. In id augue maximus
      posuere
    </h1>
  </div>
</section>

<CharactersMap />
<CharactersCardSlider />
<CharactersGuide />
<OffersSlider />

<div class="content-area py-5">
  <div class="container">
    <BlockProsCons />
    <BlockCharacterCasino />
  </div>
</div>
