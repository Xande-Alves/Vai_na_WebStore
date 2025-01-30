import facebook from "../../assets/facebook.png";
import x from "../../assets/x.png";
import instagram from "../../assets/instagram.png";
import vnw from "../../assets/vnw.jpg";
import s from "./footer.module.scss";

export default function Footer() {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0, // Rola até o topo
      behavior: "smooth", // Rolagem suave
    });
  };

  return (
    <>
      <footer className={s.Footer}>
        <div>
          <img src={vnw} onClick={scrollToTop} alt="Logo da Vai na Web" />
          <nav>
            <a href="https://www.facebook.com/"><img src={facebook} alt="Logo do Facebbok" /></a>
            <a href="https://www.instagram.com/"><img src={x} alt="Logo do X" /></a>
            <a href="https://x.com/?lang=pt&mx=2"><img src={instagram} alt="Logo do Instagram" /></a>
          </nav>
        </div>
      </footer>
    </>
  );
}
