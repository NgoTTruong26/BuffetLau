import * as yup from "yup";
import { AnyObject, Maybe } from "yup/lib/types";

yup.addMethod<yup.StringSchema>(
  yup.string,
  "numberAdults",
  function (message?) {
    return this.test("numberAdults2", message, function (value) {
      const { path, createError } = this;

      function isNumeric(value: string) {
        return /^-?\d+$/.test(value);
      }

      if (!isNumeric(value!)) {
        return createError({
          path,
          message: "Số người đi kí tự nhập phải là số!!",
        });
      }

      if (parseInt(value!) > 100) {
        return createError({
          path,
          message: "Số người đi tối đa là 100 người!!",
        });
      }

      if (parseInt(value!) === 0) {
        return createError({
          path,
          message: "Số người đi phải lớn hơn 0",
        });
      }

      return true;
    });
  }
);

yup.addMethod<yup.StringSchema>(
  yup.string,
  "numberChildren",
  function (message?) {
    return this.test("numberChildren2", message, function (value) {
      const { path, createError } = this;

      function isNumeric(value: string) {
        if (value === "") return true;
        return /^-?\d+$/.test(value);
      }

      if (!isNumeric(value!)) {
        return createError({
          path,
          message: "Số trẻ em kí tự nhập phải là số!!",
        });
      }

      return true;
    });
  }
);

yup.addMethod<yup.StringSchema>(yup.string, "email", function (message?) {
  return this.test("email2", message, function (value) {
    const validateEmail = (email: string) => {
      return /\S+@\S+\.\S+/.test(email);
    };

    const { path, createError } = this;

    if (!validateEmail(value!)) {
      return createError({
        path,
        message: "Vui lòng nhập đúng email!!",
      });
    }

    return true;
  });
});

yup.addMethod<yup.StringSchema>(yup.string, "day", function (message?) {
  return this.test("day2", message, function (value) {
    const { path, createError } = this;

    const day = 7;

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    let requireDay = new Date(today.getTime() + day * 86400000);
    requireDay.setHours(0, 0, 0, 0);

    if (!value) {
      return createError({ path, message });
    }

    const dateBooking = new Date(value);
    dateBooking.setHours(0, 0, 0, 0);

    if (requireDay.getTime() < dateBooking.getTime()) {
      return createError({
        path,
        message: `ngày đặt bàn phải trong khoảng 7 ngày tính từ ${today.getDate()}/${
          today.getMonth() + 1
        }/${today.getFullYear()} đến ngày ${requireDay.getDate()}/${
          requireDay.getMonth() + 1
        }/${requireDay.getFullYear()}`,
      });
    }

    if (dateBooking.getTime() < today.getTime()) {
      return createError({
        path,
        message: `Ngày đặt bàn phải sau hoặc trong ngày hôm nay: ${today.getDate()}/${
          today.getMonth() + 1
        }/${today.getFullYear()}`,
      });
    }

    return true;
  });
});

yup.addMethod<yup.StringSchema>(yup.string, "hours", function (message?) {
  return this.test("hours2", message, function (value) {
    const { path, createError } = this;

    if (!value) {
      return createError({
        path,
        message:
          "Cửa hàng chỉ nhận đặt bàn từ:<br/>Sáng: 9h00 - 13h00<br/> Tối: 17h00 - 21h30",
      });
    }

    const date = new Date();
    const bookingHours = date.setHours(
      parseInt(value.split(":")[0]),
      parseInt(value.split(":")[1]),
      0,
      0
    );

    const requireHours21h30 = date.setHours(21, 30, 0, 0);

    if (value) {
      if (
        !(
          (parseInt(value!.split(":")[0]) >= 9 &&
            parseInt(value!.split(":")[0]) <= 13) ||
          (parseInt(value!.split(":")[0]) >= 17 &&
            bookingHours <= requireHours21h30)
        )
      ) {
        return createError({
          path,
          message:
            "Cửa hàng chỉ nhận đặt bàn từ:<br/>Sáng: 9h00 - 13h00<br/> Tối: 17h00 - 21h30",
        });
      }
    }

    return true;
  });
});

declare module "yup" {
  interface StringSchema<
    TType extends Maybe<string> = string | undefined,
    TContext extends AnyObject = AnyObject,
    TOut extends TType = TType
  > extends yup.BaseSchema<TType, TContext, TOut> {
    numberAdults(message?: string): StringSchema<TType, TContext>;
  }

  interface StringSchema<
    TType extends Maybe<string> = string | undefined,
    TContext extends AnyObject = AnyObject,
    TOut extends TType = TType
  > extends yup.BaseSchema<TType, TContext, TOut> {
    numberChildren(message?: string): StringSchema<TType, TContext>;
  }

  interface StringSchema<
    TType extends Maybe<string> = string | undefined,
    TContext extends AnyObject = AnyObject,
    TOut extends TType = TType
  > extends yup.BaseSchema<TType, TContext, TOut> {
    day(message?: string): StringSchema<TType, TContext>;
  }

  interface StringSchema<
    TType extends Maybe<string> = string | undefined,
    TContext extends AnyObject = AnyObject,
    TOut extends TType = TType
  > extends yup.BaseSchema<TType, TContext, TOut> {
    hours(message?: string): StringSchema<TType, TContext>;
  }

  interface StringSchema<
    TType extends Maybe<string> = string | undefined,
    TContext extends AnyObject = AnyObject,
    TOut extends TType = TType
  > extends yup.BaseSchema<TType, TContext, TOut> {
    email(message?: string): StringSchema<TType, TContext>;
  }

  /* interface NumberSchema<
    TType extends Maybe<number> = number | undefined,
    TContext extends AnyObject = AnyObject,
    TOut extends TType = TType
  > extends yup.BaseSchema<TType, TContext, TOut> {
    numberAdults(message?: string): NumberSchema<TType, TContext>;
  } */
}

export default yup;
