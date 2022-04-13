import profile from "./image/profile-icon-png-898.png";
import email from "./image/email-logo-png-1125.png";
import pass from "./image/key.png";
import './App.css';

function App() {
    return (
        <div className="main">
            <div className="sub-main">
                <div>
                    <div className="imgs">
                        <div className="container-image">
                            <img src={profile} alt="profile" className="profile" />
                        </div>
                    </div>
                    <div>
                        <h1>Login</h1>
                        <div>
                            <img src={email} alt="email" className="email" />
                            <input type="text" placeholder="Nume de utilizator" className="name" />
                        </div>
                        <div className="second-input">
                            <img src={pass} alt="pass" className="email" />
                            <input type="password" placeholder="Parola" className="name" />
                        </div>
                        <div className="login-button">
                            <button>Conectare</button>
                        </div>
                        <p class="message">
                            Nu sunteti inregistrat? <a href="#">Creeaza cont</a>
                        </p>
                        <p class="forgot">
                            <a href="#">Ati uitat parola?</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;