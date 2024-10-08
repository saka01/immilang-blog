/* eslint-disable no-nested-ternary */
import { useState, useRef } from 'react';
import dynamic from 'next/dynamic';

import CommonHeaderIconBtn from './common-header-icon-btn';
import { PublicationFragment } from '../generated/graphql';
import SearchSVG from './icons/svgs/SearchSvg';

const PublicationSearch = dynamic(() => import('./publication-search'), { ssr: false });

interface Props {
  publication: Pick<PublicationFragment, 'id' | 'title' | 'url' | 'isTeam' | 'favicon' | 'links' | 'author' | 'preferences'>
}

const HeaderBlogSearch = (props: Props) => {
  const { publication } = props;

  const [isSearchUIVisible, toggleSearchUIState] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const toggleSearchUI = () => {
    toggleSearchUIState(!isSearchUIVisible);
  };

  return (
    <>
      {isSearchUIVisible ? (
        <PublicationSearch publication={publication} toggleSearchUI={toggleSearchUI} triggerRef={triggerRef} />
      ) : null}
      <CommonHeaderIconBtn
        handleClick={toggleSearchUI}
        variant="search"
        btnRef={triggerRef}
      >
      <span className="text-sm mr-2">Search</span> <SearchSVG className="h-6 w-6 stroke-current" />
      </CommonHeaderIconBtn>
    </>
  );
};

export default HeaderBlogSearch;
