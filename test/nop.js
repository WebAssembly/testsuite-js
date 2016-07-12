var passed = 0;
var failed = 0;
var quiet = false;

testModule0();
end();

function testModule0() {
  var module = createModule([
      0,  97, 115, 109,  11,   0,   0,   0,   4, 116, 121, 112, 101,  12,   3,  64,
      0,   0,  64,   0,   1,   1,  64,   1,   1,   0,   8, 102, 117, 110,  99, 116,
    105, 111, 110,  37,  36,   0,   1,   1,   0,   1,   1,   0,   1,   1,   0,   0,
      2,   2,   0,   2,   2,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,
      1,   1,   1,   1,   1,   1,   1,   1,   1,   6, 101, 120, 112, 111, 114, 116,
    205,   4,  35,   1,  13,  97, 115,  45, 102, 117, 110,  99,  45, 102, 105, 114,
    115, 116,   2,  11,  97, 115,  45, 102, 117, 110,  99,  45, 109, 105, 100,   3,
     12,  97, 115,  45, 102, 117, 110,  99,  45, 108,  97, 115, 116,   4,  14,  97,
    115,  45,  98, 108, 111,  99, 107,  45, 102, 105, 114, 115, 116,   5,  12,  97,
    115,  45,  98, 108, 111,  99, 107,  45, 109, 105, 100,   6,  13,  97, 115,  45,
     98, 108, 111,  99, 107,  45, 108,  97, 115, 116,   7,  13,  97, 115,  45, 108,
    111, 111, 112,  45, 102, 105, 114, 115, 116,   8,  11,  97, 115,  45, 108, 111,
    111, 112,  45, 109, 105, 100,   9,  12,  97, 115,  45, 108, 111, 111, 112,  45,
    108,  97, 115, 116,  10,  11,  97, 115,  45,  98, 114,  45, 118,  97, 108, 117,
    101,  11,  14,  97, 115,  45,  98, 114,  95, 105, 102,  45, 118,  97, 108, 117,
    101,  12,  17,  97, 115,  45,  98, 114,  95, 116,  97,  98, 108, 101,  45, 118,
     97, 108, 117, 101,  13,  15,  97, 115,  45, 114, 101, 116, 117, 114, 110,  45,
    118,  97, 108, 117, 101,  14,  10,  97, 115,  45, 105, 102,  45, 116, 104, 101,
    110,  15,  10,  97, 115,  45, 105, 102,  45, 101, 108, 115, 101,  16,  16,  36,
     97, 115, 115, 101, 114, 116,  95, 114, 101, 116, 117, 114, 110,  95,  48,  17,
     16,  36,  97, 115, 115, 101, 114, 116,  95, 114, 101, 116, 117, 114, 110,  95,
     49,  18,  16,  36,  97, 115, 115, 101, 114, 116,  95, 114, 101, 116, 117, 114,
    110,  95,  50,  19,  16,  36,  97, 115, 115, 101, 114, 116,  95, 114, 101, 116,
    117, 114, 110,  95,  51,  20,  16,  36,  97, 115, 115, 101, 114, 116,  95, 114,
    101, 116, 117, 114, 110,  95,  52,  21,  16,  36,  97, 115, 115, 101, 114, 116,
     95, 114, 101, 116, 117, 114, 110,  95,  53,  22,  16,  36,  97, 115, 115, 101,
    114, 116,  95, 114, 101, 116, 117, 114, 110,  95,  54,  23,  16,  36,  97, 115,
    115, 101, 114, 116,  95, 114, 101, 116, 117, 114, 110,  95,  55,  24,  16,  36,
     97, 115, 115, 101, 114, 116,  95, 114, 101, 116, 117, 114, 110,  95,  56,  25,
     16,  36,  97, 115, 115, 101, 114, 116,  95, 114, 101, 116, 117, 114, 110,  95,
     57,  26,  17,  36,  97, 115, 115, 101, 114, 116,  95, 114, 101, 116, 117, 114,
    110,  95,  49,  48,  27,  17,  36,  97, 115, 115, 101, 114, 116,  95, 114, 101,
    116, 117, 114, 110,  95,  49,  49,  28,  17,  36,  97, 115, 115, 101, 114, 116,
     95, 114, 101, 116, 117, 114, 110,  95,  49,  50,  29,  17,  36,  97, 115, 115,
    101, 114, 116,  95, 114, 101, 116, 117, 114, 110,  95,  49,  51,  30,  17,  36,
     97, 115, 115, 101, 114, 116,  95, 114, 101, 116, 117, 114, 110,  95,  49,  52,
     31,  17,  36,  97, 115, 115, 101, 114, 116,  95, 114, 101, 116, 117, 114, 110,
     95,  49,  53,  32,  17,  36,  97, 115, 115, 101, 114, 116,  95, 114, 101, 116,
    117, 114, 110,  95,  49,  54,  33,  17,  36,  97, 115, 115, 101, 114, 116,  95,
    114, 101, 116, 117, 114, 110,  95,  49,  55,  34,  17,  36,  97, 115, 115, 101,
    114, 116,  95, 114, 101, 116, 117, 114, 110,  95,  49,  56,  35,  17,  36,  97,
    115, 115, 101, 114, 116,  95, 114, 101, 116, 117, 114, 110,  95,  49,  57,   4,
     99, 111, 100, 101, 182,   2,  36,   1,   0,   4,   0,   0,  16,   1,   7,   0,
     22,   0,   0,   0,  16,   2,   5,   0,  22,   0,   0,   0,   6,   0,   1,   0,
     16,   2,  15,   9,   0,   1,  22,   0,   0,   0,  16,   2,  15,   8,   0,   1,
      0,  22,   0,   0,   0,  15,   6,   0,   2,   0,  16,   2,  15,   9,   0,   2,
     22,   0,   0,   0,  16,   2,  15,   7,   0,   2,  22,   0,   0,   0,  15,   7,
      0,   1,   0,   6,   1,   0,  15,   9,   0,   1,   0,  20,   0,   7,   1,   0,
     15,  21,   0,   1,   0,  20,   0,   8,   1,   2,   0,   0,   0,   0,   0,   0,
      0,   0,   0,   0,   0,   0,  15,   6,   0,   1,   0,   9,   1,  15,  12,   0,
      1,  20,   0,   3,   0,   4,  22,   0,   0,  15,  15,  12,   0,   1,  20,   0,
      3,  22,   0,   0,   4,   0,  15,  15,   7,   0,  22,   0,   1,  16,   1,  77,
      7,   0,  22,   0,   2,  16,   2,  77,   6,   0,  22,   0,   3,  16,   1,   7,
      0,  22,   0,   4,  16,   2,  77,   7,   0,  22,   0,   5,  16,   2,  77,   6,
      0,  22,   0,   6,  16,   1,   7,   0,  22,   0,   7,  16,   2,  77,   7,   0,
     22,   0,   8,  16,   2,  77,   6,   0,  22,   0,   9,  16,   1,   6,   0,  22,
      0,  10,  16,   1,   8,   0,  16,   0,  22,   1,  11,  16,   1,   8,   0,  16,
     10,  22,   1,  11,  16,   1,   8,   0,  16,   0,  22,   1,  12,  16,   1,   8,
      0,  16,   1,  22,   1,  12,  16,   1,   8,   0,  16,  10,  22,   1,  12,  16,
      1,   6,   0,  22,   0,  13,  16,   1,   8,   0,  16,   0,  22,   1,  14,  16,
      1,   8,   0,  16,   4,  22,   1,  14,  16,   1,   8,   0,  16,   0,  22,   1,
     15,  16,   1,   8,   0,  16,   3,  22,   1,  15,  16,   1,
  ]);

  assertReturn(module, '$assert_return_0', 'external/testsuite/nop.wast', 58);
  assertReturn(module, '$assert_return_1', 'external/testsuite/nop.wast', 59);
  assertReturn(module, '$assert_return_2', 'external/testsuite/nop.wast', 60);
  assertReturn(module, '$assert_return_3', 'external/testsuite/nop.wast', 62);
  assertReturn(module, '$assert_return_4', 'external/testsuite/nop.wast', 63);
  assertReturn(module, '$assert_return_5', 'external/testsuite/nop.wast', 64);
  assertReturn(module, '$assert_return_6', 'external/testsuite/nop.wast', 66);
  assertReturn(module, '$assert_return_7', 'external/testsuite/nop.wast', 67);
  assertReturn(module, '$assert_return_8', 'external/testsuite/nop.wast', 68);
  assertReturn(module, '$assert_return_9', 'external/testsuite/nop.wast', 70);
  assertReturn(module, '$assert_return_10', 'external/testsuite/nop.wast', 72);
  assertReturn(module, '$assert_return_11', 'external/testsuite/nop.wast', 73);
  assertReturn(module, '$assert_return_12', 'external/testsuite/nop.wast', 75);
  assertReturn(module, '$assert_return_13', 'external/testsuite/nop.wast', 76);
  assertReturn(module, '$assert_return_14', 'external/testsuite/nop.wast', 77);
  assertReturn(module, '$assert_return_15', 'external/testsuite/nop.wast', 79);
  assertReturn(module, '$assert_return_16', 'external/testsuite/nop.wast', 81);
  assertReturn(module, '$assert_return_17', 'external/testsuite/nop.wast', 82);
  assertReturn(module, '$assert_return_18', 'external/testsuite/nop.wast', 83);
  assertReturn(module, '$assert_return_19', 'external/testsuite/nop.wast', 84);
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
