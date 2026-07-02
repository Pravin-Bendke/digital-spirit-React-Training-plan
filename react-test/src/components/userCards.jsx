import UserInfo from "./userInfo"

//spread operator using

const UserCard =(props)=>{
    return
    (
        <div>
            <h2>User Details</h2>
           <UserInfo {...props} />
        </div>
    )
}

export default UserCard