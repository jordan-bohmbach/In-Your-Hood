import { useState } from "react"
import { Link, useHistory } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { createOnePortfolio } from "../../store/portfolio"

const CreatePortfolioForm = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const ownerId = useSelector(state => state.session.user.id)

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [initialDeposit, setInitialDeposit] = useState(0)

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
            initialDeposit,
            owner_id: ownerId
        }

        let createdPortfolio = await dispatch(createOnePortfolio(payload))
        if (createdPortfolio) {
            console.log('here in react, the created portfolio is : ', createdPortfolio)
            history.push('/dashboard')
            reset()
        }

    }

    return (
        <>
            <form
                className='portfolio-form'
                onSubmit={handleSubmit}
            >
                <h2>Create a new Portfolio</h2>
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
                <label>
                    Initial Deposit
                    <input
                        type='number'
                        name='initialDeposit'
                        value={initialDeposit}
                        onChange={e => setInitialDeposit(e.target.value)}
                    />
                </label>
                <button
                    type="submit"
                >
                    Create Portfolio
                </button>
            </form>
            <Link to='/dashboard/' className='cancel-portfolio-button'>Cancel</Link>
        </>
    )
}

export default CreatePortfolioForm