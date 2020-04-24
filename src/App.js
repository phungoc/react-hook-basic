import React, { useState, useEffect } from "react";
import "./App.scss";
import ColorBox from "./Components/ColorBox/ColorBox";
import TodoList from "./Components/TodoList/TodoList";
import TodoForm from "./Components/TodoForm/TodoForm";
import PostList from "./Components/PostList/PostList";
import Pagination from "./Components/Pagination/Pagination";
import queryString from 'query-string';

function App() {
	const [todoList, setTodoList] = useState([
		{ id: 1, title: 'I love Phu' },
		{ id: 2, title: 'I love Bum' },
		{ id: 3, title: 'Bum love Phu' },
	]);

	const [postList, setPostList] = useState([]);

	const [pagination, setPagination] = useState({
		_page: 1,
		_limit: 10,
		_totalRows: 1,
	});

	const [filter, setFilter] = useState({
		_limit: 10,
		_page: 1,
	});

	useEffect(() => {
		const fetchPostList = async () => {
			try {
				//_limit=10&_page=1
				const paramString = queryString.stringify(filter);
				const requestUrl = `http://js-post-api.herokuapp.com/api/posts?${paramString}`;
				const response = await fetch(requestUrl);
				const responseJSON = await response.json();
				const { data, pagination } = responseJSON;

				console.log({ responseJSON });

				setPostList(data);
				setPagination(pagination);
			} catch (error) {
				console.log("Fail fetch post list: " + error);
			}
		}
		fetchPostList();
	}, [filter]);


	const handlePageChange = (newPage) => {
		console.log("New page: " + newPage);
		setFilter({
			...filter,
			_page: newPage,
		});
	}


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
			<Pagination pagination={pagination} onPageChange={handlePageChange} />
		</div>
	);
}

export default App;
