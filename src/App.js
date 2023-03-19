import React, {useState} from "react"
import Users from "./components/users"
import SearchStatus from "./components/searchStatus"
import {fetchAll} from "./api/fake.api/user.api"


const App=()=> {
	const [users, setUsers] = useState(fetchAll())
	

	
	const handleDelete = (userId) => {
		setUsers(users.filter((user) => user._id !== userId));
	}


	const handleToggleBookMark = (id) => {
		const newArr = [...users]
		newArr.map(item=>item._id===id?item.bookmark = !item.bookmark:item.bookmark)
		setUsers(newArr)
	}
	
	return (
		<div>
			<SearchStatus length = {users.length}/>
			<Users 
				onDelete={handleDelete}
				onMark={handleToggleBookMark}
				users = {users}
			/>
			
		</div>
	)
}

export default App;
