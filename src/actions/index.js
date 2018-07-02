export const SET_VIDEO_LIST = 'SET_VIDEO_LIST'
export const CHANGE_VIDEO = 'CHANGE_VIDEO'
export const CLOSE_ALERT = 'CLOSE_ALERT'

export const initialState = {
  alerts: [],
  models: [],
  currentVideo: {}
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

export const setVideoList = (data) => ({
  type: SET_VIDEO_LIST,
  payload: { data }
})

export const changeVideo = id => ({
  type: CHANGE_VIDEO,
  id
})
