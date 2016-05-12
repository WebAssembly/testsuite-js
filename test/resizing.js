var passed = 0;
var failed = 0;
var quiet = false;

testModule0();
end();

function testModule0() {
  var module = createModule([
      0,  97, 115, 109,  11,   0,   0,   0,   4, 116, 121, 112, 101,  10,   2,  64,
      0,   1,   1,  64,   1,   1,   1,   1,   8, 102, 117, 110,  99, 116, 105, 111,
    110,  26,  25,   0,   0,   0,   0,   1,   0,   0,   0,   0,   0,   0,   0,   0,
      0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   6, 109, 101, 109,
    111, 114, 121,   3,   0,   0,   0,   6, 101, 120, 112, 111, 114, 116, 164,   3,
     25,   0,  12, 108, 111,  97, 100,  95,  97, 116,  95, 122, 101, 114, 111,   1,
     13, 115, 116, 111, 114, 101,  95,  97, 116,  95, 122, 101, 114, 111,   2,  17,
    108, 111,  97, 100,  95,  97, 116,  95, 112,  97, 103, 101,  95, 115, 105, 122,
    101,   3,  18, 115, 116, 111, 114, 101,  95,  97, 116,  95, 112,  97, 103, 101,
     95, 115, 105, 122, 101,   4,   4, 103, 114, 111, 119,   5,   4, 115, 105, 122,
    101,   6,  16,  36,  97, 115, 115, 101, 114, 116,  95, 114, 101, 116, 117, 114,
    110,  95,  48,   7,  14,  36,  97, 115, 115, 101, 114, 116,  95, 116, 114,  97,
    112,  95,  49,   8,  14,  36,  97, 115, 115, 101, 114, 116,  95, 116, 114,  97,
    112,  95,  50,   9,  14,  36,  97, 115, 115, 101, 114, 116,  95, 116, 114,  97,
    112,  95,  51,  10,  14,  36,  97, 115, 115, 101, 114, 116,  95, 116, 114,  97,
    112,  95,  52,  11,  16,  36,  97, 115, 115, 101, 114, 116,  95, 114, 101, 116,
    117, 114, 110,  95,  53,  12,  16,  36,  97, 115, 115, 101, 114, 116,  95, 114,
    101, 116, 117, 114, 110,  95,  54,  13,  16,  36,  97, 115, 115, 101, 114, 116,
     95, 114, 101, 116, 117, 114, 110,  95,  55,  14,  16,  36,  97, 115, 115, 101,
    114, 116,  95, 114, 101, 116, 117, 114, 110,  95,  56,  15,  16,  36,  97, 115,
    115, 101, 114, 116,  95, 114, 101, 116, 117, 114, 110,  95,  57,  16,  15,  36,
     97, 115, 115, 101, 114, 116,  95, 116, 114,  97, 112,  95,  49,  48,  17,  15,
     36,  97, 115, 115, 101, 114, 116,  95, 116, 114,  97, 112,  95,  49,  49,  18,
     17,  36,  97, 115, 115, 101, 114, 116,  95, 114, 101, 116, 117, 114, 110,  95,
     49,  50,  19,  17,  36,  97, 115, 115, 101, 114, 116,  95, 114, 101, 116, 117,
    114, 110,  95,  49,  51,  20,  17,  36,  97, 115, 115, 101, 114, 116,  95, 114,
    101, 116, 117, 114, 110,  95,  49,  52,  21,  17,  36,  97, 115, 115, 101, 114,
    116,  95, 114, 101, 116, 117, 114, 110,  95,  49,  53,  22,  17,  36,  97, 115,
    115, 101, 114, 116,  95, 114, 101, 116, 117, 114, 110,  95,  49,  54,  23,  17,
     36,  97, 115, 115, 101, 114, 116,  95, 114, 101, 116, 117, 114, 110,  95,  49,
     55,  24,  17,  36,  97, 115, 115, 101, 114, 116,  95, 114, 101, 116, 117, 114,
    110,  95,  49,  56,   4,  99, 111, 100, 101, 183,   1,  25,   6,   0,  16,   0,
     42,   2,   0,   8,   0,  16,   0,  16,   2,  51,   2,   0,   8,   0,  16, 128,
    128,   4,  42,   2,   0,  10,   0,  16, 128, 128,   4,  16,   3,  51,   2,   0,
      4,   0,  20,   0,  57,   2,   0,  59,   7,   0,  22,   0,   5,  16,   0,  77,
      4,   0,  22,   0,   1,   4,   0,  22,   0,   0,   4,   0,  22,   0,   3,   4,
      0,  22,   0,   2,   9,   0,  16,   1,  22,   1,   4,  16,   0,  77,   7,   0,
     22,   0,   5,  16,   1,  77,   7,   0,  22,   0,   0,  16,   0,  77,   7,   0,
     22,   0,   1,  16,   2,  77,   7,   0,  22,   0,   0,  16,   2,  77,   4,   0,
     22,   0,   3,   4,   0,  22,   0,   2,   9,   0,  16,   4,  22,   1,   4,  16,
      1,  77,   7,   0,  22,   0,   5,  16,   5,  77,   7,   0,  22,   0,   0,  16,
      2,  77,   7,   0,  22,   0,   1,  16,   2,  77,   7,   0,  22,   0,   2,  16,
      0,  77,   7,   0,  22,   0,   3,  16,   3,  77,   7,   0,  22,   0,   2,  16,
      3,  77,
  ]);

  assertReturn(module, '$assert_return_0', 'external/testsuite/resizing.wast', 23);
  assertTrap(module, '$assert_trap_1', 'external/testsuite/resizing.wast', 24);
  assertTrap(module, '$assert_trap_2', 'external/testsuite/resizing.wast', 25);
  assertTrap(module, '$assert_trap_3', 'external/testsuite/resizing.wast', 26);
  assertTrap(module, '$assert_trap_4', 'external/testsuite/resizing.wast', 27);
  assertReturn(module, '$assert_return_5', 'external/testsuite/resizing.wast', 28);
  assertReturn(module, '$assert_return_6', 'external/testsuite/resizing.wast', 29);
  assertReturn(module, '$assert_return_7', 'external/testsuite/resizing.wast', 30);
  assertReturn(module, '$assert_return_8', 'external/testsuite/resizing.wast', 31);
  assertReturn(module, '$assert_return_9', 'external/testsuite/resizing.wast', 32);
  assertTrap(module, '$assert_trap_10', 'external/testsuite/resizing.wast', 33);
  assertTrap(module, '$assert_trap_11', 'external/testsuite/resizing.wast', 34);
  assertReturn(module, '$assert_return_12', 'external/testsuite/resizing.wast', 35);
  assertReturn(module, '$assert_return_13', 'external/testsuite/resizing.wast', 36);
  assertReturn(module, '$assert_return_14', 'external/testsuite/resizing.wast', 37);
  assertReturn(module, '$assert_return_15', 'external/testsuite/resizing.wast', 38);
  assertReturn(module, '$assert_return_16', 'external/testsuite/resizing.wast', 39);
  assertReturn(module, '$assert_return_17', 'external/testsuite/resizing.wast', 40);
  assertReturn(module, '$assert_return_18', 'external/testsuite/resizing.wast', 41);
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
