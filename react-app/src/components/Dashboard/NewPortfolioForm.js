import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { createOnePortfolio} from '../../store/portfolio'

function NewPortfolioForm(){

    const dispatch = useDispatch();
    const history = useHistory();

    const sessionUser = useSelector(state => state.session.user);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('')

    const updateName = (e) => setName(e.target.value);
    const updateDescription = (e) => setDescription(e.target.value);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            name,
            description,
            balance: 0,
            owner_id: sessionUser.id,
            createdAt: new Date(),
        }

    const portfolio = await dispatch(createOnePortfolio(payload))
        if(portfolio){
            history.push(`/dashboard`)
        }
    }
    return(
        <div className="formContainer">
            <form onSubmit={handleSubmit}>

                <label>Name</label>
                <input value={name} onChange={updateName}></input>

                <label>Description</label>
                <input value={description} onChange={updateDescription}></input>

                <button type="submit">Submit</button>

            </form>
        </div>
    )
}

export default NewPortfolioForm;