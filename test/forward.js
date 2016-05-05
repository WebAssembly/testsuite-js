var passed = 0;
var failed = 0;
var quiet = false;

testModule0();
end();

function testModule0() {
  var module = createModule([
      0,  97, 115, 109,  11,   0,   0,   0,   4, 116, 121, 112, 101,  10,   2,  64,
      1,   1,   1,   1,  64,   0,   1,   1,   8, 102, 117, 110,  99, 116, 105, 111,
    110,   7,   6,   0,   0,   1,   1,   1,   1,   6, 101, 120, 112, 111, 114, 116,
     84,   6,   0,   4, 101, 118, 101, 110,   1,   3, 111, 100, 100,   2,  16,  36,
     97, 115, 115, 101, 114, 116,  95, 114, 101, 116, 117, 114, 110,  95,  48,   3,
     16,  36,  97, 115, 115, 101, 114, 116,  95, 114, 101, 116, 117, 114, 110,  95,
     49,   4,  16,  36,  97, 115, 115, 101, 114, 116,  95, 114, 101, 116, 117, 114,
    110,  95,  50,   5,  16,  36,  97, 115, 115, 101, 114, 116,  95, 114, 101, 116,
    117, 114, 110,  95,  51,   4,  99, 111, 100, 101,  81,   6,  19,   0,  20,   0,
     16,   0,  77,   3,  16,   1,   4,  20,   0,  16,   1,  65,  22,   1,   1,  15,
     19,   0,  20,   0,  16,   0,  77,   3,  16,   0,   4,  20,   0,  16,   1,  65,
     22,   1,   0,  15,   9,   0,  16,  13,  22,   1,   0,  16,   0,  77,   9,   0,
     16,  20,  22,   1,   0,  16,   1,  77,   9,   0,  16,  13,  22,   1,   1,  16,
      1,  77,   9,   0,  16,  20,  22,   1,   1,  16,   0,  77,
  ]);

  assertReturn(module, '$assert_return_0', 'external/testsuite/forward.wast', 20);
  assertReturn(module, '$assert_return_1', 'external/testsuite/forward.wast', 21);
  assertReturn(module, '$assert_return_2', 'external/testsuite/forward.wast', 22);
  assertReturn(module, '$assert_return_3', 'external/testsuite/forward.wast', 23);
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
