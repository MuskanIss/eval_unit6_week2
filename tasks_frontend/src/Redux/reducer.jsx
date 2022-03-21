export const reducer = (state, { type, payload }) => {
  switch (type) {
    case "getTask": {
      return {
        ...state,
        tasks: [...payload.tasks],
        pages: payload.pages,
        curPage: payload.curPage,
      };
    }
    case "postTask": {
      console.log("pay", payload);
      return {
        ...state,
        tasks: [...state.tasks, payload],
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};
