<script>
  import BlockCharacterCasino from "../lib/components/Block-Character-Casino.svelte";
  import BlockProsCons from "../lib/components/BlockProsCons.svelte";
  import CharactersCardSlider from "../lib/components/CharactersCardSlider.svelte";
  import CharactersGuide from "../lib/components/CharactersGuide.svelte";
  import CharactersMap from "../lib/components/CharactersMap.svelte";
  import HeroBlockHomepage from "../lib/components/HeroBlockHomepage.svelte";
  import OffersSlider from "../lib/components/OffersSlider.svelte";
</script>

<HeroBlockHomepage />
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
