import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { createOneWatchlist} from '../../store/watchlist'

function NewWatchlistForm(){

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
            owner_id: sessionUser.id,
            createdAt: new Date(),
    }

    const watchlist = await dispatch(createOneWatchlist(payload))
        if(watchlist){
            history.push(`/dashboard`)
        }
    }
    return(
        <div className="watchlistFormContainer">
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

export default NewWatchlistForm;
