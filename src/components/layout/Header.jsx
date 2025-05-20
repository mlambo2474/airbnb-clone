import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {  useHistory } from "react-router-dom"
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Avatar } from "@mui/material";
import { openModal } from "../../actions/modalAction";
import { logout } from "../../actions/userActions";
import SearchBar from "../searchInput/SearchBar";
// import Login from "../login/Login"
import "./Header.css";

const Header = () => {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const history = useHistory()
// const navigate = useNavigate()
    // const [searchResults, setSearchResults] = useState([]);


  // const handleSearch = (results) => {
  //   setSearchResults(results);
  //   dispatch({ type: "SET_SEARCH_RESULTS", payload: results });
  // };
  const openLoginModal = () => {
    console.log("the modal is clicked");
    dispatch(openModal("LOGIN_MODAL"));
  };
  const handleLogOut = ()=>{
    dispatch(logout())
    localStorage.removeItem("userInfo")
  // navigate('/');
    history.push("/")
  }
   console.log('Header rendering');
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header-logo"
          src="data:image/png;base64,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"
          alt="airbnb logo"
        />
      </Link>
      <div className="header-center">
      <SearchBar />

        {/* <input type="text" />
        <SearchIcon /> */}
      </div>
      <div className="header-right">
        <p>Become a host</p>
        <LanguageIcon />

        <div className="dropdown">
          <ExpandMoreIcon className="dropdown-btn" />
          <div className="dropdown-content">
            {userInfo ? (
              <>
                <span>account</span>
                <span onClick={handleLogOut}>Log out</span>
              </>
            ) : (
              <>
                <span onClick={openLoginModal}>Sign Up</span>
                <span onClick={openLoginModal}>login</span>
              </>
            )}
            <span >Help</span>
          </div>
        </div>

        <Avatar />
      </div>
    </div>
  );
};

export default Header;
