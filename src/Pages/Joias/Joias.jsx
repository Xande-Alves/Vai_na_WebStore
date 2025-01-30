import { useEffect, useState } from "react";
import Header from "../../Components/Header/Header";
import axios from "axios";
import s from "./joias.module.scss";
import Footer from "../../Components/Footer/Footer";

export default function Joias() {
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
          </article>
        ))}
      </section>
      <Footer />
    </>
  );
}
