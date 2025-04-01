import { OPEN_MODAL, CLOSE_MODAL } from "../types/modalType";

export const openModal = (modalType) => {
  console.log("modalType : ", modalType)
    return {
        type: OPEN_MODAL,
        payload : modalType
    }
}

export const closeModal = () => {
    return {
      type: CLOSE_MODAL,
    };
  };

// export const openModal = (openClose, content) => {
//   return {
//       type: "OPEN_MODAL",
//       payload : {
//         openClose,
//         content,
//       }
//   }
// }

// export const closeModal = (openClose, content) => {
//   return {
//     type: "CLOSE_MODAL",
//     payload:{
//       openClose,
//       content,
//     }
//   };
// };