import Logo from "@/assets/Logo.png";
import useMediaQuery from "@/hooks/useMediaQuery";
import { iMenus } from "@/interfaces/navInterfaces";
import { ActionButton } from "@/shared/components";
import { SelectedPage } from "@/shared/types";
import { menus } from "@/utils/navLinks";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { useState } from "react";
import Link from "./Link";

type Props = {
	selectedPage: SelectedPage;
	setSelectedPage: (page: SelectedPage) => void;
};

export default function Navbar({ selectedPage, setSelectedPage }: Props) {
	const flexBetween = "flex items-center justify-between";
	const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
	const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);

	return (
		<nav>
			<div className={`${flexBetween} fixed top-0 z-30 w-full py-6`}>
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
								onClick={() => setIsMenuToggled(isMenuToggled)}
								className='rounded-full bg-secondary-500 p-2'>
								<Bars3Icon className='h-6 w-6 text-white' />
							</button>
						)}
					</div>
				</div>
			</div>
		</nav>
	);
}
