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

            if (
                !socials.parent().is(".nav__logo") &&
                jq(window).width() > 992
            ) {
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
                jq(this)
                    .find(".selected-option")
                    .toggleClass("selected-option-active");
                jq(this)
                    .find(".option-header")
                    .toggleClass("header-option-active");
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

                if (
                    componentBottom > viewportTop &&
                    componentTop < viewportBottom
                ) {
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
    });
</script>

<Header />

<slot />

<Footer />
