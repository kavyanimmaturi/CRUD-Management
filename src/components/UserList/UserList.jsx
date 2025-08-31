import { Link } from "react-router-dom"


const UserList = ({users,deleteUser}) => {
  return (
    <div>
      
      <table border="1" cellPadding="10" style={{width:"100%"}}>
       <thead>
         <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Actions</th>
         </tr>
       </thead>
       <tbody>
        {users.length > 0 ? (
            users.map((user) => (
                <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                     <td>
                        <Link to={`/edit-user/${user.id}`}><button className="edit-btn">Edit</button></Link>
                        <button onClick={() => deleteUser(user.id)} className="delete-btn">Delete</button>
                     </td> 
                </tr>
            ))
        ):(
            <tr>
                <td colSpan="4">No Users Found</td>
            </tr>
        )}
       </tbody>
      </table>
    </div>
  )
}

export default UserList
