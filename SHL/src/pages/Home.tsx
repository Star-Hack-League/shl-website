import Landing from "../components/Home/Landing";
import Quote from "../components/Home/Quote";
import How from "../components/Home/How";
import BeTheChange from "../components/Home/BeTheChange";
import JoinTheMovement from "../components/Home/JoinTheMovement";
import Footer from "../components/Footer";

function Home() {
	return (
		<>
			<div>
				<Landing />
				<Quote />
				<How />
				<JoinTheMovement />
				<BeTheChange />
				<Footer />
			</div>
		</>
	);
}
export default Home;
