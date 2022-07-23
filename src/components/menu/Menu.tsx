import './Menu.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHome } from '@fortawesome/free-solid-svg-icons';
import { ReactElement, useState } from 'react';
import { Modes } from '../../modes.enum';
import WinIcon from '../../assets/win-logo.png';
import CoffeeIcon from '../../assets/coffee.png';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

export function Menu(): ReactElement {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mode, setMode] = useState(Modes.default);

  // TODO: Add 'broken' mode when clicking too many times
  const modeHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    const button: HTMLButtonElement = event.currentTarget;
    { exportMode(() => button.name as Modes) };
  }

  return (
    <div id='menuWrapper'>
      <button id={`${menuOpen ? 'menuOpen' : ''}`} onClick={setMenuOpen(open => !open)}>
        <FontAwesomeIcon icon={faBars} />
      </button>
      <MenuButton fAwesome={true} source={faHome} setMode={ } />
      <MenuButton fAwesome={false} source={WinIcon} setMode={ } />
      <MenuButton fAwesome={false} source={CoffeeIcon} setMode={ } />
    </div>
  );
}

function MenuButton({ fAwesome, source, setMode() }: { fAwesome: IconDefinition; source: string; setMode: any }): ReactElement {
  return (fAwesome ?
    (
      <button id={`${menuOpen ? 'menuOpen' : ''}`} onClick={menuHandler}>
        <FontAwesomeIcon icon={source} />
      </button>
    ) :
    (
      <button id={`${menuOpen ? 'menuOpen' : ''}`} onClick={menuHandler}>
        <img src={source} width={30}></img>
      </button>
    )
  );
}
