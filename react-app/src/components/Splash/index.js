import './Splash.css'



function Splash(){

    return (
        <>


            <div className='sliders slidein__layer1-black'></div>
            <div className='sliders slidein__layer2-medGreen'></div>
            <div className='sliders slidein__layer3-lightGreen'></div>
            <div className='sliders slidein__layer4-beige'></div>

            <div className='sp__txt-top'>
                <p className='sp__text-1'>
                In Your Hood offers a reactive and simple way to 
                invest in your community. 
                </p>
                <p className='sp__text-1'>
                Buy and sell stocks, manage watchlists 
                and watch live stock prices. 
                </p>
                <p  className='sp__text-1'>
                Live Trading View charts offer ample amounts of informaiton and indecators

                </p>
                <button className='sp__demo-button'> Demo </button>
            </div>



            <div className='sp__decal-left'>
                <div className='sp__left-image img'></div>

            </div>
            <div className='sp__left-text'>
                <p className='sp__l-txt'>
                Community is important, with <strong className='name__spl'>In Your Hood</strong> you can be directly involved with 
                improving your community. Currently your community is your nation as stock information covers companies based in the United States. 
                In a future updates users will be able to filter search results based on state and region. 
                </p>
            
            </div>


            <div className='sp__decal-right'>
                <div className='sp__right-image '></div>

            </div>
            <div className='sp__right-text'>
                <p className='sp__2-txt'>
                Intrograting live Trading View stock charts we offer users the ability 
                to make the best concise and well infomrmed trades. Charts are accompanied by 
                a live news feed and a breif over view of the stocks general information.  
                </p>
            </div>

            {/* <div className='sp__header'>
                <div className='sp__logo'></div>

                <a href='#' className='sp__livecharts-link'>Live Charts</a>
                <a href='#' className='sp_com-link'>Community</a>
                <a href='#' className='sp__aboutus-link'>About Us</a>


                {user? <Link to='/dashboard' className='sp__login-link'>DashBoard</Link> : ""}
                {user ? <Link to='/logout' className='sp__signup-link'>Log Out</Link> : ""}
                {(!user)? <Link to='/login' className='sp__login-link'>Log In</Link> : ""}
                {(!user) ? <a href='/sign-up' className='sp__signup-link'>Sign Up</a> : ""}

            </div> */}



        </>
    )
}
export default Splash;
