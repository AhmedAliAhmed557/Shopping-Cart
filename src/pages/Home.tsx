import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import storeItems from "../data/items.json";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
// import { Col, Row } from "react-bootstrap";

export function Home() {
	return (
		<>
			<Container
				className='row'
				style={{ gap: ".5rem" }}
			>
				{storeItems.map((item) => (
					<Card
						style={{ width: "18rem" }}
						className='col-lg-4 col-md-12 mb-4 mb-lg-0'
					>
						<Card.Img
							variant='top'
							src={item.imgUrl}
							height='200px'
							style={{ objectFit: "cover" }}
						/>
						<Card.Body>
							<Card.Title>{item.name}</Card.Title>
							<Card.Text>
								Some quick example text to build on the card title and make up
								the bulk of the card's content.
							</Card.Text>
							<Link to='/store'>
								<Button variant='primary'>Go To Store</Button>
							</Link>
						</Card.Body>
					</Card>
				))}
			</Container>
		</>
	);
}
