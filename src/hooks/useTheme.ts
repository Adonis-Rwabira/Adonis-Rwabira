import { useState, useEffect } from 'react';

// Type pour le thème pour plus de clarté
type Theme = 'light' | 'dark' | 'system';

/**
 * Hook personnalisé pour gérer le thème de l'application (clair, sombre, ou système).
 * Il persiste le choix dans le localStorage et s'adapte aux préférences système.
 * @returns Un tableau contenant le thème actuel et une fonction pour le mettre à jour.
 */
const useTheme = (): [Theme, (theme: Theme) => void] => {
  // Initialise l'état à partir du localStorage, ou 'system' par défaut.
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem('theme') as Theme) || 'system'
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const root = document.documentElement;

    // Fonction pour appliquer le thème correct sur la balise <html>
    const applyTheme = () => {
      const isDarkSystem = mediaQuery.matches;
      
      if (theme === 'dark' || (theme === 'system' && isDarkSystem)) {
        root.classList.add('dark');
      } else {
        root.classList.remove('dark');
      }
    };

    // Applique le thème immédiatement
    applyTheme();

    // Stocke la préférence de l'utilisateur
    localStorage.setItem('theme', theme);
    
    // Ajoute un écouteur UNIQUEMENT si le thème est 'system'
    if (theme === 'system') {
      mediaQuery.addEventListener('change', applyTheme);
      
      // Fonction de nettoyage pour retirer l'écouteur
      return () => mediaQuery.removeEventListener('change', applyTheme);
    }

  }, [theme]); // Cet effet se redéclenche uniquement si `theme` change

  return [theme, setTheme];
};

export default useTheme;
