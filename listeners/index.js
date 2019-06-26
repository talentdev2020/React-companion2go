import { subscribe, unsubscribe } from '../core/helpers/EventEmitter';
import { profileInfo } from '../actions';
import User from '../core/helpers/User';


export function raiseEvent(name, payload, callback) {
  const eventMap = {
    'user:info:refresh': function (payload, callback) {
      profileInfo(
        { },
        ({ data }) => {
          User.data = data;
          callback && callback(data);
        },
        (e) => console.error(e)
      );
    }
  };

  return eventMap[name](payload, callback);
};
