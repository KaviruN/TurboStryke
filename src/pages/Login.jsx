function Login() {
  document.title = "Login";
  <div className="login">
    <div className="login-content">
      <h1 className="login-title">Login</h1>
      <p className="login-description">Sing in to your account</p>
    </div>
    <form>
      <div className="input">
        <i class="ri-user-line"></i>
        <input type="text" placeholder="Username" required />
      </div>
      <div className="input">
        <i class="ri-lock-line"></i>
        <input type="password" placeholder="Password" required />
      </div>
      <button type="submit" className="login-button">
        Login
      </button>
    </form>
    <div className="login-footer">
      <a href="">Forgot password?</a>
      <span>
        Don't have an account? <a href="/signup">Sign up</a>
      </span>
    </div>
  </div>;
}

export default Login;
