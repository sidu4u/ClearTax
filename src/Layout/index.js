import React, { useState, useCallback } from "react";
import CardModalContainer from "../containers/ModalContainer";
import Planned from "../containers/Planned";
import Done from "../containers/Done";
import Started from "../containers/Started";
import "./styles.css";

const Layout = () => {
    const [isOpen, changeIsOpen] = useState(false);
    const [selectedCard, changeSelectedCard] = useState();
    const openModal = useCallback(() => changeIsOpen(true), []);
    const closeModal = useCallback(() => changeIsOpen(false), []);

    return (<div className="container">
        <CardModalContainer selectedCard={selectedCard} closeModal={closeModal} isOpen={isOpen} />
        <Planned selectedCard={changeSelectedCard} openModal={openModal} />
        <Started selectedCard={changeSelectedCard} openModal={openModal} />
        <Done selectedCard={changeSelectedCard} openModal={openModal} />
    </div>)
}

export default Layout;