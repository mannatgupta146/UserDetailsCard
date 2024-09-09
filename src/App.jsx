import "./user.css"
import user from "./user.json"
import { UserCard } from "./UserCard"

export default function App() {
  return (
    <UserCard
      name={user.name}
      dob={user.dob}
      age={user.age}
      profession={user.profession}
      phoneNumber={user.phoneNumber}
      email={user.email}
    />
  )
}
