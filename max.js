// var Ringky = 550;
// var Pingky = 450;
// var Rafi = 350;
// if(Ringky>Pingky && Ringky>Rafi)
// {
//     console.log('Ringky is elder');
// }
// else if(Pingky>Ringky && Pingky>Rafi){
//     console.log('Pingky is elder')
// }
// else
// {
//     console.log('Rafi is elder');
// }
// function findLargest(first,second)
// {
//     if(first>second)
//     {
//         return first;
//     }
//     else{
//         return second;
//     }
// }
// const largest =findLargest(90,80)
// console.log('The Largest Number is', largest);
 
// find largest numeber from 3 value

// function findLargest(first,second,third)
// {
//     if(first>second && first>third)
//     {
//         return first;
//     }
//     else if(second>first && second>third)
//     {
//         return second
//     }
//     else{
//         return third;
//     }
// }
// const largest = findLargest(70,80,90)
// console.log('The largest number is',largest);
// find the smallest number

function findLargest(first,second,third)
{
    if(first<second && first<third)
    {
        return first;
    }
    else if(second<third)
    {
        return second
    }
    else{
        return third;
    }
}
const smallest = findLargest(70,60,90)
console.log('The smalest number is',smallest);