import Form from './components/Form/Form';
import Posts from './components/Posts/Posts';
import React, { useState } from 'react'


function App() {

	const [posts, setPosts] = useState([
		{ id: 1, text: 'Some text' },
		{ id: 2, text: 'Some text 2' },
		{ id: 3, text: 'Some text 3' },
	])

	const createItem = (newItem) => {
		setPosts([...posts, newItem])
	}

	const removeItem = (item) => {
		setPosts(posts.filter(el => el.id !== item.id))
	}

	return (
		< >
			<Form title="Post form" posts={posts} create={createItem} />
			{posts.length !== 0
				? <Posts title="Some group" posts={posts} remove={removeItem} />
				: <div className='title'>Empty</div>
			}

		</>
	);
}

export default App;
