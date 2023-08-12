import "./ourStory.css";
import Navbar from "../../components/navbar/Navbar";
import PageFooter from "../../components/footer/Footer";

export default function OurStory() {
  return (
    <div className="ourStory">
      <Navbar />
      <div className="story-container-card">
        <div className="story-container">
          <div className="main-img-cont">
            <img
              src="src/assets/images/sharingFood.jpg"
              className="main-img"
              alt="main-img"
            />
          </div>
          <div className="story-container-text">
            <h3>About Leftover</h3>
            <p className="para1">
              Leftover is a non-profit food sharing platform that connects food
              sharers with individuals who can benifits from it, with the aim of reducing food
              wastage. Shockingly, around 1.3 billion tonnes of food is wasted
              globally each year, with over 30% of that occurring in Ireland
              alone. In Dublin, where we are based, over 50,000 tonnes of food
              is wasted every year. 
            </p>
            <p className="para2">
            The vision behind Leftover is to harness technology and community collaboration 
            to tackle food wastage. By creating 
            an easily accessible platform that connects food Sharers and individuals. 
            The platform imagines a society in which extra food is valued as a resource to be shared rather than 
            wasted or well phrased as
              <i>"why bin it; pin it & win it"</i>
            </p>
          </div>
        </div>
      </div>

      <PageFooter />
    </div>
  );
}