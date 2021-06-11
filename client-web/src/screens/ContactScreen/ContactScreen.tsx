import { useLayoutEffect } from "react";
import { Button } from "../../components/Button/Button";
import Header from "../../components/Header/Header";
import "./ContactScreen.scss";

export default function ContactScreen() {

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });


  const onDirectionClicked = () => {
    console.log("IDEMO")
  }

  return (
    <div className="contact-container">
      <Header image={"/images/headers/contact-us.jpg"} />
      <div className="map-container">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11162.67606414176!2d19.532529817904077!3d45.61729497943202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDM3JzI0LjQiTiAxOcKwMzInNDkuMyJF!5e0!3m2!1sen!2srs!4v1623406643013!5m2!1sen!2srs" allowFullScreen={false} loading="lazy"/>
        <div className="card-content-wrapper">
          <img src="/images/logos/topic-name-white.png" />
          <h4>Igmanska BB, Kula</h4>

          <p>
            Mon - Fri, 9am - 5pm <br></br>Saturday, 11am - 5pm
          </p>
          
          <p><i className="fa fa-phone-square"></i> 060/144-34-36<br></br><i className="fa fa-envelope-square"></i> topicenterijer@gmail.com </p>
         
          <Button text="GET DIRECTION" onClickCallback={onDirectionClicked}/>
          {/*<a href="https://www.google.com/maps/dir//45.6234722,19.5469444/@45.6234722,19.5447557,17z" target="_blank">
            <button>GET DIRECTION</button>
          </a>*/}
        </div>
      </div>
    </div>
  );
}
