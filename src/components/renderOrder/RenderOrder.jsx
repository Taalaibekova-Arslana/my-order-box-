import React, { useState } from "react";
import "../renderOrder/RenderOrder.css";

const RenderOrder = ({ orderBasket, renderData, setOrderBasket }) => {
	const [countDeleteCount, setCountDeleteCount] = useState(0);

	const deleteCount = (id, index) => {
		const deletedCount = orderBasket[index];

		if (deletedCount.count > 1) {
			const newData = renderData.find((item) => item.id === id);
			deletedCount.count -= 1;
			deletedCount.price -= newData.price;

			const updatedOrderBasket = orderBasket.map((item) =>
				item.id === id ? { ...item, ...deletedCount } : item
			);

			setCountDeleteCount(countDeleteCount + 1);
			setOrderBasket(updatedOrderBasket);
		} else {
			const updatedOrderBasket = orderBasket.filter((item) => item.id !== id);
			setOrderBasket(updatedOrderBasket);
		}
	};

	return (
		<div className="orderBox">
			{orderBasket.map(({ id, title, count, price }, index) => {
				return (
					<div className="order" key={index}>
						<h5>{title}</h5>
						<p>count: {count}</p>
						<p>price: {price}</p>
						<button onClick={() => deleteCount(id, index)}>Delete</button>
					</div>
				);
			})}
		</div>
	);
};

export default RenderOrder;
