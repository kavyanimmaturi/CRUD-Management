import { useState } from 'react';

const AddUser = ({ addUser }) => {
    const [user, setUser] = useState({ name: "", email: "", phone: "" });

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: [e.target.value] });
    }
    
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!user.name || !user.email || !user.phone) {
            alert("All Fields are required!");
            return;
        };
        addUser(user);
    };
    return (
        <div className='add-user-container'>
            <h2 className='add-title'>Add User</h2>
            <form onSubmit={handleSubmit} className='user-form'>
                <input type="text" name='name' placeholder='Name' value={user.name} onChange={handleChange} /><br /><br />
                <input type="text" name='email' placeholder='Email' value={user.email} onChange={handleChange} /><br /><br />
                <input type="text" name='phone' placeholder='Phone' value={user.phone} onChange={handleChange} /><br /><br />
                <button type='submit' className='add-btn'>Add User</button>
            </form>
        </div>
    )
}

export default AddUser
