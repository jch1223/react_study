const middleware = store => next => action => {
  console.log(store.getState());
  console.log(action);

  next(action);

  console.log(store.getState());
};

export default middleware;
