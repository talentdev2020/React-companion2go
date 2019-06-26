import { dispatch } from './EventEmitter';
import User from './User';

export function request(url, params, type, onSuccess, onFail = ()=>{}) {
  let result = jQuery.ajax({
      url: url.match(/^http:\/\//) ? url : config.backUrl + url,
      data: params,
      dataType: 'json',
      type: type,
      crossDomain: true,
      beforeSend: (request) => {
        request.setRequestHeader('Authorization', `Bearer ${User.token}`);
      },
      xhrFields: {
        withCredentials: true
      }
  });

  // Broadcast begin of request
  dispatch('api:request:begin', { url, params });

  // Broadcast end of request
  result.always((r) => dispatch('api:request:end', { url, params, result }));
  // setTimeout(() => result.always((r) => dispatch('api:request:end', { url, params, result })));

  return (typeof onSuccess === 'undefined') ? result :
    result
      .done(onSuccess)
      .fail(onFail);
};
