import React, { useState, useEffect } from "react";
import "./App.scss";
import ColorBox from "./Components/ColorBox/ColorBox";
import TodoList from "./Components/TodoList/TodoList";
import TodoForm from "./Components/TodoForm/TodoForm";
import PostList from "./Components/PostList/PostList";

function App() {
	const [todoList, setTodoList] = useState([
		{ id: 1, title: "I love Phu" },
		{ id: 2, title: "I love Bum" },
		{ id: 3, title: "Bum love Phu" },
	]);

	const [postList, setPostList] = useState([]);

	useEffect(() => {
		const fetchPostList = async () => {
			try {
				const requestUrl = 'http://js-post-api.herokuapp.com/api/posts?_limit=10&_page=1';
				const response = await fetch(requestUrl);
				const responseJSON = await response.json();
				const { data } = responseJSON;

				console.log({ responseJSON });

				setPostList(data);
			} catch (error) {
				console.log("Fail fetch post list: " + error);
			}
		};

		fetchPostList();
	}, []);

	const handleTodoClick = (todo) => {
		console.log(todo);
		const index = todoList.findIndex((x) => x.id === todo.id);
		if (index < 0) return;

		const newTodoList = [...todoList];
		newTodoList.splice(index, 1);
		setTodoList(newTodoList);
	};

	const handleTodoFormSubmit = (formValues) => {
		// Add new todo to current todo list
		const newTodo = {
			id: todoList.length + 1,
			...formValues,
		}
		const newTodoList = [...todoList];
		newTodoList.push(newTodo);
		setTodoList(newTodoList);
	};



	return (
		<div className="app">
			<h1>Welcome to react hook</h1>
			{/* <ColorBox />
			<TodoForm onSubmit={handleTodoFormSubmit} />
			<TodoList todos={todoList} onTodoClick={handleTodoClick} /> */}
			<PostList posts={postList} />
		</div>
	);
}

export default App;
