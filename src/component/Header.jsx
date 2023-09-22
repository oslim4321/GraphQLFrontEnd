import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <div className="d-flex align-items-center justify-content-center">
            <Link className="navbar-brand" to={"/"}>
              <div className="d-flex align-items-center justify-content-center">
                {" "}
                <img src="/graphQl-logo.png" alt="" />
                <div className="navbar-brand">Project MGNT</div>
              </div>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
