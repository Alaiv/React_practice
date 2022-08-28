import profileReducer, {addPostActionCreator, deletePost} from "./profileReducer";

let state = {
    posts: [
        {id: 1, name: 'Пост один', likes: 15},
        {id: 2, name: 'Пост два', likes: 11},
        {id: 3, name: 'Пост три', likes: 4}
    ]
}

it('new post length incremented', () => {
    let action = addPostActionCreator('post')
    let newState = profileReducer(state, action)
    expect(newState.posts.length).toBe(4)
});

it('name is right', () => {
    let action = addPostActionCreator('post')
    let newState = profileReducer(state, action)
    expect(newState.posts[3].name).toBe('post')
});

it('posts length should be decremented', () => {
    let action = deletePost(3)
    let newState = profileReducer(state, action)
    expect(newState.posts.length).toBe(2)
});

it('posts length shouldnt be decremented if id is incorrect', () => {
    let action = deletePost(223)
    let newState = profileReducer(state, action)
    expect(newState.posts.length).toBe(3)
});