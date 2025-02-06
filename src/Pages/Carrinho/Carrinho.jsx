import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import s from "./carrinho.module.scss";
import { useContext, useState } from "react";
import { AppContext } from "../../Context";

export default function Carrinho() {
  const { carrinho } = useContext(AppContext);

  // Armazena as quantidades de cada item no carrinho
  const [quantidades, setQuantidades] = useState(
    carrinho.reduce((acc, item, index) => {
      acc[index] = 1; // Inicializa cada item com quantidade 1
      return acc;
    }, {})
  );

  const aumentaQuant = (index) => {
    setQuantidades((prev) => ({
      ...prev,
      [index]: prev[index] + 1,
    }));
  };

  const diminuiQuant = (index) => {
    setQuantidades((prev) => ({
      ...prev,
      [index]: prev[index] > 1 ? prev[index] - 1 : 1, // Evita quantidade menor que 1
    }));
  };

  // Calcula o total da compra somando todos os itens
  const totalCompra = carrinho.reduce((total, item, index) => {
    return total + item.price * quantidades[index];
  }, 0);

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
                  alt={`Imagem do produto ${item.title}`}
                />
              </div>
              <p className={s.titulo}>{item.title}</p>
              <p className={s.preco}>R$ {item.price.toFixed(2)}</p>
              <div className={s.quantidade}>
                <button onClick={() => diminuiQuant(index)}>-</button>
                <input
                  type="number"
                  value={quantidades[index]}
                  min="1"
                  readOnly
                />
                <button onClick={() => aumentaQuant(index)}>+</button>
              </div>
              <div className={s.totalItem}>
                <p>Valor total do item</p>
                <span>R$ {(item.price * quantidades[index]).toFixed(2)}</span>
              </div>
            </div>
          ))
        )}
      </section>

      {/* Exibição do total da compra */}
      {carrinho.length > 0 && (
        <div className={s.totalCompra}>
          <p>Total da Compra: </p> 
          <span>R$ {totalCompra.toFixed(2)}</span>
        </div>
      )}

      <div className={s.finalizarCompra}>
        <button>Finalizar Compra</button>
      </div>

      <Footer />
    </>
  );
}
