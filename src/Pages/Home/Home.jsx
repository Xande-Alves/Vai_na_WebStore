import { useState, useEffect, useContext } from "react";
import axios from "axios";
import Header from "../../Components/Header/Header";
import s from "./home.module.scss";
import '../../Components/Footer/Footer'
import Footer from "../../Components/Footer/Footer";
import { AppContext } from "../../Context";

export default function Home() {
  // Estado para armazenar os produtos da API
  const [loja, setLoja] = useState([]);

  // Obtendo os itens da API
  const getItemLoja = async () => {
    const dados = await axios.get("https://fakestoreapi.com/products");
    setLoja(dados.data);
  };

  useEffect(() => {
    getItemLoja();
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
      <main className={s.Main}>
        <section>
          {loja.map((item) => {
            const estaNoCarrinho = carrinho.some((produto) => produto.id === item.id);

            return (
              <article key={item.id}>
                <img
                  src={item.image}
                  alt={`Imagem do produto: ${item.title}`}
                />
                <h2>{item.title}</h2>
                <h3>R$ {item.price.toFixed(2)}</h3>
                <p><b>Description: </b> {item.description}</p>
                <p><b>Category: </b> {item.category}</p>
                <button 
                  onClick={() => toggleCarrinho(item)} 
                  className={estaNoCarrinho ? s.remover : s.adicionar} // Para estilização dinâmica
                >
                  {estaNoCarrinho ? "Retirar do Carrinho" : "Adicionar ao Carrinho"}
                </button>
              </article>
            );
          })}
        </section>
      </main>
      <Footer />
    </>
  );
}
