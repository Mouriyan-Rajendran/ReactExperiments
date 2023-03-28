let bugId = 0;

export default function reducer(store = [], action) {
  if (action.type === "bugAdded") {
    return [
      ...store,
      {
        id: ++bugId,
        description: action.payload.description,
        resolved: false,
      },
    ];
  } else if (action.type === "bugRemoved") {
    return store.filter((bug) => bug.id === action.payload.id);
  }

  return store;
}
