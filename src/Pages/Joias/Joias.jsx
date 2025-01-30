import { useEffect, useState, useContext } from "react";
import Header from "../../Components/Header/Header";
import axios from "axios";
import s from "./joias.module.scss";
import Footer from "../../Components/Footer/Footer";
import { AppContext } from "../../Context";

export default function Joias() {
  //renderizando dados da API
  const [produtos, setProdutos] = useState([]);

  const renderizaJoias = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      const dados = response.data;
      const dadosJewelery = dados.filter(
        (item) => item.category === "jewelery"
      );
      setProdutos(dadosJewelery);
    } catch {
      console.error("Erro ao buscar dados:", error);
    }
  };

  useEffect(() => {
    renderizaJoias();
  }, []);

  //OBTENDO ESTADO GLOBAL
  const {carrinho, setCarrinho} = useContext(AppContext)

  return (
    <>
      <Header />
      <section className={s.mainSection}>
        {produtos.map((item) => (
          <article>
            <img
              src={item.image}
              alt="Imagem do item da loja, descrição logo abaixo."
            />
            <h2>{item.title}</h2>
            <h3>R$ {item.price.toFixed(2)}</h3>
            <p>
              <b>Description: </b> {item.description}
            </p>
            <p>
              <b>Category: </b> {item.category}
            </p>
            <button onClick={()=> setCarrinho(carrinho + 1)}>Adicionar ao carrinho</button>
          </article>
        ))}
      </section>
      <Footer />
    </>
  );
}
