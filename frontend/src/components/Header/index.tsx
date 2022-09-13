import logo from '../../assets/img/logo.svg';

import './styles.css';

function Header() {
  return (
    <div className="dsmeta-logo-container">
      <img src={logo} alt="logo da loja DSMeta" />
      <h1>DSMeta</h1>
      <p>
        Desenvolvido por{' '}
        <a href="https://www.linkedin.com/in/adriel-ryan/">Adriel Ryan</a>
      </p>
    </div>
  );
}

export default Header;
