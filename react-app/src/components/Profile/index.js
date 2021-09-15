
import './Profile.css'
import Footer from '../Footer'


function Profile(){


    return (
        <>
            <div className='userInfo__container'>
                <div className='pfp__tile'>
                   <div className='userInfo__pfp'></div> 
                </div>
                
                <div className='userInfo__details'>
                    <h1>FirstName LastName</h1>
                    <h3>UserName</h3>
                    <h4>email</h4>
                </div>

            </div>
            <div className='balanceSummary__container'>

            </div>
            
            <Footer />

        </>
        

    )
}

export default Profile; 
