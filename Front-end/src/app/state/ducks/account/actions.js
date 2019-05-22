import * as types from "./types";

export const getAllUserAccount = () => ( {
    type: types.GET_ALL_USER_ACCOUNT,
    meta: {
        async: true,
        blocking: true,
        path: "/users",
        method: "GET"
    }
} );

export const getUserAccountById = ( id ) => ( {
    type: types.GET_USER_ACCOUNT_BY_ID,
    meta: {
        async: true,
        blocking: true,
        path: `/users/${id}`,
        method: "GET"
    }
} );

export const addNewUserAccount = ( dataForm ) => ( {
    type: types.ADD_NEW_USER_ACCOUNT,
    meta: {
        async: true,
        blocking: true,
        path: "/users",
        method: "POST",
        body: JSON.stringify(dataForm)
    }
});

export const openFormEdit = ( ) => ( {
    type: types.OPEN_EDIT,
});

export const closeFormEdit = ( ) => ( {
    type: types.CLOSE_EDIT,
});


export const updateUserAccount = ( dataForm ) => ( {
    type: types.UPDATE_USER_ACCOUNT,
    meta: {
        async: true,
        blocking: true,
        path: "/users",
        method: "PUT",
        body: JSON.stringify(dataForm)
    }
});

export const deleteUserAccount = ( ) => ( {
    
});

 
