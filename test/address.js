var passed = 0;
var failed = 0;
var quiet = false;

testModule0();
end();

function testModule0() {
  var module = createModule([
      0,  97, 115, 109,  11,   0,   0,   0,   4, 116, 121, 112, 101,   8,   2,  64,
      1,   1,   0,  64,   0,   0,   6, 105, 109, 112, 111, 114, 116,  17,   1,   0,
      8, 115, 112, 101,  99, 116, 101, 115, 116,   5, 112, 114, 105, 110, 116,   8,
    102, 117, 110,  99, 116, 105, 111, 110,   8,   7,   0,   0,   1,   1,   1,   1,
      1,   6, 109, 101, 109, 111, 114, 121,   3,   1,   1,   0,   6, 101, 120, 112,
    111, 114, 116,  83,   7,   0,   4, 103, 111, 111, 100,   1,   4,  98,  97, 100,
     50,   2,   9,  36, 105, 110, 118, 111, 107, 101,  95,  48,   3,   9,  36, 105,
    110, 118, 111, 107, 101,  95,  49,   4,  14,  36,  97, 115, 115, 101, 114, 116,
     95, 116, 114,  97, 112,  95,  50,   5,  14,  36,  97, 115, 115, 101, 114, 116,
     95, 116, 114,  97, 112,  95,  51,   6,  14,  36,  97, 115, 115, 101, 114, 116,
     95, 116, 114,  97, 112,  95,  52,   4,  99, 111, 100, 101, 157,   1,   7, 105,
      0,  20,   0,  33,   0,   0,  24,   1,   0,  20,   0,  33,   0,   1,  24,   1,
      0,  20,   0,  33,   0,   2,  24,   1,   0,  20,   0,  33,   0,  25,  24,   1,
      0,  20,   0,  35,   1,   0,  24,   1,   0,  20,   0,  35,   0,   0,  24,   1,
      0,  20,   0,  35,   0,   1,  24,   1,   0,  20,   0,  35,   1,   2,  24,   1,
      0,  20,   0,  35,   0,  25,  24,   1,   0,  20,   0,  42,   2,   0,  24,   1,
      0,  20,   0,  42,   0,   1,  24,   1,   0,  20,   0,  42,   1,   2,  24,   1,
      0,  20,   0,  42,   0,  25,  24,   1,   0,  10,   0,  20,   0,  42,   2, 255,
    255, 255, 255,  15,   6,   0,  16,   0,  22,   1,   0,   8,   0,  16, 227, 255,
      3,  22,   1,   0,   8,   0,  16, 228, 255,   3,  22,   1,   0,   6,   0,  16,
      0,  22,   1,   1,   6,   0,  16,   1,  22,   1,   1,   4, 100,  97, 116,  97,
     29,   1,   0,  26,  97,  98,  99, 100, 101, 102, 103, 104, 105, 106, 107, 108,
    109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122,
  ]);

  invoke(module, '$invoke_0');
  invoke(module, '$invoke_1');
  assertTrap(module, '$assert_trap_2', 'external/testsuite/address.wast', 30);
  assertTrap(module, '$assert_trap_3', 'external/testsuite/address.wast', 31);
  assertTrap(module, '$assert_trap_4', 'external/testsuite/address.wast', 32);
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
