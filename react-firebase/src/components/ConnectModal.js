import React, { useState } from 'react';
import Login from './Login';
import SignUp from './SignUp';


const ConnectModal = () => {
    const [signUp, setSignUp] = useState(true);

    return (
        <div className="connect-modal">
            <div className="header-btn">
                <button style={{ background: signUp ? "rgb(28,28,28)" : "rgb(83,83,83)" }}
                    onClick={() => setSignUp(false)}>S'inscrire</button>
                <button style={{ background: signUp ? "rgb(83,83,83)" : "rgb(28,28,28)" }}
                    onClick={() => setSignUp(true)}>Se connecter</button>
            </div>
            {signUp ? <Login /> : <SignUp />}
        </div>
    );
};

export default ConnectModal;