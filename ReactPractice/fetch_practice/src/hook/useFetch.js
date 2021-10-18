import { useEffect, useState } from "react";
import axios from "axios";
import { api } from "../common/api/api";


export const useFetch = () => { //{ url, fetchWithParam }
	const [response, setResponse] = useState([]); //Data
	const [loader, setLoader] = useState(false);
	const [error, setError] = useState(null);

	const _fetchWithParam = (query, page) => {
		axios.get(api.images(query, page))
			.then(res => {
				setLoader(true)
				setResponse(res)
			})
			.catch(error => setError(error))
			.finally(() =>
				setLoader(false)
			)


	}

	useEffect(() => {
		axios.get(api.images())
			.then(res => {
				setLoader(true)
				setResponse(res)
			})
			.catch(error => setError(error))
			.finally(() =>
				setLoader(false)
			)
	}, [])
	const data = response && response.data && response.data.hits;

	return {
		data,
		error,
		loader,
		_fetchWithParam,

	};
};