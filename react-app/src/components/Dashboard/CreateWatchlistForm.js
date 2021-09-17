import { useState } from "react"
import { Link, useHistory } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { createOneWatchlist } from "../../store/watchlist"

const CreateWatchlistForm = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const ownerId = useSelector(state => state.session.user.id)

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')

    const reset = () => {
        setName('')
        setDescription('')
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const payload = {
            name,
            description,
            balance: 0,
            owner_id: ownerId
        }

        let createdWatchlist = await dispatch(createOneWatchlist(payload))
        if (createdWatchlist) {
            console.log('here in react, the created watchlist is : ', createdWatchlist)
            history.push('/dashboard')
            reset()
        }

    }

    return (
        <>
            <form
                className='create-watchlist-form'
                onSubmit={handleSubmit}
            >
                <h2>Create a new Watchlist</h2>
                <label>
                    Name
                    <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                </label>
                <label>
                    Description
                    <input
                        type='text'
                        name='description'
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />
                </label>
                <button
                    type="submit"
                >
                    Create Watchlist
                </button>
                <Link to='/dashboard/' className='cancel-watchlist-button'>Cancel</Link>
            </form>
        </>
    )
}

export default CreateWatchlistForm