<script>
  import "../assets/sass/styles.scss";
  import jq from "jquery";
  import { onMount } from "svelte";

  import Header from "../lib/components/Header.svelte";
  import Footer from "../lib/components/Footer.svelte";

  // load jquery, Radu atunci cand migrezi in php,
  // trebuie sa dai replace cu cmd + f la toate "jq" si sa le inlocuiesti cu $
  // also, trebuie sa inlocuiesti onMount cu $(document).ready(function () { ...jquery code... });
  onMount(() => {
    // toggle nav menu
    jq(".hamburger.hamburger3").click(function () {
      const navMenu = jq(".nav-menu__ctn");
      const nav = jq("nav");
      navMenu.toggleClass("d-none");
      nav.toggleClass("open-nav");
    });

    // toggle nav dropdown
    jq(".nav-item-toggler").click(function () {
      const navItem = jq(this).parent();
      const navItemChilds = navItem.parent();
      const navChilds = navItemChilds.find(".nav-childs");

      navChilds.toggleClass("d-none");
      jq(this).find("svg").toggleClass("rotate");
    });

    // desktop open search bar
    jq(".search-toggler__ctn").click(function () {
      const search = jq(".nav .search-form");

      if (jq(window).width() > 992) {
        search.addClass("slideSearch");
      }
    });

    // bottom nav popup animation
    function bottomNavAnimation() {
      const ctn = jq(".bottom-nav__msg");
      const popup = ctn.find(".popup__ctn");

      if (ctn.hasClass("moveup-anim")) {
        ctn.removeClass("moveup-anim");
        ctn.addClass("movedown-anim");
        popup.addClass("fadeout-anim");
        popup.removeClass("fadein-anim");
      } else {
        ctn.removeClass("movedown-anim");
        ctn.addClass("moveup-anim");
        popup.removeClass("fadeout-anim");
        popup.addClass("fadein-anim");
      }
    }

    jq(".ana-ctn").click(bottomNavAnimation);
    jq(".popup__ctn svg").click(bottomNavAnimation);

    // move nav items
    function moveSocials() {
      const socials = jq(".nav-socials");
      const movingDest = jq(".nav-logo-ctn");
      const mobileMovingDest = jq(".nav-menu__ctn");
      const socialsClone = socials.detach();

      if (!socials.parent().is(".nav__logo") && jq(window).width() > 992) {
        socialsClone.appendTo(movingDest);
        jq(".nav__logo").addClass("desktop-nav");
      } else {
        socialsClone.appendTo(mobileMovingDest);
        jq(".nav__logo").removeClass("desktop-nav");
      }
    }

    function moveSearch() {
      const search = jq(".nav .search-form");
      const movingDest = jq(".search-toggler__ctn");
      let searchClone = search.detach();

      if (
        !search.parent().is(".search-toggler__ctn") &&
        jq(window).width() > 992
      ) {
        searchClone.prependTo(movingDest);
        searchClone.css("width", "300px");
      } else {
        searchClone.prependTo(".nav-menu__ctn");
        searchClone.css("width", "100%");
        searchClone.removeClass("slideSearch");
      }
    }

    moveSocials();
    moveSearch();
    jq(window).resize(function () {
      moveSocials();
      moveSearch();
    });

    function customDropdown() {
      jq(".custom-dropdown").click(function (event) {
        event.stopPropagation();
        jq(this).find(".options-list").slideToggle();
        jq(this).find(".selected-option").toggleClass("selected-option-active");
        jq(this).find(".option-header").toggleClass("header-option-active");
        jq(this).find("svg").toggleClass("rotate");
      });

      jq(".options-list").on("click", function (event) {
        event.stopPropagation();
      });

      jq("body").on("click", function () {
        jq(".options-list").slideUp();
        jq(".selected-option").removeClass("selected-option-active");
        jq(".option-header").removeClass("header-option-active");
        jq(".custom-dropdown").find("svg").removeClass("rotate");
      });
    }
    customDropdown();

    // filters toggle button
    jq(".filters-toggle").click(function () {
      jq(".filters").slideToggle();
    });

    // fade in animation when component is in viewport
    jq(window).scroll(function () {
      jq(".show-to-scroll").each(function () {
        const component = jq(this);
        const componentTop = component.offset().top;
        const componentBottom = componentTop + component.outerHeight();
        const viewportTop = jq(window).scrollTop();
        const viewportBottom = viewportTop + jq(window).height();

        if (componentBottom > viewportTop && componentTop < viewportBottom) {
          component.addClass("fade-in");
        } else {
          component.removeClass("fade-in");
        }
      });
    });

    // offer 1 toggle hidden content
    jq(".toggle-offer-1-content").click(function () {
      const parent = jq(this).parent();
      const svg = jq(this).find("svg");

      svg.toggleClass("rotate");
      parent.find(".hidden-content").slideToggle();
    });

    // offers toggle hidden content
    function toggleOfferHiddenContent() {
      const btnParent = jq(this).parent();
      const row = btnParent.parent();
      const offerCtn = row.parent();
      const svg = jq(this).find("svg");

      svg.toggleClass("rotate");
      offerCtn.find(".hidden-content").slideToggle();
    }

    jq(".toggle-offer-2-content").click(toggleOfferHiddenContent);
    jq(".toggle-offer-3-content").click(toggleOfferHiddenContent);

    // toggle ad disclosure hidden content
    function toggleDisclosure() {
      jq(this).find(".card").toggleClass("d-block");
    }
    jq(".casino-disclosure .disc").click(toggleDisclosure);
    jq(".casino-disclosure-single").click(toggleDisclosure);

    jq(".schema-faq-section").each(function () {
      var jQuerythis = jq(this);
      jQuerythis
        .find("strong")
        .after(
          '<span class="faq-toggle position-absolute d-inline-block">+</span>'
        );
      jQuerythis.addClass("expanded");
      jQuerythis.find(".schema-faq-answer").hide();
    });

    // Function to toggle FAQ sections
    function toggleFAQSection(jQuerysection) {
      jQuerysection
        .toggleClass("expanded")
        .find(".schema-faq-answer")
        .slideToggle();
      jQuerysection.find(".faq-toggle").text(function (i, text) {
        return text === "+" ? "-" : "+";
      });
    }

    // Attach click event to strong and faq-toggle
    jq(document).on(
      "click",
      ".schema-faq-section strong, .schema-faq-section .faq-toggle",
      function () {
        var jQuerysection = jq(this).closest(".schema-faq-section");
        toggleFAQSection(jQuerysection);
      }
    );

    // Open Single Slot Iframe
    jq(".open-slot").click(function () {
      const slotUrl = jq(this).attr("data-iframe");
      const placeholderCtn = jq(this).parent();
      const parent = placeholderCtn.parent();
      const iframeCtn = parent.find(".iframe");
      const iframe = parent.find("iframe");

      iframe.attr("src", slotUrl);
      iframeCtn.addClass("d-block");
    });

    // Close Single Slot Iframe
    jq(".close-iframe").click(function () {
      const iframeCtn = jq(this).parent();
      const iframe = iframeCtn.find("iframe");

      iframe.attr("src", "");
      iframeCtn.removeClass("d-block");
    });

    // copy text
    jq(".copy-text").click(function () {
      const textToCopy = jq(".text-to-copy").text();
      navigator.clipboard
        .writeText(textToCopy)
        .then(() => {
          console.log("Text copied to clipboard");
        })
        .catch((error) => {
          console.error("Failed to copy text to clipboard:", error);
        });
    });

    function sliceSize(dataNum, dataTotal) {
      return (dataNum / dataTotal) * 360;
    }

    function addSlice(sliceSize, pieElement, offset, sliceID, color) {
      // Append the slice with a span (clipped element)
      jq(pieElement).append(
        "<div class='slice " + sliceID + "'><span></span></div>"
      );

      // Rotate the slice (div) and its content (span)
      jq("." + sliceID).css({
        transform: "rotate(" + offset + "deg) translate3d(0,0,0)",
      });

      jq("." + sliceID + " span").css({
        transform: "rotate(" + sliceSize + "deg) translate3d(0,0,0)",
        "background-color": color,
        clip: `rect(0px, ${jq(pieElement).width()}px, ${jq(pieElement).width()}px, ${
          jq(pieElement).width() / 2
        }px)`, // Adjust clipping dynamically based on pie width
      });

      // Calculate the pie chart center dynamically
      const pieRadius = jq(pieElement).width() / 2; // Adjust based on actual size
      const centerX = pieRadius; // Center X of the pie chart
      const centerY = pieRadius; // Center Y of the pie chart

      // Calculate the mid-angle for the SVG position
      const midAngle = offset + sliceSize / 2; // Mid-point of the slice
      const radians = (midAngle * Math.PI) / 180; // Convert degrees to radians

      // Increase the radius for SVG to place it outside the slice
      const svgRadius = pieRadius * 1.2; // Adjust the radius to push SVG outside the slice

      // Calculate the x and y coordinates for the SVG using trigonometry
      const svgX = centerX + svgRadius * Math.cos(radians);
      const svgY = centerY + svgRadius * Math.sin(radians);

      // Append the SVG
      jq(pieElement).append(
        `<svg class="slice-svg" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_b_1151_56506)">
<path d="M0.84375 29.9752C0.84375 13.6469 14.0804 0.406494 30.4087 0.406494C46.7369 0.406494 59.9736 13.6469 59.9736 29.9752C59.9736 46.3034 46.7369 59.5439 30.4087 59.5439C14.0804 59.5439 0.84375 46.3034 0.84375 29.9752Z" fill="white" fill-opacity="0.1"/>
<rect x="6.99805" y="6.56079" width="46.8209" height="46.8284" rx="23.4105" fill="white" fill-opacity="0.35"/>
<path d="M21.1849 17.8617C21.3713 17.6707 21.5571 17.4848 21.7487 17.299C21.8582 17.1927 21.9211 17.0472 21.9233 16.8945C21.9256 16.7419 21.8671 16.5945 21.7608 16.485C21.6544 16.3754 21.5089 16.3126 21.3563 16.3104C21.2036 16.3081 21.0563 16.3666 20.9467 16.4729C20.7477 16.6668 20.5538 16.8607 20.3599 17.0609C20.3039 17.1143 20.2592 17.1785 20.2286 17.2496C20.198 17.3207 20.182 17.3972 20.1816 17.4746C20.1813 17.5521 20.1966 17.6288 20.2266 17.7001C20.2566 17.7715 20.3007 17.8361 20.3562 17.89C20.4118 17.9439 20.4776 17.9861 20.5499 18.014C20.6221 18.0418 20.6992 18.0548 20.7766 18.0522C20.854 18.0495 20.93 18.0313 21.0002 17.9986C21.0703 17.9658 21.1332 17.9193 21.1849 17.8617Z" fill="#C3653E"/>
<path d="M37.9927 33.5664C37.8201 33.7546 37.6423 33.9329 37.4537 34.1061C37.3949 34.1562 37.3469 34.2177 37.3124 34.2868C37.278 34.3559 37.2578 34.4312 37.253 34.5083C37.2483 34.5854 37.2591 34.6627 37.2849 34.7355C37.3107 34.8083 37.3508 34.8751 37.403 34.9321C37.4552 34.989 37.5183 35.0349 37.5885 35.067C37.6588 35.099 37.7348 35.1166 37.812 35.1186C37.8892 35.1207 37.966 35.1072 38.0379 35.0789C38.1097 35.0506 38.1752 35.0081 38.2303 34.954C38.4455 34.7573 38.6451 34.5577 38.8418 34.3431C38.8928 34.2873 38.9323 34.2221 38.9581 34.151C38.9839 34.08 38.9954 34.0046 38.9921 33.9291C38.9887 33.8537 38.9705 33.7796 38.9385 33.7111C38.9065 33.6427 38.8613 33.5812 38.8056 33.5302C38.7498 33.4792 38.6846 33.4397 38.6135 33.4139C38.5425 33.3881 38.4671 33.3766 38.3916 33.38C38.3162 33.3833 38.2421 33.4015 38.1736 33.4335C38.1052 33.4655 38.0437 33.5107 37.9927 33.5664Z" fill="#C3653E"/>
<path d="M19.5707 18.9153C19.4424 18.8329 19.2867 18.8048 19.1377 18.8372C18.9888 18.8695 18.8587 18.9597 18.7762 19.0878C16.9436 21.9555 16.2348 25.399 16.7856 28.7574C17.3365 32.1157 19.1083 35.1523 21.7609 37.2843C24.4135 39.4163 27.7601 40.4935 31.1583 40.3091C34.5565 40.1248 37.767 38.6919 40.1734 36.2855C42.5798 33.879 44.0127 30.6686 44.1971 27.2704C44.3814 23.8722 43.3042 20.5256 41.1722 17.8729C39.0402 15.2203 36.0036 13.4485 32.6453 12.8977C29.287 12.3468 25.8435 13.0557 22.9758 14.8882C22.8472 14.9705 22.7565 15.1004 22.7237 15.2495C22.6909 15.3987 22.7187 15.5547 22.8009 15.6833C22.8831 15.8119 23.0131 15.9026 23.1622 15.9354C23.3113 15.9682 23.4673 15.9404 23.5959 15.8582C26.2249 14.1792 29.3812 13.5303 32.4593 14.0358C35.5374 14.5413 38.3204 16.1658 40.2742 18.5974C42.228 21.029 43.215 24.0965 43.0458 27.2112C42.8767 30.3259 41.5632 33.2685 39.3575 35.4742C37.1518 37.6799 34.2093 38.9933 31.0946 39.1625C27.9798 39.3317 24.9123 38.3447 22.4807 36.3908C20.0491 34.437 18.4247 31.654 17.9191 28.576C17.4136 25.4979 18.0626 22.3415 19.7415 19.7126C19.7828 19.6491 19.8112 19.578 19.825 19.5035C19.8387 19.429 19.8376 19.3525 19.8218 19.2784C19.8059 19.2043 19.7755 19.1341 19.7324 19.0718C19.6893 19.0095 19.6344 18.9563 19.5707 18.9153Z" fill="#C3653E"/>
<path d="M30.4095 38.0279C32.4226 38.0284 34.4006 37.4999 36.1451 36.4953C36.2762 36.4185 36.3715 36.2929 36.4103 36.1461C36.4492 35.9992 36.4283 35.8429 36.3524 35.7114C36.2764 35.5798 36.1515 35.4836 36.0049 35.4438C35.8583 35.404 35.7019 35.4238 35.5698 35.4989C33.3937 36.751 30.8367 37.1699 28.3748 36.6776C25.9129 36.1853 23.7136 34.8152 22.1864 32.8225C20.6592 30.8298 19.9079 28.35 20.0725 25.8447C20.2371 23.3395 21.3062 20.9793 23.081 19.2035C24.8558 17.4276 27.2153 16.357 29.7205 16.191C32.2256 16.0249 34.7058 16.7746 36.6995 18.3007C38.6931 19.8267 40.0645 22.0251 40.5583 24.4867C41.0521 26.9483 40.6348 29.5056 39.384 31.6825C39.3456 31.7479 39.3206 31.8203 39.3103 31.8955C39.3 31.9706 39.3047 32.0471 39.3241 32.1204C39.3435 32.1938 39.3772 32.2626 39.4233 32.3229C39.4694 32.3831 39.5269 32.4337 39.5926 32.4716C39.6583 32.5095 39.7309 32.5341 39.8061 32.5439C39.8813 32.5537 39.9578 32.5485 40.031 32.5286C40.1042 32.5087 40.1728 32.4745 40.2327 32.4281C40.2927 32.3816 40.3429 32.3237 40.3804 32.2577C41.6426 30.0627 42.1455 27.5126 41.8111 25.0026C41.4767 22.4927 40.3237 20.1632 38.5308 18.3752C36.7379 16.5872 34.4052 15.4405 31.8944 15.113C29.3835 14.7855 26.8348 15.2954 24.6432 16.5637C22.4516 17.8319 20.7396 19.7877 19.7726 22.1279C18.8055 24.4681 18.6374 27.0619 19.2944 29.5073C19.9513 31.9527 21.3966 34.113 23.4062 35.6535C25.4158 37.194 27.8774 38.0286 30.4095 38.0279Z" fill="#C3653E"/>
<path d="M17.7523 42.0756C17.9049 42.0756 18.0512 42.1362 18.1591 42.2441C18.267 42.352 18.3276 42.4983 18.3276 42.6509V46.0716C18.3221 46.2994 18.3842 46.5237 18.5061 46.7163C18.6279 46.9089 18.804 47.0611 19.0122 47.1537C19.1398 47.2068 19.2767 47.2344 19.4149 47.2348C19.7168 47.2299 20.0044 47.1058 20.2151 46.8896L25.4848 41.5395C25.5862 41.4296 25.6409 41.2845 25.6372 41.135C25.6335 40.9855 25.5717 40.8433 25.465 40.7385C25.3582 40.6338 25.2149 40.5748 25.0653 40.5739C24.9158 40.5731 24.7718 40.6305 24.6638 40.734L19.4782 45.9991V42.6486C19.4764 42.1921 19.2937 41.7549 18.9703 41.4327C18.6468 41.1105 18.2089 40.9296 17.7523 40.9296L14.3869 40.9227L18.724 36.7099C18.8257 36.6016 18.8816 36.4582 18.88 36.3097C18.8783 36.1611 18.8193 36.019 18.7152 35.913C18.6111 35.807 18.4701 35.7453 18.3216 35.741C18.1731 35.7366 18.0287 35.7898 17.9186 35.8896L13.4889 40.1956C13.3309 40.3461 13.2221 40.5408 13.1764 40.7541C13.1307 40.9675 13.1504 41.1896 13.2329 41.3916C13.3264 41.5999 13.4794 41.776 13.6726 41.8977C13.8658 42.0194 14.0907 42.0813 14.319 42.0756H17.7523Z" fill="#C3653E"/>
<path d="M42.8965 35.8894C42.7872 35.7829 42.6402 35.7242 42.4876 35.7261C42.3351 35.7281 42.1895 35.7905 42.083 35.8998C42.0303 35.9535 41.9887 36.0171 41.9606 36.087C41.9326 36.1569 41.9186 36.2316 41.9196 36.3069C41.9205 36.3822 41.9364 36.4566 41.9662 36.5257C41.996 36.5948 42.0393 36.6574 42.0934 36.7098L46.4345 40.9295H43.0645C42.6079 40.9295 42.17 41.1104 41.8465 41.4325C41.5231 41.7547 41.3404 42.1919 41.3386 42.6485L41.3317 45.9949L36.1541 40.7345C36.0472 40.6256 35.9015 40.5637 35.7489 40.5623C35.5964 40.5609 35.4495 40.6201 35.3407 40.727C35.2867 40.7795 35.2437 40.8422 35.214 40.9114C35.1844 40.9806 35.1687 41.055 35.168 41.1303C35.1672 41.2056 35.1814 41.2803 35.2097 41.3501C35.2379 41.4199 35.2797 41.4834 35.3326 41.537L40.6091 46.8958C40.8178 47.1076 41.1017 47.2286 41.399 47.2323C41.5373 47.2321 41.6741 47.2045 41.8017 47.1512C42.0105 47.059 42.1872 46.907 42.3095 46.7144C42.4319 46.5218 42.4944 46.2972 42.4892 46.0691V42.6485C42.4892 42.4959 42.5498 42.3496 42.6577 42.2417C42.7656 42.1338 42.9119 42.0732 43.0645 42.0732H46.4989C46.7271 42.0788 46.9519 42.0168 47.1451 41.8951C47.3382 41.7735 47.4911 41.5974 47.5845 41.3891C47.6669 41.1851 47.6857 40.961 47.6386 40.746C47.5915 40.5311 47.4806 40.3354 47.3204 40.1845L42.8965 35.8894Z" fill="#C3653E"/>
<path d="M35.5053 25.11C35.4329 24.9184 35.3128 24.7486 35.1564 24.6165C34.9999 24.4844 34.8123 24.3944 34.6113 24.3552L32.6594 23.9468L31.4449 21.9333C31.3382 21.7534 31.1864 21.6045 31.0045 21.5013C30.8225 21.398 30.6168 21.3441 30.4077 21.3447C30.1991 21.3438 29.9939 21.3973 29.8123 21.4999C29.6307 21.6025 29.479 21.7507 29.3722 21.9298L28.114 23.9738L26.2041 24.3552C26.0039 24.3952 25.8172 24.4852 25.6612 24.6168C25.5053 24.7485 25.3852 24.9175 25.3122 25.1081C25.2393 25.2987 25.2158 25.5047 25.244 25.7068C25.2722 25.909 25.3511 26.1006 25.4734 26.264L26.62 27.8173L26.2081 30.2928C26.1736 30.4996 26.1936 30.7119 26.2661 30.9087C26.3385 31.1055 26.461 31.2801 26.6213 31.4152C26.7817 31.5503 26.9745 31.6414 27.1808 31.6794C27.387 31.7174 27.5996 31.7011 27.7976 31.632L30.4284 30.7386L33.0218 31.6326C33.15 31.6771 33.2848 31.6999 33.4205 31.6999C33.5956 31.6992 33.7685 31.6605 33.9272 31.5863C34.0859 31.5122 34.2265 31.4044 34.3394 31.2705C34.4523 31.1366 34.5348 30.9798 34.581 30.8108C34.6273 30.6419 34.6362 30.4649 34.6073 30.2922L34.2046 27.7736L35.3425 26.2646C35.4658 26.102 35.5455 25.9105 35.574 25.7085C35.6025 25.5064 35.5788 25.3004 35.5053 25.11ZM33.2841 27.0804C33.1857 27.2112 33.115 27.3606 33.0761 27.5197C33.0372 27.6787 33.0311 27.844 33.058 28.0054L33.4544 30.5338C33.4467 30.5406 33.4373 30.5452 33.4271 30.5471C33.417 30.5491 33.4066 30.5482 33.3969 30.5447L30.8018 29.6507C30.546 29.5629 30.2682 29.5629 30.0125 29.6507L27.4237 30.5436C27.4145 30.5476 27.3903 30.5551 27.3449 30.482L27.7585 28.0037C27.7845 27.8425 27.7778 27.6777 27.7388 27.5192C27.6997 27.3606 27.6292 27.2116 27.5313 27.0809L26.3951 25.572L26.4313 25.4834L28.3413 25.1019C28.5062 25.0693 28.6626 25.0025 28.8003 24.9059C28.938 24.8093 29.054 24.685 29.1409 24.541L30.3588 22.5241C30.3634 22.5152 30.3705 22.5078 30.3791 22.5027C30.3878 22.4976 30.3977 22.495 30.4077 22.4953C30.4181 22.495 30.4284 22.4975 30.4376 22.5025C30.4467 22.5076 30.4543 22.515 30.4595 22.5241L31.6739 24.5376C31.761 24.6816 31.8772 24.8058 32.015 24.9025C32.1527 24.9991 32.3091 25.0661 32.4741 25.0991L34.3864 25.4805L34.4226 25.5685L33.2841 27.0804Z" fill="#C3653E"/>
</g>
<defs>
<filter id="filter0_b_1151_56506" x="-28.0053" y="-28.4426" width="116.827" height="116.836" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feGaussianBlur in="BackgroundImageFix" stdDeviation="14.4245"/>
<feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_1151_56506"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_1151_56506" result="shape"/>
</filter>
</defs>
</svg>
`
      );

      // Position the SVG based on the calculated coordinates
      jq(".slice-svg:last").css({
        position: "absolute",
        top: svgY + "px",
        left: svgX - 20 + "px",
      });

      // Apply the color to the SVG to match the slice
      jq(".slice-svg:last path").css({
        fill: color,
      });
    }

    function iterateSlices(
      sliceSize,
      pieElement,
      offset,
      dataCount,
      sliceCount,
      color
    ) {
      var sliceID = "s" + dataCount + "-" + sliceCount;
      var maxSize = 179;
      if (sliceSize <= maxSize) {
        addSlice(sliceSize, pieElement, offset, sliceID, color);
      } else {
        addSlice(maxSize, pieElement, offset, sliceID, color);
        iterateSlices(
          sliceSize - maxSize,
          pieElement,
          offset + maxSize,
          dataCount,
          sliceCount + 1,
          color
        );
      }
    }
    function createPie(dataElement, pieElement) {
      var listData = [];
      jq(dataElement + " span").each(function () {
        listData.push(Number(jq(this).html()));
      });
      var listTotal = 0;
      for (var i = 0; i < listData.length; i++) {
        listTotal += listData[i];
      }
      var offset = 0;
      var color = ["#2C1D2E", "#5A2835", "#E1E17D", "#452141", "#C3653E"];

      for (var i = 0; i < listData.length; i++) {
        var size = sliceSize(listData[i], listTotal);
        iterateSlices(size, pieElement, offset, i, 0, color[i]);

        // Update SVG color for legend
        jq(
          dataElement + " li:nth-child(" + (i + 1) + ") .legend-icon path"
        ).css("fill", color[i]);

        offset += size;
      }
    }

    createPie(".pieID.legend", ".pieID.pie");
  });
</script>

<Header />

<slot />

<Footer />
