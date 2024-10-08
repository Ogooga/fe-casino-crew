<script>
  import Style1 from "../../lib/offers/Style1.svelte";
  import Toc from "../../lib/components/TOC.svelte";
  import CharacterInfo from "../../lib/components/CharacterInfo.svelte";
  import CardsContent from "../../lib/components/CardsContent.svelte";
  import CasinoInfo from "../../lib/components/CasinoInfo.svelte";
  import AboutInfo from "../../lib/components/AboutInfo.svelte";
  import PostCard from "../../lib/components/PostCard.svelte";
  import FaqsContent from "../../lib/components/FaqsContent.svelte";
  import GraphicBlock from "../../lib/components/GraphicBlock.svelte";
</script>

<div class="container py-4 py-md-5">
  <!-- hero area -->
  <div class="hero hero--2 mb-3 mb-md-4">
    <img src="https://placehold.co/1440x430" alt="" />
    <div class="row text-center justify-content-center">
      <div class="col-12 col-md-10">
        <h1>Lorem ipsum dolor sit amet.</h1>

        <div class="author-meta">
          <div class="item">
            Author:
            <a href="https://google.es/"><strong>Andreea Dorothy</strong></a>
          </div>
          <div class="item">
            Verified by:
            <a href="https://google.es/"><strong>John Doe</strong></a>
          </div>
          <div class="item">
            Last Update: <strong>05/11/2023</strong>
          </div>
        </div>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro et
          rerum sequi. Illum rem non obcaecati incidunt voluptates consequatur
          cumque, quasi libero soluta error, odit suscipit repudiandae,
          blanditiis optio. Vero atque saepe rem? Iusto recusandae sit doloribus
          dolorum. Adipisci, et?
        </p>
      </div>
    </div>
  </div>

  <!-- filters navigation -->
  <div class="row mb-4 align-items-center">
    <div class="col-md-3">
      <div class="row filters-nav mb-3 mb-md-0">
        <div class="filters-toggle">
          <span>
            <svg
              width="25"
              height="21"
              viewBox="0 0 25 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.32946 2.29883V3.54145H0.819063C0.477343 3.54145 0.197754 3.26186 0.197754 2.92014C0.197754 2.57842 0.477343 2.29883 0.819063 2.29883H4.32946Z"
                fill="#0D0803"
              />
              <path
                d="M24.8018 2.92014C24.8018 3.26186 24.5222 3.54145 24.1804 3.54145H7.87109V2.29883H24.1804C24.5222 2.29883 24.8018 2.57842 24.8018 2.92014Z"
                fill="#0D0803"
              />
              <path
                d="M3.18018 0V5.80924H8.98941V0H3.18018ZM7.87106 4.69088H4.3296V1.11836H7.90212V4.69088H7.87106Z"
                fill="#0D0803"
              />
              <path
                d="M15.6062 9.87793V11.1205H0.819063C0.477343 11.1205 0.197754 10.841 0.197754 10.4992C0.197754 10.1575 0.477343 9.87793 0.819063 9.87793H15.6062Z"
                fill="#0D0803"
              />
              <path
                d="M24.8006 10.4992C24.8006 10.841 24.521 11.1205 24.1793 11.1205H19.1777V9.87793H24.1793C24.521 9.87793 24.8006 10.1575 24.8006 10.4992Z"
                fill="#0D0803"
              />
              <path
                d="M14.4561 7.57959V13.3888H20.2653V7.57959H14.4561ZM19.178 12.2705H15.6055V8.69795H19.178V12.2705Z"
                fill="#0D0803"
              />
              <path
                d="M4.32946 17.459V18.7016H0.819063C0.477343 18.7016 0.197754 18.422 0.197754 18.0803C0.197754 17.7386 0.477343 17.459 0.819063 17.459H4.32946Z"
                fill="#0D0803"
              />
              <path
                d="M24.8018 18.0803C24.8018 18.422 24.5222 18.7016 24.1804 18.7016H7.87109V17.459H24.1804C24.5222 17.459 24.8018 17.7386 24.8018 18.0803Z"
                fill="#0D0803"
              />
              <path
                d="M3.18018 15.1914V21.0006H8.98941V15.1914H3.18018ZM7.87106 19.8823H4.3296V16.3098H7.90212V19.8823H7.87106Z"
                fill="#0D0803"
              />
            </svg>
          </span>
          <div class="label">FILTERS</div>
        </div>
      </div>
    </div>
    <div class="col-md-9 d-flex justify-content-end">
      <div class="casino-disclosure-single">
        <p>Disclosure</p>
        <span class="span">
          <svg
            viewBox="0 0 21 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.864746"
              y="0.5"
              width="19"
              height="19"
              rx="9.5"
              fill="white"
            />
            <rect
              x="0.864746"
              y="0.5"
              width="19"
              height="19"
              rx="9.5"
              stroke="black"
            />
            <path
              d="M9.51225 7.12V5.68H11.1442V7.12H9.51225ZM9.51225 14.5V8.02H11.1442V14.5H9.51225Z"
              fill="black"
            />
          </svg>
        </span>

        <div class="card p-2">
          <svg
            width="11"
            height="10"
            viewBox="0 0 11 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.85627 10L4.41127 5.086L0.92827 0.28H3.48427L5.67127 3.385L7.82227 0.28H10.3783L6.89527 5.086L10.4683 10H7.91227L5.67127 6.787L3.41227 10H0.85627Z"
              fill="#232323"
            />
          </svg>

          <div class="h3">Title</div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae
            provident est quos omnis. Enim consectetur reiciendis quibusdam
            laborum porro necessitatibus.
          </p>
        </div>
      </div>
    </div>
  </div>

  <!-- filters -->
  <div class="filters mb-3 mb-md-4">
    <div class="filters-category-name">
      <span>
        <svg
          width="25"
          height="21"
          viewBox="0 0 25 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.32946 2.29883V3.54145H0.819063C0.477343 3.54145 0.197754 3.26186 0.197754 2.92014C0.197754 2.57842 0.477343 2.29883 0.819063 2.29883H4.32946Z"
            fill="#0D0803"
          />
          <path
            d="M24.8018 2.92014C24.8018 3.26186 24.5222 3.54145 24.1804 3.54145H7.87109V2.29883H24.1804C24.5222 2.29883 24.8018 2.57842 24.8018 2.92014Z"
            fill="#0D0803"
          />
          <path
            d="M3.18018 0V5.80924H8.98941V0H3.18018ZM7.87106 4.69088H4.3296V1.11836H7.90212V4.69088H7.87106Z"
            fill="#0D0803"
          />
          <path
            d="M15.6062 9.87793V11.1205H0.819063C0.477343 11.1205 0.197754 10.841 0.197754 10.4992C0.197754 10.1575 0.477343 9.87793 0.819063 9.87793H15.6062Z"
            fill="#0D0803"
          />
          <path
            d="M24.8006 10.4992C24.8006 10.841 24.521 11.1205 24.1793 11.1205H19.1777V9.87793H24.1793C24.521 9.87793 24.8006 10.1575 24.8006 10.4992Z"
            fill="#0D0803"
          />
          <path
            d="M14.4561 7.57959V13.3888H20.2653V7.57959H14.4561ZM19.178 12.2705H15.6055V8.69795H19.178V12.2705Z"
            fill="#0D0803"
          />
          <path
            d="M4.32946 17.459V18.7016H0.819063C0.477343 18.7016 0.197754 18.422 0.197754 18.0803C0.197754 17.7386 0.477343 17.459 0.819063 17.459H4.32946Z"
            fill="#0D0803"
          />
          <path
            d="M24.8018 18.0803C24.8018 18.422 24.5222 18.7016 24.1804 18.7016H7.87109V17.459H24.1804C24.5222 17.459 24.8018 17.7386 24.8018 18.0803Z"
            fill="#0D0803"
          />
          <path
            d="M3.18018 15.1914V21.0006H8.98941V15.1914H3.18018ZM7.87106 19.8823H4.3296V16.3098H7.90212V19.8823H7.87106Z"
            fill="#0D0803"
          />
        </svg>
      </span>
      <div class="label">Filter Bonuses:</div>
    </div>
    <div class="row mb-3 mb-md-4">
      <div class="col-md-6 col-lg-4 mb-3 mb-lg-0">
        <div id="slots-filters" class="custom-dropdown">
          <div class="selected-option">
            <div class="option-header">
              <h5>Recommended</h5>
              <svg
                width="16"
                height="8"
                viewBox="0 0 16 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.80322 7.5L15.1644 0H0.442007L7.80322 7.5Z"
                  fill="#0D0803"
                />
              </svg>
            </div>
          </div>
          <div class="options-list" id="options-recommended">
            <label>
              <input type="checkbox" class="recently-added" checked="checked" />
              <span class="custom-checkbox"></span>
              Recently added
            </label>
            <label>
              <input type="checkbox" class="highest-rating" />
              <span class="custom-checkbox"></span>
              Highest rating
            </label>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-lg-4 mb-3 mb-lg-0">
        <div id="slots-filters" class="custom-dropdown">
          <div class="selected-option">
            <div class="option-header">
              <h5>Game Provider</h5>
              <svg
                width="16"
                height="8"
                viewBox="0 0 16 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.80322 7.5L15.1644 0H0.442007L7.80322 7.5Z"
                  fill="#0D0803"
                />
              </svg>
            </div>
          </div>
          <div class="options-list" id="options-game-provider">
            <label data-filter="producer.slug" id="producer_selector">
              <input type="checkbox" value="producer.slug" />
              <span class="custom-checkbox"></span>
              producer.name
            </label>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-lg-4 mb-3 mb-md-0">
        <div id="slots-filters" class="custom-dropdown">
          <div class="selected-option">
            <div class="option-header">
              <h5>Game Theme</h5>
              <svg
                width="16"
                height="8"
                viewBox="0 0 16 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.80322 7.5L15.1644 0H0.442007L7.80322 7.5Z"
                  fill="#0D0803"
                />
              </svg>
            </div>
          </div>
          <div class="options-list" id="options-slot-types">
            <label data-filter="slot_type.slug" id="slot_type_selector">
              <input type="checkbox" value="slot_type.slug" />
              <span class="custom-checkbox"></span>
              slot_type.name
            </label>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="row mb-3">
    {#each Array(9) as _, index (index)}
      <div class="col-12 col-md-6 col-xl-4 mb-4">
        <Style1 />
      </div>
    {/each}
  </div>

  <!-- Loar More Button -->
  <div class="d-flex justify-content-center d-md-none">
    <div class="btn btn--2">Call to Action ></div>
  </div>

  <!-- Pagination with author meta -->
  <div class="row mb-4 mb-md-5 align-items-center">
    <div class="col-12 col-md-6 order-2 order-md-1 mt-3 mt-md-0">
      <div class="author-meta maxw-fit-content mb-0 mx-auto mx-md-0">
        <div class="item">
          Author:
          <a href="https://google.es/"><strong>Andreea Dorothy</strong></a>
        </div>
        <div class="item">
          Last Update: <strong>05/11/2023</strong>
        </div>
      </div>
    </div>
    <div
      class="col-12 col-md-6 d-flex justify-content-center justify-content-md-end mt-4 mt-md-0 order-1 order-md-2"
    >
      <nav>
        <ul class="pagination mb-0">
          <li class="page-item">
            <a
              class="page-link"
              href="https://google.es/"
              tabindex="-1"
              aria-disabled="true">Previous</a
            >
          </li>
          <li class="page-item">
            <a class="page-link" href="https://google.es/">1</a>
          </li>
          <li class="page-item active" aria-current="page">
            <a class="page-link" href="https://google.es/">2</a>
          </li>
          <li class="page-item">
            <a class="page-link" href="https://google.es/">3</a>
          </li>
          <li class="page-item">
            <a class="page-link" href="https://google.es/">Next</a>
          </li>
        </ul>
      </nav>
    </div>
  </div>

  <Toc />
  <CharacterInfo />
  <CardsContent cardsType="quotes" />
  <CasinoInfo />

  <div class="row justify-content-center">
    <div class="col-md-10">
      <h2 class="text-center">Tempor pretium urna tincidunt</h2>
      <p>
        Donec orci enim, condimentum convallis sem in, tincidunt tristique nunc.
        Quisque in nulla sed tortor ornare efficitur quis sed mi. Aenean sed
        malesuada sem. Etiam vitae eros ipsum. Praesent scelerisque velit nulla,
        varius molestie sem vehicula ac. Fusce vel tincidunt dui. Mauris
        elementum lacus justo, id dictum ante eleifend ornare. Ut tincidunt
        mattis pulvinar. Duis at arcu sit amet justo semper mattis nec
        pellentesque nisi. Nullam placerat enim a vestibulum finibus. Nullam
        semper dui magna, eget congue leo auctor eget.
      </p>
      <p>
        Duis ut massa odio. Ut posuere nibh vel velit eleifend, a scelerisque
        risus elementum. Aliquam convallis, dolor nec facilisis ullamcorper,
        nunc massa blandit arcu, ut accumsan nunc augue in lacus. Sed eleifend
        urna sed leo maximus tincidunt. Sed non tristique risus. Cras eget
        hendrerit tortor. Donec est mi, dapibus id metus vel, sollicitudin
        gravida felis. Nulla vel sagittis lorem.
      </p>
    </div>
  </div>
</div>

<div class="container">
  <CasinoInfo />
  <h2 class="text-center">Casino Crew’s Blog and News Desk</h2>
  <div class="row mb-5 justify-content-center">
    {#each Array(3) as _, index (index)}
      <PostCard />
    {/each}
  </div>
  <div class="d-flex justify-content-center mb-5">
    <a href="google.com" class="btn btn--2">SEE ALL ARTICLES ></a>
  </div>
</div>

<AboutInfo type="images" />

<div class="container">
  <div class="row justify-content-center">
    <div class="col-md-10">
      <h2 class="text-center">Tempor pretium urna tincidunt</h2>
      <p>
        Donec orci enim, condimentum convallis sem in, tincidunt tristique nunc.
        Quisque in nulla sed tortor ornare efficitur quis sed mi. Aenean sed
        malesuada sem. Etiam vitae eros ipsum. Praesent scelerisque velit nulla,
        varius molestie sem vehicula ac. Fusce vel tincidunt dui. Mauris
        elementum lacus justo, id dictum ante eleifend ornare. Ut tincidunt
        mattis pulvinar. Duis at arcu sit amet justo semper mattis nec
        pellentesque nisi. Nullam placerat enim a vestibulum finibus. Nullam
        semper dui magna, eget congue leo auctor eget.
      </p>
      <p>
        Duis ut massa odio. Ut posuere nibh vel velit eleifend, a scelerisque
        risus elementum. Aliquam convallis, dolor nec facilisis ullamcorper,
        nunc massa blandit arcu, ut accumsan nunc augue in lacus. Sed eleifend
        urna sed leo maximus tincidunt. Sed non tristique risus. Cras eget
        hendrerit tortor. Donec est mi, dapibus id metus vel, sollicitudin
        gravida felis. Nulla vel sagittis lorem.
      </p>
    </div>
  </div>

  <CasinoInfo />
  <CardsContent cardsType="slots" />
  <GraphicBlock />

  <div class="row justify-content-center">
    <div class="col-md-10">
      <h2 class="text-center">Tempor pretium urna tincidunt</h2>
      <p>
        Donec orci enim, condimentum convallis sem in, tincidunt tristique nunc.
        Quisque in nulla sed tortor ornare efficitur quis sed mi. Aenean sed
        malesuada sem. Etiam vitae eros ipsum. Praesent scelerisque velit nulla,
        varius molestie sem vehicula ac. Fusce vel tincidunt dui. Mauris
        elementum lacus justo, id dictum ante eleifend ornare. Ut tincidunt
        mattis pulvinar. Duis at arcu sit amet justo semper mattis nec
        pellentesque nisi. Nullam placerat enim a vestibulum finibus. Nullam
        semper dui magna, eget congue leo auctor eget.
      </p>
      <p>
        Duis ut massa odio. Ut posuere nibh vel velit eleifend, a scelerisque
        risus elementum. Aliquam convallis, dolor nec facilisis ullamcorper,
        nunc massa blandit arcu, ut accumsan nunc augue in lacus. Sed eleifend
        urna sed leo maximus tincidunt. Sed non tristique risus. Cras eget
        hendrerit tortor. Donec est mi, dapibus id metus vel, sollicitudin
        gravida felis. Nulla vel sagittis lorem.
      </p>
    </div>
  </div>

  <FaqsContent />
</div>
