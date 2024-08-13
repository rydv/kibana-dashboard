import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faDownload } from '@fortawesome/free-solid-svg-icons';
import './Header.css';

interface HeaderProps {
  onNavigate: (screen: string) => void;
}

class Header extends React.Component<HeaderProps> {
  render() {
    const { onNavigate } = this.props;

    return (
      <header className="header">
        <div className="logo">KIBANA-DASHBOARD</div>
        <nav className="navigation">
          <button onClick={() => onNavigate('home')} className="nav-button">
            <FontAwesomeIcon icon={faHome} />
          </button>
          <button onClick={() => onNavigate('downloads')} className="nav-button">
            <FontAwesomeIcon icon={faDownload} />
          </button>
        </nav>
      </header>
    );
  }
}

export default Header;
