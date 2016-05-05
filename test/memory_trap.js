var passed = 0;
var failed = 0;
var quiet = false;

testModule0();
end();

function testModule0() {
  var module = createModule([
      0,  97, 115, 109,  11,   0,   0,   0,   4, 116, 121, 112, 101,  23,   5,  64,
      0,   1,   1,  64,   2,   1,   1,   1,   1,  64,   1,   1,   1,   1,  64,   1,
      1,   0,  64,   0,   0,   8, 102, 117, 110,  99, 116, 105, 111, 110,  18,  17,
      0,   1,   2,   3,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,
      4,   6, 109, 101, 109, 111, 114, 121,   3,   1,   1,   0,   6, 101, 120, 112,
    111, 114, 116, 242,   1,  16,   1,   5, 115, 116, 111, 114, 101,   2,   4, 108,
    111,  97, 100,   3,  11, 103, 114, 111, 119,  95, 109, 101, 109, 111, 114, 121,
      4,  16,  36,  97, 115, 115, 101, 114, 116,  95, 114, 101, 116, 117, 114, 110,
     95,  48,   5,  16,  36,  97, 115, 115, 101, 114, 116,  95, 114, 101, 116, 117,
    114, 110,  95,  49,   6,  14,  36,  97, 115, 115, 101, 114, 116,  95, 116, 114,
     97, 112,  95,  50,   7,  14,  36,  97, 115, 115, 101, 114, 116,  95, 116, 114,
     97, 112,  95,  51,   8,  14,  36,  97, 115, 115, 101, 114, 116,  95, 116, 114,
     97, 112,  95,  52,   9,  14,  36,  97, 115, 115, 101, 114, 116,  95, 116, 114,
     97, 112,  95,  53,  10,  14,  36,  97, 115, 115, 101, 114, 116,  95, 116, 114,
     97, 112,  95,  54,  11,  14,  36,  97, 115, 115, 101, 114, 116,  95, 116, 114,
     97, 112,  95,  55,  12,  14,  36,  97, 115, 115, 101, 114, 116,  95, 116, 114,
     97, 112,  95,  56,  13,  14,  36,  97, 115, 115, 101, 114, 116,  95, 116, 114,
     97, 112,  95,  57,  14,  15,  36,  97, 115, 115, 101, 114, 116,  95, 116, 114,
     97, 112,  95,  49,  48,  15,  15,  36,  97, 115, 115, 101, 114, 116,  95, 116,
    114,  97, 112,  95,  49,  49,  16,  15,  36,  97, 115, 115, 101, 114, 116,  95,
    116, 114,  97, 112,  95,  49,  50,   4,  99, 111, 100, 101, 159,   1,  17,   7,
      0,  59,  16, 128, 128,   4,  66,  12,   0,  22,   0,   0,  20,   0,  64,  20,
      1,  51,   2,   0,  10,   0,  22,   0,   0,  20,   0,  64,  42,   2,   0,   4,
      0,  20,   0,  57,  11,   0,  16, 124,  16,  42,  22,   2,   1,  16,  42,  77,
      9,   0,  16, 124,  22,   1,   2,  16,  42,  77,   8,   0,  16, 125,  16,  13,
     22,   2,   1,   6,   0,  16, 125,  22,   1,   2,   8,   0,  16, 126,  16,  13,
     22,   2,   1,   6,   0,  16, 126,  22,   1,   2,   8,   0,  16, 127,  16,  13,
     22,   2,   1,   6,   0,  16, 127,  22,   1,   2,   8,   0,  16,   0,  16,  13,
     22,   2,   1,   6,   0,  16,   0,  22,   1,   2,  12,   0,  16, 128, 128, 128,
    128, 120,  16,  13,  22,   2,   1,  10,   0,  16, 128, 128, 128, 128, 120,  22,
      1,   2,  10,   0,  16, 128, 128, 128, 128, 120,  22,   1,   3,
  ]);

  assertReturn(module, '$assert_return_0', 'external/testsuite/memory_trap.wast', 24);
  assertReturn(module, '$assert_return_1', 'external/testsuite/memory_trap.wast', 25);
  assertTrap(module, '$assert_trap_2', 'external/testsuite/memory_trap.wast', 26);
  assertTrap(module, '$assert_trap_3', 'external/testsuite/memory_trap.wast', 27);
  assertTrap(module, '$assert_trap_4', 'external/testsuite/memory_trap.wast', 28);
  assertTrap(module, '$assert_trap_5', 'external/testsuite/memory_trap.wast', 29);
  assertTrap(module, '$assert_trap_6', 'external/testsuite/memory_trap.wast', 30);
  assertTrap(module, '$assert_trap_7', 'external/testsuite/memory_trap.wast', 31);
  assertTrap(module, '$assert_trap_8', 'external/testsuite/memory_trap.wast', 32);
  assertTrap(module, '$assert_trap_9', 'external/testsuite/memory_trap.wast', 33);
  assertTrap(module, '$assert_trap_10', 'external/testsuite/memory_trap.wast', 34);
  assertTrap(module, '$assert_trap_11', 'external/testsuite/memory_trap.wast', 35);
  assertTrap(module, '$assert_trap_12', 'external/testsuite/memory_trap.wast', 36);
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
