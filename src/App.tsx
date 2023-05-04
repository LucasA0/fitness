import { SelectedPage } from "@/shared/types";
import { useEffect, useState } from "react";
import { Navbar } from "./scenes/";

function App() {
	const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);
	const [isTopOfPage, setIsTopOfPage] = useState<boolean>(false);
	console.log(isTopOfPage);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY !== 0) setIsTopOfPage(false);
			if (window.scrollY === 0) {
				setIsTopOfPage(true);
				setSelectedPage(SelectedPage.Home);
				console.log(isTopOfPage);
			}
		};
		window.addEventListener("scroll", handleScroll);

		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<div className='app bg-gray-20'>
			<Navbar
				selectedPage={selectedPage}
				setSelectedPage={setSelectedPage}
				isTopOfPage={isTopOfPage}
			/>
		</div>
	);
}

export default App;
