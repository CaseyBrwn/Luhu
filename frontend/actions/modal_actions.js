
export const OPEN_MODAL = "OPEN_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";

export const OPEN_MODAL2 = "OPEN_MODAL2";
export const CLOSE_MODAL2 = "CLOSE_MODAL2";

export const openModal = (modal) => ({
    type: OPEN_MODAL,
    modal: modal
});


export const closeModal = () => ({
    type: CLOSE_MODAL,
});

export const openModal2 = (modal) => ({
    type: OPEN_MODAL2,
    modal: modal
});


export const closeModal2 = () => ({
    type: CLOSE_MODAL2,
});

