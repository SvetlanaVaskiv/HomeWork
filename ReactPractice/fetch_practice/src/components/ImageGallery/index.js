import style from "./style.module.css";


export const ImageGallery = ({ response, onselectedImage, id, historyPath }) => {




	return (
		<ul className={style.listGallery}>
			{response && response.map(({ id, webformatURL, largeImageURL }) => (
				<li
					key={id}
					onClick={() => onselectedImage(largeImageURL)}
					className={style.listGlleryItem}
				>
					<img
						width="350"
						src={webformatURL}
						alt=""
						className={style.listGlleryItemImage}
					/>
					<h1 onClick={() => historyPath.push(`image/${id}`)}>{id}</h1>

				</li>
			))}
		</ul>
	)
}