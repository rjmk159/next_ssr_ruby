import { Layout } from "antd";
import React from "react";
import Beers from "./Beers";
import Header from "./Header";
// import PlaceholderImage from '../images/2300X2300.png';
const { Content, Footer } = Layout;

export default (props) => (
	<Layout className="layout">
		<Header />
		<Content style={{ padding: "0 50px" }}>
			<div className="site-layout-content" style={{ margin: "100px auto" }}>
				<h1>{props?.greeting} Junaid's Catalog</h1>
				{/* <img src={PlaceholderImage} alt="" style={{maxWidth:"100%"}} className="image-max" srcset="" /> */}
				<Beers data={props.data} />
			</div>
		</Content>
		<Footer style={{ textAlign: "center" }}>
			Browserstack ©2020.
		</Footer>
	</Layout>
);
