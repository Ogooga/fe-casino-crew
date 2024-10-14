<script>
  import jq from "jquery";
  import { onMount } from "svelte";

  onMount(() => {
    let activeUserIndex = 0;
    let activeStoryIndex = 0;
    const storyDuration = 5000; // 5 seconds per story

    // Initialize Splide
    const splideStoryPost = new Splide("#block-story-post-carousel", {
      perPage: 4,
      gap: 20,
      pagination: true,
      arrows: false,
      breakpoints: {
        768: {
          perPage: 1,
        },
      },
    }).mount();

    function updateActiveStory() {
      jq(".story-viewer").addClass("inactive");
      const activeViewer = jq(".story-viewer")
        .eq(activeUserIndex)
        .removeClass("inactive");
      const stories = activeViewer.data("stories").split(",");

      activeViewer.find(".story-image").attr("src", stories[activeStoryIndex]);

      // Hide all story texts and show the active one
      activeViewer.find(".story-text").hide();
      const activeText = activeViewer
        .find(".story-text")
        .eq(activeStoryIndex)
        .show();

      // Reset and trigger text animation
      activeText.removeClass("animate");
      setTimeout(() => {
        activeText.addClass("animate");
      }, 10);

      startStoryProgress();
    }

    function startStoryProgress() {
      jq(".progress-segment-fill").stop();
      const activeViewer = jq(".story-viewer").eq(activeUserIndex);
      const progressSegments = activeViewer.find(".progress-segment-fill");
      const totalStories = progressSegments.length;

      progressSegments.css("width", "0%");
      for (let i = 0; i < activeStoryIndex; i++) {
        progressSegments.eq(i).css("width", "100%");
      }

      progressSegments
        .eq(activeStoryIndex)
        .animate({ width: "100%" }, storyDuration, "linear", () => {
          goToNextStory();
        });
    }

    function goToPreviousStory() {
      activeStoryIndex--;
      if (activeStoryIndex < 0) {
        activeUserIndex =
          (activeUserIndex - 1 + jq(".story-viewer").length) %
          jq(".story-viewer").length;
        activeStoryIndex =
          jq(".story-viewer").eq(activeUserIndex).find(".progress-segment")
            .length - 1;
        splideStoryPost.go("<"); // Move to the previous slide when moving to the previous user
      }
      updateActiveStory();
    }

    function goToNextStory() {
      const totalStories = jq(".story-viewer")
        .eq(activeUserIndex)
        .find(".progress-segment").length;
      activeStoryIndex++;
      if (activeStoryIndex >= totalStories) {
        activeUserIndex = (activeUserIndex + 1) % jq(".story-viewer").length;
        activeStoryIndex = 0;
        splideStoryPost.go(">"); // Move to the next slide when moving to the next user
      }
      updateActiveStory();
    }

    function activateStoryViewer(index) {
      activeUserIndex = index;
      activeStoryIndex = 0;
      updateActiveStory();
      splideStoryPost.go(index); // Move the Splide carousel to the activated story
    }

    jq(".story-viewer").on("click", function (e) {
      const clickedIndex = jq(this).closest(".splide__slide").index();

      if (clickedIndex !== activeUserIndex) {
        // Clicked on an inactive card
        activateStoryViewer(clickedIndex);
      } else {
        // Clicked on the active card
        const clickX = e.pageX - jq(this).offset().left;
        const cardWidth = jq(this).width();

        if (clickX < cardWidth / 2) {
          // Clicked on left half
          goToPreviousStory();
        } else {
          // Clicked on right half
          goToNextStory();
        }
      }
    });

    updateActiveStory();
  });
</script>

<div class="block-story-post">
  <div class="title">James's Background</div>
  <div class="container">
    <div id="block-story-post-carousel" class="splide">
      <div class="splide__track">
        <div class="splide__list">
          <div class="splide__slide">
            <div
              class="story-viewer"
              data-stories="https://placehold.co/270x480,https://placehold.co/270x480,https://placehold.co/270x480"
            >
              <img
                src="https://placehold.co/270x480"
                alt="User 1's story"
                class="story-image"
              />
              <div class="story-overlay">
                <div class="story-header">
                  <div class="user-avatar"></div>
                  <div>
                    <div class="user-role">My Story</div>
                    <div class="user-name">User 1</div>
                  </div>
                </div>
                <div class="story-text">
                  <div class="title">Beginnings</div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                    dolorum corrupti totam velit autem eligendi illum sequi et.
                  </p>
                </div>
                <div class="story-text" style="display: none;">
                  <div class="title">Middle Chapter</div>
                  <p>
                    Quidem ipsam odit perspiciatis aspernatur a quam? Quaerat
                    beatae consequuntur aliquid accusamus.
                  </p>
                </div>
                <div class="story-text" style="display: none;">
                  <div class="title">The End</div>
                  <p>
                    Officia sequi nemo enim, cupiditate eius ea nam, minima at!
                  </p>
                </div>
              </div>
              <div class="story-progress">
                <div class="progress-segment">
                  <div class="progress-segment-fill"></div>
                </div>
                <div class="progress-segment">
                  <div class="progress-segment-fill"></div>
                </div>
                <div class="progress-segment">
                  <div class="progress-segment-fill"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="splide__slide">
            <div
              class="story-viewer"
              data-stories="https://placehold.co/270x480,https://placehold.co/270x480,https://placehold.co/270x480"
            >
              <img
                src="https://placehold.co/270x480"
                alt="User 1's story"
                class="story-image"
              />
              <div class="story-overlay">
                <div class="story-header">
                  <div class="user-avatar"></div>
                  <div>
                    <div class="user-role">My Story</div>
                    <div class="user-name">User 2</div>
                  </div>
                </div>
                <div class="story-text">
                  <div class="title">Beginnings</div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                    dolorum corrupti totam velit autem eligendi illum sequi et.
                  </p>
                </div>
                <div class="story-text" style="display: none;">
                  <div class="title">Middle Chapter</div>
                  <p>
                    Quidem ipsam odit perspiciatis aspernatur a quam? Quaerat
                    beatae consequuntur aliquid accusamus.
                  </p>
                </div>
                <div class="story-text" style="display: none;">
                  <div class="title">The End</div>
                  <p>
                    Officia sequi nemo enim, cupiditate eius ea nam, minima at!
                  </p>
                </div>
              </div>
              <div class="story-progress">
                <div class="progress-segment">
                  <div class="progress-segment-fill"></div>
                </div>
                <div class="progress-segment">
                  <div class="progress-segment-fill"></div>
                </div>
                <div class="progress-segment">
                  <div class="progress-segment-fill"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="splide__slide">
            <div
              class="story-viewer"
              data-stories="https://placehold.co/270x480,https://placehold.co/270x480,https://placehold.co/270x480"
            >
              <img
                src="https://placehold.co/270x480"
                alt="User 1's story"
                class="story-image"
              />
              <div class="story-overlay">
                <div class="story-header">
                  <div class="user-avatar"></div>
                  <div>
                    <div class="user-role">My Story</div>
                    <div class="user-name">User 3</div>
                  </div>
                </div>
                <div class="story-text">
                  <div class="title">Beginnings</div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                    dolorum corrupti totam velit autem eligendi illum sequi et.
                  </p>
                </div>
                <div class="story-text" style="display: none;">
                  <div class="title">Middle Chapter</div>
                  <p>
                    Quidem ipsam odit perspiciatis aspernatur a quam? Quaerat
                    beatae consequuntur aliquid accusamus.
                  </p>
                </div>
                <div class="story-text" style="display: none;">
                  <div class="title">The End</div>
                  <p>
                    Officia sequi nemo enim, cupiditate eius ea nam, minima at!
                  </p>
                </div>
              </div>
              <div class="story-progress">
                <div class="progress-segment">
                  <div class="progress-segment-fill"></div>
                </div>
                <div class="progress-segment">
                  <div class="progress-segment-fill"></div>
                </div>
                <div class="progress-segment">
                  <div class="progress-segment-fill"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="splide__slide">
            <div
              class="story-viewer"
              data-stories="https://placehold.co/270x480,https://placehold.co/270x480,https://placehold.co/270x480"
            >
              <img
                src="https://placehold.co/270x480"
                alt="User 1's story"
                class="story-image"
              />
              <div class="story-overlay">
                <div class="story-header">
                  <div class="user-avatar"></div>
                  <div>
                    <div class="user-role">My Story</div>
                    <div class="user-name">User 4</div>
                  </div>
                </div>
                <div class="story-text">
                  <div class="title">Beginnings</div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                    dolorum corrupti totam velit autem eligendi illum sequi et.
                  </p>
                </div>
                <div class="story-text" style="display: none;">
                  <div class="title">Middle Chapter</div>
                  <p>
                    Quidem ipsam odit perspiciatis aspernatur a quam? Quaerat
                    beatae consequuntur aliquid accusamus.
                  </p>
                </div>
                <div class="story-text" style="display: none;">
                  <div class="title">The End</div>
                  <p>
                    Officia sequi nemo enim, cupiditate eius ea nam, minima at!
                  </p>
                </div>
              </div>
              <div class="story-progress">
                <div class="progress-segment">
                  <div class="progress-segment-fill"></div>
                </div>
                <div class="progress-segment">
                  <div class="progress-segment-fill"></div>
                </div>
                <div class="progress-segment">
                  <div class="progress-segment-fill"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="splide__slide">
            <div
              class="story-viewer"
              data-stories="https://placehold.co/270x480,https://placehold.co/270x480,https://placehold.co/270x480"
            >
              <img
                src="https://placehold.co/270x480"
                alt="User 1's story"
                class="story-image"
              />
              <div class="story-overlay">
                <div class="story-header">
                  <div class="user-avatar"></div>
                  <div>
                    <div class="user-role">My Story</div>
                    <div class="user-name">User 5</div>
                  </div>
                </div>
                <div class="story-text">
                  <div class="title">Beginnings</div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                    dolorum corrupti totam velit autem eligendi illum sequi et.
                  </p>
                </div>
                <div class="story-text" style="display: none;">
                  <div class="title">Middle Chapter</div>
                  <p>
                    Quidem ipsam odit perspiciatis aspernatur a quam? Quaerat
                    beatae consequuntur aliquid accusamus.
                  </p>
                </div>
                <div class="story-text" style="display: none;">
                  <div class="title">The End</div>
                  <p>
                    Officia sequi nemo enim, cupiditate eius ea nam, minima at!
                  </p>
                </div>
              </div>
              <div class="story-progress">
                <div class="progress-segment">
                  <div class="progress-segment-fill"></div>
                </div>
                <div class="progress-segment">
                  <div class="progress-segment-fill"></div>
                </div>
                <div class="progress-segment">
                  <div class="progress-segment-fill"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="splide__slide">
            <div
              class="story-viewer"
              data-stories="https://placehold.co/270x480,https://placehold.co/270x480,https://placehold.co/270x480"
            >
              <img
                src="https://placehold.co/270x480"
                alt="User 1's story"
                class="story-image"
              />
              <div class="story-overlay">
                <div class="story-header">
                  <div class="user-avatar"></div>
                  <div>
                    <div class="user-role">My Story</div>
                    <div class="user-name">User 6</div>
                  </div>
                </div>
                <div class="story-text">
                  <div class="title">Beginnings</div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                    dolorum corrupti totam velit autem eligendi illum sequi et.
                  </p>
                </div>
                <div class="story-text" style="display: none;">
                  <div class="title">Middle Chapter</div>
                  <p>
                    Quidem ipsam odit perspiciatis aspernatur a quam? Quaerat
                    beatae consequuntur aliquid accusamus.
                  </p>
                </div>
                <div class="story-text" style="display: none;">
                  <div class="title">The End</div>
                  <p>
                    Officia sequi nemo enim, cupiditate eius ea nam, minima at!
                  </p>
                </div>
              </div>
              <div class="story-progress">
                <div class="progress-segment">
                  <div class="progress-segment-fill"></div>
                </div>
                <div class="progress-segment">
                  <div class="progress-segment-fill"></div>
                </div>
                <div class="progress-segment">
                  <div class="progress-segment-fill"></div>
                </div>
              </div>
            </div>
          </div>
          <!-- Add more story viewers here -->
        </div>
      </div>
    </div>
  </div>
</div>
