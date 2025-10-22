import FooterImage from "../ui/FooterImage";

function Footer() {
	return (
		<footer className="border-edge flex border-t">
			<div className="pattern-diagonal-lines text-edge flex-grow" />
			<FooterImage />
			<div className="pattern-diagonal-lines text-edge flex-grow" />
		</footer>
	);
}

export default Footer;
