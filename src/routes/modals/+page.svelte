<script>
  import Oboarding_2 from "../../lib/flows/Oboarding-2.svelte";
  import Onboarding_1 from "../../lib/flows/Onboarding-1.svelte";
</script>

<Onboarding_1 />
<Oboarding_2 />

<div class="onboarding-btns">
  <button class="btn onboarding-btn-1">onboarding 1</button>
  <button class="btn onboarding-btn-2">onboarding 2</button>
</div>

<style>
  .onboarding-btns {
    position: fixed;
    bottom: 100px;
    z-index: 10;
    left: 200px;
  }
  .onboarding-btns .btn {
    background: black;
    color: white;
  }
</style>
