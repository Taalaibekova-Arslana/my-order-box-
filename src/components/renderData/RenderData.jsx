import React, { useState } from "react";
import "../../components/renderData/RenderData.css";
import RenderOrder from "../renderOrder/RenderOrder";
import TotalPrice from "../totalPrice/TotalPrice";

const RenderData = ({ renderData }) => {
	const [orderBasket, setOrderBasket] = useState([]);
	const [existing, setExisting] = useState([]);

	const handleAdd = (id) => {
		const filterBasket = orderBasket.find((item) => item.id === id);
		const newData = renderData.find((item) => item.id === id);
		if (filterBasket) {
			const updateData = {
				id: filterBasket.id,
				title: filterBasket.title,
				count: (filterBasket.count += 1),
				price: (filterBasket.price += newData.price),
				img: filterBasket.img,
			};
			const dataFilter = orderBasket.filter((item) => item.id !== id);
			setOrderBasket([...dataFilter, updateData]);
		} else {
			const newProduct = { ...newData, count: 1 };
			orderBasket.push(newProduct);
		}
		setExisting([filterBasket]);
	};
	return (
		<div className="cardBox">
			{renderData.map(({ id, img, title, price }) => {
				return (
					<div
						onClick={() => {
							handleAdd(id);
						}}
						className="orderBasket"
						key={id}>
						<h1>{title}</h1>
						<img src={img} alt="" />
						<p>{price}</p>
					</div>
				);
			})}
			<div >
				<TotalPrice orderBasket={orderBasket} />
				<RenderOrder
					orderBasket={orderBasket}
					renderData={renderData}
					setOrderBasket={setOrderBasket}
				/>
			</div>
		</div>
	);
};

export default RenderData;
