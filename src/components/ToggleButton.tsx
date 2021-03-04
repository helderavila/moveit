import { useContext } from "react";

import DarkModeToggle from 'react-dark-mode-toggle';
import { ThemeContext } from "../contexts/ThemeContext";

import styles from '../styles/components/ToggleButton.module.css';

export default function ToggleButton() {
  const { handleDarkModeChange, isDarkMode } = useContext(ThemeContext);

  return (
    <div className={styles.darkModeToggleContainer}>
      <DarkModeToggle
        onChange={handleDarkModeChange}
        checked={isDarkMode}
        size={60}
      />
    </div>
  )
} 