<script>
  import jq from "jquery";
  import { onMount } from "svelte";

  onMount(() => {
    jq(".onboarding-btns .onboarding-btn-2").click(() => {
      jq(".onboarding-2").show();
    });

    jq(".onboarding-2 .btn.btn--1").click(() => {
      jq(".onboarding-2 #step1").hide();
      jq(".onboarding-2 #step2").show();

      // highlight element
      jq(".bottom-nav__ctn .bottom-nav__item:nth-child(2)").addClass("onboarding-highlight");
    });

    jq(".onboarding-2 .btn.btn-skip").click(() => {
      jq(".onboarding-2").hide();
    });

    jq(".onboarding-2 span").click(() => {
      jq(".onboarding-2").hide();
    });
  });
</script>

<div class="onboarding-2 onboarding">
  <div class="modal_ctn">
    <!-- Step 1 -->
    <div id="step1" class="modal_content" next="2">
      <div class="h1">HOME Want a step-by-step tour of the ship?</div>
      <div class="image-ctn">
        <img src="/images/finn-yacht.png" alt="finn yacht" />
      </div>
      <button class="btn btn--1 next-modal">Yeah, let's see it</button>
      <button class="btn btn-skip">I'll have the regular experience ></button>
    </div>

    <!-- Step 2 -->
    <div id="step2" class="modal_content" style="display: none;">
      <div class="image-ctn">
        <img src="/images/finn-yacht.png" alt="finn yacht" />
      </div>
      <div class="h1">
        FREE SPINS Cras pharetra nibh lectus, quis dignissim FREE SPINS
      </div>
      <p>
        Quisque consectetur fermentum ante sed volutpat. In id augue maximus,
        posuere est nec, lobortis enim
      </p>
      <span>
        <svg
          width="18"
          height="17"
          viewBox="0 0 18 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.52155 15.7203L16.071 15.956M16.071 15.956L15.8353 4.40657M16.071 15.956L1.92883 1.81385"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </span>
    </div>
  </div>
</div>
