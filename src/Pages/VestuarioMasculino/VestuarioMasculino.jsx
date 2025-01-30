import { useState, useEffect } from "react";
import axios from "axios";
import Header from "../../Components/Header/Header";
import s from "./vestuarioMasculino.module.scss";
import Footer from "../../Components/Footer/Footer";

export default function VestuarioMasculino() {
  const [produtos, setProdutos] = useState([]);

  const renderizaVestMasc = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      const dados = response.data;
      const dadosVestMasc = dados.filter(
        (item) => item.category === "men's clothing"
      );
      setProdutos(dadosVestMasc);
    } catch {
      console.error("Erro ao buscar dados:", error);
    }
  };

  useEffect(() => {
    renderizaVestMasc();
  }, []);

  return (
    <>
      <Header />
      <section>
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
