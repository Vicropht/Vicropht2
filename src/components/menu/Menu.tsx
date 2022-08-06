import './Menu.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCoffee, faHome } from '@fortawesome/free-solid-svg-icons';
import { ReactElement, useState } from 'react';
import { Modes } from '../../modes.enum';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faWindows } from '@fortawesome/free-brands-svg-icons';

type Props = { exportMode: (mode: Modes) => void };

export function Menu({ exportMode }: Props): ReactElement {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div id='menuWrapper'>
      <button id='menuBurger' onClick={() => setMenuOpen(open => !open)}>
        <FontAwesomeIcon icon={faBars} />
      </button>
      {menuOpen && (
        // React.Fragments
        <>
          <MenuButtonFa source={faHome} onClick={() => exportMode(Modes.default)} />
          <MenuButtonFa source={faWindows as IconDefinition} onClick={() => exportMode(Modes.aestethic)} />
          <MenuButtonFa source={faCoffee as IconDefinition} onClick={() => exportMode(Modes.comfy)} />
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

// function MenuButtonSrc({ source, onClick }: { source: string; onClick: () => void }): ReactElement {
//   return (
//     <button onClick={onClick}>
//       <img src={source}></img>
//     </button>
//   );
// }
