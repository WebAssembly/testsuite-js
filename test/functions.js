var passed = 0;
var failed = 0;
var quiet = false;

testModule0();
end();

function testModule0() {
  var module = createModule([
      0,  97, 115, 109,  11,   0,   0,   0,   4, 116, 121, 112, 101,   8,   2,  64,
      0,   0,  64,   0,   1,   1,   8, 102, 117, 110,  99, 116, 105, 111, 110,  21,
     20,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   1,   1,   1,   1,   1,
      1,   1,   1,   1,   1,   6, 101, 120, 112, 111, 114, 116, 192,   2,  20,   0,
      5, 101, 109, 112, 116, 121,   1,  10, 114, 101, 115, 117, 108, 116,  45, 110,
    111, 112,   2,  11, 114, 101, 115, 117, 108, 116,  45, 100, 114, 111, 112,   3,
     16, 114, 101, 115, 117, 108, 116,  45,  98, 108, 111,  99, 107,  45, 110, 111,
    112,   4,  17, 114, 101, 115, 117, 108, 116,  45,  98, 108, 111,  99, 107,  45,
    100, 114, 111, 112,   5,   6, 114, 101, 116, 117, 114, 110,   6,  10, 114, 101,
    116, 117, 114, 110,  45, 110, 111, 112,   7,  11, 114, 101, 116, 117, 114, 110,
     45, 100, 114, 111, 112,   8,  16, 114, 101, 116, 117, 114, 110,  45,  98, 108,
    111,  99, 107,  45, 110, 111, 112,   9,  17, 114, 101, 116, 117, 114, 110,  45,
     98, 108, 111,  99, 107,  45, 100, 114, 111, 112,  10,  16,  36,  97, 115, 115,
    101, 114, 116,  95, 114, 101, 116, 117, 114, 110,  95,  48,  11,  16,  36,  97,
    115, 115, 101, 114, 116,  95, 114, 101, 116, 117, 114, 110,  95,  49,  12,  16,
     36,  97, 115, 115, 101, 114, 116,  95, 114, 101, 116, 117, 114, 110,  95,  50,
     13,  16,  36,  97, 115, 115, 101, 114, 116,  95, 114, 101, 116, 117, 114, 110,
     95,  51,  14,  16,  36,  97, 115, 115, 101, 114, 116,  95, 114, 101, 116, 117,
    114, 110,  95,  52,  15,  16,  36,  97, 115, 115, 101, 114, 116,  95, 114, 101,
    116, 117, 114, 110,  95,  53,  16,  16,  36,  97, 115, 115, 101, 114, 116,  95,
    114, 101, 116, 117, 114, 110,  95,  54,  17,  16,  36,  97, 115, 115, 101, 114,
    116,  95, 114, 101, 116, 117, 114, 110,  95,  55,  18,  16,  36,  97, 115, 115,
    101, 114, 116,  95, 114, 101, 116, 117, 114, 110,  95,  56,  19,  16,  36,  97,
    115, 115, 101, 114, 116,  95, 114, 101, 116, 117, 114, 110,  95,  57,   4,  99,
    111, 100, 101, 127,  20,   1,   0,   2,   0,   0,   3,   0,  16,   1,   6,   0,
      1,  16,   1,   0,  15,   6,   0,   1,   0,  16,   1,  15,   3,   0,   9,   0,
      4,   0,   0,   9,   1,   5,   0,  16,   1,   9,   1,   8,   0,   1,  16,   1,
      0,  15,   9,   1,   8,   0,   1,   0,  16,   1,  15,   9,   1,   6,   0,  22,
      0,   0,  16,   1,   6,   0,  22,   0,   1,  16,   1,   6,   0,  22,   0,   2,
     16,   1,   6,   0,  22,   0,   3,  16,   1,   6,   0,  22,   0,   4,  16,   1,
      6,   0,  22,   0,   5,  16,   1,   6,   0,  22,   0,   6,  16,   1,   6,   0,
     22,   0,   7,  16,   1,   6,   0,  22,   0,   8,  16,   1,   6,   0,  22,   0,
      9,  16,   1,
  ]);

  assertReturn(module, '$assert_return_0', 'external/testsuite/functions.wast', 33);
  assertReturn(module, '$assert_return_1', 'external/testsuite/functions.wast', 34);
  assertReturn(module, '$assert_return_2', 'external/testsuite/functions.wast', 35);
  assertReturn(module, '$assert_return_3', 'external/testsuite/functions.wast', 36);
  assertReturn(module, '$assert_return_4', 'external/testsuite/functions.wast', 37);
  assertReturn(module, '$assert_return_5', 'external/testsuite/functions.wast', 39);
  assertReturn(module, '$assert_return_6', 'external/testsuite/functions.wast', 40);
  assertReturn(module, '$assert_return_7', 'external/testsuite/functions.wast', 41);
  assertReturn(module, '$assert_return_8', 'external/testsuite/functions.wast', 42);
  assertReturn(module, '$assert_return_9', 'external/testsuite/functions.wast', 43);
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
