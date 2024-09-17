import { twJoin } from 'tailwind-merge';
import { useAppContext } from './contexts/appContext';
import HeaderBlogSearch from './header-blog-search';
import ImmilangNav from './immilangNav';
import PublicationSocialLinks from './publication-social-links';

type Props = {
	currentMenuId?: string | null;
	isHome: boolean;
};

export const Header = (props: Props) => {
	const { currentMenuId, isHome } = props;
	const { publication } = useAppContext();

	return (
		<header className="blog-header relative z-50 w-full border-b border-black/10 bg-white bg-opacity-70 dark:border-white/10 dark:bg-slate-900 dark:bg-opacity-70">
			<ImmilangNav />

			<div className="container mx-auto px-2 md:px-4 2xl:px-10">

				{/* Logo for mobile view */}
				<div className="blog-sub-header" data-testid="blog-sub-header">
					{/* Desktop */}
					<div className="justify-between mx-0 my-2 gap-4 hidden w-full flex-row items-center md:flex">
						<PublicationSocialLinks links={publication.links} />
						<HeaderBlogSearch publication={publication} />
					</div>

					{/* Mobile view */}
					<div className="mb-2 flex w-full flex-row items-center justify-between md:hidden">
						<PublicationSocialLinks links={publication.links} />
						<HeaderBlogSearch publication={publication} />
					</div>
				</div>
			</div>
		</header>
	);
};
