import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './Splash.css'



function Splash(){
    const user = useSelector(state => state.session.user);

    return (
        <html>


            <div className='slidein__layer1-black'></div>
            <div className='slidein__layer2-medGreen'></div>
            <div className='slidein__layer3-lightGreen'></div>
            <div className='slidein__layer4-beige'></div>

            <div className='sp__txt-top'>
                <p className='sp__text-1'>
                "This application will allow a user to buy and sell stocks,
                manage watchlists and watch live stock prices. This application
                will be simple and easy to navigate. We are hoping that
                people will enjoy the website that we have created and
                will attract more users to use our website."
                </p>
                <button className='sp__demo-button'> Demo </button>
            </div>



            <div className='sp__decal-left'>
                <div className='sp__left-image img'></div>

            </div>
            <div className='sp__left-text'>
                <p className='sp__l-txt'>
                "We have instilled a search feature that will allow
                people to search stocks by state/community. This
                will allow the user to be able to invest in their
                own community."
                </p>
            </div>


            <div className='sp__decal-right'>
                <div className='sp__right-image '></div>

            </div>
            <div className='sp__right-text'>
                <p className='sp__2-txt'>
                "We have added live charts to our website. This
                will allow users to see the current price trend of
                the stocks that they are watching or are intending
                to buy or sell. This will help the user determine
                when they should buy or sell stocks that they are
                interested in."
                </p>
            </div>

            <div className='sp__header'>
                <div className='sp__logo'></div>

                <a href='#' className='sp__livecharts-link'>Live Charts</a>
                <a href='#' className='sp_com-link'>Community</a>
                <a href='#' className='sp__aboutus-link'>About Us</a>


                {user? <Link to='/dashboard' className='sp__login-link'>DashBoard</Link> : ""}
                {user ? <Link to='/logout' className='sp__signup-link'>Log Out</Link> : ""}
                {(!user)? <Link to='/login' className='sp__login-link'>Log In</Link> : ""}
                {(!user) ? <a href='/sign-up' className='sp__signup-link'>Sign Up</a> : ""}

            </div>



        </html>
    )
}
export default Splash;
