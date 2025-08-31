import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const EditUser = ({ users, updateUser }) => {
    const { id } = useParams();
    const existingUser = users.find((u) => u.id === parseInt(id));
    const [user, setUser] = useState(existingUser || { name: "", email: "", phone: "" });

    useEffect(() => {
        if (existingUser) {
            setUser(existingUser);
        }
    }, [existingUser]);

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: [e.target.value] });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        updateUser(parseInt(id), user);
    };

    if (!existingUser) return <h2>User not found</h2>;
    return (
        <div className='edit-user-container'>
            <h2 className='edit-title'>Edit User</h2>
            <form onSubmit={handleSubmit} className='edit-form'>
                <input type="text" name='name' placeholder='Name' value={user.name} onChange={handleChange} /><br /><br />
                <input type="text" name='email' placeholder='Email' value={user.email} onChange={handleChange} /><br /><br />
                <input type="text" name='phone' placeholder='Phone' value={user.phone} onChange={handleChange} /><br /><br />
                <button type='submit' className='update-btn'>Update User</button>
            </form>
        </div>
    )
}

export default EditUser
