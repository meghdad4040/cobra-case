import Link from "next/link";
import MaxWidthWrapper from "./maxWidthWrapper";

const Footer = () => {
	return (
		<footer className=' bg-gray-100 dark:bg-violet-950 h-20 relative'>
			<MaxWidthWrapper>
				<div className=' border-t border-gray-400'>
					<div className=' h-full flex flex-col md:mt-2 md:flex-row md:justify-between justify-center items-center'>
						<div className=' text-center md:text-left pb-2 md:pb-0'>
							<p className=' text-sm text-muted-foreground'>
								&copy; {new Date().getHours()} : {new Date().getMinutes()}` All
								rights reserved. {new Date().getFullYear()}
							</p>
						</div>

						<div className=' flex items-center justify-center'>
							<div className=' flex space-x-8'>
								<Link
									href={"#"}
									className=' text-sm text-muted-foreground hover:text-gray-700'>
									Privacy Policy
								</Link>
								<Link
									href={"#"}
									className=' text-sm text-muted-foreground hover:text-gray-700'>
									Terms
								</Link>
								<Link
									href={"#"}
									className=' text-sm text-muted-foreground hover:text-gray-700'>
									Cookie Policy
								</Link>
							</div>
						</div>
					</div>
				</div>
			</MaxWidthWrapper>
		</footer>
	);
};

export default Footer;
