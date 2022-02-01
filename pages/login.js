export default function Login() {
  return (
    <>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta charSet="utf-8" />
  <title>Login / Sign Up Form</title>
  <link rel="shortcut icon" href="/assets/favicon.ico" />
  <link rel="stylesheet" href="./src/style.css" />
  <style
    dangerouslySetInnerHTML={{
      __html:
        "@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');"
    }}
  />
  <div className="container">
    <form className="form" id="login">
      <h1 className="form__title">Login</h1>
      <div className="form__message form__message--error" />
      <div className="form__input-group">
        <input
          type="text"
          className="form__input"
          autofocus=""
          placeholder="Username or email"
        />
        <div className="form__input-error-message" />
      </div>
      <div className="form__input-group">
        <input
          type="password"
          className="form__input"
          autofocus=""
          placeholder="Password"
        />
        <div className="form__input-error-message" />
      </div>
      <button className="form__button" type="submit">
        Continue
      </button>
      <p className="form__text">
        <a className="form__link" href="./" id="linkCreateAccount">
          Create account
        </a>
      </p>
    </form>
    <form className="form form--hidden" id="createAccount">
      <h1 className="form__title">Create Account</h1>
      <div className="form__message form__message--error" />
      <div className="form__input-group">
        <input
          type="text"
          id="signupUsername"
          className="form__input"
          autofocus=""
          placeholder="Username"
        />
        <div className="form__input-error-message" />
      </div>
      <div className="form__input-group">
        <input
          type="text"
          className="form__input"
          autofocus=""
          placeholder="Email Address"
        />
        <div className="form__input-error-message" />
      </div>
      <div className="form__input-group">
        <input
          type="password"
          className="form__input"
          autofocus=""
          placeholder="Password"
        />
        <div className="form__input-error-message" />
      </div>
      <div className="form__input-group">
        <input
          type="password"
          className="form__input"
          autofocus=""
          placeholder="Confirm password"
        />
        <div className="form__input-error-message" />
      </div>
      <button className="form__button" type="submit">
        Continue
      </button>
      <p className="form__text">
        <a className="form__link" href="./" id="linkLogin">
          Sign in
        </a>
      </p>
    </form>
  </div>
  <script src="./src/main.js"></script>
</>
  )
}
