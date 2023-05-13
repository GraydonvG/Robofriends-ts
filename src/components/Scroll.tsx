import { ReactNode } from 'react';

import './Scroll.css';

type ScrollProps = {
  children: ReactNode;
};

function Scroll({ children }: ScrollProps) {
  return <div id="div">{children}</div>;
}

export default Scroll;
