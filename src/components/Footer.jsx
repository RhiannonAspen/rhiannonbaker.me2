import { useNavigate } from 'react-router-dom'

import './Footer.css'

function Footer() {
  const navigate = useNavigate()
  const clickToTop = () => {
      window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
  });
  }

  return (
    <>
    <footer>
      <button onClick={clickToTop}>Back to Top</button>
    </footer>
    </>
  )
}

export default Footer;
