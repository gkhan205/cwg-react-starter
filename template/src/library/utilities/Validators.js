const regex = {
  email: new RegExp(
    '^(([^<>()\\[\\]\\\\.,;:\\s@]+(\\.[^<>()\\[\\]\\\\.,;:\\s@]+)*)|(.+))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$',
  ),
  url: new RegExp('^http(s?):\\/\\/\\S+(\\/\\S+)*(\\/)?$'),
  price: new RegExp(/^\d+(\.\d{1,2})?$/),
  number: new RegExp('^[0-9]+$'),
};

/**
 * I have kept Validators as a class to keep all validation methods intact and all methods are static
 * so it doesn't required to create an instance to use any method.
 * We can directly call method like Validators.required() without creating an instance of class.
 */
export class Validators {
  static email(value, message) {
    if (value) {
      const result = regex.email.test(value);
      if (!result) return { error: true, message };
    }
    // return false;
  }

  static required(value, message) {
    if (!value || !value.toString().trim().length) {
      return { error: true, message };
    }
    return false;
  }

  static number(value, message) {
    const length = value ? value.toString().length : 0;

    if (length > 0) {
      const result = regex.number.test(value);
      if (!result) {
        return { error: true, message };
      }
    }

    return false;
  }

  static price(value, message) {
    const length = value ? value.toString().length : 0;

    if (length > 0) {
      const result = regex.price.test(value);
      if (!result) {
        return { error: true, message };
      }
    }

    return false;
  }
}

export const validateInput = (validators, value) => {
  if (validators && validators.length) {
    for (let i = 0; i < validators.length; i++) {
      const error = validators[i].check(value, validators[i].message);
      if (error) {
        return error;
      }
    }
  }
  return false;
};
