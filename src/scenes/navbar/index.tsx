import Logo from "@/assets/Logo.png";
import useMediaQuery from "@/hooks/useMediaQuery";
import { iMenus } from "@/interfaces/navInterfaces";
import { ActionButton } from "@/shared/components";
import { SelectedPage } from "@/shared/types";
import { menus } from "@/utils/navLinks";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import Link from "./Link";

type Props = {
	selectedPage: SelectedPage;
	setSelectedPage: (page: SelectedPage) => void;
	isTopOfPage: boolean;
};

export default function Navbar({ selectedPage, setSelectedPage, isTopOfPage }: Props) {
	const flexBetween = "flex items-center justify-between";
	const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
	const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
	const navbarBackground = isTopOfPage ? "" : "bg-primary-100 drop-shadow";

	return (
		<nav>
			<div className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6`}>
				<div className={`${flexBetween} mx-auto w-5/6`}>
					<div className={`${flexBetween} w-full gap-16`}>
						<img src={Logo} alt='Logo' />
						{isAboveMediumScreens ? (
							<div className={`${flexBetween} w-full`}>
								<div className={`${flexBetween} gap-8 text-sm`}>
									{menus.map((menu: iMenus) => (
										<Link
											key={menu.id}
											page={menu.name}
											selectedPage={selectedPage}
											setSelectedPage={setSelectedPage}
										/>
									))}
								</div>
								<div className={`${flexBetween} gap-8`}>
									<p>Sign In</p>
									<ActionButton setSelectedPage={setSelectedPage}>
										Become a Member
									</ActionButton>
								</div>
							</div>
						) : (
							<button
								onClick={() => setIsMenuToggled(!isMenuToggled)}
								className='rounded-full bg-secondary-500 p-2'>
								<Bars3Icon className='h-6 w-6 text-white' />
							</button>
						)}
					</div>
				</div>
			</div>
			{/* Mobile Menu Modal */}
			{!isAboveMediumScreens && isMenuToggled && (
				<div className='fixed bottom-0 right-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl'>
					{/* Close Icon */}
					<div className='flex justify-end p-12'>
						<button onClick={() => setIsMenuToggled(!isMenuToggled)}>
							<XMarkIcon className='h-6 w-6 text-gray-400' />
						</button>
					</div>
					{/* Menu Items */}
					<div className='ml-[33%] flex flex-col gap-10 text-2xl'>
						{menus.map((menu: iMenus) => (
							<Link
								key={menu.id}
								page={menu.name}
								selectedPage={selectedPage}
								setSelectedPage={setSelectedPage}
							/>
						))}
					</div>
				</div>
			)}
		</nav>
	);
}
