import { useColorMode } from 'next-color-mode';
import { FaMoon, FaSun } from 'react-icons/fa';

function ThemeToggleButton() {
	const [colorMode, setColorMode] = useColorMode();
	const isDark = colorMode === 'dark';
	const toggleColorMode = (e) => {
		setColorMode(isDark ? 'light' : 'dark');
	};

	return (
		<button
			onClick={toggleColorMode}
			className={`text-${isDark ? 'blue' : 'gray'}-500 hover:text-${isDark ? 'blue' : 'gray'}-700`}
		>
			{isDark ? <FaMoon /> : <FaSun />}
		</button>
	);
}

export default ThemeToggleButton;
