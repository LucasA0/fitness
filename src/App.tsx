import { SelectedPage } from "@/shared/types";
import { useState } from "react";
import { Navbar } from "./scenes/";

function App() {
	const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);

	return (
		<div className='app bg-gray-20'>
			<Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
		</div>
	);
}

export default App;
