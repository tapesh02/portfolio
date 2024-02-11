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
