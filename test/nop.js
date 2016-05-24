var passed = 0;
var failed = 0;
var quiet = false;

testModule0();
end();

function testModule0() {
  var module = createModule([
      0,  97, 115, 109,  11,   0,   0,   0,   4, 116, 121, 112, 101,   8,   2,  64,
      0,   0,  64,   0,   1,   1,   8, 102, 117, 110,  99, 116, 105, 111, 110,   5,
      4,   0,   1,   1,   1,   6, 101, 120, 112, 111, 114, 116,  49,   4,   0,   4,
    101, 118,  97, 108,   1,   4, 100, 114, 111, 112,   2,  16,  36,  97, 115, 115,
    101, 114, 116,  95, 114, 101, 116, 117, 114, 110,  95,  48,   3,  16,  36,  97,
    115, 115, 101, 114, 116,  95, 114, 101, 116, 117, 114, 110,  95,  49,   4,  99,
    111, 100, 101,  24,   4,   2,   0,   0,   4,   0,   0,  16,   1,   6,   0,  22,
      0,   0,  16,   1,   7,   0,  22,   0,   1,  16,   1,  77,
  ]);

  assertReturn(module, '$assert_return_0', 'external/testsuite/nop.wast', 14);
  assertReturn(module, '$assert_return_1', 'external/testsuite/nop.wast', 15);
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
