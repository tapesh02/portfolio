export const toggleVisible = (duration, setFunction) => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > duration) {
        setFunction(true);
    } else if (scrolled <= duration) {
        setFunction(false);
    }
};

export const scrollToTop = (position, behavior) => {
    window.scroll({
        top: position,
        behavior: behavior,
    });
};

export const renderIcon = (value) =>
    value.map((_icon) => (
        <a key={_icon.id} href={_icon.link} target="_blank" rel="noopener noreferrer">
            <img src={_icon.icon} alt="icon" />
        </a>
    ));
