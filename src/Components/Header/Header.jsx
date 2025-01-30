import { Link } from "react-router-dom";
import vnw from '../../assets/vnw.jpg';
import s from './header.module.scss' 


export default function Header() {
  return (
    <header>
        <div>
          <img src={vnw} alt="Logo da Vai na Web" />
          <h1>VAI NA WEBSTORE</h1>
        </div>
        <nav>
            <ul>
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"/VestMasc"}>Vestuário Masculino</Link></li>
                <li><Link to={"/VestFem"}>Vestuário Feminino</Link></li>
                <li><Link to={"/Joias"}>Jóias</Link></li>
                <li><Link to={"/Eletronicos"}>Eletrônicos</Link></li>
            </ul>
        </nav>
    </header>
  );
}
