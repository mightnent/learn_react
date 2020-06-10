import JP from '../apis/JsonPlaceholder';

export const fetchPosts = () => async dispatch =>{
    const res = await JP.get('/posts');

    dispatch({type:'FETCH_POSTS',payload:res});
};