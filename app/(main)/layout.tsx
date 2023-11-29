import { NavigationSidebar } from '@/components/navigation/navigation-sidebar';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="h-full">
			<div className="z-30 flex-col fixed inset-y-0 hidden md:flex h-full w-[72px]">
				<NavigationSidebar />
			</div>

			<main className="md:pl-[72px] h-full">{children}</main>
		</div>
	);
};

export default MainLayout;
