import './EditUser.css'
import {useSelector} from 'react-redux'
function EditUser() {
    const user = useSelector((state) => state.user);
    return (
        <div>
            <div className="conatiner userbody">
                <form>
                    <h2> Edit User </h2>
                    <div>
                        <label htmlFor="Name">Name</label>
                        <input type="text" value={user.name} name="name" placeholder="name" />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" value={user.email} name="email" placeholder="email" />
                    </div>
                 
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default EditUser;