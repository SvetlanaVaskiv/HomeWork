import logo from './logo.svg';
import './App.css';
import { UseCounter } from './hook/useCounter.js';
import { ThemeProvider, ThemeContext, Count } from "./context/theme"
import { useContext, useEffect, useState } from 'react';
import { Layout } from "./common/Layout/Loyout.js";
import { useFetch } from './hook/useFetch';
import { ImageGallery } from './components/ImageGallery';
import { Modal } from './common/Modal';
import style from "./components/ImageGallery/style.module.css";
import { Searchbar } from './components/Searchbar';
import { Pagination } from './common/Pagination';




function App(props) {
	/*const { count, nextNumber, prevNumber } = Count()

	const [state, setState] = useState(0);*/


	/*
	Описание  с депенденси и без как работает
	useEffect(() => {
		console.log("0.will render always")
	})

	useEffect(() => {
		console.log("1.only First render")
	}, [])
	useEffect(() => {
		if (state === 5) {
			console.log(state)

		}
	}, [state])*/

	/*	
	
	как работать с фетчом
	const [data, setData] = useState(null)
	
		useEffect(() => [
			fetch('https://v2.jokeapi.dev/joke/Any', { method: "GET" })
				.then(response => response.json())
				.then(res => setData(res))
		], [state])
		console.log(data)
	*/
	const { data, loader, error, _fetchWithParam } = useFetch();
	const [selected, setSelected] = useState('');
	const [isModalOpen, setIsModalOpen] = useState(false);

	const [qyeryValue, setQyeryValue] = useState('');

	const [page, setPage] = useState(1);


	const onselectedImage = (params) => {
		setSelected(params)
		setIsModalOpen(true)
	}

	const closeModal = () => setIsModalOpen(false)

	const onSendQuery = (property) => {
		setQyeryValue(property)
	}

	const onChangePage = (property) => {
		setPage(property)
	}


	useEffect(() => {
		if (qyeryValue)
			_fetchWithParam(qyeryValue)

	}, [qyeryValue])

	useEffect(() => {
		if (page)
			_fetchWithParam(qyeryValue, page)

	}, [page])


	return (<>
		<ThemeProvider>
			<Layout>
				{/*		для фетча		<p>{data && data.joke && data.joke}</p>
*/}		{/*		<h1 style={{ textAlign: "center", fontSize: 34 }} onClick={(e) => console.log("e", e)}> Hi there</h1>
				<h1 style={{ textAlign: "center", fontSize: 34 }} onClick={() => setState(state + 1)}> Hi there</h1>
*/}
				{selected.length > 1 && <>Modal </>}
				<Searchbar onSendQuery={onSendQuery} />

				{data && <ImageGallery response={data} onselectedImage={onselectedImage} historyPath={props.history} />}
				{loader && <hi> Loadimg..</hi>}

				{isModalOpen && <Modal closeModal={closeModal}>
					<img
						width="650"
						src={selected}
						alt=""
						className={style.listGlleryItemImage}

					/>
				</Modal>}
				<Pagination pages={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]} onChangePage={onChangePage} />
			</Layout>

			{/*		<div>{count}</div>

			<button onClick={nextNumber}>+</button>
			<button onClick={prevNumber}>-</button>*/}
		</ThemeProvider>
	</>
	);
}

export default App;
