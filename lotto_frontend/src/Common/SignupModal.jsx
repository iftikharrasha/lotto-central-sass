import React, { useState } from 'react';
import message from "../../src/assets/img/message.svg";
import send from "../../src/assets/img/send.svg";
import Modal from "react-modal";
import axios from 'axios';

const SignupModal = ({open, onCloseModal, setIsLoading}) => {
    const [error, setError] = useState(null);
    const [email, setEmail] = useState(null);
    const [emailSent, setEmailSent] = useState(false);
    const [messagePop, setMessagePop] = useState(null);

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

    function isValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
    }

    const handleClick = async (e) => {
        e.preventDefault()
        // onCloseModal();
        setIsLoading(true);
        try {
            const response = await axios.post(
                "https://api.lottocentral.in/dev/inquiry/user/create",
                { email: email }
            );
            if (response.status === 200 || response.status === 201) {
                setIsLoading(false);
                setEmailSent(true);
                setMessagePop({
                    title: 'Welcome aboard, lucky one!',
                    desc1: `Keep an eye on your email for launch updates.`,
                    desc2: null,
                })
            }
            console.log("responseresponse", response);
        } catch (error) {
            setIsLoading(false);
            if (error.response.data.status === 400) {
                setEmailSent(true);
                setMessagePop({
                    title: 'Oops!',
                    desc1: `It seems you're already on our list.`,
                    desc2: `Keep an eye on your email for launch updates.`,
                })
            }
            console.error("An error occurred:", error.response);
        }
    };

    return (
        <Modal
            isOpen={open}
            onRequestClose={onCloseModal}
            style={customStyles}
        >
            <div style={{ padding: "1rem" }}>
                <img src={message} alt="message" width="100" height="92.5"/>
                {
                    !emailSent ?
                    <>
                        <h2>SIGN UP</h2>
                        <form>
                            <div
                            className="fields"
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "1rem",
                                marginTop: "1rem",
                            }}
                            >
                            <div style={{ display: "flex", alignItems: "center" }}>
    
                            <div className="center">
                                <div className="input-field">
                                    <input 
                                        className="email" 
                                        type="text" 
                                        onChange={(e) => {
                                            e.preventDefault();
                                            e.persist();
                                            if (!isValidEmail(e.target.value)) {
                                                setError("Invalid Email");
                                            } else {
                                                setError(null);
                                            }
                                            setEmail(e.target.value);
                                        }}
                                        required
                                    />
                                    <label className="inner-text">Drop email here</label>
                                    <input type="checkbox" id="check"/>
                                    <div className='wave'>
                                    {
                                        email === null ? null :
                                        error ? 
                                        <button className="button" style={{pointerEvents: "none"}}>
                                            <img src={send} alt="send" width={42} height={42}/>
                                        </button> : 
                                        <button type="submit" className="button send" onClick={(e) => handleClick(e)}>
                                            <img src={send} alt="send" width={42} height={42}/>
                                        </button>
                                    }
                                    </div>
                                    
                                </div>
                            </div>
    
                            </div>
                            {error ?
                                <p className='error'
                                >
                                    {error}
                                </p> : <p>We promise not to spam you</p>
                            }
                            </div>
                        </form>
                    </> :
                    <>
                        <h2>{messagePop.title}</h2>
                        <p className='error message'>{messagePop.desc1} <br />{messagePop.desc2}</p>
                    </>
                }
                
            </div>
        </Modal>
    );
};

export default SignupModal;