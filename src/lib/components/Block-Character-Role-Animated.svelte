<script>
  import jq from "jquery";
  import { onMount } from "svelte";

  onMount(() => {
    gsap.from(".block-character-role-animated .caption", {
      duration: 0.5,
      opacity: 0,
      y: -100,
      stagger: 0.3,
      ease: "power2.out",
      delay: 3.2,
    });

    const slotText = jq(".block-character-role-animated .slots");

    jq(window).on("scroll", function () {
      const windowHeight = jq(window).height();
      const scrollTop = jq(window).scrollTop();
      const elementOffset = slotText.offset().top;
      const elementHeight = slotText.outerHeight();

      if (scrollTop > elementOffset - windowHeight && scrollTop < elementOffset + elementHeight) {
        slotText.addClass("animate-slots");

        // Remove the scroll event listener after animation starts
        jq(window).off("scroll");
      }
    });
  });
</script>

<div class="container">
  <div class="block-character-role-animated mb-5">
    <div class="character-info__ctn">
      <div class="row">
        <div class="col-12 col-md-4">
          <div class="character-info__img">
            <img src="/images/alex-placeholder.png" alt="character img" />
          </div>
        </div>
        <div class="col-12 col-md-8">
          <div class="border-wrap">
            <div class="character-info__content">
              <div class="slot-text">
                <div class="slots-overwrap">
                  <div class="slots-wrap">
                    <div class="slots">
                      <div class="slot">SSLSL</div>
                      <div class="slot">SLSLS</div>
                      <div class="slot">SOLST</div>
                      <div class="slot">SLTOS</div>
                      <div class="slot">SSTOL</div>
                      <div class="slot">SSTTO</div>
                      <div class="slot">TTSSO</div>
                      <div class="slot">TSTST</div>
                      <div class="slot">LLSSO</div>
                      <div class="slot">SLOTS</div>
                      <div class="slot">OOSTL</div>
                      <div class="slot">OSL0T</div>
                      <div class="slot">SLTOS</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="caption">are kind of my thing</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
