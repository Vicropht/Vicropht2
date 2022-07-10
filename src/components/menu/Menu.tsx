import './Menu.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHome } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { Modes } from '../../modes.enum';
import WinIcon from '../../assets/win-logo.png';
import CoffeeIcon from '../../assets/coffee.png';

type Props = { changeMode: any };

export function Menu(props: Props) {
  const [menuOpen, setMenuOpen] = useState(false);

  // TODO: Add 'broken' mode when clicking too many times
  const modeHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    const button: HTMLButtonElement = event.currentTarget;

    props.changeMode(() => button.name as Modes);
  }

  return (
    <div id='menuWrapper'>
      <button id='burger'>
        <FontAwesomeIcon icon={faBars} />
      </button>
      <button className='fadeInRight' name={`${Modes.default}`} title='Default mode' onClick={modeHandler}>
        <FontAwesomeIcon icon={faHome}></FontAwesomeIcon>
      </button>
      <button className='fadeInRight' name={`${Modes.aestethic}`} title='A E S T E T H I C  M O D E' onClick={modeHandler}>
        <img src={WinIcon} width={30}></img>
      </button>
      <button className='fadeInRight' name={`${Modes.comfy}`} title='comfy mode' onClick={modeHandler}>
        <img src={CoffeeIcon} width={30}></img>
      </button>
    </div>
  );
}