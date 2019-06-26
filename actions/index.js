import { request } from '../core/helpers/Request';

export function register(data, success, error) {
    request(`/api/auth/registration`, data, 'post', success, error);
};

export function userValidation(data, success, error) {
    request(`/api/auth/user-validation`, data, 'post', success, error);
};

export function login(data, success, error) {
    request(`/api/auth/login`, data, 'post', success, error);
};

export function refreshToken({ token }, success, error) {
    request(`/api/auth/refresh-token`, { token }, 'get', success, error);
};


/**
 * Profile actions
 */
export function progress(data, success, error) {
    request(`/api/user/progress/${data.progress}`, data, 'post', success, error);
};

export function profilePhoto(data, success, error) {
    request(`/api/user/profile-photo`, data, 'post', success, error);
};

export function category({ category }, success, error) {
    request(`/api/category/${category}`, {}, 'get', success, error);
};

export function categories(success, error) {
    request(`/api/categories`, {}, 'get', success, error);
};

export function profileInfo({ user }, success, error) {
    const url = user ? `/api/user/${user}/info` : `/api/user/info`;
    request(url, {}, 'get', success, error);
};

export function profileDeactivate(success, error) {
    request(`/api/user/deactivate`, {}, 'post', success, error);
};

export function profileChangePassword(data, success, error) {
    request(`/api/user/change-password`, data, 'post', success, error);
};
export function profileChangePhone(data, success, error) {
    request(`/api/user/change-phone`, data, 'post', success, error);
};

export function profileChangeEmail(data, success, error) {
    const email = data.email ? '/'.concat(data.email) : '';
    request(`/api/user/change-email${email}`, data, 'post', success, error);
};

export function profileDisabilityInformation(data, success, error) {
    request(`/api/user/disability-information`, data, 'post', success, error);
};

export function profileRequireAssistance(data, success, error) {
    request(`/api/user/require-assistance`, data, 'post', success, error);
};

export function profileUpdateSetting(data, success, error) {
    request(`/api/user/update-setting`, data, 'post', success, error);
};

export function profileUpdateSettings(data, success, error) {
    request(`/api/user/update-settings`, data, 'post', success, error);
};

export function vote(data, success, error) {
    request(`/api/user/vote/${data.requestId}`, data, 'post', success, error);
};

export function feedback(data, success, error) {
    request(`/api/user/feedback/${data.requestId}`, data, 'post', success, error);
};
export function requestOverview({ requestId }, success, error) {
    request(`/api/events/requests/${requestId}/overview`, {}, 'get', success, error);
};

export function eventRequests(success, error) {
    request(`/api/events/requests`, {}, 'get', success, error);
};

export function eventsVisited(success, error) {
    request(`/api/events/visited`, {}, 'get', success, error);
};

export function proposals({ event }, success, error) {
    request(`/api/events/proposals/${event}`, {}, 'get', success, error);
};

export function details({ proposal }, success, error) {
    request(`/api/events/details/${proposal}`, {}, 'get', success, error);
};

export function requests({ proposal }, success, error) {
    request(`/api/events/requests/${proposal}`, {}, 'get', success, error);
};

export function storeRequest({ proposal, message }, success, error) {
    request(`/api/events/requests/${proposal}`, { message }, 'post', success, error);
};

export function general({ proposal }, success, error) {
    request(`/api/events/general/${proposal}`, {}, 'get', success, error);
};

export function events(data, success, error) {
    request(`/api/events`, data, 'get', success, error);
};

export function eventAddAutocomplete({ keyword }, success, error) {
    request(`/api/events/autocomplete`, { keyword}, 'get', success, error);
};

export function eventAddGeneral(data, success, error) {
    request(`/api/events/add/general`, data, 'post', success, error);
};

export function eventAddCategory(data, success, error) {
    request(`/api/events/add/category`, data, 'post', success, error);
};

export function eventAddDatePlace(data, success, error) {
    request(`/api/events/add/date-place`, data, 'post', success, error);
};

export function eventAddTickets(data, success, error) {
    request(`/api/events/add/tickets`, data, 'post', success, error);
};
export function sendEmail(data, success, error) {
    request(`/api/sendMail`, data, 'post', success, error);
};

export function eventAddMeetPlace(data, success, error) {
    request(`/api/events/add/meet-place`, data, 'post', success, error);
};

export function eventAddLocation(data, success, error) {
    request(`/api/events/add/location`, data, 'post', success, error);
};

export function eventAddPersonalMessage(data, success, error) {
    request(`/api/events/add/personal-message`, data, 'post', success, error);
};

export function eventAdd(data, success, error) {
    request(`/api/events/add`, data, 'post', success, error);
};

export function upcomingEvents(success, error) {
    request(`/api/events/upcoming`, {}, 'get', success, error);
};

export function eventReject({ requestId, message }, success, error) {
    request(`/api/events/request/${requestId}/reject`, {message}, 'post', success, error);
};

export function eventAccept({ requestId, message }, success, error) {
    request(`/api/events/request/${requestId}/accept`, {message}, 'post', success, error);
};

export function requestExists({ event_proposal_id }, success, error) {
    request(`/api/events/request/exists`, {event_proposal_id}, 'get', success, error);
};

export function dialogs(success, error) {
    request(`/api/message/dialogs`, {}, 'get', success, error);
};

export function dialog(id, success, error) {
    request(`/api/message/dialog/${id}`, {}, 'get', success, error);
};

export function dialogViaRequest(id, success, error) {
    request(`/api/message/dialog/${id}?request=true`, {}, 'get', success, error);
};

export function messages(id, success, error) {
    request(`/api/message/messages/${id}`, {}, 'get', success, error);
};

export function sendMessage(data, success, error) {
    request(`/api/message/send`, data, 'post', success, error);
};

export function loginSocial(data, success, error) {
    request(`/api/auth/login`, data, 'post', success, error);
};

export function checkEmailToken(token, success, error) {
    request(`/api/auth/email-confirmation/${token}`, {}, 'post', success, error);
};

export function getFacebookAvatar(token, success, error) {
    request(`/api/user/get-facebook-img`, {token}, 'post', success, error);
}