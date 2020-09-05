<script>
  let validNameField = true;
  let validEmailField = true;
  let validMessageBox = true;
  let name;
  let email;
  let message;

  function handleSubmit() {
    if (!name) {
      validNameField = false;
    }
    if (!email) {
      validEmailField = false;
    }
    if (!message) {
      validMessageBox = false;
    }
  }

  function handleFormFocus() {
    if (this.id == 'name') {
      validNameField = true;
      return;
    }
    if (this.id == 'email') {
      validEmailField = true;
      return;
    }
    if (this.id == 'message') {
      validMessageBox = true;
      return;
    }
  }
</script>

<div class="container">
  <h2 class="t-h2 t-dark-blue form__heading">Connect with us</h2>
  <form on:submit|preventDefault={handleSubmit} action="" method="post" class="form" id="form-contact">
    <div class="form__input">
      <label class="sr-only" for="name">Name</label>
      <input
      on:focus={handleFormFocus}
      bind:value={name}
      class="form__input__field{validNameField ? '': ' error'}" 
      type="text" 
      name="name" 
      id="name" 
      placeholder="Name">
      <p class="form__input__error{!validNameField ? '': ' hide'} form__input__error--field">Can't be empty</p>
    </div>
    <div class="form__input">
      <label class="sr-only" for="email">Email</label>
      <input
      on:focus={handleFormFocus}
      bind:value={email} 
      class="form__input__field{validEmailField ? '': ' error'}" 
      type="email" 
      name="email" 
      id="email" 
      placeholder="Email">
      <p class="form__input__error{!validEmailField ? '': ' hide'} form__input__error--field">Can't be empty</p>
    </div>
    <div class="form__input">
      <label class="sr-only" for="message">Message</label>
      <textarea
      on:focus={handleFormFocus}
      bind:value={message} 
      class="form__input__box{validMessageBox ? '': ' error'}" 
      id="message" 
      name="message" 
      placeholder="Message"></textarea>
      <p class="form__input__error{!validMessageBox ? '': ' hide'} form__input__error--box">Can't be empty</p>
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

  .form {
    width: 100%;
    display: flex;
    flex-flow: column nowrap;
  }
  

  .form__heading {
    width: 16.8rem;
    margin-bottom: 4.8rem;
  }
  @media screen and (min-width: 600px) {
    .form__heading {
      width: auto;
      margin-bottom: 6.4rem;
    }
  }
  @media screen and (min-width: 1024px) {
    .form__heading {
      width: 23.6rem;
      margin-bottom: 0;
      margin-right: 14.4rem;
    }
  }

  .form__input {
    position: relative;
  }

  @media screen and (min-width: 1024px) {
    .container {
      display: flex;
      margin: 0 auto;
      max-width: 111rem;
      flex-flow: row nowrap;
    }
  }

  .form__input__error {
    position: absolute;
    z-index: 1;
    opacity: 1;
    margin-top: 0;
    font-size: 1.5rem;
    line-height: 1.7rem;
    letter-spacing: -.23px;
    color: var(--color-red);
    font-weight: var(--weight-bold);
    transition: var(--transition) opacity, var(--transition) margin-top;
  }
  .form__input__error.hide {
    opacity: 0;
    margin-top: 1rem; 
  }

  .form__input__error--field {
    top: 1.4rem; 
    right: 1.6rem;
  }

  .form__input__error--box {
    bottom: 1.7rem;
    right: 1.6rem;
  }

  .button.button--submit {
    width: 8rem;
    height: 8rem;
    cursor: pointer;
    display: inline-block;
    align-self: flex-end;
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
    width: 100%;
    margin-bottom: 4rem;
    padding: 0 3.449rem 2.4rem;
    transition: var(--transition) box-shadow;
    box-shadow: 0px -1px 0px var(--color-dark-blue) inset;
  }

  .form__input__box {
    width: 100%;
    height: 9.5rem;
    display: block;
    padding: 0 0 0 3.449rem;
    transition: var(--transition) box-shadow;
    box-shadow: 0px -1px 0px var(--color-dark-blue) inset;
  }

  .form__input__field,
  .form__input__box {
    cursor: pointer;
    font-size: 2rem;
    line-height: 2.2rem;
    letter-spacing: -.31px;
    color: var(--color-dark-blue);
    font-weight: var(--weight-bold);
    font-family: 'Spartan', sans-serif;
  }

  .form__input__box.error,
  .form__input__field.error {
    box-shadow: 0px -1px 0px var(--color-red) inset;
  }
  
  .form__input__box.error::placeholder,
  .form__input__field.error::placeholder {
    color: var(--color-red);
    opacity: .50;
  }

  .form__input__box:focus,
  .form__input__field:focus {
    box-shadow: 0px -3px 0px var(--color-dark-blue) inset;
  }

   

</style>