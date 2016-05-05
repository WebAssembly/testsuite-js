var passed = 0;
var failed = 0;
var quiet = false;

testModule0();
testModule1();
testModule2();
end();

function testModule0() {
  var module = createModule([
      0,  97, 115, 109,  11,   0,   0,   0,   4, 116, 121, 112, 101,  27,   7,  64,
      0,   0,  64,   0,   0,  64,   0,   0,  64,   0,   1,   1,  64,   0,   1,   1,
     64,   1,   1,   1,   1,  64,   1,   1,   0,   6, 105, 109, 112, 111, 114, 116,
     17,   1,   6,   8, 115, 112, 101,  99, 116, 101, 115, 116,   5, 112, 114, 105,
    110, 116,   8, 102, 117, 110,  99, 116, 105, 111, 110,  11,  10,   0,   1,   4,
      5,   5,   6,   3,   3,   3,   0,   6, 101, 120, 112, 111, 114, 116,  89,   8,
      2,   3, 111, 110, 101,   3,   3, 116, 119, 111,   4,   5, 116, 104, 114, 101,
    101,   5,   4, 102, 111, 117, 114,   6,  16,  36,  97, 115, 115, 101, 114, 116,
     95, 114, 101, 116, 117, 114, 110,  95,  48,   7,  16,  36,  97, 115, 115, 101,
    114, 116,  95, 114, 101, 116, 117, 114, 110,  95,  49,   8,  16,  36,  97, 115,
    115, 101, 114, 116,  95, 114, 101, 116, 117, 114, 110,  95,  50,   9,   9,  36,
    105, 110, 118, 111, 107, 101,  95,  51,   4,  99, 111, 100, 101,  66,  10,   1,
      0,   1,   0,   3,   0,  16,  13,   6,   0,  20,   0,  16,   1,  64,   6,   0,
     20,   0,  16,   2,  65,   6,   0,  20,   0,  24,   1,   0,   7,   0,  22,   0,
      2,  16,  13,  77,   9,   0,  16,  13,  22,   1,   3,  16,  14,  77,   9,   0,
     16,  13,  22,   1,   4,  16,  11,  77,   7,   0,  16, 211,   0,  22,   1,   5,
  ]);

  assertReturn(module, '$assert_return_0', 'external/testsuite/func_ptrs.wast', 28);
  assertReturn(module, '$assert_return_1', 'external/testsuite/func_ptrs.wast', 29);
  assertReturn(module, '$assert_return_2', 'external/testsuite/func_ptrs.wast', 30);
  invoke(module, '$invoke_3');
}

function testModule1() {
  var module = createModule([
      0,  97, 115, 109,  11,   0,   0,   0,   4, 116, 121, 112, 101,  14,   3,  64,
      0,   1,   1,  64,   0,   1,   1,  64,   1,   1,   1,   1,   8, 102, 117, 110,
     99, 116, 105, 111, 110,  27,  26,   0,   0,   0,   1,   1,   2,   2,   0,   0,
      0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,
      0,   5, 116,  97,  98, 108, 101,   8,   7,   0,   1,   2,   3,   4,   0,   2,
      6, 101, 120, 112, 111, 114, 116, 214,   2,  21,   5,   5,  99,  97, 108, 108,
    116,   6,   5,  99,  97, 108, 108, 117,   7,  16,  36,  97, 115, 115, 101, 114,
    116,  95, 114, 101, 116, 117, 114, 110,  95,  48,   8,  16,  36,  97, 115, 115,
    101, 114, 116,  95, 114, 101, 116, 117, 114, 110,  95,  49,   9,  16,  36,  97,
    115, 115, 101, 114, 116,  95, 114, 101, 116, 117, 114, 110,  95,  50,  10,  14,
     36,  97, 115, 115, 101, 114, 116,  95, 116, 114,  97, 112,  95,  51,  11,  14,
     36,  97, 115, 115, 101, 114, 116,  95, 116, 114,  97, 112,  95,  52,  12,  16,
     36,  97, 115, 115, 101, 114, 116,  95, 114, 101, 116, 117, 114, 110,  95,  53,
     13,  16,  36,  97, 115, 115, 101, 114, 116,  95, 114, 101, 116, 117, 114, 110,
     95,  54,  14,  14,  36,  97, 115, 115, 101, 114, 116,  95, 116, 114,  97, 112,
     95,  55,  15,  14,  36,  97, 115, 115, 101, 114, 116,  95, 116, 114,  97, 112,
     95,  56,  16,  14,  36,  97, 115, 115, 101, 114, 116,  95, 116, 114,  97, 112,
     95,  57,  17,  15,  36,  97, 115, 115, 101, 114, 116,  95, 116, 114,  97, 112,
     95,  49,  48,  18,  15,  36,  97, 115, 115, 101, 114, 116,  95, 116, 114,  97,
    112,  95,  49,  49,  19,  15,  36,  97, 115, 115, 101, 114, 116,  95, 116, 114,
     97, 112,  95,  49,  50,  20,  17,  36,  97, 115, 115, 101, 114, 116,  95, 114,
    101, 116, 117, 114, 110,  95,  49,  51,  21,  17,  36,  97, 115, 115, 101, 114,
    116,  95, 114, 101, 116, 117, 114, 110,  95,  49,  52,  22,  15,  36,  97, 115,
    115, 101, 114, 116,  95, 116, 114,  97, 112,  95,  49,  53,  23,  15,  36,  97,
    115, 115, 101, 114, 116,  95, 116, 114,  97, 112,  95,  49,  54,  24,  15,  36,
     97, 115, 115, 101, 114, 116,  95, 116, 114,  97, 112,  95,  49,  55,  25,  15,
     36,  97, 115, 115, 101, 114, 116,  95, 116, 114,  97, 112,  95,  49,  56,   4,
     99, 111, 100, 101, 190,   1,  26,   3,   0,  16,   1,   3,   0,  16,   2,   3,
      0,  16,   3,   3,   0,  16,   4,   3,   0,  16,   5,   6,   0,  20,   0,  23,
      0,   0,   6,   0,  20,   0,  23,   0,   1,   9,   0,  16,   0,  22,   1,   5,
     16,   1,  77,   9,   0,  16,   1,  22,   1,   5,  16,   2,  77,   9,   0,  16,
      2,  22,   1,   5,  16,   3,  77,   6,   0,  16,   3,  22,   1,   5,   6,   0,
     16,   4,  22,   1,   5,   9,   0,  16,   5,  22,   1,   5,  16,   1,  77,   9,
      0,  16,   6,  22,   1,   5,  16,   3,  77,   6,   0,  16,   7,  22,   1,   5,
      7,   0,  16, 228,   0,  22,   1,   5,   6,   0,  16, 127,  22,   1,   5,   6,
      0,  16,   0,  22,   1,   6,   6,   0,  16,   1,  22,   1,   6,   6,   0,  16,
      2,  22,   1,   6,   9,   0,  16,   3,  22,   1,   6,  16,   4,  77,   9,   0,
     16,   4,  22,   1,   6,  16,   5,  77,   6,   0,  16,   5,  22,   1,   6,   6,
      0,  16,   6,  22,   1,   6,   6,   0,  16,   7,  22,   1,   6,   6,   0,  16,
    127,  22,   1,   6,
  ]);

  assertReturn(module, '$assert_return_0', 'external/testsuite/func_ptrs.wast', 58);
  assertReturn(module, '$assert_return_1', 'external/testsuite/func_ptrs.wast', 59);
  assertReturn(module, '$assert_return_2', 'external/testsuite/func_ptrs.wast', 60);
  assertTrap(module, '$assert_trap_3', 'external/testsuite/func_ptrs.wast', 61);
  assertTrap(module, '$assert_trap_4', 'external/testsuite/func_ptrs.wast', 62);
  assertReturn(module, '$assert_return_5', 'external/testsuite/func_ptrs.wast', 63);
  assertReturn(module, '$assert_return_6', 'external/testsuite/func_ptrs.wast', 64);
  assertTrap(module, '$assert_trap_7', 'external/testsuite/func_ptrs.wast', 65);
  assertTrap(module, '$assert_trap_8', 'external/testsuite/func_ptrs.wast', 66);
  assertTrap(module, '$assert_trap_9', 'external/testsuite/func_ptrs.wast', 67);
  assertTrap(module, '$assert_trap_10', 'external/testsuite/func_ptrs.wast', 69);
  assertTrap(module, '$assert_trap_11', 'external/testsuite/func_ptrs.wast', 70);
  assertTrap(module, '$assert_trap_12', 'external/testsuite/func_ptrs.wast', 71);
  assertReturn(module, '$assert_return_13', 'external/testsuite/func_ptrs.wast', 72);
  assertReturn(module, '$assert_return_14', 'external/testsuite/func_ptrs.wast', 73);
  assertTrap(module, '$assert_trap_15', 'external/testsuite/func_ptrs.wast', 74);
  assertTrap(module, '$assert_trap_16', 'external/testsuite/func_ptrs.wast', 75);
  assertTrap(module, '$assert_trap_17', 'external/testsuite/func_ptrs.wast', 76);
  assertTrap(module, '$assert_trap_18', 'external/testsuite/func_ptrs.wast', 77);
}

function testModule2() {
  var module = createModule([
      0,  97, 115, 109,  11,   0,   0,   0,   4, 116, 121, 112, 101,  14,   3,  64,
      0,   1,   1,  64,   1,   1,   0,  64,   1,   1,   1,   1,   6, 105, 109, 112,
    111, 114, 116,  17,   1,   1,   8, 115, 112, 101,  99, 116, 101, 115, 116,   5,
    112, 114, 105, 110, 116,   8, 102, 117, 110,  99, 116, 105, 111, 110,   6,   5,
      0,   0,   2,   0,   0,   5, 116,  97,  98, 108, 101,   3,   2,   0,   1,   6,
    101, 120, 112, 111, 114, 116,  44,   3,   2,   5,  99,  97, 108, 108, 116,   3,
     16,  36,  97, 115, 115, 101, 114, 116,  95, 114, 101, 116, 117, 114, 110,  95,
     48,   4,  16,  36,  97, 115, 115, 101, 114, 116,  95, 114, 101, 116, 117, 114,
    110,  95,  49,   4,  99, 111, 100, 101,  36,   5,   3,   0,  16,   1,   3,   0,
     16,   2,   6,   0,  20,   0,  23,   0,   0,   9,   0,  16,   0,  22,   1,   2,
     16,   1,  77,   9,   0,  16,   1,  22,   1,   2,  16,   2,  77,
  ]);

  assertReturn(module, '$assert_return_0', 'external/testsuite/func_ptrs.wast', 93);
  assertReturn(module, '$assert_return_1', 'external/testsuite/func_ptrs.wast', 94);
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
