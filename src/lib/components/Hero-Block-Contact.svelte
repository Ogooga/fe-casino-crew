<div class="contact-us-form mb-4 mb-lg-5">
  <div class="title">Contact us</div>

  <!-- select topic -->
  <div class="custom-dropdown">
    <div class="selected-option">
      <div class="option-header">
        <h5>Select topic</h5>
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

  <!-- main form -->
  <form>
    <div class="row">
      <div class="col-12 col-lg-6 mb-4 mb-lg-0">
        <label for="name">First Name</label>
        <input type="text" placeholder="Input your first name in here" />

        <label for="name">Last Name</label>
        <input type="text" placeholder="Input your last name in here" />

        <label for="name">Email Address</label>
        <input
          class="mb-lg-0"
          type="text"
          placeholder="Input your email in here"
        />
      </div>
      <div class="col-12 col-lg-6">
        <label for="message">Message</label>
        <textarea name="message" placeholder="Write your messages in here"
        ></textarea>
      </div>
    </div>
    <div class="submit d-flex align-items-center justify-content-center">
      <button type="submit" class="btn btn--2">SEND MESSAGE ></button>
    </div>
  </form>
</div>
