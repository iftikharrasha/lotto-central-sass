import React, { useState } from 'react';
import message from "../../src/assets/img/message.svg";
import Modal from "react-modal";
import axios from 'axios';

const ContactModal = ({open, onCloseModal, error, messagePop}) => {

    const customStyles = {
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          width: "30%",
          transform: "translate(-50%, -50%)",
          borderRadius: "1rem",
          //   background: linear-gradient(40deg, rgba(161, 198, 221, 0.5), rgba(161, 198, 221, 0.225)),
        },
    };
    if (window.innerWidth <= 600) {
      customStyles.content.width = "90%"; // Adjust the width for smaller screens
    }

    return (
        <Modal
            isOpen={open}
            onRequestClose={onCloseModal}
            style={customStyles}
        >
            <div style={{ padding: "1rem" }}>
                <img src={message} alt="message" width="100" height="92.5"/>
                <h2>{messagePop.title}</h2>
                <p className='error message'>{messagePop.desc}</p>
            </div>
        </Modal>
    );
};

export default ContactModal;