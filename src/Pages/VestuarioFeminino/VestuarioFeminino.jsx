import { useState, useEffect } from "react";
import axios from "axios";
import Header from "../../Components/Header/Header";
import s from "./vestuarioFeminino.module.scss";
import Footer from "../../Components/Footer/Footer";

export default function VestuarioFeminino() {
  const [produtos, setProdutos] = useState([]);

  const renderizaVestFem = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      const dados = response.data;
      const dadosVestFem = dados.filter(
        (item) => item.category === "women's clothing"
      );
      setProdutos(dadosVestFem);
    } catch {
      console.error("Erro ao buscar dados:", error);
    }
  };

  useEffect(() => {
    renderizaVestFem();
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
