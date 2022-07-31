import { faMusic } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ReactElement, useState } from 'react';
import { Modes } from '../../modes.enum';
import Avatar from '../avatar/Avatar';
import './Container.scss';

export function Container({ currentMode }: { currentMode: Modes }): ReactElement {
  const [immcOpen, setImmcOpen] = useState(false);

  return (
    <div className='container-center'>
      <div className={`wrapper ${currentMode}`}>
        <h1 className={`title ${currentMode}`} data-glitch="V I C R O P H T">V I C R O P H T</h1>
        <i><a href='https://en.wikipedia.org/wiki/Learning-by-doing'>"Learning by doing"</a></i><br />
        <a className='discord' href='https://discord.com/users/355435413705326597'>[root]#6722</a>

        <Avatar currentMode={currentMode} />

        {/* Display is set to none instead of creating a condition,
        this way the iframe doesn't have to load everytime the mode changes */}
        {
          currentMode === Modes.comfy && (
            <button onClick={() => setImmcOpen(open => !open)} className='noise'>
              <FontAwesomeIcon icon={faMusic} /> Background noise
            </button>
          )
        }
        {
          immcOpen && (
            <iframe src='https://imissmycafe.com/' id='coffe-soundboard' width={300} height={350}></iframe>
          )
        }

        <div className='socials'>
          <a href="https://twitter.com/CristophVictor">Twitter</a>
          <a href="https://github.com/Vicropht">GitHub</a>
          <a href="mailto:vicropht@protonmail.com">Contact</a>
          <a href="https://www.linkedin.com/in/vicropht/">LinkedIn</a>
        </div>
      </div>
    </div >
  )
}
