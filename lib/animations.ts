export const fadeIn = {
    hidden: {
        opacity: 0,
        y: 20
    },
    visible: (index = 0) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            delay: 0.1 * index
        }
    })
};

export const slideIn = {
    hidden: {
        opacity: 0,
        x: -20
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5
        }
    }
};

export const scaleIn = {
    hidden: {
        opacity: 0,
        scale: 0.8
    },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.5
        }
    }
}; 