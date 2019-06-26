import {dispatch, subscribe} from "./helpers/EventEmitter";
import User from "./helpers/User";

// const ws = new WebSocket('ws://c2go.atomicity.pro:8181/');
// ws.addEventListener('open', function() {
//     let token = window.localStorage.getItem("token");
//     if (token) {
//         logIn();
//     }
// });

// ws.addEventListener('message', function (e) {
//     dispatch("user:message", JSON.parse(e.data));
// });
//
// function logIn() {
//     sendData({command: "setUser", userId: User.data.id});
// }
//
// function logOut() {
//     sendData({command: "logOut"});
// }
//
//
// function sendData(data) {
//     ws.send(JSON.stringify(data));
// }

// subscribe("user:loggedin", logIn);
// subscribe("user:loggedout", logOut);