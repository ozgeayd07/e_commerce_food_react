import React from "react";
import { Container, Row, Col } from "reactstrap";
import categoryImg01 from "../image/category-01.png";
import categoryImg02 from "../image/category-02.png";
import categoryImg03 from "../image/category-03.png";
import categoryImg04 from "../image/category-04.png";
import "../styles/category.css";

const categoryData = [
	{
		display: "Fastfood",
		imgUrl: categoryImg01,
	},
	{
		display: "Pizza",
		imgUrl: categoryImg02,
	},

	{
		display: "Dünya Mutfağı",
		imgUrl: categoryImg03,
	},

	{
		display: "Türk Mutfağı ve Kebab",
		imgUrl: categoryImg04,
	},
];

const Category = () => {
	return (
		<Container>
			<Row>
				{categoryData.map((item, index) => (
					<Col lg="3" md="4" sm="6" xs="6" className="mb-4" key={index}>
						<div className="category__item d-flex align-items-center gap-3"style={{flexDirection: 'row'}}>
							<div className="category__img">
								<img src={item.imgUrl} alt="category__item" />
							</div>
							<h6>{item.display}</h6>
						</div>
					</Col>
				))}
			</Row>
		</Container>
	);
};

export default Category;
