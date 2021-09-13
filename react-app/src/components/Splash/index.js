
import './Splash.css'




function Splash(){

return (
    <html>
        

        <div className='slidein__layer1-black'></div>
        <div className='slidein__layer2-medGreen'></div>
        <div className='slidein__layer3-lightGreen'></div>
        <div className='slidein__layer4-beige'></div>

        <div className='sp__txt-top'>
            <p className='sp__text-1'>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
            mollit anim id est laborum."
            </p>
            <button className='sp__demo-button'> Demo </button>
        </div>



        <div className='sp__decal-left'>
            <div className='sp__left-image img'></div>
           
        </div>
        <div className='sp__left-text'>
            <p className='sp__l-txt'>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
            mollit anim id est laborum."
            </p>
        </div>
        

         <div className='sp__decal-right'>
            <div className='sp__right-image '></div>
           
        </div>
        <div className='sp__right-text'>
            <p className='sp__2-txt'>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
            mollit anim id est laborum."
            </p>
        </div>

        <div className='sp__header'>
            <div className='sp__logo'></div>
            
            <a href='#' className='sp__livecharts-link'>Live Charts</a>
            <a href='#' className='sp_com-link'>Community</a>
            <a href='#' className='sp__aboutus-link'>About Us</a>

            <a href='/login' className='sp__login-link'>Log In</a>
            <a href='/sign-up' className='sp__signup-link'>Sign Up</a>

        </div> 
        
       
    
    </html>
)
}
export default Splash;
