var passed = 0;
var failed = 0;
var quiet = false;

testModule0();
end();

function testModule0() {
  var module = createModule([
      0,  97, 115, 109,  11,   0,   0,   0,   4, 116, 121, 112, 101,   8,   2,  64,
      0,   0,  64,   0,   1,   1,   8, 102, 117, 110,  99, 116, 105, 111, 110,   9,
      8,   0,   1,   1,   1,   0,   1,   1,   1,   6, 101, 120, 112, 111, 114, 116,
     99,   8,   0,   5, 101, 109, 112, 116, 121,   1,   8, 115, 105, 110, 103, 117,
    108,  97, 114,   2,   5, 109, 117, 108, 116, 105,   3,   7, 101, 102, 102, 101,
     99, 116, 115,   4,   9,  36, 105, 110, 118, 111, 107, 101,  95,  48,   5,  16,
     36,  97, 115, 115, 101, 114, 116,  95, 114, 101, 116, 117, 114, 110,  95,  49,
      6,  16,  36,  97, 115, 115, 101, 114, 116,  95, 114, 101, 116, 117, 114, 110,
     95,  50,   7,  16,  36,  97, 115, 115, 101, 114, 116,  95, 114, 101, 116, 117,
    114, 110,  95,  51,   4,  99, 111, 100, 101,  87,   8,   5,   0,   1,  15,   1,
     15,   5,   0,   1,  16,   7,  15,  11,   0,   1,  16,   5,  16,   6,  16,   7,
     16,   8,  15,  32,   1,   1,   1,   1,  16,   1,  21,   0,  20,   0,  16,   3,
     66,  21,   0,  20,   0,  16,   5,  65,  21,   0,  20,   0,  16,   7,  66,  21,
      0,  15,  20,   0,   4,   0,  22,   0,   0,   7,   0,  22,   0,   1,  16,   7,
     77,   7,   0,  22,   0,   2,  16,   8,  77,   7,   0,  22,   0,   3,  16, 114,
     77,
  ]);

  invoke(module, '$invoke_0');
  assertReturn(module, '$assert_return_1', 'external/testsuite/block.wast', 33);
  assertReturn(module, '$assert_return_2', 'external/testsuite/block.wast', 34);
  assertReturn(module, '$assert_return_3', 'external/testsuite/block.wast', 35);
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
