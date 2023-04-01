const success = (res, message = '', body = {}) => {
  return res.status(200).json({
    success: true,
    code: 200,
    message: message,
    body: body,
  });
};
const errResponse = (res, message = '') => {
  return res.status(400).json({
    success: false,
    code: 400,
    message: message,
    body: {},
  });
};

const error = (res, err, req) => {
  console.log(err, '===========================>error');
  let code = typeof err === 'object' ? (err.code ? err.code : 403) : 403;
  let message =
    typeof err === 'object' ? (err.message ? err.message : '') : err;

  if (req) {
    req.flash('flashMessage', {
      color: 'error',
      message,
    });

    const originalUrl = req.originalUrl.split('/')[1];
    return res.redirect(`/${originalUrl}`);
  }

  return res.status(code).json({
    success: false,
    message: message,
    code: code,
    body: {},
  });
};

const failed = (res, message = '') => {
  message =
    typeof message === 'object'
      ? message.message
        ? message.message
        : ''
      : message;
  return res.status(400).json({
    success: false,
    code: 400,
    message: message,
    body: {},
  });
};

const unixTimestamp = () => {
  var time = Date.now();
  var n = time / 1000;
  return (time = Math.floor(n));
};

const checkValidation = async (v) => {
  var errorsResponse;

  await v.check().then(function (matched) {
    if (!matched) {
      var valdErrors = v.errors;
      var respErrors = [];
      Object.keys(valdErrors).forEach(function (key) {
        if (valdErrors && valdErrors[key] && valdErrors[key].message) {
          respErrors.push(valdErrors[key].message);
        }
      });
      errorsResponse = respErrors.join(', ');
    }
  });
  return errorsResponse;
};

const fileUpload = (files, folder = 'users') => {
  console.log(files, '===================================##@@');

  let file_name_string = files.video.name;
  // console.log(file_name_string, "_____________file name_____________");
  var file_name_array = file_name_string.split('.');

  var file_ext = file_name_array[1];

  var letters = 'ABCDE1234567890FGHJK1234567890MNPQRSTUXY';
  var result = '';
  while (result.length < 28) {
    var rand_int = Math.floor(Math.random() * 19 + 1);
    var rand_chr = letters[rand_int];
    if (result.substr(-1, 1) != rand_chr) result += rand_chr;
  }
  var resultExt = `${folder}/${result}.${file_ext}`;
  files.video.mv(
    `public/video/${folder}/${result}.${file_ext}`,
    function (err) {
      if (err) {
        throw err;
      }
    }
  );
  // console.log(resultExt);
  return resultExt;
};

const fileUploadImage = (files, folder = 'users') => {
  // console.log(files, "===================================##@@");

  let file_name_string = files.name;
  // console.log(file_name_string, "_____________file name_____________");
  var file_name_array = file_name_string.split('.');

  var file_ext = file_name_array[1];

  var letters = 'ABCDE1234567890FGHJK1234567890MNPQRSTUXY';
  var result = '';
  while (result.length < 28) {
    var rand_int = Math.floor(Math.random() * 19 + 1);
    var rand_chr = letters[rand_int];
    if (result.substr(-1, 1) != rand_chr) result += rand_chr;
  }
  var resultExt = `${folder}/${result}.${file_ext}`;
  files.mv(`public/images/${folder}/${result}.${file_ext}`, function (err) {
    if (err) {
      throw err;
    }
  });
  // console.log(resultExt);
  return resultExt;
};

const vaildObjectApi = async (required, non_required, res) => {
  let message = '';
  let empty = [];

  for (let key in required) {
    if (required.hasOwnProperty(key)) {
      if (
        required[key] == undefined ||
        (required[key] === '' && (required[key] !== '0' || required[key] !== 0))
      ) {
        empty.push(key);
      }
    }
  }

  if (empty.length != 0) {
    message = empty.toString();

    if (empty.length > 1) {
      message += ' fields are required';

      console.log(message, '---------message----------');
      return res.json({
        message: message,
      });
    } else {
      message += ' field is required';
    }
    throw {
      code: 403,
      message: message,
    };
  } else {
    if (required.hasOwnProperty('securitykey')) {
      // if (required.securitykey != constants.securityKey) {
      if (required.securitykey != 'Occult') {
        message = 'Invalid security key';
        throw {
          code: 400,
          message: message,
        };
      }
    }

    const merge_object = Object.assign(required, non_required);
    delete merge_object.checkexit;
    delete merge_object.securitykey;

    if (
      merge_object.hasOwnProperty('password') &&
      merge_object.password == ''
    ) {
      delete merge_object.password;
    }

    for (let data in merge_object) {
      if (merge_object[data] == undefined) {
        delete merge_object[data];
      } else {
        if (typeof merge_object[data] == 'string') {
          merge_object[data] = merge_object[data].trim();
        }
      }
    }

    return merge_object;
  }
};

export {
  success,
  failed,
  error,
  unixTimestamp,
  fileUpload,
  checkValidation,
  fileUploadImage,
  errResponse,
  vaildObjectApi,
};
