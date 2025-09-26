import { faAward, faShippingFast, faRibbon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container } from "../../../shared/components/container";
import './style.css';

const featured = [
	{
		icon: faAward,
		title: "Quality Materials",
		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec consequat lorem.",
	},
	{
		icon: faShippingFast,
		title: "Quality Materials",
		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec consequat lorem.",
	},
	{
		icon: faRibbon,
		title: "Quality Materials",
		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec consequat lorem.",
	},
];

const FeaturedItem = ({ item }) => (
	<div className="card">
		<div className="card-icon">
			<FontAwesomeIcon icon={item.icon} />
		</div>
		<h3 className="card-title">{item.title}</h3>
		<p className="card-desc">{item.desc}</p>
	</div>
);


export function FeaturedSection () {
	return (
		<section id="featured" className="featured-section">
			<Container>
				<div className="container-header">
					<h2>We built best Business for you.</h2>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec consequat lorem. Maecenas elementum at diam consequat bibendum.</p>
				</div>

				<div className="container-card">
					{featured.map((item, i) => (
						<div key={i} className="mt-4">
							<FeaturedItem item={item} />
						</div>
					))}
				</div>
			</Container>
		</section>
	);
};