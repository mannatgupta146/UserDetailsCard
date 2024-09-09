export function UserCard({name,dob,age,profession,phoneNumber,email }){
    return(
        <div className="card">
        <h2 className="name">{name}</h2>
        <div className="body">
            <div className="label">DOB:</div>
            <div>{dob}</div>
            <div className="label">Age:</div>
            <div>{age}</div>
            <div className="label">Profession:</div>
            <div>{profession}</div>
            <div className="label">Phone Number:</div>
            <div>{phoneNumber}</div>
            <div className="label">Email Id:</div>
            <div>{email}</div>
        </div>
    </div>

    )
}