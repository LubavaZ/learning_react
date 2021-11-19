const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
  dialogs: [
    { id: 1, name: "Dima" },
    { id: 2, name: "Sveta" },
    { id: 3, name: "Valera" },
    { id: 4, name: "Sasha" },
    { id: 5, name: "Andrei" },
    { id: 6, name: "Victoria" },
    { id: 7, name: "Victor" },
    { id: 8, name: "Andrei" },
    { id: 9, name: "Victoria" },
    { id: 10, name: "Victor" },
  ],
  messages: [
    { id: 1, message: "Hi!" },
    { id: 2, message: "Hi, how are you?" },
    { id: 3, message: "Pretty good. What about you?" },
  ],
  newMessageBody: "",
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      state.newMessageBody = action.body;
      return state;
    case SEND_MESSAGE:
      let body = state.newMessageBody;
      state.messages.push({ id: 4, message: body });
      return state;
    default:
      return state;
  }
};

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreator = (body) => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  body: body,
});

export default dialogsReducer;
