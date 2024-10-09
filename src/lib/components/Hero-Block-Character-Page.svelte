<script>
  import { onMount } from "svelte";

  onMount(() => {
    // Select the element
    const card = document.querySelector(".block-character-page .card");
    const items = document.querySelectorAll(
      ".block-character-page .page-links .item"
    );

    // Intersection Observer callback
    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Animate into position (y: 100)
          gsap.to(entry.target, { opacity: 1, y: 200, duration: 0.5 });

          // After 2 seconds, animate it back to y: 0
          gsap.to(entry.target, {
            y: 0,
            duration: 0.5,
            delay: 1,
            onComplete: () => {
              items.forEach((item, index) => {
                gsap.to(item, {
                  opacity: 1,
                  y: 0,
                  duration: 0.5,
                  delay: index * 0.5,
                });
              });
            },
          });

          // Stop observing after animation
          observer.unobserve(entry.target);
        }
      });
    };

    // Intersection Observer setup
    const observerOptions = {
      root: null, // viewport
      threshold: 0.5, // Trigger when 50% of the element is in view
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    // Start observing the element
    observer.observe(card);
  });
</script>

<div class="block-character-page mb-4 mb-md-5">
  <video autoplay muted loop id="characterBgVideo">
    <source src="/images/boat-demo-video.mp4" type="video/mp4" />
  </video>

  <div class="content container">
    <div class="card">
      <div class="row align-items-lg-center">
        <div class="col-4 order-lg-1">
          <div class="glass-border">
            <div class="ctn">
              <img src="/images/james-crop.png" alt="james" />
            </div>
          </div>
        </div>

        <div class="col-8 col-lg-12 order-lg-3">
          <div class="character-desc">
            <div class="name">James Carter</div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero
              magnam reiciendis sunt sapiente aspernatur! Sunt sequi sapiente
              voluptate quod non, dolore tenetur facere quaerat labore facilis
              in iure quia quas?
            </p>
          </div>
        </div>

        <div class="col-12 col-lg-8 order-lg-2">
          <div class="numbers">
            <div class="item">
              <div class="number">100</div>
              <div class="text">Lorem</div>
            </div>
            <div class="item">
              <div class="number">100</div>
              <div class="text">Lorem</div>
            </div>
            <div class="item">
              <div class="number">100</div>
              <div class="text">Lorem</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="page-links">
      <a href="https://placehold.co/600x400" class="item">
        <div class="glass-border">
          <div class="ctn"></div>
        </div>
        <p>Posts</p>
      </a>
      <a href="https://placehold.co/600x400" class="item">
        <div class="glass-border">
          <div class="ctn"></div>
        </div>
        <p>Tips</p>
      </a>
      <a href="https://placehold.co/600x400" class="item">
        <div class="glass-border">
          <div class="ctn"></div>
        </div>
        <p>Backstory</p>
      </a>
    </div>
  </div>
</div>
