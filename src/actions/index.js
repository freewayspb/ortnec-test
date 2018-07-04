export const CHANGE_VIDEO = 'CHANGE_VIDEO'
export const CLOSE_ALERT = 'CLOSE_ALERT'
export const IS_LOADING = 'IS_LOADING'
export const HAS_ERROR = 'HAS_ERROR'
export const GET_ITEMS_SUCCESS = 'GET_ITEMS_SUCCESS'

let apiUrl = 'https://5b3bfd27e7659e00149695e4.mockapi.io/api/v1/profiles/'

export const initialState = {
  alerts: [],
  items: [],
  isLoading: true,
  hasError: ''
}

export function alert (text = 'Done', color = 'primary', timeout = 5000) {
  return {
    type: 'ALERT',
    text,
    color,
    timeout
  }
}

export const closeAlert = (id) => {
  return {
    type: CLOSE_ALERT,
    id
  }
}

export const setUserData = (data) => {
  return {
    type: 'SET_USER_DATA',
    payload: data
  }
}

export function hasError(bool) {
  return {
    type: HAS_ERROR,
    hasError: bool
  };
}

export function isLoading(bool) {
  return {
    type: IS_LOADING,
    isLoading: bool
  };
}

export function itemsFetchDataSuccess(items) {
  return {
    type: GET_ITEMS_SUCCESS,
    items
  };
}

/* using test API from mock.io */

export function getProfiles(id = '') {
  return (dispatch) => {
    dispatch(isLoading(true))

    fetch(`${apiUrl}${id}`)
      .then((response) => {
        console.log(response)
        if (!response.ok) {
          throw Error(response.statusText)
        }
        return response
      })
      .then((response) => {
        response.json()
        dispatch(isLoading(false))
      })
      .then((items) => dispatch(itemsFetchDataSuccess(items)))
      .catch(() => dispatch(hasError(true)))
  }
}

export const changeVideo = id => ({
  type: CHANGE_VIDEO,
  id
})
