"use strict"; //treat all JS cde as newer version

    console.log(typeof 5);

// string => we write string between    '  '  or "  "  or `  `
// '  ' & "  " they do not support multiline string
// `  ` we can write multiline string here  

    console.log(`hi,
        this is sneha roy`);
    console.log(typeof 'sneha');

// to convert string to number => write + or - before the string
    console.log('\n********to convert string to number********');
    console.log(+'100');
    console.log(typeof +'100');


console.log('JavaScript evaluates expression from left to right. Different sequences can produce different results.');
    console.log('sneha' + 16 + 4); //sneha164  <= JS first get string so rest are also treated as string
    console.log(16 + 4 + 'sneha'); //20sneha  <= JS first get number so treat 16 & 4 as number until it get string


    console.log(+"sneha");    //here NaN is also a number but not a valid number though
    console.log(typeof +"sneha"); 
//alternative ways and little bit better
    console.log('********ALTERNATE WAY********');
    console.log(+'100sneha');   // by using "+" we can't get 100 since there is also some alphabet present
    console.log(typeof +'100sneha');

    console.log('********USING parseInt********');
    console.log(parseInt('100sneha'));
    console.log(typeof parseInt('100sneha'));

    console.log(parseInt('10roy00sneha'));
    console.log(typeof parseInt('10roy00sneha'));

//to convert number to string
    console.log('\n********to convert number to string********');
    console.log(100 + '');  //it can be or cannot be an empty string 
    console.log(typeof (100 +''));

    console.log('sneha' + 100);
    console.log(typeof('sneha' + 100));

    
//to convert boolean to number
    console.log('\n********to convert boolean to number********');
    console.log(true);
    console.log(typeof true); 
    console.log(typeof +true);
    console.log(+true);
    console.log(+false);


