<div class="container">
  <form action="" method="post" class="form" id="form-contact">
    <div class="form__input">
      <label class="sr-only" for="name">Name</label>
      <input class="form__input__field" type="text" name="name" id="name" placeholder="Name">
    </div>
    <div class="form__input">
      <label class="sr-only" for="email">Email</label>
      <input class="form__input__field" type="email" name="email" id="email" placeholder="Email">
    </div>
    <div class="form__input">
      <label class="sr-only" for="message">Message</label>
      <textarea class="form__input__box" id="message" name="message" placeholder="Message"></textarea>
    </div>
    <button class="button button--submit" type="submit" form="form-contact" value="Submit">
      <span class="sr-only">Submit</span>
    </button>
  </form>
</div>

<style>
  input,
  textarea {
    border: none;
    outline: none;
  }

  textarea {
    resize: none;
  }

  .button.button--submit {
    width: 8rem;
    height: 8rem;
    cursor: pointer;
    display: inline-block;
    background-position: center;
    background-repeat: no-repeat;
    background-color: var(--color-dark-blue);
    transition: var(--transition) background-color;
    background-image: url(/icons/icon-arrow-w-s.svg);
  }
  .button.button--submit:hover {
    background-color: var(--color-dark-gray);
  }

  ::placeholder {
    font-size: 2rem;
    line-height: 2.2rem;
    letter-spacing: -.31px;
    color: var(--color-light-gray);
    font-weight: var(--weight-bold);
  }

  .form__input__field {
    padding: 2.4rem 3.449rem;
    position: relative;
  }
  .form__input__field::before {
    content: '';
    position: absolute;
  }

  .form__input__field:focus::before {
  }
</style>