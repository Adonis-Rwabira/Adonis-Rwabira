import React from 'react';
import { Sun, Moon, Monitor } from 'lucide-react';
import useTheme from '../../hooks/useTheme';

const ThemeToggle = () => {
  const [theme, setTheme] = useTheme();

  const handleToggle = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else if (theme === 'dark') {
      setTheme('system');
    } else {
      setTheme('light');
    }
  };

  const renderIcon = () => {
    switch (theme) {
      case 'light':
        return <Sun className="w-4 h-4 text-amber-400" />;
      case 'dark':
        return <Moon className="w-4 h-4 text-slate-400" />;
      case 'system':
      default:
        return <Monitor className="w-4 h-4 text-slate-500" />;
    }
  };

  return (
    <button 
      onClick={handleToggle}
      className="p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors border border-slate-200 dark:border-slate-700/60"
      aria-label="Basculer le thème"
    >
      {renderIcon()}
    </button>
  );
};

export default ThemeToggle;
