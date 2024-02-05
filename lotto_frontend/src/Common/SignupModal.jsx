import React, { useState } from 'react';
import tickImg from "../../src/assets/img/tick.png";
import arrowImg from "../../src/assets/img/arrow.png";
import Modal from "react-modal";
import axios from 'axios';
import Swal from 'sweetalert2';
import LottieAnime from './LottieAnime';

const SignupModal = ({open, onCloseModal, setIsLoading}) => {
    const [error, setError] = useState(null);
    const [email, setEmail] = useState(null);

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

    const handleClick = async () => {
        onCloseModal();
        setIsLoading(true);
        try {
            const response = await axios.post(
                "https://api.lottocentral.in/dev/inquiry/user/create",
                { email: email }
            );
            setIsLoading(false);
            if (response.status === 200 || response.status === 201) {
                Swal.fire({
                    title: 'Launching Soon!',
                    text: `You've successfully signed up to this lottery, keep an eye on your email.`,
                    icon: "success",
                    customClass: 'popUp-success',
                    timer: 10000,
                    timerProgressBar: true,
                    showCancelButton: false,
                    showConfirmButton: false,
                }).then((result) => {
                    if (result.dismiss === Swal.DismissReason.timer) {
                        console.log("I was closed by the timer");
                    }
                    if (result.isConfirmed || result.isDismissed || result.isDenied) {
                        console.log("I was closed by clicked outside");
                    }
                })
            }
            console.log("responseresponse", response);
        } catch (error) {
            setIsLoading(false);
            if (error.response.data.status === 400) {
                Swal.fire({
                    title: 'Hi again!',
                    text: `You've already signed up to this lottery.`,
                    icon: 'info',
                    customClass: 'popUp-error',
                    timer: 7000,
                    timerProgressBar: true,
                    showCancelButton: false,
                    showConfirmButton: false,
                });
            }
            console.error("An error occurred:", error.response);
            // setEmptyInput(error.response.data.message);
        }
    };

    return (
        <Modal
            isOpen={open}
            onRequestClose={onCloseModal}
            style={customStyles}
        >
            {/* <LottieAnime/> */}
            <div style={{ padding: "1rem" }}>
                <h2 style={{ color: "black" }}>SIGNUP</h2>
                <div>
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
                                {
                                    email === null ? null :
                                    error ? 
                                    <button className="button" style={{pointerEvents: "none"}}>
                                        Send
                                    </button> : 
                                    <button type="submit" className="button send" onClick={handleClick}>
                                        Send
                                    </button>
                                }
                                
                            </div>
                        </div>

                            {/* <input
                            className="inputStyle"
                            style={{
                                // borderBottom: "1px solid ",
                                borderRadius: "8px",
                                background: "white",
                                border: "1px solid black",
                            }}
                            // onKeyPress={handleKeypress}
                            type="email"
                            name="email"
                            placeholder="Email"
                            onChange={(e) => {
                                e.preventDefault();
                                e.persist();
                                if (!isValidEmail(e.target.value)) {
                                setError("Email is invalid");
                                } else {
                                setError(null);
                                }
                                setEmail(e.target.value);
                            }}
                            required
                            />
                            {error && error === "Email is invalid" && email ? (
                            <img src={arrowImg} alt="home" width="24" height="24" />
                            ) : email !== null ? (
                            <img
                                src={tickImg}
                                alt="home"
                                width="24"
                                height="24"
                                style={{ cursor: "pointer" }}
                                onClick={handleClick}
                            />
                            ) : null} */}


                        </div>
                        {error && (
                            <p className='error'
                            >
                                {error}
                            </p>
                        )}
                        </div>
                    </form>
                </div>
            </div>
        </Modal>
    );
};

export default SignupModal;