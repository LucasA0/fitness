import { SelectedPage } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
	children: React.ReactNode;
	setSelectedPage: (page: SelectedPage) => void;
};

export default function ActionButton({ setSelectedPage, children }: Props) {
	return (
		<AnchorLink
			onClick={() => setSelectedPage(SelectedPage.ContactUs)}
			href={`#${SelectedPage.ContactUs}`}
			className='rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white'>
			{children}
		</AnchorLink>
	);
}
