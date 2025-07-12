function Register() {
  document.title = "Register";

  return (
    <div className="user wrapper">
      <div className="user-container">
        <div className="user-content">
          <h1 className="main-title user-title">Register</h1>
          <p className="user-description subtitle">Create A new account</p>
        </div>
        <form>
          <div className="input">
            <i class="ri-user-line"></i>
            <input type="text" placeholder="Username" required />
          </div>
          <div className="input">
            <i class="ri-mail-line"></i>
            <input type="email" placeholder="Email" required />
          </div>
          <div className="input">
            <i class="ri-lock-line"></i>
            <input type="password" placeholder="Password" required />
          </div>
          <button type="submit" className="user-button btn btn-primary">
            Register
          </button>
        </form>
        <div className="user-footer">
          <a href="">Forgot password?</a>
          <p>
            Already have an account?{" "}
            <a href="/login" className="highlight">
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
