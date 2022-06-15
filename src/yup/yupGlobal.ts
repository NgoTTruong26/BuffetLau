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

yup.addMethod<yup.StringSchema>(yup.string, "day", function (message?) {
  return this.test("day2", message, function (value) {
    const { path, createError } = this;

    const today = new Date();

    let requireDay = new Date();
    requireDay.setDate(requireDay.getDate() + 7);

    if (value) {
      const dateBooking = new Date(value);

      if (requireDay.getDate() - today.getDate() + 1 === 8) {
        if (
          !(
            dateBooking.getDate() >= today.getDate() &&
            dateBooking.getDate() <= requireDay.getDate() &&
            dateBooking.getMonth() === today.getMonth()
          )
        ) {
          return createError({
            path,
            message: `ngày đặt bàn phải trong khoảng 7 ngày tính từ hôm nay đến ngày ${requireDay.getDate()}/${
              requireDay.getMonth() + 1
            }/${requireDay.getFullYear()}`,
          });
        }
      } else {
        if (
          !(
            (dateBooking.getDate() >= today.getDate() &&
              dateBooking.getMonth() === today.getMonth()) ||
            (dateBooking.getDate() <= requireDay.getDate() &&
              dateBooking.getMonth() === requireDay.getMonth())
          )
        ) {
          return createError({
            path,
            message: `ngày đặt bàn phải trong khoảng 7 ngày tính từ hôm nay đến ngày ${requireDay}`,
          });
        }
      }
    }

    return true;
  });
});

yup.addMethod<yup.StringSchema>(yup.string, "hours", function (message?) {
  return this.test("hours2", message, function (value) {
    const { path, createError } = this;

    const today = new Date();
    console.log(today.getHours());

    console.log(parseInt(value!.split(":")[0]));

    if (value) {
      if (
        !(
          (parseInt(value!.split(":")[0]) >= 9 &&
            parseInt(value!.split(":")[0]) <= 14) ||
          (parseInt(value!.split(":")[0]) >= 17 &&
            parseInt(value!.split(":")[0]) <= 23)
        )
      ) {
        return createError({
          path,
          message:
            "Cửa hàng chỉ mở cửa lúc:<br/>Sáng: 9h00 - 14h30<br/> Tối: 17h00 - 23h00",
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

  /* interface NumberSchema<
    TType extends Maybe<number> = number | undefined,
    TContext extends AnyObject = AnyObject,
    TOut extends TType = TType
  > extends yup.BaseSchema<TType, TContext, TOut> {
    numberAdults(message?: string): NumberSchema<TType, TContext>;
  } */
}

export default yup;
