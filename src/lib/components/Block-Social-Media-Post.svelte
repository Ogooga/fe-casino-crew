<script>
  import { onMount } from "svelte";
  import jq from "jquery";

  onMount(() => {
    let currentIndex = 0;
    const galleryItems = jq(".block-social-media .gallery-item");
    const modal = jq(".block-social-media#imageModal");
    const popupImage = jq(".block-social-media #popupImage");
    const prevBtn = jq(".block-social-media #prevBtn");
    const nextBtn = jq(".block-social-media #nextBtn");
    const casinoName = jq(".block-social-media-post-modal .casino-name-span");
    const postTitle = jq(".block-social-media-post-modal .post-title");
    const description = jq(".block-social-media-post-modal .post-desc p");
    const likes = jq(".block-social-media-post-modal .likes");

    // Open the modal when clicking on a gallery image
    jq(".gallery-item").click(function () {
      currentIndex = galleryItems.index(this);
      showImage(currentIndex);
      modal.addClass("d-flex");
    });

    // Close the modal when clicking the close button
    jq(".close").click(function () {
      modal.removeClass("d-flex");
    });

    // Show the previous image
    prevBtn.click(function () {
      currentIndex =
        currentIndex > 0 ? currentIndex - 2 : galleryItems.length - 2;
      showImage(currentIndex);
    });

    // Show the next image
    nextBtn.click(function () {
      currentIndex =
        currentIndex < galleryItems.length - 2 ? currentIndex + 2 : 0;
      showImage(currentIndex);
    });

    // Display the clicked image in the modal
    function showImage(index) {
      const src = galleryItems.eq(index).find(".gallery-item").attr("data-src");
      const casino = galleryItems.eq(index).find(".casino-name span").text();
      const title = galleryItems.eq(index).find(".post-title").text();
      const desc = galleryItems.eq(index).find("p").text();
      const likesCount = galleryItems.eq(index).find(".likes").text();
      popupImage.attr("src", src);
      popupImage.attr("alt", galleryItems.eq(index).attr("alt"));
      casinoName.text(casino);
      postTitle.text(title);
      description.text(desc);
      likes.text(likesCount);

      console.log(src);
    }

    // Hide modal on outside click
    jq(window).click(function (event) {
      if (event.target === modal[0]) {
        modal.removeClass("d-flex");
      }
    });

    jq(".block-social-media-post-modal .likes-ctn").click(function (event) {
      jq(this).toggleClass("active");
    });
  });

  const posts = [
    {
      imageUrl: "../images/mihai-image.png",
      casino: "Betano Casino",
      title: "We played the best slot game",
      description:
        "I went there with Finn,the girls wanted to stay on the ship Duis ut massa odio. Ut posuere nibh vel velit eleifend, a scelerisque risus elementum. Aliquam convallis, dolor nec facilisis ullamcorper, nunc massa blandit arcu, ut accumsan nunc augue in lacus. Sed eleifend urna sed leo maximus tincidunt. Sed non tristique risus. Cras eget hendrerit tortor. Donec est mi, dapibus",
    },
    {
      imageUrl: "../images/mihai-image-2.png",
      casino: "212121Betano Casino",
      title: "We played the best slot game",
      description:
        "I went there with Finn,the girls wanted to stay on the ship Duis ut massa odio. Ut posuere nibh vel velit eleifend, a scelerisque risus elementum. Aliquam convallis, dolor nec facilisis ullamcorper, nunc massa blandit arcu, ut accumsan nunc augue in lacus. Sed eleifend urna sed leo maximus tincidunt. Sed non tristique risus. Cras eget hendrerit tortor. Donec est mi, dapibus",
    },
    {
      imageUrl: "../images/mihai-image-3.png",
      casino: "Betano Casino",
      title: "We played the best slot game",
      description:
        "I went there with Finn,the girls wanted to stay on the ship Duis ut massa odio. Ut posuere nibh vel velit eleifend, a scelerisque risus elementum. Aliquam convallis, dolor nec facilisis ullamcorper, nunc massa blandit arcu, ut accumsan nunc augue in lacus. Sed eleifend urna sed leo maximus tincidunt. Sed non tristique risus. Cras eget hendrerit tortor. Donec est mi, dapibus",
    },
    {
      imageUrl: "../images/mihai-image.png",
      casino: "Betano Casino",
      title: "We played the best slot game",
      description:
        "I went there with Finn,the girls wanted to stay on the ship Duis ut massa odio. Ut posuere nibh vel velit eleifend, a scelerisque risus elementum. Aliquam convallis, dolor nec facilisis ullamcorper, nunc massa blandit arcu, ut accumsan nunc augue in lacus. Sed eleifend urna sed leo maximus tincidunt. Sed non tristique risus. Cras eget hendrerit tortor. Donec est mi, dapibus",
    },
    {
      imageUrl: "../images/mihai-image.png",
      casino: "Betano Casino",
      title: "We played the best slot game",
      description:
        "I went there with Finn,the girls wanted to stay on the ship Duis ut massa odio. Ut posuere nibh vel velit eleifend, a scelerisque risus elementum. Aliquam convallis, dolor nec facilisis ullamcorper, nunc massa blandit arcu, ut accumsan nunc augue in lacus. Sed eleifend urna sed leo maximus tincidunt. Sed non tristique risus. Cras eget hendrerit tortor. Donec est mi, dapibus",
    },
    {
      imageUrl: "../images/mihai-image.png",
      casino: "Betano Casino",
      title: "We played the best slot game",
      description:
        "I went there with Finn,the girls wanted to stay on the ship Duis ut massa odio. Ut posuere nibh vel velit eleifend, a scelerisque risus elementum. Aliquam convallis, dolor nec facilisis ullamcorper, nunc massa blandit arcu, ut accumsan nunc augue in lacus. Sed eleifend urna sed leo maximus tincidunt. Sed non tristique risus. Cras eget hendrerit tortor. Donec est mi, dapibus",
    },
    {
      imageUrl: "../images/mihai-image.png",
      casino: "Betano Casino",
      title: "We played the best slot game",
      description:
        "I went there with Finn,the girls wanted to stay on the ship Duis ut massa odio. Ut posuere nibh vel velit eleifend, a scelerisque risus elementum. Aliquam convallis, dolor nec facilisis ullamcorper, nunc massa blandit arcu, ut accumsan nunc augue in lacus. Sed eleifend urna sed leo maximus tincidunt. Sed non tristique risus. Cras eget hendrerit tortor. Donec est mi, dapibus",
    },
    {
      imageUrl: "../images/mihai-image.png",
      casino: "Betano Casino",
      title: "We played the best slot game",
      description:
        "I went there with Finn,the girls wanted to stay on the ship Duis ut massa odio. Ut posuere nibh vel velit eleifend, a scelerisque risus elementum. Aliquam convallis, dolor nec facilisis ullamcorper, nunc massa blandit arcu, ut accumsan nunc augue in lacus. Sed eleifend urna sed leo maximus tincidunt. Sed non tristique risus. Cras eget hendrerit tortor. Donec est mi, dapibus",
    },
    {
      imageUrl: "../images/mihai-image.png",
      casino: "Betano Casino",
      title: "We played the best slot game",
      description:
        "I went there with Finn,the girls wanted to stay on the ship Duis ut massa odio. Ut posuere nibh vel velit eleifend, a scelerisque risus elementum. Aliquam convallis, dolor nec facilisis ullamcorper, nunc massa blandit arcu, ut accumsan nunc augue in lacus. Sed eleifend urna sed leo maximus tincidunt. Sed non tristique risus. Cras eget hendrerit tortor. Donec est mi, dapibus",
    },
  ];
</script>

<div class="block-social-media-post block-social-media gallery mb-4 mb-md-5">
  {#each posts as post, i}
    <div class="post gallery-item">
      <div
        class="post-image gallery-item"
        style={`background-image: url(${post.imageUrl})`}
        data-src={post.imageUrl}
      ></div>
      <div class="post-content">
        <div>
          <div class="casino-name">
            <span>
              <img class="pin" src="/images/pin.png" alt="pin" />
            </span>
            <span>{post.casino} {i}</span>
          </div>

          <div class="post-title">{post.title} {i}</div>
          <p>{i} {post.description}</p>
        </div>

        <div class="likes-ctn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="31"
            height="27"
            viewBox="0 0 31 27"
            fill="none"
          >
            <path
              d="M28.297 2.67179C26.794 1.0722 24.7544 0.170408 22.564 0.138184C20.3847 0.138184 18.3127 0.943371 16.7561 2.50002L15.4893 3.77757L14.2225 2.50002C12.6766 0.95409 10.6154 0.138184 8.41465 0.148902C6.22459 0.181109 4.18499 1.08292 2.68167 2.68251C-0.270643 5.8173 -0.0988734 10.9275 3.05743 14.0839L14.7378 25.7642C14.9417 25.9682 15.2101 26.0756 15.5 26.0756C15.7899 26.0756 16.0583 25.9575 16.2623 25.7642L27.9426 14.0839C31.0989 10.9276 31.2706 5.80665 28.3184 2.68251L28.297 2.67179ZM26.3968 12.5592L15.4788 23.4772L4.56076 12.5592C2.2204 10.2188 2.0701 6.44007 4.22795 4.14248C5.33374 2.97231 6.82597 2.30667 8.43631 2.28524H8.5222C10.1003 2.28524 11.5711 2.89715 12.6876 4.01365L14.7166 6.06417C15.1246 6.47212 15.8331 6.47212 16.2411 6.06417L18.2701 4.0244C19.4081 2.88643 20.911 2.30671 22.5214 2.29599C24.1317 2.31746 25.624 2.98307 26.7297 4.15323C28.8876 6.45065 28.748 10.2188 26.3969 12.5699L26.3968 12.5592Z"
              fill="white"
            />
          </svg>
          <span class="likes">124 likes</span>
        </div>
      </div>
    </div>
  {/each}
</div>

<!-- Modal -->
<div id="imageModal" class="block-social-media-post-modal block-social-media">
  <div class="container content-ctn">
    <img class="modal-content" id="popupImage" alt="character" />

    <div class="post-content">
      <div>
        <div class="casino-name">
          <span>
            <img class="pin" src="/images/pin.png" alt="pin" />
          </span>
          <span class="casino-name-span"></span>
        </div>

        <div class="post-title"></div>
      </div>

      <div class="likes-ctn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="31"
          height="27"
          viewBox="0 0 31 27"
          fill="none"
        >
          <path
            d="M28.297 2.67179C26.794 1.0722 24.7544 0.170408 22.564 0.138184C20.3847 0.138184 18.3127 0.943371 16.7561 2.50002L15.4893 3.77757L14.2225 2.50002C12.6766 0.95409 10.6154 0.138184 8.41465 0.148902C6.22459 0.181109 4.18499 1.08292 2.68167 2.68251C-0.270643 5.8173 -0.0988734 10.9275 3.05743 14.0839L14.7378 25.7642C14.9417 25.9682 15.2101 26.0756 15.5 26.0756C15.7899 26.0756 16.0583 25.9575 16.2623 25.7642L27.9426 14.0839C31.0989 10.9276 31.2706 5.80665 28.3184 2.68251L28.297 2.67179ZM26.3968 12.5592L15.4788 23.4772L4.56076 12.5592C2.2204 10.2188 2.0701 6.44007 4.22795 4.14248C5.33374 2.97231 6.82597 2.30667 8.43631 2.28524H8.5222C10.1003 2.28524 11.5711 2.89715 12.6876 4.01365L14.7166 6.06417C15.1246 6.47212 15.8331 6.47212 16.2411 6.06417L18.2701 4.0244C19.4081 2.88643 20.911 2.30671 22.5214 2.29599C24.1317 2.31746 25.624 2.98307 26.7297 4.15323C28.8876 6.45065 28.748 10.2188 26.3969 12.5699L26.3968 12.5592Z"
            fill="white"
          />
        </svg>
        <span class="likes"></span>
      </div>
    </div>

    <div class="post-desc">
      <p></p>
    </div>

    <div class="modal-controls">
      <button id="prevBtn"
        ><span
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="6"
            height="11"
            viewBox="0 0 6 11"
            fill="none"
          >
            <path
              d="M5.13672 0.976562L0.995863 5.11742L5.13672 9.25827"
              stroke="#FF9619"
              stroke-width="1.71497"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg></span
        >
        <span
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="6"
            height="11"
            viewBox="0 0 6 11"
            fill="none"
          >
            <path
              d="M5.13672 0.976562L0.995863 5.11742L5.13672 9.25827"
              stroke="#FF9619"
              stroke-width="1.71497"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg></span
        >
        <span
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="6"
            height="11"
            viewBox="0 0 6 11"
            fill="none"
          >
            <path
              d="M5.13672 0.976562L0.995863 5.11742L5.13672 9.25827"
              stroke="#FF9619"
              stroke-width="1.71497"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg></span
        >
        <span class="text">previous post</span>
      </button>
      <button id="nextBtn">
        <span class="text">next post</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="6"
          height="11"
          viewBox="0 0 6 11"
          fill="none"
        >
          <path
            d="M0.857422 0.976624L4.99828 5.11748L0.857422 9.25834"
            stroke="#FF9619"
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
            d="M0.857422 0.976624L4.99828 5.11748L0.857422 9.25834"
            stroke="#FF9619"
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
            d="M0.857422 0.976624L4.99828 5.11748L0.857422 9.25834"
            stroke="#FF9619"
            stroke-width="1.71497"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </div>
  </div>
</div>
