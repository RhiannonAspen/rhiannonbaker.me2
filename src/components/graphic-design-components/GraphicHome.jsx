import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

//JSON File
import postDescriptions from '../../assets/graphic-design-assets/graphic-posts.json';

//CSS Styles
import './GraphicHome.css'

//Imported Images
import FG from '../../assets/graphic-design-assets/graphic-fg.png'
//Imported Images - Posts
import youtubePost from "../../assets/graphic-design-assets/youtube-post.png"
import postcardFrontPost from "../../assets/graphic-design-assets/vvm-postcard-front.png"
import postcardBackPost from "../../assets/graphic-design-assets/vvm-postcard-back.png"
import businesscardFrontPost from "../../assets/graphic-design-assets/vvm-businesscard-front.png"
import businesscardBackPost from "../../assets/graphic-design-assets/vvm-businesscard-back.png"
import healthRewardsPost from "../../assets/graphic-design-assets/health-rewards.png"
import orangePost1 from "../../assets/graphic-design-assets/orange-post1.png"
import orangePost2 from "../../assets/graphic-design-assets/orange-post2.png"
import orangePost3 from "../../assets/graphic-design-assets/orange-post3.png"

function GraphicHome() {
  const [post, setPost] = useState(youtubePost);
  const [postTitle, setPostTitle] = useState(postDescriptions.posts[0].title);
  const [postDescription, setPostDescription] = useState(postDescriptions.posts[0].description);
  const [count, setCount] = useState(0);
  const navigate = useNavigate()

  const postsList = [youtubePost, postcardFrontPost, postcardBackPost, businesscardFrontPost, businesscardBackPost, healthRewardsPost, orangePost1, orangePost2, orangePost3];


  const clickToHome = () => {
    navigate('/');
  }

  const clickContact = () => {
    const popup = document.getElementById("contact-form");
    popup.style.display = "block";
  }

  const closeContact = () => {
    const popup = document.getElementById("contact-form");
    popup.style.display = "none";
  }

  const seeProjects = () => {

    const heroIMG = document.getElementsByClassName("graphic-hero-img");
    const navigation = document.getElementById("graphic-nav");
    const postShowcase = document.getElementById("graphic-showcase");

    for (var i = 0; i < heroIMG.length; i++) {
      heroIMG[i].classList.add("opacity-fadeout");
    }

    setTimeout(() => {
      navigation.classList.add("move-navigation");
      navigation.style.top = "0";
    }, 2000);

    setTimeout(() => {
      postShowcase.style.opacity = "1";
      postShowcase.classList.add("opacity-fadein");
    }, 3500);

  }

  const nextPost = () => {
    setCount(c => {
      const next = c + 1;
      setPost(postsList[next]);
      setPostTitle(postDescriptions.posts[next].title);
      setPostDescription(postDescriptions.posts[next].description);
      return next;
    });
  }
    
  const previousPost = () => {
    setCount(c => {
      const prev = c - 1;
      setPost(postsList[prev]);
      setPostTitle(postDescriptions.posts[prev].title);
      setPostDescription(postDescriptions.posts[prev].description);
      return prev;
    });
 }

  return (
    <>
      <nav id='graphic-nav'>
        <button onClick={clickContact} type="button">Contact Me</button>
        <button onClick={clickToHome} type="button">Technology Resume</button>
        <button onClick={seeProjects} type="button">Projects</button>
      </nav>

      <div id="contact-form">
        For any graphic design related inquires, please send me an email at <a href="mailto:rhiannonaspen.b@gmail.com">rhiannonaspen.b@gmail.com</a>
        <button onClick={closeContact} type="button">Okay</button>
      </div>

      <div className="graphic-hero">
        <img className="graphic-hero-img" src={FG} alt="Rhiannon Baker - The Graphic Design Portfolio" />

        <div id="graphic-showcase">
          <button onClick={previousPost}>Previous</button>
          <img id='showcase-img' src={post} />
          <div id='description'>
            <p id='description-title'>{postTitle}</p>
            <p id='description-description'>{postDescription}</p>
          </div>
          <button onClick={nextPost}>Next</button>
        </div>
      </div>
    </>
  )
}

export default GraphicHome;
