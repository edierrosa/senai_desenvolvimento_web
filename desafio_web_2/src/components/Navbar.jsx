import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">Início</Link>
      <Link to="/cadastro">Cadastrar Reserva</Link>
      <Link to="/listar">Listar Vagas</Link>
    </nav>
  );
}
