// import React from "react";

// const HomeLeftShape = () => {
//   return (
//     <div className="left_shape">
//       <svg
//         width="470"//470
//         height="987"//987
//         viewBox="0 0 470 987"
//         fill="none"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <path
//           d="M135.5 487.977C288 163.299 348 54.5932 385 0H0V987H470C307 788.639 -19.34 817.636 135.5 487.977Z"
//           fill="#F8F8F8"
//         />
//       </svg>
//     </div>
//   );
// };

// export default HomeLeftShape;


import React from "react";

const HomeLeftShape = () => {
  return (
    <div className="left_shape">
      <svg
        className="left_svg"
        viewBox="0 0 470 987" 
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M135.5 487.977C288 163.299 348 54.5932 385 0H0V987H470C307 788.639 -19.34 817.636 135.5 487.977Z"
          fill="#F8F8F8"
        />
      </svg>
    </div>
  );
};

export default HomeLeftShape;

