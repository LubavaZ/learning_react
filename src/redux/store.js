import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hi, how are you?", likesCount: 12 },
        { id: 2, message: "It's my first post", likesCount: 5 },
      ],
      newPostText: "new post text",
    },
    dialogsPage: {
      dialogs: [
        { id: 1, name: "Dima" },
        { id: 2, name: "Sveta" },
        { id: 3, name: "Valera" },
        { id: 4, name: "Sasha" },
        { id: 5, name: "Andrei" },
        { id: 6, name: "Victoria" },
        { id: 7, name: "Victor" },
      ],
      messages: [
        { id: 1, message: "Hi!" },
        { id: 2, message: "Hi, how are you?" },
        { id: 3, message: "Pretty good. What about you?" },
      ],
      newMessageBody: "",
    },
    sidebar: {},
  },
  _callSubscriber() {
    console.log("hi");
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);
    this._callSubscriber(this._state);
  },
};

export default store;
