const seatRange = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];
const seatNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const arrSeat = [];
for (let seat of seatRange) {
  for (let number of seatNumber) {
    arrSeat.push({
      seat: seat + number,
      status: "empty",
    });
  }
}

const initState = {
  arrSeat,
  buyerName: "",
  arrActive: [],
  arrBought: [],
};

export const seatReducer = (state = initState, action) => {
  let newArr = [];
  switch (action.type) {
    case "TOGGLE_ACTIVE_SEAT":
      newArr = [...state.arrSeat];
      newArr[action.payload] = {
        ...newArr[action.payload],
        status: newArr[action.payload].status === "active" ? "empty" : "active",
      };
      return {
        ...state,
        arrSeat: newArr,
        arrActive: newArr.filter((seat) => seat.status === "active"),
      };
    case "SET_BUYER_NAME":
      return {
        ...state,
        buyerName: action.payload,
      };
    case "HANDLE_BUY_TICKET":
      //   payload: {name: '...', selectedArr: [..., ...]}
      /* When click confirm
        1. Add to bought array to display in list
        2. Update status to reserved
        3. Clear input
            */
      newArr = [...state.arrSeat];
      for (let activeItem of action.payload.arrActive) {
        let index = newArr.findIndex((item) => item.seat === activeItem.seat);
        newArr[index] = {
          ...newArr[index],
          status: "reserved",
        };
      }

      return {
        ...state,
        arrSeat: newArr,
        arrBought: [...state.arrBought, action.payload],
        arrActive: [],
      };
    
    case "CANCEL_BUY_TICKET":
      newArr = [...state.arrSeat];
      let newArrBought = [...state.arrBought];
      for (let activeItem of newArrBought[action.payload].arrActive) {
        let index = newArr.findIndex((item) => item.seat === activeItem.seat);
        newArr[index] = {
          ...newArr[index],
          status: "empty",
        };
      }
      newArrBought.splice(action.payload, 1);
      return {
        ...state,
        arrSeat: newArr,
        arrBought: newArrBought
      }

    default:
      return state;
  }
};
