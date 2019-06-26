
const ID = "event";

let eventStore = JSON.parse(localStorage.getItem(ID) || "{}");

export function set(name, value) {
    eventStore[name] = value;
}

export function get(name) {
    return eventStore[name];
}

export function commit() {
    localStorage.setItem(ID, JSON.stringify(eventStore));
}

export function remove(name) {
    delete eventStore[name];
}

export function hasField(name) {
	
    return eventStore[name] !== undefined && eventStore[name] !== null;
}

export function clear() {
    eventStore = {};
    localStorage.removeItem(ID);
}