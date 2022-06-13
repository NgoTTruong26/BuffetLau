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

  /* interface NumberSchema<
    TType extends Maybe<number> = number | undefined,
    TContext extends AnyObject = AnyObject,
    TOut extends TType = TType
  > extends yup.BaseSchema<TType, TContext, TOut> {
    numberAdults(message?: string): NumberSchema<TType, TContext>;
  } */
}

export default yup;
