const initArray = [
  { name: "sex", id: 0, done: false },
  { name: "coffee", id: 1, done: false }
];

export default function tasks(state = initArray, action) {
  if (action.type === "ADD_TASK") {
    var newTask = { name: action.payload, id: 2, done: false };
    return [...state, newTask];
  }
  return state;
}