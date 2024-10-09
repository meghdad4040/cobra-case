import MaxWidthWrapper from "@/components/maxWidthWrapper";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
	return (
		<MaxWidthWrapper className=' flex flex-1 flex-col'>{children}</MaxWidthWrapper>
	);
};

export default Layout;
