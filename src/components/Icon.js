
// import React from 'react';

// import Logo from '../images/fussion-icon.png';

// export const Icon = [
//     {
//         icon: <img src ={Logo} alt="" style ={{maxWidth:"2.5rem"}}/>
//     }
// ]


import React from 'react';

import Logo from '../images/fussion-icon.png';

const Icon = props => {
  return (
    <div className='icon-logo'>
      <img src ={Logo} alt="" style ={{maxWidth:"2.5rem"}}/>
    </div>
  );
};

// export default Icon;

// import React from 'react';
// import { Link } from 'react-router-dom';

// import Logo from '../images/fussion-icon.png';

// const Icon = () => {
//     return (
//         <div>
//             <Link to="#" className='icon logo'>
//                 <img src={Logo} alt="" style={{ maxWidth: "2.5rem" }} />
//             </Link>
//         </div>
//     );
// };

// export default Icon;
