
const Header = () => {
  return (
    <>
     <header>
      <div className="container-fluid">
        <div className="mobilerightheader showonmobilemenu appmenu sf-hidden"></div>
        <nav className="navbar" role="navigation" style={{ display: 'block' }}>
          <div className="mobile_navbar">
            <div className="navbar-header">
              <a className="navbar-brand" href="https://www.jobringer.com">
              <img src="https://www.jobringer.com/images/logonew.svg" alt="jobRinger" width="180" />
              </a>
            </div>
            <div className="navbar-header">
              <p
                className="text-anim2 sf-hidden"
                style={{
                  fontWeight: 600,
                  color: "#001b85",
                  textAlign: "center",
                  backgroundImage:
                    "linear-gradient(90deg,#001b85 0,#27dadb 25%,#0d00ff 50%,#27dadb 75%,#001b85 100%)",
                  WebkitTextFillColor: "transparent",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  animation: "400s linear infinite text-animation",
                }}
              >
                11,000+ Active Jobs
              </p>
            </div>
            <div className="mobilerightheader showonmobilemenu sf-hidden"></div>
          </div>
        </nav>
        <div className="nac-csv" id="bs-example-navbar-collapse-1">
          <div className="mobilemenuclose showonmobilemenu sf-hidden"></div>
          <ul className="nav navbar-nav main-menu"  style={{ display: 'block' }}>
            <li className="list-hover menulihide9 wol menudropdown">
              <a href="https://www.jobringer.com/jobs">Jobs</a>
              <div className="caretopen showonmobilemenu dropdownopenermenu sf-hidden"></div>
            </li>
            <li className="list-hover">
              <a href="https://www.jobringer.com/employers-list.php">
                Active Employers
              </a>
            </li>
            <li className="list-hover">
              <a href="https://www.jobringer.com/blogs">Job Blogs</a>
            </li>
            <li className="dropdown menulihide7 list-hover">
              <a
                className="dropdown-toggle headerprofileanchorbox list-hover"
                data-toggle="dropdown"
                href="#"
              >
                Pricing
              </a>
              <ul className="dropdown-menu sf-hidden"></ul>
            </li>
            <li className="login-btn menulihide11 wol">
              <a href="https://www.jobringer.com/jobseeker/login">
                Jobseeker Login
              </a>
            </li>
            <li className="employer-login-btn menulihide12 wol">
              <a href="https://www.jobringer.com/employer/login">
                Employer Login
              </a>
            </li>
          </ul>
          <div className="social-holder sf-hidden"></div>
        </div>
        <div className="notification"></div>
      </div>
      <div
        className="notification_pops sf-hidden"
        style={{
          border: "1px solid rgba(36,241,6,0.46)",
          backgroundColor: "#fff",
          boxShadow: "0px 0px 2px #259c08",
          color: "#0ad406",
          transition: "0.5s",
          cursor: "pointer",
          padding: "5px",
          textAlign: "center",
        }}
      ></div>
    </header>
    </>
  );
};

export default Header;
