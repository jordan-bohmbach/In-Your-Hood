
import './Profile.css'
import Footer from '../Footer'
import { useDispatch, useSelector } from 'react-redux'
// import { useEffect } from 'react'

function Profile(){
    const dispatch = useDispatch();
    // const usernames = useSelector((state) => Object.values(state.usernames));
    // const username = useSelector((state) => Object.values(state.usernames));
    // const email = useSelector((state) => Object.values(state.email));

    const sessionUser = useSelector(state => state.session.user)
    // const sessionPortfolio = useSelector(state => state.session.portfolio)
    console.log(sessionUser)
    return (
        <>
            <div className='userInfo__container'>
                <div className='pfp__tile'>
                   <div className='userInfo__pfp'></div>
                </div>

                <div className='userInfo__details'>
                    <h1>{sessionUser.firstname} {sessionUser.lastname}</h1>
                    <h3>{sessionUser.username}</h3>
                    <h4>{sessionUser.email}</h4>
                </div>

            </div>
            <div className='balanceSummary__container'>
                <h1 className='bs__label'>Account summary</h1>
                {/* <h2 className='bs__label'>{sessionPortfolio.current_cash_balance}</h2> */}
                <div className='bs__portfolio-row'>

                </div>

            </div>

            <Footer />

        </>


    )
}

export default Profile;
