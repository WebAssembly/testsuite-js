var passed = 0;
var failed = 0;
var quiet = false;

testModule0();
end();

function testModule0() {
  var module = createModule([
      0,  97, 115, 109,  11,   0,   0,   0,   4, 116, 121, 112, 101,  23,   5,  64,
      1,   1,   0,  64,   1,   2,   0,  64,   2,   1,   3,   0,  64,   2,   2,   4,
      0,  64,   0,   1,   1,   6, 105, 109, 112, 111, 114, 116,  65,   4,   0,   8,
    115, 112, 101,  99, 116, 101, 115, 116,   5, 112, 114, 105, 110, 116,   1,   8,
    115, 112, 101,  99, 116, 101, 115, 116,   5, 112, 114, 105, 110, 116,   2,   8,
    115, 112, 101,  99, 116, 101, 115, 116,   5, 112, 114, 105, 110, 116,   3,   8,
    115, 112, 101,  99, 116, 101, 115, 116,   5, 112, 114, 105, 110, 116,   8, 102,
    117, 110,  99, 116, 105, 111, 110,   5,   4,   0,   1,   4,   4,   6, 101, 120,
    112, 111, 114, 116,  55,   4,   0,   7, 112, 114, 105, 110, 116,  51,  50,   1,
      7, 112, 114, 105, 110, 116,  54,  52,   2,  16,  36,  97, 115, 115, 101, 114,
    116,  95, 114, 101, 116, 117, 114, 110,  95,  48,   3,  16,  36,  97, 115, 115,
    101, 114, 116,  95, 114, 101, 116, 117, 114, 110,  95,  49,   4,  99, 111, 100,
    101,  63,   4,  19,   0,  20,   0,  16,   1,  64,  19,   0,   0,  40,  66,  24,
      2,   2,  20,   0,  24,   1,   0,  23,   0,  20,   0,  17,   1,  91,  18,   0,
      0,   0,   0,   0, 128,  74,  64,  24,   2,   3,  20,   0,  24,   1,   1,   8,
      0,  16,  13,  22,   1,   0,  16,   1,   8,   0,  17,  24,  22,   1,   1,  16,
      1,
  ]);

  assertReturn(module, '$assert_return_0', 'external/testsuite/imports.wast', 24);
  assertReturn(module, '$assert_return_1', 'external/testsuite/imports.wast', 25);
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
