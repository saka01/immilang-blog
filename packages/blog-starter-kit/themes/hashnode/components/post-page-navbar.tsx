import Link from 'next/link';
import { forwardRef } from 'react';
import { twJoin } from 'tailwind-merge';

/* eslint-disable no-nested-ternary */
import { getCommonBtnStyles } from './common-header-icon-btn';
import HeaderBlogSearch from './header-blog-search';
import HeaderTooltip from './header-tooltip';
import { ChevronLeftSVG } from './icons/svgs/';
import useStickyNavScroll from './use-sticky-nav-scroll';

import { PublicationFragment } from '../generated/graphql';
import ImmilangNav from './immilangNav';

type Props = {
	publication: Pick<PublicationFragment, 'id' | 'title' | 'links' | 'url' | 'features' | 'isTeam' | 'author' | 'preferences'>;
};

const PostPageNavbar = forwardRef<HTMLElement, Props>((props, ref) => {
	const { publication } = props;

	useStickyNavScroll({ elRef: ref });

	const commonIconBtnStyles = getCommonBtnStyles();

	return (
		<div className="container mx-auto px-2 md:px-4 md:py-1 2xl:px-10 ">
				<ImmilangNav />
			<div className="relative z-40 flex flex-row items-center justify-between p-2">

				<div className={twJoin('mb-2 flex flex-row items-center md:mb-0', 'dark:text-white')}>
					<HeaderTooltip tooltipClassName="blog-home-tooltip" tooltipText="Home">
						<Link
							href="/"
							aria-label="Back to blog home"
							className={twJoin('blog-back-to-home-button', commonIconBtnStyles, 'mr-2 p-3')}
						>
							<ChevronLeftSVG className="h-4 w-4 fill-current pr-1" />
						</Link>
					</HeaderTooltip>
				</div>

				<div className={twJoin('flex flex-row items-center', 'dark:text-white')}>
					<HeaderBlogSearch publication={publication} />
				</div>
			</div>
		</div>
	);
});

PostPageNavbar.displayName = 'PostPageNavbar';

export default PostPageNavbar;
