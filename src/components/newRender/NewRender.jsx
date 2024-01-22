import React, { useState } from "react";
import { dataList } from "../../components/data/data";
import RenderData from "../renderData/RenderData";

const NewRender = () => {
	const [renderData, setRenderData] = useState([...dataList]);
	return (
		<div>
			<RenderData renderData={renderData} setRenderData={setRenderData} />
		</div>
	);
};

export default NewRender;
