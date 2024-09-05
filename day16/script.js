function num1(callback){
  setTimeout(()=>{
    console.log(10);
    callback()
  },1000);
}

function num2(callback) {
  setTimeout(() => {
    console.log(9);
    callback();
  }, 1000);
}

function num3(callback) {
  setTimeout(() => {
    console.log(8);
    callback();
  }, 1000);
}

function num4(callback) {
  setTimeout(() => {
    console.log(7);
    callback();
  }, 1000);
}

function num5(callback) {
  setTimeout(() => {
    console.log(6);
    callback();
  }, 1000);
}

function num6(callback) {
  setTimeout(() => {
    console.log(5);
    callback();
  }, 1000);
}

function num7(callback) {
  setTimeout(() => {
    console.log(4);
    callback();
  }, 1000);
}

function num8(callback) {
  setTimeout(() => {
    console.log(3);
    callback();
  }, 1000);
}

function num9(callback) {
  setTimeout(() => {
    console.log(2);
    callback();
  }, 1000);
}

function num10(callback) {
  setTimeout(() => {
    console.log(1);
    callback();
  }, 1000);
}

num1(()=>{
    num2(()=>{
        num3(()=>{
            num4(()=>{
                num5(()=>{
                    num6(()=>{
                        num7(()=>{
                            num8(()=>{
                                num9(()=>{
                                    num10(()=>
                                         console.log("HAPPY INDEPENDANCE DAY"))
                                    })
                                })
                            })
                        })

                    })
                       
                })
            })
        })
    })
// })