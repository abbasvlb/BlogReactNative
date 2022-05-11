import createDataContext from "./createDataContext";

const blogReducer = (state, action) => {
  switch (action.type) {
    case "edit_blogpost":
      return state.map((item)=>{
          console.log("looping map")
          if(item.id === action.payload.id){
            console.log("match")
            return action.payload
          }
          else{
            console.log("no match")
            return item
          }
        });
      
    case "add_blogpost":
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 9999),
          title: action.payload.title,
          description: action.payload.description
        },
      ];
    case "delete_blogpost":
      return state.filter((blogPost) => blogPost.id !== action.payload);
    default:
      return state;
  }
};


const editBlogPost = (dispatch) => {
  return (id,title,description,callback) => {
    console.log("Entered here" + id+title+description)
    dispatch({ type: "edit_blogpost" , payload:{id,title,description}});
    callback();
  };
};

const addBlogPost = (dispatch) => {
  return async (title,description,callback) => {
    await new Promise(res => setTimeout(res, 10));
    dispatch({ type: "add_blogpost" , payload:{title,description}});
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
  { addBlogPost,deleteBlogPost,editBlogPost},
  [{id:1,title:"Test Title 1",description:"Test Description 1"}]
);
