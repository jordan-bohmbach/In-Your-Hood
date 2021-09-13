import './Footer.css'


function Footer(){

    const creators = [{
        'name' : 'Taylor Walker',
        'Github' : 'https://github.com/tayynicc',
        'Linkedin' : 'null'
    },
    {
        'name' : 'Sean Collier',
        'Github' : 'https://github.com/scollier87',
        'Linkedin' : '',
    },
    {
        'name' : 'Moncef Sebbata',
        'Github' : 'https://github.com/msebbata',
        'Linkedin' : '',
    },
    {
        'name' : 'Jordan Bohmbach',
        'Github' : 'https://github.com/msebbata',
        'Linkedin' : '',
    }
] 

    return(
        <div className='ft__container'>
            <div>
                <h1 className='ft__label'> Contact Us </h1>
            </div>

            <div className='ft__info-card'>
                {creators.map((person) => (
                    <div className='personal__info'>
                        <h2>{person.name}</h2>
                        <a href={person.Github}><img className='tag' src="https://img.icons8.com/ios/50/000000/github--v1.png"/></a>
                        <a href={person.Linkedin}><img className='tag' src="https://img.icons8.com/ios/50/000000/linkedin.png"/></a>
                    </div>
                ))}

            </div>

        </div>
    )
}

export default Footer
