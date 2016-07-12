var passed = 0;
var failed = 0;
var quiet = false;

testModule0();
end();

function testModule0() {
  var module = createModule([
      0,  97, 115, 109,  11,   0,   0,   0,   4, 116, 121, 112, 101,  46,   9,  64,
      0,   1,   1,  64,   0,   1,   2,  64,   0,   1,   3,  64,   0,   1,   4,  64,
      1,   1,   1,   1,  64,   1,   2,   1,   2,  64,   1,   3,   1,   3,  64,   1,
      4,   1,   4,  64,   5,   2,   3,   4,   1,   1,   1,   4,   8, 102, 117, 110,
     99, 116, 105, 111, 110,  21,  20,   0,   1,   2,   3,   4,   5,   6,   7,   8,
      8,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   6, 101, 120, 112, 111,
    114, 116, 199,   2,  20,   0,  14, 116, 121, 112, 101,  45, 108, 111,  99,  97,
    108,  45, 105,  51,  50,   1,  14, 116, 121, 112, 101,  45, 108, 111,  99,  97,
    108,  45, 105,  54,  52,   2,  14, 116, 121, 112, 101,  45, 108, 111,  99,  97,
    108,  45, 102,  51,  50,   3,  14, 116, 121, 112, 101,  45, 108, 111,  99,  97,
    108,  45, 102,  54,  52,   4,  14, 116, 121, 112, 101,  45, 112,  97, 114,  97,
    109,  45, 105,  51,  50,   5,  14, 116, 121, 112, 101,  45, 112,  97, 114,  97,
    109,  45, 105,  54,  52,   6,  14, 116, 121, 112, 101,  45, 112,  97, 114,  97,
    109,  45, 102,  51,  50,   7,  14, 116, 121, 112, 101,  45, 112,  97, 114,  97,
    109,  45, 102,  54,  52,   8,  10, 116, 121, 112, 101,  45, 109, 105, 120, 101,
    100,   9,   4, 114, 101,  97, 100,  10,  16,  36,  97, 115, 115, 101, 114, 116,
     95, 114, 101, 116, 117, 114, 110,  95,  48,  11,  16,  36,  97, 115, 115, 101,
    114, 116,  95, 114, 101, 116, 117, 114, 110,  95,  49,  12,  16,  36,  97, 115,
    115, 101, 114, 116,  95, 114, 101, 116, 117, 114, 110,  95,  50,  13,  16,  36,
     97, 115, 115, 101, 114, 116,  95, 114, 101, 116, 117, 114, 110,  95,  51,  14,
     16,  36,  97, 115, 115, 101, 114, 116,  95, 114, 101, 116, 117, 114, 110,  95,
     52,  15,  16,  36,  97, 115, 115, 101, 114, 116,  95, 114, 101, 116, 117, 114,
    110,  95,  53,  16,  16,  36,  97, 115, 115, 101, 114, 116,  95, 114, 101, 116,
    117, 114, 110,  95,  54,  17,  16,  36,  97, 115, 115, 101, 114, 116,  95, 114,
    101, 116, 117, 114, 110,  95,  55,  18,  16,  36,  97, 115, 115, 101, 114, 116,
     95, 114, 101, 116, 117, 114, 110,  95,  56,  19,  16,  36,  97, 115, 115, 101,
    114, 116,  95, 114, 101, 116, 117, 114, 110,  95,  57,   4,  99, 111, 100, 101,
    183,   2,  20,   5,   1,   1,   1,  20,   0,   5,   1,   1,   2,  20,   0,   5,
      1,   1,   3,  20,   0,   5,   1,   1,   4,  20,   0,   3,   0,  20,   0,   3,
      0,  20,   0,   3,   0,  20,   0,   3,   0,  20,   0,  34,   3,   2,   2,   1,
      3,   1,   4,  20,   0, 186,  20,   1, 124,  20,   2, 144,  20,   3,  90,  20,
      4,  90,  20,   7, 124,  20,   5, 186,  20,   6, 186,  20,   8, 144,  62,   3,
      2,   2,   1,   3,   1,   4,  19,   0,   0, 176,  64,  21,   7,  17,   6,  21,
      5,  18,   0,   0,   0,   0,   0,   0,  32,  64,  21,   8,  20,   0, 177,  20,
      1, 178,  20,   2,  20,   3, 175,  20,   4, 174,  20,   7, 178,  20,   5, 177,
     20,   6, 177,  20,   8, 137, 137, 137, 137, 137, 137, 137, 137,   7,   0,  22,
      0,   0,  16,   0,  77,   7,   0,  22,   0,   1,  17,   0, 104,  10,   0,  22,
      0,   2,  19,   0,   0,   0,   0, 131,  14,   0,  22,   0,   3,  18,   0,   0,
      0,   0,   0,   0,   0,   0, 151,   9,   0,  16,   2,  22,   1,   4,  16,   2,
     77,   9,   0,  17,   3,  22,   1,   5,  17,   3, 104,  15,   0,  19, 205, 204,
    140,  64,  22,   1,   6,  19, 205, 204, 140,  64, 131,  23,   0,  18,   0,   0,
      0,   0,   0,   0,  22,  64,  22,   1,   7,  18,   0,   0,   0,   0,   0,   0,
     22,  64, 151,  34,   0,  17,   1,  19, 205, 204,  12,  64,  18, 102, 102, 102,
    102, 102, 102,  10,  64,  16,   4,  16,   5,  22,   5,   8,  18,   0,   0,   0,
      0,   0,   0,   0, 128, 151,  34,   0,  17,   1,  19,   0,   0,   0,  64,  18,
    102, 102, 102, 102, 102, 102,  10,  64,  16,   4,  16,   5,  22,   5,   9,  18,
    102, 102, 102, 102, 102, 102,  65,  64, 151,
  ]);

  assertReturn(module, '$assert_return_0', 'external/testsuite/get_local.wast', 64);
  assertReturn(module, '$assert_return_1', 'external/testsuite/get_local.wast', 65);
  assertReturn(module, '$assert_return_2', 'external/testsuite/get_local.wast', 66);
  assertReturn(module, '$assert_return_3', 'external/testsuite/get_local.wast', 67);
  assertReturn(module, '$assert_return_4', 'external/testsuite/get_local.wast', 69);
  assertReturn(module, '$assert_return_5', 'external/testsuite/get_local.wast', 70);
  assertReturn(module, '$assert_return_6', 'external/testsuite/get_local.wast', 71);
  assertReturn(module, '$assert_return_7', 'external/testsuite/get_local.wast', 72);
  assertReturn(module, '$assert_return_8', 'external/testsuite/get_local.wast', 75);
  assertReturn(module, '$assert_return_9', 'external/testsuite/get_local.wast', 82);
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
