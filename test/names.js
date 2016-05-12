var passed = 0;
var failed = 0;
var quiet = false;

testModule0();
testModule1();
testModule2();
testModule3();
end();

function testModule0() {
  var module = createModule([
      0,  97, 115, 109,  11,   0,   0,   0,   4, 116, 121, 112, 101,   5,   1,  64,
      0,   1,   1,   8, 102, 117, 110,  99, 116, 105, 111, 110,   3,   2,   0,   0,
      6, 101, 120, 112, 111, 114, 116,  24,   2,   0,   3, 102, 111, 111,   1,  16,
     36,  97, 115, 115, 101, 114, 116,  95, 114, 101, 116, 117, 114, 110,  95,  48,
      4,  99, 111, 100, 101,  13,   2,   3,   0,  16,   0,   7,   0,  22,   0,   0,
     16,   0,  77,
  ]);

  assertReturn(module, '$assert_return_0', 'external/testsuite/names.wast', 9);
}

function testModule1() {
  var module = createModule([
      0,  97, 115, 109,  11,   0,   0,   0,   4, 116, 121, 112, 101,   5,   1,  64,
      0,   1,   1,   8, 102, 117, 110,  99, 116, 105, 111, 110,   3,   2,   0,   0,
      6, 101, 120, 112, 111, 114, 116,  24,   2,   0,   3, 102, 111, 111,   1,  16,
     36,  97, 115, 115, 101, 114, 116,  95, 114, 101, 116, 117, 114, 110,  95,  48,
      4,  99, 111, 100, 101,  13,   2,   3,   0,  16,   1,   7,   0,  22,   0,   0,
     16,   1,  77,
  ]);

  assertReturn(module, '$assert_return_0', 'external/testsuite/names.wast', 18);
}

function testModule2() {
  var module = createModule([
      0,  97, 115, 109,  11,   0,   0,   0,   4, 116, 121, 112, 101,   9,   2,  64,
      0,   1,   3,  64,   0,   1,   1,   8, 102, 117, 110,  99, 116, 105, 111, 110,
     26,  25,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   1,
      1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   6, 101, 120, 112, 111,
    114, 116, 186,   2,  24,   0,   0,   1,   6, 109,  97, 108, 108, 111,  99,   2,
      7,  95, 109,  97, 108, 108, 111,  99,   3,   8,  95,  95, 109,  97, 108, 108,
    111,  99,   5,  33, 126,  33,  64,  35,  36,  37,  94,  38,  42,  40,  41,  95,
     43,  96,  45,  61, 123, 125, 124,  91,  93,  92,  58,  34,  59,  39,  60,  62,
     63,  44,  46,  47,  32,   6,   1,  48,   7,   1,  95,   8,   1,  36,   9,   1,
     64,  10,   3,  78,  97,  78,  11,   8,  73, 110, 102, 105, 110, 105, 116, 121,
     12,   2, 105, 102,  13,  16,  36,  97, 115, 115, 101, 114, 116,  95, 114, 101,
    116, 117, 114, 110,  95,  48,  14,  16,  36,  97, 115, 115, 101, 114, 116,  95,
    114, 101, 116, 117, 114, 110,  95,  49,  15,  16,  36,  97, 115, 115, 101, 114,
    116,  95, 114, 101, 116, 117, 114, 110,  95,  50,  16,  16,  36,  97, 115, 115,
    101, 114, 116,  95, 114, 101, 116, 117, 114, 110,  95,  51,  17,  16,  36,  97,
    115, 115, 101, 114, 116,  95, 114, 101, 116, 117, 114, 110,  95,  52,  18,  16,
     36,  97, 115, 115, 101, 114, 116,  95, 114, 101, 116, 117, 114, 110,  95,  53,
     19,  16,  36,  97, 115, 115, 101, 114, 116,  95, 114, 101, 116, 117, 114, 110,
     95,  54,  20,  16,  36,  97, 115, 115, 101, 114, 116,  95, 114, 101, 116, 117,
    114, 110,  95,  55,  21,  16,  36,  97, 115, 115, 101, 114, 116,  95, 114, 101,
    116, 117, 114, 110,  95,  56,  22,  16,  36,  97, 115, 115, 101, 114, 116,  95,
    114, 101, 116, 117, 114, 110,  95,  57,  23,  17,  36,  97, 115, 115, 101, 114,
    116,  95, 114, 101, 116, 117, 114, 110,  95,  49,  48,  24,  17,  36,  97, 115,
    115, 101, 114, 116,  95, 114, 101, 116, 117, 114, 110,  95,  49,  49,   4,  99,
    111, 100, 101, 224,   1,  25,   6,   0,  19,   0, 128, 200,  64,   6,   0,  19,
      0,   0, 201,  64,   6,   0,  19,   0, 128, 201,  64,   6,   0,  19,   0,   0,
    202,  64,   6,   0,  19,   0, 128, 202,  64,   6,   0,  19,   0,   0, 203,  64,
      6,   0,  19,   0, 128, 203,  64,   6,   0,  19,   0,   0, 204,  64,   6,   0,
     19,   0, 128, 204,  64,   6,   0,  19,   0,   0,   0,  65,   6,   0,  19,   0,
     64,   0,  65,   6,   0,  19,   0, 128,   0,  65,   6,   0,  19,   0, 192,   0,
     65,  10,   0,  22,   0,   0,  19,   0, 128, 200,  64, 131,  10,   0,  22,   0,
      1,  19,   0,   0, 201,  64, 131,  10,   0,  22,   0,   2,  19,   0, 128, 201,
     64, 131,  10,   0,  22,   0,   3,  19,   0,   0, 202,  64, 131,  10,   0,  22,
      0,   5,  19,   0,   0, 203,  64, 131,  10,   0,  22,   0,   6,  19,   0, 128,
    203,  64, 131,  10,   0,  22,   0,   7,  19,   0,   0, 204,  64, 131,  10,   0,
     22,   0,   8,  19,   0, 128, 204,  64, 131,  10,   0,  22,   0,   9,  19,   0,
      0,   0,  65, 131,  10,   0,  22,   0,  10,  19,   0,  64,   0,  65, 131,  10,
      0,  22,   0,  11,  19,   0, 128,   0,  65, 131,  10,   0,  22,   0,  12,  19,
      0, 192,   0,  65, 131,
  ]);

  assertReturn(module, '$assert_return_0', 'external/testsuite/names.wast', 66);
  assertReturn(module, '$assert_return_1', 'external/testsuite/names.wast', 67);
  assertReturn(module, '$assert_return_2', 'external/testsuite/names.wast', 68);
  assertReturn(module, '$assert_return_3', 'external/testsuite/names.wast', 69);
  assertReturn(module, '$assert_return_4', 'external/testsuite/names.wast', 70);
  assertReturn(module, '$assert_return_5', 'external/testsuite/names.wast', 71);
  assertReturn(module, '$assert_return_6', 'external/testsuite/names.wast', 72);
  assertReturn(module, '$assert_return_7', 'external/testsuite/names.wast', 73);
  assertReturn(module, '$assert_return_8', 'external/testsuite/names.wast', 74);
  assertReturn(module, '$assert_return_9', 'external/testsuite/names.wast', 75);
  assertReturn(module, '$assert_return_10', 'external/testsuite/names.wast', 76);
  assertReturn(module, '$assert_return_11', 'external/testsuite/names.wast', 77);
}

function testModule3() {
  var module = createModule([
      0,  97, 115, 109,  11,   0,   0,   0,   4, 116, 121, 112, 101,  13,   3,  64,
      1,   1,   0,  64,   2,   1,   1,   0,  64,   0,   0,   6, 105, 109, 112, 111,
    114, 116,  33,   2,   0,   8, 115, 112, 101,  99, 116, 101, 115, 116,   5, 112,
    114, 105, 110, 116,   0,   8, 115, 112, 101,  99, 116, 101, 115, 116,   5, 112,
    114, 105, 110, 116,   8, 102, 117, 110,  99, 116, 105, 111, 110,   3,   2,   1,
      2,   6, 101, 120, 112, 111, 114, 116,  21,   2,   0,   7, 112, 114, 105, 110,
    116,  51,  50,   1,   9,  36, 105, 110, 118, 111, 107, 101,  95,  48,   4,  99,
    111, 100, 101,  23,   2,  11,   0,  20,   0,  24,   1,   0,  20,   1,  24,   1,
      1,   9,   0,  16,  42,  16, 251,   0,  22,   2,   0,
  ]);

  invoke(module, '$invoke_0');
}

function createModule(data) {
  var u8a = new Uint8Array(data);
  var ffi = {spectest: {print: print}};
  return Wasm.instantiateModule(u8a, ffi);
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
