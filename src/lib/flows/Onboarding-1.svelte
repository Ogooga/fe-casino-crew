<script>
  import { onMount } from "svelte";
  import CharactersGuide from "../components/CharactersGuide.svelte";
  import jq from "jquery";

  onMount(() => {
    function onboardingCharacter() {
      // Array of questions with answers
      const questions = [
        {
          label: "Question 1",
          text: "Quisque consectetur fermentum ante sed volutpat. In id augue maximus, posuere est nec, lobortis enim?",
          answers: [
            "Option 1: Lorem ipsum dolor sit amet.",
            "Option 2: Curabitur vel metus at nisl hendrerit gravida.",
            "Option 3: Vivamus vulputate justo vitae justo placerat."
          ]
        },
        {
          label: "Question 2",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel metus at nisl hendrerit gravida.",
          answers: [
            "Option 1: Duis aute irure dolor in reprehenderit.",
            "Option 2: Excepteur sint occaecat cupidatat non proident.",
            "Option 3: Quis autem vel eum iure reprehenderit."
          ]
        },
        {
          label: "Question 3",
          text: "Vivamus vulputate justo vitae justo placerat, vel tincidunt augue fermentum. Donec vel risus nec massa.",
          answers: [
            "Option 1: Neque porro quisquam est qui dolorem.",
            "Option 2: Nisi ut aliquid ex ea commodi consequatur?",
            "Option 3: Temporibus autem quibusdam et aut officiis."
          ]
        }
      ];

      let currentQuestionIndex = 0;

      // Function to show the current question and its answers
      function showQuestion(index) {
        const question = questions[index];
        jq("#step2 .q-label").text(question.label);
        jq("#step2 p").text(question.text);
        jq("#step2 .q-legend").text(`${index + 1}/3`);

        // Generate the form with answers
        const form = jq("#step2 form");
        form.empty(); // Clear any existing answers

        question.answers.forEach((answer, i) => {
          const radioId = `question-${index}-answer-${i}`;
          form.append(`
            <label class="form-control">
              <input type="radio" name="radio" id="${radioId}" />
              ${answer}
            </label>
          `);
        });

        jq("#step2").show();
      }

      // Go to Step 1 on click (Opening the modal)
      jq(".onboarding-btn-1").click(function () {
        jq(".onboarding-1").show();
        jq("#step1").show();
      });

      // Move from Step 1 to Step 2
      jq(".next-modal").click(function () {
        jq("#step1").hide();
        showQuestion(currentQuestionIndex); // Start showing questions from index 0
      });

      // Handle when a user selects a question (move to the next question)
      jq(document).on("click", "#step2 form input[type=radio]", function () {
        if (currentQuestionIndex < 2) {
          currentQuestionIndex++; // Move to the next question
          showQuestion(currentQuestionIndex);
        } else {
          // If it's the last question, move to step 3
          jq("#step2").hide();
          jq("#step3").show();
        }
      });

      // Handle the Go Back button
      jq(".go-back").click(function () {
        if (currentQuestionIndex > 0) {
          currentQuestionIndex--; // Move to the previous question
          showQuestion(currentQuestionIndex);
        } else {
          jq("#step2").hide();
          jq("#step1").show(); // Go back to step 1 if already on the first question
        }
      });

      // Skip the flow
      jq(".btn-skip").click(function () {
        jq(".onboarding-1").hide();
      });
    }

    onboardingCharacter();
  });
</script>

<div class="onboarding-1 onboarding">
  <div class="modal_ctn">
    <!-- Step 1 -->
    <div id="step1" class="modal_content" next="2">
      <div class="h1">Welcome to Casino Crew</div>
      <p>
        You can either have one of our crew guide you for the best possible
        experience or you're a sea veteran and need no help.
      </p>
      <button class="btn btn--1 next-modal">LET's see the guide</button>
      <button class="btn btn-skip">I'll have the regular experience ></button>
    </div>

    <!-- Step 2 (Questions) -->
    <div id="step2" class="modal_content" next="3" style="display:none;">
      <span class="go-back">
        <svg
          width="22"
          height="19"
          viewBox="0 0 22 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.33333 1.5L1 9.5M1 9.5L9.33333 17.5M1 9.5H21"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </span>
      <div class="h1">Choose what describes you best</div>
      <div class="q-label">Question 1</div>
      <p></p>
      <form>
        <label class="form-control">
          <input type="radio" name="radio" />
          Lorem ipsum dolor sit amet.
        </label>

        <label class="form-control">
          <input type="radio" name="radio" />
          Curabitur vel metus at nisl hendrerit gravida.
        </label>

        <label class="form-control">
          <input type="radio" name="radio" />
          Vivamus vulputate justo vitae justo placerat.
        </label>
      </form>
      <div class="q-legend">1/3</div>
    </div>

    <!-- Step 3 (Final Step) -->
    <div id="step3" style="display:none;">
      <CharactersGuide />
    </div>
  </div>
</div>
