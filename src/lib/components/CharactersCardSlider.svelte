<script>
  import { onMount } from "svelte";

  onMount(() => {
    new Splide("#hp-characters-carousel", {
      arrows: false,
      gap: 10,
      autoplay: true,
      interval: 2500,
      type: "loop",
    }).mount();

    gsap.registerPlugin(ScrollTrigger);

    const animateCards = () => {
      gsap.from("#hp-characters-carousel", {
        scrollTrigger: {
          trigger: ".hp-characters-card-slider",
          start: "top 80%",
        },
        y: 100,
        duration: 0.5,
        ease: "power2.out",
      });
    };

    animateCards();
  });

  const characters = [
    {
      charImg: "colombia-char-casino.png",
    },
    {
      charImg: "ana-char-casino.png",
    },
    {
      charImg: "finn-char-casino.png",
    },
    {
      charImg: "james-char-casino.png",
    },
  ];
</script>

<section class="hp-characters-card-slider">
  <div class="container">
    <div class="heading">
      <h2 class="title">Meet Your Fellow Adventurers: The Casino Crew</h2>
      <p>
        Quisque consectetur fermentum ante sed volutpat. In id augue maximus,
        posuere est nec, lobortis enim. Suspendisse maximus, massa nec faucibus
        tristique
      </p>
    </div>

    <div
      id="hp-characters-carousel"
      class="splide"
      aria-label="Characters Carousel"
    >
      <div class="splide__track">
        <div class="splide__list">
          {#each characters as character, index}
            <div class="splide__slide">
              <div class="card">
                <div class="content">
                  <div class="title">
                    {index} Fermentum ante sed volutpat. In id augue maxim
                  </div>
                  <p>
                    Quisque consectetur fermentum ante sed volutpat. In id augue
                    maximus, posuere est nec, lobortis enim. Suspendisse
                    maximus, massa nec faucibus tristique.
                  </p>
                  <p>
                    Quisque consectetur fermentum ante sed volutpat. In id augue
                    maximus, posuere est nec
                  </p>
                  <a href="https://placehold.co/100x100"
                    >link here <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="9"
                        height="15"
                        viewBox="0 0 9 15"
                        fill="none"
                      >
                        <path
                          d="M1.5 1.63086L7.5 7.63086L1.5 13.6309"
                          stroke="#FF9619"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="9"
                        height="15"
                        viewBox="0 0 9 15"
                        fill="none"
                      >
                        <path
                          d="M1.5 1.63086L7.5 7.63086L1.5 13.6309"
                          stroke="#FF9619"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="9"
                        height="15"
                        viewBox="0 0 9 15"
                        fill="none"
                      >
                        <path
                          d="M1.5 1.63086L7.5 7.63086L1.5 13.6309"
                          stroke="#FF9619"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </span></a
                  >
                </div>
                <div class="char-img">
                  <img
                    src={"/images/homepage/" + character.charImg}
                    alt="colombia"
                  />
                </div>
              </div>
            </div>
          {/each}
        </div>
      </div>
    </div>
  </div>
</section>
