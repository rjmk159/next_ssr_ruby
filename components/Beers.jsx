import { Table, message, Popconfirm } from "antd";
import React from "react";
import axios from "axios";
import AddBeerModal from "./AddBeerModal";

const Beers = ({ data }) => {
	const columns = [
		{
			title: "Brand",
			dataIndex: "brand",
			key: "brand",
		},
		{
			title: "Style",
			dataIndex: "style",
			key: "style",
		},
		{
			title: "Country",
			dataIndex: "country",
			key: "country",
		},
		{
			title: "Quantity",
			dataIndex: "quantity",
			key: "quantity",
		},
		{
			title: "",
			key: "action",
			render: (_text, record) => (
				<Popconfirm
					title="Are you sure delete this beer?"
					onConfirm={() => deleteBeer(record.id)}
					okText="Yes"
					cancelText="No"
				>
					<a href="#" type="danger">
						Delete{" "}
					</a>
				</Popconfirm>
			),
		},
	];

	const reloadBeers = () => {
		this.setState({ beers: [] });
		this.loadBeers();
	};

	const deleteBeer = (id) => {
		const url = `http://localhost:10524/api/v1/beers/${id}`;

		fetch(url, {
			method: "delete",
		})
			.then((data) => {
				if (data.ok) {
					this.reloadBeers();
					return data.json();
				}
				throw new Error("Network error.");
			})
			.catch((err) => message.error("Error: " + err));
	};

	const beers = data?.map((beer) => {
		return {
			key: beer.id,
			id: beer.id,
			brand: beer.brand,
			style: beer.style,
			country: beer.country,
			quantity: beer.quantity,
		};
	});
	return (
		<>
			<Table
				className="table-striped-rows"
				dataSource={beers}
				columns={columns}
				pagination={{ pageSize: 5 }}
			/>

			<AddBeerModal reloadBeers={reloadBeers} />
		</>
	);
};


export default Beers;
