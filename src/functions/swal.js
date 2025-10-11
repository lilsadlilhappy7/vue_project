export const LoadingModal = () => {
  $swal.fire({
    text: 'Loading...',
    allowOutsideClick: false,
    allowEscapeKey: false,
    allowEnterKey: false,
    width: '200px',
  }).then($swal.showLoading());
}
export const MessageModal = async (icon, title, text, callback) => {
  return await $swal.fire({
    icon: icon,
    title: title,
    html: '<pre>' + text + '</pre>',
    showConfirmButton: false,
  }).then(async () => {
    if (typeof callback === "function") {
      return await callback();
    }
  })
}
export const CloseModal = () => {
  $swal.close();
}
export const ErrorModal = async (error, callback) => {
  if (error.response.status === 429) {
    return await MessageModal('error', 'Server Rejection!', 'Too Many Attempts! Please wait...', callback);
  }
  if (error.response.status === 401) {
    return await MessageModal('error', 'Session Expired!', error.response.data.message, callback ?? (() => window.location.reload()));
  }
  if (error.response.status === 404) {
    return await MessageModal('error', '404 Not Found!', error.message, callback);
  }
  if (error.response.status === 417) {
    return await MessageModal('error', 'Expectation Failed!', error.response.data.message, callback ?? (() => window.location.reload()));
  }
  if (error.response.status === 422) {
    return await MessageModal('error', 'Action Failed!', error.response.data.message, callback);
  }
  if (error.response.status === 500) {
    return await MessageModal('error', 'Something went wrong!', 'Internal server error!.', callback);
  }
}