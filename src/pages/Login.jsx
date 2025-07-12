function Login() {
  document.title = "Login";
  return (
    <div className="user wrapper">
      <div className="user-container">
        <div className="user-content">
          <h1 className="main-title user-title">Login</h1>
          <p className="user-description subtitle">Sing in to your account</p>
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
          <button type="submit" className="user-button btn btn-primary">
            Login
          </button>
        </form>
        <div className="user-footer">
          <a href="">Forgot password?</a>
          <p>
            Don't have an account? <a href="/register" className="highlight">Register</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
