import { useState, useEffect, useContext } from "react";
import axios from "axios";
import Header from "../../Components/Header/Header";
import s from "./home.module.scss";
import '../../Components/Footer/Footer'
import Footer from "../../Components/Footer/Footer";
import { AppContext } from "../../Context";

export default function Home() {
  // TRATANDO DADOS DO API PARA RENDERIZAR
  const [loja, setLoja] = useState([]);

  const getItemLoja = async () => {
    const dados = await axios.get("https://fakestoreapi.com/products");
    setLoja(dados.data);
  };

  useEffect(() => {
    getItemLoja();
  }, []);

  //OBTENDO ESTADO GLOBAL
  const { carrinho, setCarrinho } = useContext(AppContext);

  return (
    <>
      <Header />
      <main className={s.Main}>
        <section>
          {loja.map((item) => (
            <article>
              <img
                src={item.image}
                alt="Imagem do item da loja, descrição logo abaixo."
              />
              <h2>{item.title}</h2>
              <h3>R$ {item.price.toFixed(2)}</h3>
              <p><b>Description: </b> {item.description}</p>
              <p><b>Category: </b> {item.category}</p>
              <button onClick={() => setCarrinho(carrinho + 1)}>Adicionar ao carrinho</button>
            </article>
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}
