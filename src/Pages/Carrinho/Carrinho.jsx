import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import s from "./carrinho.module.scss";
import { useContext } from "react";
import { AppContext } from "../../Context";

export default function Carrinho() {
  const { carrinho } = useContext(AppContext);

  return (
    <>
      <Header />
      <h2>Meu Carrinho</h2>
      <section className={s.mainSection}>
        {carrinho.length === 0 ? (
          <p>O carrinho está vazio.</p>
        ) : (
          carrinho.map((item, index) => (
            <div className={s.itemContainer} key={index}>
              <div className={s.caixaImagem}>
                <img
                  src={item.image}
                  alt="Descrição da imagem do item ao lado."
                />
              </div>
              <p className={s.titulo}>{item.title}</p>
              <p className={s.preco}>R$ {item.price.toFixed(2)}</p>
            </div>
          ))
        )}
      </section>
      <Footer />
    </>
  );
}
