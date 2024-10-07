<script>
  export let enableRating, cardsType;
</script>

<!-- rating title ctn -->
<div class="text-center mb-3 mb-md-4">
  <div class="d-flex align-items-center justify-content-center gap-3 mb-3">
    <h2 class="mb-0">Creating an account on Slotbox Casino</h2>
    {#if enableRating}
      <div class="card-rating">
        <span>
          <svg
            width="18"
            height="17"
            viewBox="0 0 18 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.98921 1.23661C8.26479 0.388459 9.4647 0.388461 9.74028 1.23661L11.1277 5.50669C11.251 5.886 11.6044 6.14281 12.0032 6.14281H16.4931C17.3849 6.14281 17.7557 7.28399 17.0342 7.80817L13.4018 10.4472C13.0792 10.6817 12.9442 11.0972 13.0674 11.4765L14.4548 15.7466C14.7304 16.5947 13.7597 17.3 13.0382 16.7758L9.40586 14.1368C9.0832 13.9023 8.64629 13.9023 8.32364 14.1368L4.69129 16.7758C3.96981 17.3 2.99906 16.5947 3.27464 15.7466L4.66208 11.4765C4.78532 11.0972 4.65031 10.6817 4.32765 10.4472L0.695303 7.80817C-0.0261774 7.28398 0.344617 6.14281 1.23642 6.14281H5.72624C6.12507 6.14281 6.47853 5.886 6.60178 5.50669L7.98921 1.23661Z"
              fill="#FF9619"
            />
          </svg>
        </span>
        <strong>3.9/5</strong>
      </div>
    {/if}
  </div>
  <p class="px-md-5">
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est, ab! Impedit
    voluptatum non quod cum, ullam repellat expedita quae. Tenetur repellendus
    illum eius exercitationem soluta eligendi necessitatibus provident
    quibusdam. Natus facilis provident ipsam ad, illum officiis optio veritatis
    perferendis aperiam ut consectetur explicabo quis debitis facere corrupti
    quas corporis iure rerum nemo, error aliquid magnam. Non repellendus,
    architecto quis ex doloribus quam a, sint vitae quasi delectus dolorem eaque
    atque pariatur magni inventore provident dolore dolorum expedita, labore
    quibusdam! Adipisci!
  </p>
</div>

{#if cardsType == "steps"}
  <!-- steps -->
  <div class="row mb-4 mb-md-5">
    <div class="col-12 col-md-6 col-lg-4 mb-3">
      <div class="step-card">
        <div class="counter">1</div>
        <div class="h4">Sed do eiusmod tempor incididunt</div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt
        </p>
      </div>
    </div>
    <div class="col-12 col-md-6 col-lg-4 mb-3">
      <div class="step-card">
        <div class="counter">1</div>
        <div class="h4">Sed do eiusmod tempor incididunt</div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt
        </p>
      </div>
    </div>
    <div class="col-12 col-md-6 col-lg-4 mb-3">
      <div class="step-card">
        <div class="counter">1</div>
        <div class="h4">Sed do eiusmod tempor incididunt</div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt
        </p>
      </div>
    </div>
  </div>
{:else if cardsType == "slots"}
  <div class="row categories-cards mb-3 mb-md-4">
    {#each Array(12) as _, index (index)}
      <div class="col-4 col-md-3 col-lg-2 mb-3 mb-md-4">
        <a href="https://google.es/" class="item">
          <span>
            <svg
              width="41"
              height="40"
              viewBox="0 0 41 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M31.2852 16.0435H34.1643C35.0508 16.0435 35.7706 16.7632 35.7706 17.6421V23.9232C35.7706 24.8021 35.0508 25.5219 34.1643 25.5219H29.9517"
                stroke="#FF9619"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M38.5436 20.7941C38.5436 21.8473 37.6874 22.7034 36.6343 22.7034C36.3236 22.7034 36.0281 22.6277 35.7705 22.4989V19.0893C36.0281 18.9605 36.3236 18.8848 36.6343 18.8848C36.7934 18.8848 36.9449 18.8999 37.0889 18.9378C37.9223 19.1424 38.5436 19.9 38.5436 20.7941Z"
                stroke="#FF9619"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M37.0889 11.4216V18.6877"
                stroke="#FF9619"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M37.089 11.4217C38.1435 11.4217 38.9984 10.5669 38.9984 9.51236C38.9984 8.45786 38.1435 7.60303 37.089 7.60303C36.0345 7.60303 35.1797 8.45786 35.1797 9.51236C35.1797 10.5669 36.0345 11.4217 37.089 11.4217Z"
                stroke="#FF9619"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M15.3138 12.2476H7.47949V25.5296H15.3138V12.2476Z"
                stroke="#FF9619"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M23.1405 12.2476H15.3062V25.5296H23.1405V12.2476Z"
                stroke="#FF9619"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M30.9745 12.2476H23.1401V25.5296H30.9745V12.2476Z"
                stroke="#FF9619"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7.37322 8.15625H31.0808C31.8991 8.15625 32.5658 8.823 32.5658 9.64129V10.7626C32.5658 11.5809 31.8991 12.2477 31.0808 12.2477H7.37322C6.55494 12.2477 5.88818 11.5809 5.88818 10.7626V9.64129C5.88818 8.823 6.55494 8.15625 7.37322 8.15625Z"
                stroke="#FF9619"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M27.5727 4.75424H25.8225C25.6482 4.75424 25.5118 4.61786 25.4891 4.4436C25.2012 2.70853 22.5115 1.35229 19.2307 1.35229C15.95 1.35229 13.2603 2.70853 12.9724 4.4436C12.9421 4.61786 12.8133 4.75424 12.639 4.75424H10.8888C9.00974 4.75424 7.48682 6.27716 7.48682 8.15619H30.9822C30.9822 6.27716 29.4593 4.75424 27.5803 4.75424H27.5727Z"
                stroke="#FF9619"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M15.8589 7.94397C15.8589 7.27722 16.4044 6.72412 17.0787 6.72412H21.3747C22.0415 6.72412 22.5946 7.26964 22.5946 7.94397"
                stroke="#FF9619"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M9.5249 15.6868H13.2602L10.6151 21.8706"
                stroke="#FF9619"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M17.4575 15.6865H21.1931L18.5478 21.8707"
                stroke="#FF9619"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M25.1606 15.645H28.9465L26.2656 21.9125"
                stroke="#FF9619"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M31.0503 25.6963L33.3234 28.9088H5.13037L7.40339 25.6963"
                stroke="#FF9619"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M33.3234 28.9089L32.5657 39.1602H5.88804L5.13037 28.9089"
                stroke="#FF9619"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M25.186 38.7662C25.186 37.6146 24.2541 36.6826 23.1024 36.6826H15.3439C14.1922 36.6826 13.2603 37.6146 13.2603 38.7662"
                stroke="#FF9619"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8.75195 33.0002H29.694"
                stroke="#FF9619"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
          <div class="label">Slots</div>
        </a>
      </div>
    {/each}
  </div>
{:else}
  <div class="row mb-4 mb-md-5">
    <div class="col-12 col-md-6 col-lg-4 mb-3 mb-lg-0">
      <div class="testimonial-card">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt
        </p>
        <div class="h4 mb-0">John Doe</div>

        <span>
          <svg
            width="49"
            height="44"
            viewBox="0 0 49 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.48834 42.3215L1.70897 33.6245C4.15022 33.828 6.13373 33.4465 7.65951 32.4802C9.1853 31.463 10.2279 30.039 10.7874 28.208C11.3977 26.3262 11.5248 24.1647 11.1688 21.7234H0.48834V0.972814H21.239V21.7234C21.239 29.0472 19.5352 34.5909 16.1276 38.3545C12.72 42.1181 7.50694 43.4404 0.48834 42.3215ZM28.105 42.3215L29.3256 33.6245C31.7669 33.828 33.7504 33.4465 35.2762 32.4802C36.8019 31.463 37.8446 30.039 38.404 28.208C39.0143 26.3262 39.1415 24.1647 38.7855 21.7234H28.105V0.972814H48.8556V21.7234C48.8556 29.0472 47.1518 34.5909 43.7443 38.3545C40.3367 42.1181 35.1236 43.4404 28.105 42.3215Z"
              fill="#FF9619"
            />
          </svg>
        </span>
      </div>
    </div>
    <div class="col-12 col-md-6 col-lg-4 mb-3 mb-lg-0">
      <div class="testimonial-card">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt
        </p>
        <div class="h4 mb-0">John Doe</div>

        <span>
          <svg
            width="49"
            height="44"
            viewBox="0 0 49 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.48834 42.3215L1.70897 33.6245C4.15022 33.828 6.13373 33.4465 7.65951 32.4802C9.1853 31.463 10.2279 30.039 10.7874 28.208C11.3977 26.3262 11.5248 24.1647 11.1688 21.7234H0.48834V0.972814H21.239V21.7234C21.239 29.0472 19.5352 34.5909 16.1276 38.3545C12.72 42.1181 7.50694 43.4404 0.48834 42.3215ZM28.105 42.3215L29.3256 33.6245C31.7669 33.828 33.7504 33.4465 35.2762 32.4802C36.8019 31.463 37.8446 30.039 38.404 28.208C39.0143 26.3262 39.1415 24.1647 38.7855 21.7234H28.105V0.972814H48.8556V21.7234C48.8556 29.0472 47.1518 34.5909 43.7443 38.3545C40.3367 42.1181 35.1236 43.4404 28.105 42.3215Z"
              fill="#FF9619"
            />
          </svg>
        </span>
      </div>
    </div>
    <div class="col-12 col-md-6 col-lg-4 mb-3 mb-lg-0">
      <div class="testimonial-card">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt
        </p>
        <div class="h4 mb-0">John Doe</div>

        <span>
          <svg
            width="49"
            height="44"
            viewBox="0 0 49 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.48834 42.3215L1.70897 33.6245C4.15022 33.828 6.13373 33.4465 7.65951 32.4802C9.1853 31.463 10.2279 30.039 10.7874 28.208C11.3977 26.3262 11.5248 24.1647 11.1688 21.7234H0.48834V0.972814H21.239V21.7234C21.239 29.0472 19.5352 34.5909 16.1276 38.3545C12.72 42.1181 7.50694 43.4404 0.48834 42.3215ZM28.105 42.3215L29.3256 33.6245C31.7669 33.828 33.7504 33.4465 35.2762 32.4802C36.8019 31.463 37.8446 30.039 38.404 28.208C39.0143 26.3262 39.1415 24.1647 38.7855 21.7234H28.105V0.972814H48.8556V21.7234C48.8556 29.0472 47.1518 34.5909 43.7443 38.3545C40.3367 42.1181 35.1236 43.4404 28.105 42.3215Z"
              fill="#FF9619"
            />
          </svg>
        </span>
      </div>
    </div>
  </div>
{/if}
