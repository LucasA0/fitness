import { SelectedPage } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
	page: string;
	selectedPage: SelectedPage;
	setSelectedPage: (page: SelectedPage) => void;
};

export default function Link({ page, setSelectedPage, selectedPage }: Props) {
	const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;

	return (
		<AnchorLink
			href={`#${lowerCasePage}`}
			onClick={() => setSelectedPage(lowerCasePage)}
			className={`${
				selectedPage === lowerCasePage ? "text-primary-500" : ""
			} transition duration-500 hover:text-primary-300`}>
			{page}
		</AnchorLink>
	);
}
