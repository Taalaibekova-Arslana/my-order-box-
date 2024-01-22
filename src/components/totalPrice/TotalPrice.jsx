import React, { useEffect, useState } from "react";

const TotalPrice = ({ orderBasket }) => {
	const [totalQuantity, setTotalQuantity] = useState(0);
	const [totalPrice, setTotalPrice] = useState(0);

	const renderTotalOrder = () => {
		let totalQuantitySet = 0;
		let totalPriceSet = 0;

		orderBasket.forEach((item) => {
			totalQuantitySet += item.count;
			totalPriceSet += item.price + item.count;
		});

		setTotalQuantity(totalQuantitySet);
		setTotalPrice(totalPriceSet);
	};

	useEffect(() => {
		renderTotalOrder();
	}, [orderBasket]);

	return (
		<div className="total">
			<h1>You have {totalQuantity} items in the basket.</h1>
			<h2>Sum: ${totalPrice}</h2>
			{orderBasket.length === 0 && <h3>Orders list is empty</h3>}
		</div>
	);
};

export default TotalPrice;
