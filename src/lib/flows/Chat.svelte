<script>
  import jq from "jquery";
  import { onMount } from "svelte";

  onMount(() => {
    jq(".bottom-nav__msg .ana-ctn").click(() => {
      jq(".chat").fadeToggle();
      jq(".overlay").fadeToggle();
    });

    jq(".close-chat").click(() => {
      jq(".chat").fadeToggle();
      jq(".overlay").fadeToggle();
      jq(".bottom-nav__msg").removeClass("moveup-anim");
      jq(".bottom-nav__msg").addClass("movedown-anim");
    });
  });
</script>

<div class="chat">
  <div class="chat-header">
    <div class="d-flex align-items-center justify-content-between mb-3">
      <div>
        <a class="small-a" href="https://placehold.co/100x100">Change guide ></a
        >
      </div>

      <div class="close-chat">
        <svg
          width="19"
          height="23"
          viewBox="0 0 19 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.5 13.5182L9.5 21.8516M9.5 21.8516L17.5 13.5182M9.5 21.8516L9.5 1.85156"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>

    <div class="char-name">Alex Novak</div>

    <div class="d-flex align-items-center justify-content-between">
      <div>
        <a class="large-a" href="https://placehold.co/100x100"
          >Start guided tour ></a
        >
      </div>

      <div class="turn-off-interactions">
        <div>Turn off interactions</div>
      </div>
    </div>
  </div>

  <div class="chat-iframe">
    <iframe
      title="Chat"
      src="https://supercazino.ro/"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;"
    ></iframe>
  </div>
</div>