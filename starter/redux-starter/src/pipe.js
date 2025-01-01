import { pipe, compose } from "lodash/fp";

let userName = "John";
let message = "Hello, how are you?" + userName.trim() + "!";

const trim = (name) => name.trim();
const generateMessage = (message) => (name) => `Hello ${name}, ${message}!`;
const convertoUpperCase = (name) => name.toUpperCase();

const compose = pipe(trim, convertoUpperCase, generateMessage("good morning"));
const result = newfunction(userName);
console.log(result);

function multiParameterFunction(a) {
  return function (b) {
    return function (c) {
      return function (d) {
        return function (e) {
          return function (f) {
            return function (g) {
              return function (h) {
                return function (i) {
                  return function (j) {
                    return function (k) {
                      return function (l) {
                        return function (m) {
                          return function (n) {
                            return function (o) {
                              return function (p) {
                                return function (q) {
                                  return function (r) {
                                    return function (s) {
                                      return function (t) {
                                        return function (u) {
                                          return function (v) {
                                            return function (w) {
                                              return function (x) {
                                                return function (y) {
                                                  return function (z) {
                                                    return (
                                                      a +
                                                      b +
                                                      c +
                                                      d +
                                                      e +
                                                      f +
                                                      g +
                                                      h +
                                                      i +
                                                      j +
                                                      k +
                                                      l +
                                                      m +
                                                      n +
                                                      o +
                                                      p +
                                                      q +
                                                      r +
                                                      s +
                                                      t +
                                                      u +
                                                      v +
                                                      w +
                                                      x +
                                                      y +
                                                      z
                                                    );
                                                  };
                                                };
                                              };
                                            };
                                          };
                                        };
                                      };
                                    };
                                  };
                                };
                              };
                            };
                          };
                        };
                      };
                    };
                  };
                };
              };
            };
          };
        };
      };
    };
  };
}
const multiParameterFunction =
  (a) =>
  (b) =>
  (c) =>
  (d) =>
  (e) =>
  (f) =>
  (g) =>
  (h) =>
  (i) =>
  (j) =>
  (k) =>
  (l) =>
  (m) =>
  (n) =>
  (o) =>
  (p) =>
  (q) =>
  (r) =>
  (s) =>
  (t) =>
  (u) =>
  (v) =>
  (w) =>
  (x) =>
  (y) =>
  (z) =>
    a +
    b +
    c +
    d +
    e +
    f +
    g +
    h +
    i +
    j +
    k +
    l +
    m +
    n +
    o +
    p +
    q +
    r +
    s +
    t +
    u +
    v +
    w +
    x +
    y +
    z;
let result1 =
  multiParameterFunction(1)(2)(3)(4)(5)(6)(7)(8)(9)(10)(11)(12)(13)(14)(15)(16)(
    17
  )(18)(19)(20)(21)(22)(23)(24)(25)(26);
