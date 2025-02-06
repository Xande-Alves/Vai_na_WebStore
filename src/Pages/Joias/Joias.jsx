import { useEffect, useState, useContext } from "react";
import Header from "../../Components/Header/Header";
import axios from "axios";
import s from "./joias.module.scss";
import Footer from "../../Components/Footer/Footer";
import { AppContext } from "../../Context";

export default function Joias() {
  // Estado para armazenar os produtos filtrados da API
  const [produtos, setProdutos] = useState([]);

  // Obtendo os produtos da API e filtrando apenas joias
  const renderizaJoias = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      const dados = response.data;
      const dadosJewelery = dados.filter(
        (item) => item.category === "jewelery"
      );
      setProdutos(dadosJewelery);
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
    }
  };

  useEffect(() => {
    renderizaJoias();
  }, []);

  // Obtendo estado global do carrinho
  const { carrinho, setCarrinho } = useContext(AppContext);

  // Função para adicionar ou remover do carrinho
  const toggleCarrinho = (produto) => {
    // Verifica se o item já está no carrinho
    const estaNoCarrinho = carrinho.some((item) => item.id === produto.id);

    if (estaNoCarrinho) {
      // Remove o item do carrinho
      setCarrinho(carrinho.filter((item) => item.id !== produto.id));
    } else {
      // Adiciona o item ao carrinho
      setCarrinho([...carrinho, produto]);
    }
  };

  return (
    <>
      <Header />
      <section className={s.mainSection}>
        {produtos.map((item) => {
          const estaNoCarrinho = carrinho.some((produto) => produto.id === item.id);

          return (
            <article key={item.id}>
              <img
                src={item.image}
                alt={`Imagem do produto: ${item.title}`}
              />
              <h2>{item.title}</h2>
              <h3>R$ {item.price.toFixed(2)}</h3>
              <p>
                <b>Description: </b> {item.description}
              </p>
              <p>
                <b>Category: </b> {item.category}
              </p>
              <button 
                onClick={() => toggleCarrinho(item)} 
                className={estaNoCarrinho ? s.remover : s.adicionar}
              >
                {estaNoCarrinho ? "Retirar do Carrinho" : "Adicionar ao Carrinho"}
              </button>
            </article>
          );
        })}
      </section>
      <Footer />
    </>
  );
}
