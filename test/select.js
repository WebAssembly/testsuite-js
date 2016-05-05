var passed = 0;
var failed = 0;
var quiet = false;

testModule0();
end();

function testModule0() {
  var module = createModule([
      0,  97, 115, 109,  11,   0,   0,   0,   4, 116, 121, 112, 101,  38,   6,  64,
      3,   1,   1,   1,   1,   1,  64,   3,   2,   2,   1,   1,   2,  64,   3,   3,
      3,   1,   1,   3,  64,   3,   4,   4,   1,   1,   4,  64,   1,   1,   1,   1,
     64,   0,   1,   1,   8, 102, 117, 110,  99, 116, 105, 111, 110,  35,  34,   0,
      1,   2,   3,   4,   4,   5,   5,   5,   5,   5,   5,   5,   5,   5,   5,   5,
      5,   5,   5,   5,   5,   5,   5,   5,   5,   5,   5,   5,   5,   5,   5,   5,
      5,   6, 101, 120, 112, 111, 114, 116, 209,   4,  34,   0,  10, 115, 101, 108,
    101,  99, 116,  95, 105,  51,  50,   1,  10, 115, 101, 108, 101,  99, 116,  95,
    105,  54,  52,   2,  10, 115, 101, 108, 101,  99, 116,  95, 102,  51,  50,   3,
     10, 115, 101, 108, 101,  99, 116,  95, 102,  54,  52,   4,  13, 115, 101, 108,
    101,  99, 116,  95, 116, 114,  97, 112,  95, 108,   5,  13, 115, 101, 108, 101,
     99, 116,  95, 116, 114,  97, 112,  95, 114,   6,  16,  36,  97, 115, 115, 101,
    114, 116,  95, 114, 101, 116, 117, 114, 110,  95,  48,   7,  16,  36,  97, 115,
    115, 101, 114, 116,  95, 114, 101, 116, 117, 114, 110,  95,  49,   8,  16,  36,
     97, 115, 115, 101, 114, 116,  95, 114, 101, 116, 117, 114, 110,  95,  50,   9,
     16,  36,  97, 115, 115, 101, 114, 116,  95, 114, 101, 116, 117, 114, 110,  95,
     51,  10,  16,  36,  97, 115, 115, 101, 114, 116,  95, 114, 101, 116, 117, 114,
    110,  95,  52,  11,  16,  36,  97, 115, 115, 101, 114, 116,  95, 114, 101, 116,
    117, 114, 110,  95,  53,  12,  16,  36,  97, 115, 115, 101, 114, 116,  95, 114,
    101, 116, 117, 114, 110,  95,  54,  13,  16,  36,  97, 115, 115, 101, 114, 116,
     95, 114, 101, 116, 117, 114, 110,  95,  55,  14,  16,  36,  97, 115, 115, 101,
    114, 116,  95, 114, 101, 116, 117, 114, 110,  95,  56,  15,  16,  36,  97, 115,
    115, 101, 114, 116,  95, 114, 101, 116, 117, 114, 110,  95,  57,  16,  17,  36,
     97, 115, 115, 101, 114, 116,  95, 114, 101, 116, 117, 114, 110,  95,  49,  48,
     17,  17,  36,  97, 115, 115, 101, 114, 116,  95, 114, 101, 116, 117, 114, 110,
     95,  49,  49,  18,  17,  36,  97, 115, 115, 101, 114, 116,  95, 114, 101, 116,
    117, 114, 110,  95,  49,  50,  19,  17,  36,  97, 115, 115, 101, 114, 116,  95,
    114, 101, 116, 117, 114, 110,  95,  49,  51,  20,  17,  36,  97, 115, 115, 101,
    114, 116,  95, 114, 101, 116, 117, 114, 110,  95,  49,  52,  21,  17,  36,  97,
    115, 115, 101, 114, 116,  95, 114, 101, 116, 117, 114, 110,  95,  49,  53,  22,
     17,  36,  97, 115, 115, 101, 114, 116,  95, 114, 101, 116, 117, 114, 110,  95,
     49,  54,  23,  17,  36,  97, 115, 115, 101, 114, 116,  95, 114, 101, 116, 117,
    114, 110,  95,  49,  55,  24,  17,  36,  97, 115, 115, 101, 114, 116,  95, 114,
    101, 116, 117, 114, 110,  95,  49,  56,  25,  17,  36,  97, 115, 115, 101, 114,
    116,  95, 114, 101, 116, 117, 114, 110,  95,  49,  57,  26,  17,  36,  97, 115,
    115, 101, 114, 116,  95, 114, 101, 116, 117, 114, 110,  95,  50,  48,  27,  17,
     36,  97, 115, 115, 101, 114, 116,  95, 114, 101, 116, 117, 114, 110,  95,  50,
     49,  28,  17,  36,  97, 115, 115, 101, 114, 116,  95, 114, 101, 116, 117, 114,
    110,  95,  50,  50,  29,  17,  36,  97, 115, 115, 101, 114, 116,  95, 114, 101,
    116, 117, 114, 110,  95,  50,  51,  30,  15,  36,  97, 115, 115, 101, 114, 116,
     95, 116, 114,  97, 112,  95,  50,  52,  31,  15,  36,  97, 115, 115, 101, 114,
    116,  95, 116, 114,  97, 112,  95,  50,  53,  32,  15,  36,  97, 115, 115, 101,
    114, 116,  95, 116, 114,  97, 112,  95,  50,  54,  33,  15,  36,  97, 115, 115,
    101, 114, 116,  95, 116, 114,  97, 112,  95,  50,  55,   4,  99, 111, 100, 101,
    195,   5,  34,   8,   0,  20,   0,  20,   1,  20,   2,   5,   8,   0,  20,   0,
     20,   1,  20,   2,   5,   8,   0,  20,   0,  20,   1,  20,   2,   5,   8,   0,
     20,   0,  20,   1,  20,   2,   5,   7,   0,  10,  16,   0,  20,   0,   5,   7,
      0,  16,   0,  10,  20,   0,   5,  13,   0,  16,   1,  16,   2,  16,   1,  22,
      3,   0,  16,   1,  77,  13,   0,  17,   2,  17,   1,  16,   1,  22,   3,   1,
     17,   2, 104,  22,   0,  19,   0,   0, 128,  63,  19,   0,   0,   0,  64,  16,
      1,  22,   3,   2,  19,   0,   0, 128,  63, 131,  34,   0,  18,   0,   0,   0,
      0,   0,   0, 240,  63,  18,   0,   0,   0,   0,   0,   0,   0,  64,  16,   1,
     22,   3,   3,  18,   0,   0,   0,   0,   0,   0, 240,  63, 151,  13,   0,  16,
      1,  16,   2,  16,   0,  22,   3,   0,  16,   2,  77,  13,   0,  16,   2,  16,
      1,  16,   0,  22,   3,   0,  16,   1,  77,  13,   0,  17,   2,  17,   1,  16,
    127,  22,   3,   1,  17,   2, 104,  17,   0,  17,   2,  17,   1,  16, 240, 225,
    195, 135, 127,  22,   3,   1,  17,   2, 104,  24,   0,  19,   0,   0, 192, 127,
     19,   0,   0, 128,  63,  16,   1,  22,   3,   2, 180,  19,   0,   0, 192, 127,
    180,  77,  24,   0,  19,   4,   3, 130, 127,  19,   0,   0, 128,  63,  16,   1,
     22,   3,   2, 180,  19,   4,   3, 130, 127, 180,  77,  22,   0,  19,   0,   0,
    192, 127,  19,   0,   0, 128,  63,  16,   0,  22,   3,   2,  19,   0,   0, 128,
     63, 131,  22,   0,  19,   4,   3, 130, 127,  19,   0,   0, 128,  63,  16,   0,
     22,   3,   2,  19,   0,   0, 128,  63, 131,  22,   0,  19,   0,   0,   0,  64,
     19,   0,   0, 192, 127,  16,   1,  22,   3,   2,  19,   0,   0,   0,  64, 131,
     22,   0,  19,   0,   0,   0,  64,  19,   4,   3, 130, 127,  16,   1,  22,   3,
      2,  19,   0,   0,   0,  64, 131,  24,   0,  19,   0,   0,   0,  64,  19,   0,
      0, 192, 127,  16,   0,  22,   3,   2, 180,  19,   0,   0, 192, 127, 180,  77,
     24,   0,  19,   0,   0,   0,  64,  19,   4,   3, 130, 127,  16,   0,  22,   3,
      2, 180,  19,   4,   3, 130, 127, 180,  77,  36,   0,  18,   0,   0,   0,   0,
      0,   0, 248, 127,  18,   0,   0,   0,   0,   0,   0, 240,  63,  16,   1,  22,
      3,   3, 181,  18,   0,   0,   0,   0,   0,   0, 248, 127, 181, 104,  36,   0,
     18,   4,   3,   2,   0,   0,   0, 240, 127,  18,   0,   0,   0,   0,   0,   0,
    240,  63,  16,   1,  22,   3,   3, 181,  18,   4,   3,   2,   0,   0,   0, 240,
    127, 181, 104,  34,   0,  18,   0,   0,   0,   0,   0,   0, 248, 127,  18,   0,
      0,   0,   0,   0,   0, 240,  63,  16,   0,  22,   3,   3,  18,   0,   0,   0,
      0,   0,   0, 240,  63, 151,  34,   0,  18,   4,   3,   2,   0,   0,   0, 240,
    127,  18,   0,   0,   0,   0,   0,   0, 240,  63,  16,   0,  22,   3,   3,  18,
      0,   0,   0,   0,   0,   0, 240,  63, 151,  34,   0,  18,   0,   0,   0,   0,
      0,   0,   0,  64,  18,   0,   0,   0,   0,   0,   0, 248, 127,  16,   1,  22,
      3,   3,  18,   0,   0,   0,   0,   0,   0,   0,  64, 151,  34,   0,  18,   0,
      0,   0,   0,   0,   0,   0,  64,  18,   4,   3,   2,   0,   0,   0, 240, 127,
     16,   1,  22,   3,   3,  18,   0,   0,   0,   0,   0,   0,   0,  64, 151,  36,
      0,  18,   0,   0,   0,   0,   0,   0,   0,  64,  18,   0,   0,   0,   0,   0,
      0, 248, 127,  16,   0,  22,   3,   3, 181,  18,   0,   0,   0,   0,   0,   0,
    248, 127, 181, 104,  36,   0,  18,   0,   0,   0,   0,   0,   0,   0,  64,  18,
      4,   3,   2,   0,   0,   0, 240, 127,  16,   0,  22,   3,   3, 181,  18,   4,
      3,   2,   0,   0,   0, 240, 127, 181, 104,   6,   0,  16,   1,  22,   1,   4,
      6,   0,  16,   0,  22,   1,   4,   6,   0,  16,   1,  22,   1,   5,   6,   0,
     16,   0,  22,   1,   5,
  ]);

  assertReturn(module, '$assert_return_0', 'external/testsuite/select.wast', 28);
  assertReturn(module, '$assert_return_1', 'external/testsuite/select.wast', 29);
  assertReturn(module, '$assert_return_2', 'external/testsuite/select.wast', 30);
  assertReturn(module, '$assert_return_3', 'external/testsuite/select.wast', 31);
  assertReturn(module, '$assert_return_4', 'external/testsuite/select.wast', 33);
  assertReturn(module, '$assert_return_5', 'external/testsuite/select.wast', 34);
  assertReturn(module, '$assert_return_6', 'external/testsuite/select.wast', 35);
  assertReturn(module, '$assert_return_7', 'external/testsuite/select.wast', 36);
  assertReturn(module, '$assert_return_8', 'external/testsuite/select.wast', 38);
  assertReturn(module, '$assert_return_9', 'external/testsuite/select.wast', 39);
  assertReturn(module, '$assert_return_10', 'external/testsuite/select.wast', 40);
  assertReturn(module, '$assert_return_11', 'external/testsuite/select.wast', 41);
  assertReturn(module, '$assert_return_12', 'external/testsuite/select.wast', 42);
  assertReturn(module, '$assert_return_13', 'external/testsuite/select.wast', 43);
  assertReturn(module, '$assert_return_14', 'external/testsuite/select.wast', 44);
  assertReturn(module, '$assert_return_15', 'external/testsuite/select.wast', 45);
  assertReturn(module, '$assert_return_16', 'external/testsuite/select.wast', 47);
  assertReturn(module, '$assert_return_17', 'external/testsuite/select.wast', 48);
  assertReturn(module, '$assert_return_18', 'external/testsuite/select.wast', 49);
  assertReturn(module, '$assert_return_19', 'external/testsuite/select.wast', 50);
  assertReturn(module, '$assert_return_20', 'external/testsuite/select.wast', 51);
  assertReturn(module, '$assert_return_21', 'external/testsuite/select.wast', 52);
  assertReturn(module, '$assert_return_22', 'external/testsuite/select.wast', 53);
  assertReturn(module, '$assert_return_23', 'external/testsuite/select.wast', 54);
  assertTrap(module, '$assert_trap_24', 'external/testsuite/select.wast', 56);
  assertTrap(module, '$assert_trap_25', 'external/testsuite/select.wast', 57);
  assertTrap(module, '$assert_trap_26', 'external/testsuite/select.wast', 58);
  assertTrap(module, '$assert_trap_27', 'external/testsuite/select.wast', 59);
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
