<script>
  import { onMount } from "svelte";

  onMount(() => {
    gsap.registerPlugin(ScrollTrigger);

    const animateCards = () => {
      gsap.from(".char-card", {
        scrollTrigger: {
          trigger: ".characters-map",
          start: "top 80%",
        },
        y: 100,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power2.out",
      });
    };

    animateCards();
  });
</script>

<section class="characters-map">
  <div class="container">
    <div class="heading">
      <h2 class="title">Your Map to Casino Adventure – Bonuses and Beyond!</h2>
      <p>
        Quisque consectetur fermentum ante sed volutpat. In id augue maximus,
        posuere est nec, lobortis enim. Suspendisse maximus, massa nec faucibus
        tristique, ex ligula volutpat turpis.
      </p>
    </div>

    <div class="glass-border glass-border-small pos-1">
      <div class="ctn"></div>
    </div>
    <div class="glass-border glass-border-small pos-2">
      <div class="ctn"></div>
    </div>
    <div class="glass-border glass-border-small pos-3">
      <div class="ctn"></div>
    </div>
    <div class="glass-border glass-border-small pos-4">
      <div class="ctn"></div>
    </div>

    <div class="row characters-map__row">
      <div class="col-12 col-md-6">
        <a
          href="https://placehold.co/100x100"
          class="char-card left-char char-card-1"
        >
          <div class="glass-border">
            <div class="ctn"></div>
          </div>

          <div class="label">Discover the</div>
          <div class="title">BEST ONLINE CASINOS</div>

          <div class="arrows">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="9"
              height="15"
              viewBox="0 0 9 15"
              fill="none"
            >
              <path
                d="M1.93549 1.2749L7.93549 7.2749L1.93549 13.2749"
                stroke="#0D0803"
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
                d="M1.93549 1.2749L7.93549 7.2749L1.93549 13.2749"
                stroke="#0D0803"
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
                d="M1.93549 1.2749L7.93549 7.2749L1.93549 13.2749"
                stroke="#0D0803"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>

          <div class="icon-offset">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="73"
              height="73"
              viewBox="0 0 73 73"
              fill="none"
            >
              <g clip-path="url(#clip0_2342_46643)">
                <path
                  d="M42.8928 48.555C44.2178 49.4335 46.0068 49.0667 46.8853 47.7416"
                  stroke="white"
                  stroke-opacity="0.65"
                  stroke-width="2.04316"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M20.9533 40.8794C21.7891 42.2355 23.5603 42.6599 24.9164 41.8241"
                  stroke="white"
                  stroke-opacity="0.65"
                  stroke-width="2.04316"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M23.0986 41.3787C27.9371 24.2306 38.3129 12.1746 46.2993 14.4266"
                  stroke="white"
                  stroke-opacity="0.65"
                  stroke-width="2.04316"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M44.8901 48.1543C37.841 32.4507 38.5709 18.839 46.2921 14.4226"
                  stroke="white"
                  stroke-opacity="0.65"
                  stroke-width="2.04316"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M58.9269 39.3018L56.5484 41.4938C56.4799 41.5487 56.4018 41.5777 56.314 41.5806C56.0946 41.5879 55.9043 41.4141 55.8971 41.1947L56.0183 37.9662L53.8223 35.5966C53.7391 35.472 53.712 35.3191 53.7687 35.1723C53.8301 35.0385 53.9678 34.9504 54.1254 34.9364L57.358 35.0488L59.7365 32.8568C59.805 32.8018 59.8831 32.7729 59.9708 32.77C60.1902 32.7627 60.3805 32.9365 60.3878 33.1559L60.2665 36.3843L62.4496 38.7587C62.5328 38.8834 62.5598 39.0362 62.5032 39.1831C62.4417 39.3169 62.3041 39.4049 62.1464 39.419L58.9269 39.3018Z"
                  stroke="white"
                  stroke-opacity="0.65"
                  stroke-width="2.04316"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M25.2843 16.5298L22.9058 18.7218C22.8373 18.7768 22.7592 18.8057 22.6714 18.8086C22.452 18.8159 22.2618 18.6421 22.2545 18.4227L22.3758 15.1943L20.1797 12.8247C20.0965 12.7 20.0694 12.5472 20.1261 12.4003C20.1875 12.2665 20.3252 12.1785 20.4829 12.1644L23.7154 12.2768L26.0939 10.0848C26.1624 10.0299 26.2405 10.0009 26.3283 9.99799C26.5477 9.9907 26.7379 10.1645 26.7452 10.3839L26.6239 13.6124L28.807 15.9868C28.8902 16.1114 28.9172 16.2643 28.8606 16.4111C28.7992 16.5449 28.6615 16.633 28.5038 16.647L25.2843 16.5298Z"
                  stroke="white"
                  stroke-opacity="0.65"
                  stroke-width="2.04316"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M17.1349 55.6868C22.4221 58.1146 28.6762 55.7966 31.104 50.5095C33.5318 45.2224 31.2138 38.9682 25.9267 36.5404C20.6396 34.1126 14.3854 36.4306 11.9576 41.7177C9.52985 47.0048 11.8478 53.259 17.1349 55.6868Z"
                  stroke="white"
                  stroke-opacity="0.65"
                  stroke-width="2.04316"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M39.5119 61.889C44.799 64.3167 51.0532 61.9988 53.481 56.7116C55.9087 51.4245 53.5908 45.1703 48.3037 42.7426C43.0165 40.3148 36.7624 42.6327 34.3346 47.9199C31.9068 53.207 34.2248 59.4612 39.5119 61.889Z"
                  stroke="white"
                  stroke-opacity="0.65"
                  stroke-width="2.04316"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M55.4286 27.6279C49.1478 26.6019 44.8507 20.6208 45.8855 14.3441C52.1883 15.3693 56.4621 21.3073 55.4368 27.61L55.4286 27.6279Z"
                  stroke="white"
                  stroke-opacity="0.65"
                  stroke-width="2.04316"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_2342_46643">
                  <rect
                    width="54.4843"
                    height="54.4843"
                    fill="white"
                    transform="translate(23.1484 0.451172) rotate(24.664)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
        </a>
      </div>
      <div class="col-12 col-md-6">
        <a
          href="https://placehold.co/100x100"
          class="char-card right-char char-card-2"
        >
          <div class="glass-border">
            <div class="ctn"></div>
          </div>

          <div class="label">Discover the</div>
          <div class="title">BEST ONLINE CASINOS</div>

          <div class="arrows">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="9"
              height="15"
              viewBox="0 0 9 15"
              fill="none"
            >
              <path
                d="M1.93549 1.2749L7.93549 7.2749L1.93549 13.2749"
                stroke="#0D0803"
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
                d="M1.93549 1.2749L7.93549 7.2749L1.93549 13.2749"
                stroke="#0D0803"
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
                d="M1.93549 1.2749L7.93549 7.2749L1.93549 13.2749"
                stroke="#0D0803"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>

          <div class="icon-offset">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="72"
              height="73"
              viewBox="0 0 72 73"
              fill="none"
            >
              <g clip-path="url(#clip0_2342_46665)">
                <path
                  d="M62.3858 15.1397L4.14648 23.7905L8.62284 53.9264L66.8621 45.2755L62.3858 15.1397Z"
                  stroke="white"
                  stroke-opacity="0.65"
                  stroke-width="2.04316"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10.8809 53.5908L11.4092 57.1475L65.1207 49.1692L64.5924 45.6125"
                  stroke="white"
                  stroke-opacity="0.65"
                  stroke-width="2.04316"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M13.668 56.812L14.1963 60.3687L63.3914 53.0613L62.8631 49.5046"
                  stroke="white"
                  stroke-opacity="0.65"
                  stroke-width="2.04316"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M41.8521 43.3816L55.0965 41.4143C54.7292 38.9416 56.4309 36.6462 58.9036 36.2789L57.3858 26.0605C54.9131 26.4278 52.6177 24.7261 52.2504 22.2534L39.0173 24.219"
                  stroke="white"
                  stroke-opacity="0.65"
                  stroke-width="2.04316"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M29.159 25.6835L15.9146 27.6508C16.2819 30.1235 14.5803 32.4189 12.1075 32.7862L13.6254 43.0046C16.0981 42.6373 18.3935 44.339 18.7608 46.8117L32.0052 44.8444"
                  stroke="white"
                  stroke-opacity="0.65"
                  stroke-width="2.04316"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M27.8061 26.8305C29.4645 25.1763 31.5686 24.1136 33.8945 23.7681C36.2205 23.4227 38.5426 23.8278 40.6102 24.9286C43.6445 26.5551 45.7614 29.5412 46.2662 32.9398C46.7711 36.3384 45.6135 39.8108 43.183 42.2491C41.5246 43.9034 39.4205 44.966 37.0946 45.3115C34.7686 45.657 32.4465 45.2518 30.3789 44.151C27.3446 42.5245 25.2277 39.5384 24.7229 36.1398C24.2181 32.7412 25.3756 29.2688 27.8061 26.8305Z"
                  stroke="white"
                  stroke-opacity="0.65"
                  stroke-width="2.04316"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M37.4836 30.3781C37.0451 29.9124 36.2399 29.3858 34.9075 29.5837C32.6606 29.9174 32.396 31.3992 32.5419 32.3816C32.6879 33.3639 33.3414 34.19 35.4815 34.3799C37.9494 34.6019 38.5876 35.5572 38.7704 36.788C38.9331 37.8832 38.0185 39.1846 36.2345 39.4496C33.886 39.7984 33.1066 38.1255 33.1066 38.1255"
                  stroke="white"
                  stroke-opacity="0.65"
                  stroke-width="2.04316"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M34.8988 29.5847L34.5818 27.4507"
                  stroke="white"
                  stroke-opacity="0.65"
                  stroke-width="2.04316"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M36.6781 41.5764L36.3611 39.4424"
                  stroke="white"
                  stroke-opacity="0.65"
                  stroke-width="2.04316"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_2342_46665">
                  <rect
                    width="63.338"
                    height="63.338"
                    fill="white"
                    transform="translate(0.00976562 9.76709) rotate(-8.4489)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
        </a>
      </div>
      <div class="col-12 col-md-6">
        <a
          href="https://placehold.co/100x100"
          class="char-card left-char char-card-3"
        >
          <div class="glass-border">
            <div class="ctn"></div>
          </div>

          <div class="label">Discover the</div>
          <div class="title">BEST ONLINE CASINOS</div>

          <div class="arrows">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="9"
              height="15"
              viewBox="0 0 9 15"
              fill="none"
            >
              <path
                d="M1.93549 1.2749L7.93549 7.2749L1.93549 13.2749"
                stroke="#0D0803"
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
                d="M1.93549 1.2749L7.93549 7.2749L1.93549 13.2749"
                stroke="#0D0803"
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
                d="M1.93549 1.2749L7.93549 7.2749L1.93549 13.2749"
                stroke="#0D0803"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>

          <div class="icon-offset">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="72"
              height="72"
              viewBox="0 0 72 72"
              fill="none"
            >
              <g opacity="0.75" clip-path="url(#clip0_2342_46680)">
                <path
                  d="M8.09961 49.2485C7.67209 51.2262 8.92825 53.1752 10.9059 53.6027L51.0047 62.271C52.9824 62.6985 54.9314 61.4423 55.3589 59.4647"
                  stroke="white"
                  stroke-width="2.04316"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M64.282 23.6911C64.7095 21.7135 63.4533 19.7644 61.4757 19.3369L19.1037 10.1773C17.126 9.74976 15.177 11.0059 14.7495 12.9836"
                  stroke="white"
                  stroke-width="2.04316"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M56.7012 59.7536C57.7469 59.9796 58.7836 59.3114 59.0096 58.2658L67.1118 26.2892C67.3378 25.2436 66.6696 24.2068 65.624 23.9808L14.2047 12.8654C13.1591 12.6394 12.1224 13.3075 11.8963 14.3532L6.06736 46.8211C5.84132 47.8668 6.50948 48.9035 7.55514 49.1296L56.7012 59.7536Z"
                  stroke="white"
                  stroke-width="2.04316"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M34.1855 32.7104L39.5502 33.8701L33.5694 40.6791"
                  stroke="white"
                  stroke-width="2.04316"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M45.8171 26.1719L30.8027 22.9263L25.6897 46.5787L40.7041 49.8243L45.8171 26.1719Z"
                  stroke="white"
                  stroke-width="2.04316"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M19.1699 29.4644L24.5346 30.6241L18.5537 37.433"
                  stroke="white"
                  stroke-width="2.04316"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M25.6923 46.5792L10.9237 42.197L15.5453 20.8177L30.8053 22.9268"
                  stroke="white"
                  stroke-width="2.04316"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M49.1992 35.9561L54.5639 37.1158L48.583 43.9247"
                  stroke="white"
                  stroke-width="2.04316"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M45.8164 26.1714L60.585 30.5537L55.9634 51.9329L40.7034 49.8238"
                  stroke="white"
                  stroke-width="2.04316"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_2342_46680">
                  <rect
                    width="60.3625"
                    height="60.3625"
                    fill="white"
                    transform="translate(12.8828 -0.00195312) rotate(12.1981)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
        </a>
      </div>
      <div class="col-12 col-md-6">
        <a
          href="https://placehold.co/100x100"
          class="char-card right-char char-card-4"
        >
          <div class="glass-border">
            <div class="ctn"></div>
          </div>

          <div class="label">Discover the</div>
          <div class="title">BEST ONLINE CASINOS</div>

          <div class="arrows">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="9"
              height="15"
              viewBox="0 0 9 15"
              fill="none"
            >
              <path
                d="M1.93549 1.2749L7.93549 7.2749L1.93549 13.2749"
                stroke="#0D0803"
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
                d="M1.93549 1.2749L7.93549 7.2749L1.93549 13.2749"
                stroke="#0D0803"
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
                d="M1.93549 1.2749L7.93549 7.2749L1.93549 13.2749"
                stroke="#0D0803"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>

          <div class="icon-offset">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="97"
              height="97"
              viewBox="0 0 97 97"
              fill="none"
            >
              <g clip-path="url(#clip0_2377_18939)">
                <path
                  d="M59.8343 18.9983L70.5039 17.1651C72.8922 16.7547 75.161 18.3581 75.5713 20.7464L82.6079 61.7009L20.7664 72.3262L13.7298 31.3717C13.3195 28.9834 14.9229 26.7147 17.3112 26.3044L28.3483 24.408"
                  stroke="white"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M89.5903 74.6424L18.5206 86.8533C17.0509 87.1058 15.7623 85.8723 15.9459 84.4004L20.7699 72.3396L82.6256 61.7118L91.1986 71.4708C91.863 72.797 91.0459 74.3923 89.5903 74.6424Z"
                  stroke="white"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M15.6027 34.0625L24.6754 32.5037"
                  stroke="white"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M65.8286 25.4331L76.0884 23.6703"
                  stroke="white"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M27.3983 77.7349L78.8104 68.9015"
                  stroke="white"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M60.0737 19.8735C60.0737 19.8735 60.14 19.9203 60.1731 19.9438L55.3277 26.7996C55.3277 26.7996 55.2614 26.7528 55.2283 26.7294C52.0629 24.4798 48.1288 23.599 44.3015 24.2711L42.8859 16.0322L42.8786 15.9898C48.8964 14.9413 55.0867 16.3365 60.0713 19.8594L60.0737 19.8735Z"
                  stroke="white"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M55.3278 26.7999L60.1732 19.944C65.1461 23.4834 68.4851 28.8603 69.4746 34.8737L69.4322 34.881L61.1933 36.2966C60.5801 32.4736 58.4674 29.0684 55.3278 26.7999Z"
                  stroke="white"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M42.8791 15.9897L42.8863 16.0321L44.3019 24.2711C40.5004 24.9242 37.1307 27.0745 34.907 30.2209C34.8836 30.254 34.8602 30.2872 34.8368 30.3203L27.9809 25.4749C27.9809 25.4749 28.0277 25.4086 28.0511 25.3755C31.5482 20.4099 36.8895 17.0334 42.8815 16.0039L42.8791 15.9897Z"
                  stroke="white"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M69.4468 34.879L69.4892 34.8717C70.4856 40.8403 69.0783 46.9599 65.5905 51.8948C65.5671 51.9279 65.5437 51.9611 65.5203 51.9942L58.6644 47.1488C58.6644 47.1488 58.7112 47.0825 58.7346 47.0494C60.9491 43.9337 61.8421 40.0702 61.2244 36.3063L69.4634 34.8907L69.4468 34.879Z"
                  stroke="white"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M58.6473 47.137L65.5032 51.9824C61.9872 56.9221 56.641 60.2704 50.6583 61.2692L49.2427 53.0303L49.2354 52.9879C53.0252 52.3513 56.4022 50.2434 58.6308 47.1252L58.6473 47.137Z"
                  stroke="white"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M34.8506 30.3183C32.6459 33.4905 31.7933 37.4198 32.4913 41.2281L24.21 42.651C23.1356 36.6522 24.5026 30.4667 27.9948 25.4729L34.8506 30.3183Z"
                  stroke="white"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M49.251 52.999L49.2583 53.0414L50.6739 61.2803C44.7243 62.3025 38.6095 60.9234 33.6653 57.4664L38.5107 50.6105C41.6333 52.7801 45.4919 53.6448 49.2393 53.0155L49.251 52.999Z"
                  stroke="white"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M32.4347 41.2377L32.4913 41.228C33.1654 44.9822 35.2967 48.3261 38.4241 50.524C38.4572 50.5474 38.4903 50.5708 38.5234 50.5942L33.678 57.4501C33.678 57.4501 33.6118 57.4032 33.5787 57.3798C28.6297 53.8945 25.2745 48.5931 24.2216 42.6343L32.4606 41.2187L32.4347 41.2377Z"
                  stroke="white"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M52.839 35.099L48.7825 35.1994L46.3993 31.9134C46.1812 31.6599 45.8133 31.6358 45.5715 31.8374C45.4964 31.9085 45.4379 31.9913 45.3959 32.0858L44.2462 35.9789L40.3888 37.2381C40.0851 37.334 39.9217 37.653 40.0175 37.9566C40.0535 38.0814 40.1295 38.1847 40.243 38.2525L43.5925 40.5578L43.5916 44.6171C43.5885 44.9377 43.8491 45.184 44.1555 45.1895C44.2852 45.1818 44.3958 45.1482 44.4991 45.0723L47.7257 42.5974L51.5934 43.8534C51.8862 43.9486 52.2083 43.7914 52.3011 43.4844C52.3382 43.3617 52.3305 43.2321 52.2969 43.1214L50.9411 39.2952L53.3292 36.0041C53.5189 35.7533 53.4582 35.4 53.1932 35.2127C53.0938 35.1425 52.9711 35.1054 52.839 35.099Z"
                  stroke="white"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_2377_18939">
                  <rect
                    width="83"
                    height="83"
                    fill="white"
                    transform="translate(0.935486 14.3296) rotate(-9.74909)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
        </a>
      </div>
    </div>
  </div>
</section>
