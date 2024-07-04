export const userDarkMode = () => {
    const isDarkMode = useState("darkMode", () => false);

    onMounted(() => {
        isDarkMode.value = localStorage.getItem("theme") === "dark-theme"
            || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);

        setDarkMode()
    });

    const toggleDarkMode = () => {
        isDarkMode.value = !isDarkMode.value;
        localStorage.setItem("theme", isDarkMode.value ? "dark-theme" : "light-theme");
        setDarkMode();
    };

    const setDarkMode = () => {
        const theme = localStorage.getItem("theme");
        if (theme === 'dark-theme' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark-theme');
        } else {
            document.documentElement.classList.remove('dark-theme');
        }
    };

    return {
        isDarkMode,
        toggleDarkMode
    }
}
