export function alert (text = 'Done', color = 'primary', timeout = 5000) {
  return {
    type: 'ALERT',
    text,
    color,
    timeout,
  };
}

export function closeAlert (id) {
  return {
    type: 'CLOSE_ALERT',
    id,
  };
}

export function setUserData(data) {
  return {
    type: 'SET_USER_DATA',
    payload: data,
  };
}