
import './Profile.css'
import Footer from '../Footer'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import {getPortfolios} from '../../store/portfolio'

function Profile(){
    const dispatch = useDispatch();

    const sessionUser = useSelector(state => state.session.user)
    const portfolios = useSelector((state) => Object.values(state.portfolios))

    // const usrPorts = portfolios.filter((port) =>  port.owner_id === sessionUser.id)

    useEffect(() => {
        dispatch(getPortfolios())
    }, [dispatch])

    // const trades = usrPorts[0]?.portfolios

    // console.log('portfolios:', portfolio)

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
                {portfolios?.map((portfolio) => (
                    <div key={portfolio.id}>
                    {/* <h1 className='bs__label'>Account summary</h1> */}
                        <p className='bs__label'>{portfolio.name}</p>
                        <p className='bs__label'>{portfolio.current_cash_balance}</p>
                    </div>
                    // <div className='bs__portfolio-row'></div>
                ))}
            </div>

            <Footer />

        </>


    )
}

export default Profile;
