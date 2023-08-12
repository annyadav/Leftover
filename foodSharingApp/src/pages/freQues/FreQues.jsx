import "./freQues.css";
import Navbar from "../../components/navbar/Navbar";
import { Link } from "react-router-dom";
import { useContext } from "react";
import myContext from "../../../context/context";

export default function FreQues() {
  const { user } = useContext(myContext);
  console.log(user);
  return (
    <div className="freQues">
      <div className="nav-header">
      <Navbar />
      </div>
      <div className="hero-container">
        <h1>Frequently Asked Questions [FAQs]:-</h1>
        <p>We're really sorry you're experiencing issues with Log In/Sign Up. There may be different reasons but stick with us.
        </p>
        <h2>Reasons for Errors in Log In/Sign Up:</h2>
        <ul>
        <li>Make sure to recheck your credentials.</li>
        <li>Make sure that Caps lock is according to your credentials.</li>
        <li>Make sure you are using the correct format of all the input fields.</li>
        </ul>
       
         <p>If you're still experiencing an error related to Log In/ Sign Up or others,
           please reach out to us using the contact Us Form (which doesn't require any
            Log In/Sign Up). We'll get back to you ASAP. Thank you. </p>
       
      
          
      </div>
      
    </div>
  );
}