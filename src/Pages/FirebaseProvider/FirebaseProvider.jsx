// import React from "react";

// const FirebaseProvider = (props) => {
//   console.log(props);
//   return (
//     <div>
//       <h1>This is firebase provider.</h1>
//       {
//         <>
//           <h3>{props.text}</h3>
//           <h3>{props.text2}</h3>
//           <h3>{props.children}</h3>
//         </>
//       }
//     </div>
//   );
// };

// export default FirebaseProvider;

import React from "react";

const FirebaseProvider = (props) => {
  console.log(props);
  return (
    <div>
      {props.children}
      {/* <h1>This is firebase provider.</h1> */}
    </div>
  );
};

export default FirebaseProvider;
