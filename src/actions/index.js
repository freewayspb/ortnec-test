export const ALERT = 'ALERT'
export const CLOSE_ALERT = 'CLOSE_ALERT'
export const CHANGE_VIDEO = 'CHANGE_VIDEO'
export const IS_LOADING = 'IS_LOADING'
export const HAS_ERROR = 'HAS_ERROR'
export const GET_ITEMS_SUCCESS = 'GET_ITEMS_SUCCESS'

let apiUrl = 'https://5b3bfd27e7659e00149695e4.mockapi.io/api/v1/profiles/'

export const initialState = {
  alerts: [],
  currentVideo: null,
  items: {},
  isLoading: true,
  hasError: false
}

export function alert (text = 'Done', timeout = 5000, buttonText, buttonUrl) {
  return {
    type: ALERT,
    text,
    timeout,
    buttonText,
    buttonUrl
  }
}

export const closeAlert = (id) => {
  return {
    type: CLOSE_ALERT,
    id
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
    items,
    currentVideo: items.videos.find(item => {return item.id === 1})
  };
}

/* get test API request from mock.io */

export function getProfiles(id = '') {
  return (dispatch) => {
    dispatch(isLoading(true))

    fetch(`${apiUrl}${id}`)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText)
        }
        return response
      })
      .then((response) => response.json())
      .then((items) => {
        dispatch(itemsFetchDataSuccess(items))
        dispatch(isLoading(false))
      })
      .catch(() => dispatch(hasError(true)))
  }
}

export function changeVideo (currentVideo) {
  return {
    type: CHANGE_VIDEO,
    currentVideo
  }
}
