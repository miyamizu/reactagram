import * as React from 'react';
import './Header.css';

type Props = {
  children: React.ReactElement;
}

const Header: React.FC<Props> = ({children}) => {
 return (
   <>
     <div className="Header">
       <span className="Header__Logo">
         TypeScrash
       </span>
       {children}
     </div>
   </>
 );
};

export default Header;