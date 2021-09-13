import './Header.css'
import SearchBar from './SearchBar'

function Header(){


    return(
        <div className='header'>
            
            <div className='logo'></div>
            
            <div className='head__search-bar'>
                <SearchBar />
                
            </div>

            <div className='links'>
                
                <h1>News</h1>
                <h1>Portfolio</h1>
                <a href='/account'><h1>Account</h1></a>

            </div>
        </div>  
    )
}


export default Header;
