import './Menu.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHome } from '@fortawesome/free-solid-svg-icons';
import { ReactElement, useState } from 'react';
import { Modes } from '../../modes.enum';
import WinIcon from '../../assets/win-logo.png';
import CoffeeIcon from '../../assets/coffee.png';
import { IconDefinition, IconProp } from '@fortawesome/fontawesome-svg-core';

type Props = { exportMode: (mode: Modes) => void };

export function Menu({ exportMode }: Props): ReactElement {
  const [menuOpen, setMenuOpen] = useState(false);

  // TODO: Add 'broken' mode when clicking too many times
  const modeHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    const button: HTMLButtonElement = event.currentTarget;
    exportMode(button.name as Modes);
  }

  return (
    <div id='menuWrapper'>
      <button onClick={() => setMenuOpen(open => !open)}>
        <FontAwesomeIcon icon={faBars} />
      </button>
      {menuOpen && (
        // See React.Fragments
        <>
          <MenuButtonFa source={faHome} onClick={() => exportMode(Modes.default)} />
          <MenuButtonSrc source={WinIcon} onClick={() => exportMode(Modes.aestethic)} />
          <MenuButtonSrc source={CoffeeIcon} onClick={() => exportMode(Modes.comfy)} />
        </>
      )}
    </div>
  );
}

function MenuButtonFa({ source, onClick }: { source: IconDefinition; onClick: () => void }): ReactElement {
  return (
    <button onClick={onClick}>
      <FontAwesomeIcon icon={source} />
    </button>
  );
}

function MenuButtonSrc({ source, onClick }: { source: string; onClick: () => void }): ReactElement {
  return (
    <button onClick={onClick}>
      <img src={source} width={30}></img>
    </button>
  );
}
