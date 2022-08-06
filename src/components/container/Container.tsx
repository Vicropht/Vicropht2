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
        <h1 className={`title ${currentMode}`} data-glitch="V I C R O P H T" title='who?' >V I C R O P H T</h1>
        <p>Welcome to my little sandbox on the internet!</p>
        <i><a href='https://en.wikipedia.org/wiki/Learning-by-doing'>"Learning by doing"</a></i><br />

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
          <a title='tweet tweet' href="https://twitter.com/CristophVictor">Twitter</a>
          <a title='where the code goes' href="https://github.com/Vicropht">GitHub</a>
          <a title='you know, this brand new thing from the 70s' href="mailto:vicropht@protonmail.com">Contact</a>
          <a title='no funny business' href="https://www.linkedin.com/in/vicropht/">LinkedIn</a>
          <a title='Skype for non-business: root#8673' href="https://discord.com/users/355435413705326597">Discord</a>
        </div>
      </div>
    </div >
  )
}
