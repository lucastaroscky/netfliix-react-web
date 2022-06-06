const authenticated = (state: any, action: any) => {
    state.authenticated = action.payload
}

export const reducers = {
    authenticated
}
