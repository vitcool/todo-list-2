const initArray = [
  
];

export default function tasks(state = initArray, action) {
  switch (action.type) {
    case "ADD_TASK": {
      var newTask = { name: action.payload, done: false };
      return reviewId([...state, newTask]);
    }
    case "REMOVE_TASK": {
      state.splice(action.index, 1);
      return reviewId(state);
    }
    case "MARK_DONE": {
      state[action.index].done = !state[action.index].done;
      return reviewId(state);
    }
    default: {
      return state;
    }
  }
}

function reviewId(todosArray) {
  var resultArray = [];
  var index = 0;
  todosArray.map(todo => {
    var status = todo.done !== undefined ? todo.done : false;
    var todoObj = {
      name: todo.name,
      id: index,
      done: status
    };
    resultArray.push(todoObj);
    index++;
  });
  return resultArray;
}
