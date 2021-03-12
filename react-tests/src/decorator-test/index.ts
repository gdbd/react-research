console.log(1);

export {};

function test() {
  return function(target: any) {
    //
  };
}

//@test()
function testOnFunc() {}

@test()
class testonClass {}

//@test()
interface testOnIface {}
