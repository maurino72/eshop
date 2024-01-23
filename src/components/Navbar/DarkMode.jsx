import { useState } from 'react';
import LightButton from '../../assets/website/light-mode-button.png';
import DarkButton from '../../assets/website/dark-mode-button.png';
import { useEffect } from 'react';

const DarkMode = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light'
  );

  const elem = document.documentElement;

  useEffect(() => {
    localStorage.setItem('theme', theme);
    if (theme === 'dark') {
      elem.classList.add('dark');
    } else {
      elem.classList.remove('dark');
    }
  });
  return (
    <div className='relative'>
      <img
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        src={LightButton}
        alt="Light Mode toggle"
        className={`
          w-12
          cursor-pointer absolute right-0 z-10
          ${theme == 'dark' ? 'opacity-0' : 'opacity-100'}
          transition-all duration-300`}
      />
      <img
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        src={DarkButton} alt="Dark Mode toggle"
        className={`w-12 cursor-pointer`}
      />
    </div>
  )
}

export default DarkMode