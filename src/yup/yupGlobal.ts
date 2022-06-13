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

    const today = new Date("2022/6/29");

    let requireDay = new Date("2022/6/29");
    requireDay.setDate(requireDay.getDate() + 7);

    if (value) {
      const dateBooking = new Date(value);

      if (
        !(
          dateBooking.getDate() >= today.getDate() &&
          dateBooking.getDate() <= requireDay.getDate()
        )
      ) {
        console.log(dateBooking.getDate());
        console.log(requireDay);
        console.log(today);

        if (!true) {
          return createError({
            path,
            message: `ngày đặt bàn phải trong khoảng 7 ngày tính từ hôm nay đến ngày ${requireDay}`,
          });
        }

        return createError({
          path,
          message: `ngày đặt bàn phải trong khoảng 7 ngày tính từ hôm nay đến ngày ${requireDay}`,
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

  /* interface NumberSchema<
    TType extends Maybe<number> = number | undefined,
    TContext extends AnyObject = AnyObject,
    TOut extends TType = TType
  > extends yup.BaseSchema<TType, TContext, TOut> {
    numberAdults(message?: string): NumberSchema<TType, TContext>;
  } */
}

export default yup;
