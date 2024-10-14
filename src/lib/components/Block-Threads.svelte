
<script>
  import { onMount } from "svelte";

  onMount(() => {
    gsap.registerPlugin(ScrollTrigger);

    const animateThreads = () => {
      gsap.from(".threads-ctn .card", {
        scrollTrigger: {
          trigger: ".block-threads",
          start: "top 80%",
        },
        y: 50,
        opacity: 0,
        stagger: 3,
        duration: 3,
        ease: "power2.out",
      });
      gsap.from(".block-threads .threads", {
        scrollTrigger: {
          trigger: ".block-threads",
          start: "top 80%",
        },
        y: 50,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power2.out",
      });
    }

    animateThreads();
  })
</script>

<div class="block-threads mb-4 mb-md-5">
  <div class="container">
    <div class="title">Latest from James Carter</div>

    <div class="threads-ctn">
      <div class="threads-profile">
        <img src="/images/block-threads-profile.png" alt="profile" />
        <div class="name">James</div>
        <div class="label">Blackjack</div>
        <div class="label">Strategies</div>
      </div>

      <div class="threads">
        <p>
          Splitting aces gives you two chances to hit a strong hand, while
          splitting eights helps you avoid a troublesome 16.
        </p>

        <div class="threads">
          <p>
            One of the simplest yet most effective strategies is to always split
            aces and eights.
          </p>

          <div class="threads">
            <p>
              Did you know that in blackjack, making the right decisions can
              significantly improve your odds?
            </p>

            <div class="card">
              <div class="threads-profile">
                <img src="/images/block-threads-profile.png" alt="profile" />
                <div class="name">James</div>
                <div class="label">Blackjack</div>
              </div>
              <p>Hello, players! James here.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
