import './Menu.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHome } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { Modes } from '../../modes.enum';
import WinIcon from '../../assets/win-logo.png';
import CoffeeIcon from '../../assets/coffee.png';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

type Props = { changeMode: any };

export function Menu(props: Props) {
  const [menuOpen, setMenuOpen] = useState(false);

  // TODO: Add 'broken' mode when clicking too many times
  const modeHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    const button: HTMLButtonElement = event.currentTarget;

    props.changeMode(() => button.name as Modes);
  }

  const menuHandler = () => {
    setMenuOpen(open => !open);
  }

  const menuButtonFa = (icon: IconProp) => {
    return (
      <button id={`${menuOpen ? 'menuOpen' : ''}`} onClick={menuHandler}>
        <FontAwesomeIcon icon={icon} />
      </button>
    )
  }

  const menuButtonSrc = (source: string) => {
    return (
      <button id={`${menuOpen ? 'menuOpen' : ''}`} onClick={menuHandler}>
        <img src={source} width={30}></img>
      </button>
    )
  }

  return (
    <div id='menuWrapper'>
      {menuButtonFa(faBars)}
      {menuButtonFa(faHome)}
      {menuButtonSrc(WinIcon)}
      {menuButtonSrc(CoffeeIcon)}
    </div>
  );
}