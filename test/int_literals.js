var passed = 0;
var failed = 0;
var quiet = false;

testModule0();
end();

function testModule0() {
  var module = createModule([
      0,  97, 115, 109,  11,   0,   0,   0,   4, 116, 121, 112, 101,   9,   2,  64,
      0,   1,   1,  64,   0,   1,   2,   8, 102, 117, 110,  99, 116, 105, 111, 110,
     37,  36,   0,   0,   0,   0,   0,   0,   0,   0,   0,   1,   1,   1,   1,   1,
      1,   1,   1,   1,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,
      0,   0,   0,   0,   0,   0,   6, 101, 120, 112, 111, 114, 116, 171,   4,  36,
      0,   8, 105,  51,  50,  46, 116, 101, 115, 116,   1,   8, 105,  51,  50,  46,
    117, 109,  97, 120,   2,   8, 105,  51,  50,  46, 115, 109,  97, 120,   3,  12,
    105,  51,  50,  46, 110, 101, 103,  95, 115, 109,  97, 120,   4,   8, 105,  51,
     50,  46, 115, 109, 105, 110,   5,  12, 105,  51,  50,  46,  97, 108, 116,  95,
    115, 109, 105, 110,   6,  12, 105,  51,  50,  46, 105, 110,  99,  95, 115, 109,
    105, 110,   7,  12, 105,  51,  50,  46, 110, 101, 103,  95, 122, 101, 114, 111,
      8,  13, 105,  51,  50,  46, 110, 111, 116,  95, 111,  99, 116,  97, 108,   9,
      8, 105,  54,  52,  46, 116, 101, 115, 116,  10,   8, 105,  54,  52,  46, 117,
    109,  97, 120,  11,   8, 105,  54,  52,  46, 115, 109,  97, 120,  12,  12, 105,
     54,  52,  46, 110, 101, 103,  95, 115, 109,  97, 120,  13,   8, 105,  54,  52,
     46, 115, 109, 105, 110,  14,  12, 105,  54,  52,  46,  97, 108, 116,  95, 115,
    109, 105, 110,  15,  12, 105,  54,  52,  46, 105, 110,  99,  95, 115, 109, 105,
    110,  16,  12, 105,  54,  52,  46, 110, 101, 103,  95, 122, 101, 114, 111,  17,
     13, 105,  54,  52,  46, 110, 111, 116,  95, 111,  99, 116,  97, 108,  18,  16,
     36,  97, 115, 115, 101, 114, 116,  95, 114, 101, 116, 117, 114, 110,  95,  48,
     19,  16,  36,  97, 115, 115, 101, 114, 116,  95, 114, 101, 116, 117, 114, 110,
     95,  49,  20,  16,  36,  97, 115, 115, 101, 114, 116,  95, 114, 101, 116, 117,
    114, 110,  95,  50,  21,  16,  36,  97, 115, 115, 101, 114, 116,  95, 114, 101,
    116, 117, 114, 110,  95,  51,  22,  16,  36,  97, 115, 115, 101, 114, 116,  95,
    114, 101, 116, 117, 114, 110,  95,  52,  23,  16,  36,  97, 115, 115, 101, 114,
    116,  95, 114, 101, 116, 117, 114, 110,  95,  53,  24,  16,  36,  97, 115, 115,
    101, 114, 116,  95, 114, 101, 116, 117, 114, 110,  95,  54,  25,  16,  36,  97,
    115, 115, 101, 114, 116,  95, 114, 101, 116, 117, 114, 110,  95,  55,  26,  16,
     36,  97, 115, 115, 101, 114, 116,  95, 114, 101, 116, 117, 114, 110,  95,  56,
     27,  16,  36,  97, 115, 115, 101, 114, 116,  95, 114, 101, 116, 117, 114, 110,
     95,  57,  28,  17,  36,  97, 115, 115, 101, 114, 116,  95, 114, 101, 116, 117,
    114, 110,  95,  49,  48,  29,  17,  36,  97, 115, 115, 101, 114, 116,  95, 114,
    101, 116, 117, 114, 110,  95,  49,  49,  30,  17,  36,  97, 115, 115, 101, 114,
    116,  95, 114, 101, 116, 117, 114, 110,  95,  49,  50,  31,  17,  36,  97, 115,
    115, 101, 114, 116,  95, 114, 101, 116, 117, 114, 110,  95,  49,  51,  32,  17,
     36,  97, 115, 115, 101, 114, 116,  95, 114, 101, 116, 117, 114, 110,  95,  49,
     52,  33,  17,  36,  97, 115, 115, 101, 114, 116,  95, 114, 101, 116, 117, 114,
    110,  95,  49,  53,  34,  17,  36,  97, 115, 115, 101, 114, 116,  95, 114, 101,
    116, 117, 114, 110,  95,  49,  54,  35,  17,  36,  97, 115, 115, 101, 114, 116,
     95, 114, 101, 116, 117, 114, 110,  95,  49,  55,   4,  99, 111, 100, 101, 157,
      3,  36,   9,   0,  16, 141, 160, 183, 221,   0,   9,   1,   5,   0,  16, 127,
      9,   1,   9,   0,  16, 255, 255, 255, 255,   7,   9,   1,   9,   0,  16, 129,
    128, 128, 128, 120,   9,   1,   9,   0,  16, 128, 128, 128, 128, 120,   9,   1,
      9,   0,  16, 128, 128, 128, 128, 120,   9,   1,  12,   0,  16, 128, 128, 128,
    128, 120,  16,   1,  64,   9,   1,   5,   0,  16,   0,   9,   1,   5,   0,  16,
     10,   9,   1,  13,   0,  17, 238, 212, 153, 221, 224, 205, 238, 213,  12,   9,
      1,   5,   0,  17, 127,   9,   1,  14,   0,  17, 255, 255, 255, 255, 255, 255,
    255, 255, 255,   0,   9,   1,  14,   0,  17, 129, 128, 128, 128, 128, 128, 128,
    128, 128, 127,   9,   1,  14,   0,  17, 128, 128, 128, 128, 128, 128, 128, 128,
    128, 127,   9,   1,  14,   0,  17, 128, 128, 128, 128, 128, 128, 128, 128, 128,
    127,   9,   1,  17,   0,  17, 128, 128, 128, 128, 128, 128, 128, 128, 128, 127,
     17,   1,  91,   9,   1,   5,   0,  17,   0,   9,   1,   5,   0,  17,  10,   9,
      1,  11,   0,  22,   0,   0,  16, 141, 160, 183, 221,   0,  77,   7,   0,  22,
      0,   1,  16, 127,  77,  11,   0,  22,   0,   2,  16, 255, 255, 255, 255,   7,
     77,  11,   0,  22,   0,   3,  16, 129, 128, 128, 128, 120,  77,  11,   0,  22,
      0,   4,  16, 128, 128, 128, 128, 120,  77,  11,   0,  22,   0,   5,  16, 128,
    128, 128, 128, 120,  77,  11,   0,  22,   0,   6,  16, 129, 128, 128, 128, 120,
     77,   7,   0,  22,   0,   7,  16,   0,  77,   7,   0,  22,   0,   8,  16,  10,
     77,  15,   0,  22,   0,   9,  17, 238, 212, 153, 221, 224, 205, 238, 213,  12,
    104,   7,   0,  22,   0,  10,  17, 127, 104,  16,   0,  22,   0,  11,  17, 255,
    255, 255, 255, 255, 255, 255, 255, 255,   0, 104,  16,   0,  22,   0,  12,  17,
    129, 128, 128, 128, 128, 128, 128, 128, 128, 127, 104,  16,   0,  22,   0,  13,
     17, 128, 128, 128, 128, 128, 128, 128, 128, 128, 127, 104,  16,   0,  22,   0,
     14,  17, 128, 128, 128, 128, 128, 128, 128, 128, 128, 127, 104,  16,   0,  22,
      0,  15,  17, 129, 128, 128, 128, 128, 128, 128, 128, 128, 127, 104,   7,   0,
     22,   0,  16,  17,   0, 104,   7,   0,  22,   0,  17,  17,  10, 104,
  ]);

  assertReturn(module, '$assert_return_0', 'external/testsuite/int_literals.wast', 43);
  assertReturn(module, '$assert_return_1', 'external/testsuite/int_literals.wast', 44);
  assertReturn(module, '$assert_return_2', 'external/testsuite/int_literals.wast', 45);
  assertReturn(module, '$assert_return_3', 'external/testsuite/int_literals.wast', 46);
  assertReturn(module, '$assert_return_4', 'external/testsuite/int_literals.wast', 47);
  assertReturn(module, '$assert_return_5', 'external/testsuite/int_literals.wast', 48);
  assertReturn(module, '$assert_return_6', 'external/testsuite/int_literals.wast', 49);
  assertReturn(module, '$assert_return_7', 'external/testsuite/int_literals.wast', 50);
  assertReturn(module, '$assert_return_8', 'external/testsuite/int_literals.wast', 51);
  assertReturn(module, '$assert_return_9', 'external/testsuite/int_literals.wast', 53);
  assertReturn(module, '$assert_return_10', 'external/testsuite/int_literals.wast', 54);
  assertReturn(module, '$assert_return_11', 'external/testsuite/int_literals.wast', 55);
  assertReturn(module, '$assert_return_12', 'external/testsuite/int_literals.wast', 56);
  assertReturn(module, '$assert_return_13', 'external/testsuite/int_literals.wast', 57);
  assertReturn(module, '$assert_return_14', 'external/testsuite/int_literals.wast', 58);
  assertReturn(module, '$assert_return_15', 'external/testsuite/int_literals.wast', 59);
  assertReturn(module, '$assert_return_16', 'external/testsuite/int_literals.wast', 60);
  assertReturn(module, '$assert_return_17', 'external/testsuite/int_literals.wast', 61);
}

function createModule(data) {
  var u8a = new Uint8Array(data);
  var ffi = {spectest: {print: print}};
  return Wasm.instantiateModule(u8a.buffer, ffi);
}

function assertReturn(module, name, file, line) {
  try {
    var result = module.exports[name]();
  } catch(e) {
    print(file + ":" + line + ": " + name + " unexpectedly threw: " + e);
  }

  if (result == 1) {
    passed++;
  } else {
    print(file + ":" + line + ": " + name + " failed.");
    failed++;
  }
}

function assertTrap(module, name, file, line) {
  var threw = false;
  try {
    module.exports[name]();
  } catch (e) {
    threw = true;
  }

  if (threw) {
    passed++;
  } else {
    print(file + ":" + line + ": " + name + " failed, didn't throw");
    failed++;
  }
}

function invoke(module, name) {
  try {
    var invokeResult = module.exports[name]();
  } catch(e) {
    print(file + ":" + line + ": " + name + " unexpectedly threw: " + e);
  }

  if (!quiet)
    print(name + " = " + invokeResult);
}

function end() {
  if ((failed > 0) || !quiet)
    print(passed + "/" + (passed + failed) + " tests passed.");
}
