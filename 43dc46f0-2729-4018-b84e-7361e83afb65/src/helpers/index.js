export const validateEmail = (email) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

export const validateUrl = (url) => {
  var re = String(url).match(
    /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
  );
  return re !== null;
};

export const validatePhone = (tel) => {
  if (tel !== null || tel !== undefined) {
    if (
      tel.length === 10 &&
      !tel.startsWith(0) &&
      !tel.startsWith(1) &&
      !isNaN(tel)
    ) {
      return true;
    }
    return false;
  }
};
