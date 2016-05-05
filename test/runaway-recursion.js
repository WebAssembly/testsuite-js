var passed = 0;
var failed = 0;
var quiet = false;

testModule0();
end();

function testModule0() {
  var module = createModule([
      0,  97, 115, 109,  11,   0,   0,   0,   4, 116, 121, 112, 101,   4,   1,  64,
      0,   0,   8, 102, 117, 110,  99, 116, 105, 111, 110,   6,   5,   0,   0,   0,
      0,   0,   6, 101, 120, 112, 111, 114, 116,  58,   4,   0,   7, 114, 117, 110,
     97, 119,  97, 121,   1,  14, 109, 117, 116, 117,  97, 108,  95, 114, 117, 110,
     97, 119,  97, 121,   3,  14,  36,  97, 115, 115, 101, 114, 116,  95, 116, 114,
     97, 112,  95,  48,   4,  14,  36,  97, 115, 115, 101, 114, 116,  95, 116, 114,
     97, 112,  95,  49,   4,  99, 111, 100, 101,  26,   5,   4,   0,  22,   0,   0,
      4,   0,  22,   0,   2,   4,   0,  22,   0,   1,   4,   0,  22,   0,   0,   4,
      0,  22,   0,   1,
  ]);

  assertTrap(module, '$assert_trap_0', 'external/testsuite/runaway-recursion.wast', 16);
  assertTrap(module, '$assert_trap_1', 'external/testsuite/runaway-recursion.wast', 17);
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
