<script>
  import { onMount } from "svelte";

  onMount(() => {
    gsap.registerPlugin(ScrollTrigger);

    const animateCards = () => {
      gsap.from(".char-img", {
        scrollTrigger: {
          trigger: ".block-character-casino",
          start: "top 80%",
        },
        y: 50,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power2.out",
      });
    };

    animateCards();
  });

  const characters = [
    {
      charImg: "/images/crop-char/james.png",
      casinoLogo: "/images/casino-logos/betano.png",
    },
    {
      charImg: "/images/crop-char/alex.png",
      casinoLogo: "/images/casino-logos/player.png",
    },
    {
      charImg: "/images/crop-char/columbia.png",
      casinoLogo: "/images/casino-logos/unibet.png",
    },
    {
      charImg: "/images/crop-char/finn.png",
      casinoLogo: "/images/casino-logos/toto.png",
    },
  ];
</script>

<div class="block-character-casino mb-4 mb-md-5">
  <div class="container">
    <div class="heading">
      <div class="title">Meet our Authors</div>
      <p>
        Quisque consectetur fermentum ante sed volutpat. In id augue maximus,
        posuere est nec, lobortis enim. Suspendisse maximus, massa nec faucibus
        tristique, ex ligula volutpat turpis. Quisque consectetur fermentum ante
        sed volutpat.
      </p>
    </div>

    <div class="row align-items-baseline mb-3 mb-md-0">
      {#each characters as character, i}
        <div class="col-6 col-md-3 mb-3">
          <a href="https://placehold.co/100x100" class="character">
            <img class="char-img" src={character.charImg} alt="alex" />
            <div class="char-card">
              <img src={character.casinoLogo} alt="betano" />
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="6"
                  height="11"
                  viewBox="0 0 6 11"
                  fill="none"
                >
                  <path
                    d="M0.927734 1.45166L5.06859 5.59252L0.927734 9.73337"
                    stroke="#C75000"
                    stroke-width="1.71497"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="6"
                  height="11"
                  viewBox="0 0 6 11"
                  fill="none"
                >
                  <path
                    d="M0.927734 1.45166L5.06859 5.59252L0.927734 9.73337"
                    stroke="#C75000"
                    stroke-width="1.71497"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="6"
                  height="11"
                  viewBox="0 0 6 11"
                  fill="none"
                >
                  <path
                    d="M0.927734 1.45166L5.06859 5.59252L0.927734 9.73337"
                    stroke="#C75000"
                    stroke-width="1.71497"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>
          </a>
        </div>
      {/each}
    </div>

    <div class="cta">
      <div class="btn btn--2">see ALL CAsinos</div>
    </div>
  </div>
</div>
