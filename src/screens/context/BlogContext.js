import createDataContext from "./createDataContext";
import jsonServer from "../../api/jsonServer";

const blogReducer = (state, action) => {
  switch (action.type) {
    case "get_blogposts":
      return action.payload;
    case "edit_blogpost":
      return state.map((item) => {
        console.log("looping map");
        if (item.id === action.payload.id) {
          console.log("match");
          return action.payload;
        } else {
          console.log("no match");
          return item;
        }
      });

    case "add_blogpost":
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 9999),
          title: action.payload.title,
          description: action.payload.description,
        },
      ];
    case "delete_blogpost":
      return state.filter((blogPost) => blogPost.id !== action.payload);
    default:
      return state;
  }
};

const getBlogPosts = (dispatch) => {
  return async () => {
    console.log("before call the blogpost")
    const response = await jsonServer.get("/blogposts");
    console.log(response)
    dispatch({ type: "get_blogposts", payload: response.data });
  };
};

const editBlogPost = (dispatch) => {
  return (id, title, description, callback) => {
    console.log("Entered here" + id + title + description);
    dispatch({ type: "edit_blogpost", payload: { id, title, description } });
    callback();
  };
};

const addBlogPost = (dispatch) => {
  return async (title, description, callback) => {
    await new Promise((res) => setTimeout(res, 10));
    dispatch({ type: "add_blogpost", payload: { title, description } });
    callback();
  };
};

const deleteBlogPost = (dispatch) => {
  return (id) => {
    dispatch({ type: "delete_blogpost", payload: id });
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost, editBlogPost,getBlogPosts },
  []
);
