import Logo from '../assets/logo.png';

const NavigationBar = () => {
    return (
        <div>
            <img src={Logo} alt="yale-swe-logo" />
            <div>
                <h1>About us</h1>
                <h1>Staff</h1>
                <h1>Contact us</h1>
            </div>
        </div>
    );
};

export default NavigationBar;
