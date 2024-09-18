
// 1#
// {
// 8.
// nums = [2, 7, 11, 15], target = 9 => ixtiyoriy array va biron bir target nomli
//  o'zgaruvchi olinsin. Array ichidagi sonlar yig'indisi target ga teng bulgan sonlarni index si topilsin
// Misol uchun 2 va 7 soni yig'indisi 9 ga teng, masala sharti mana shu 2 va 7 soni indexi console ga chiqarilsin
// }

{
    let arr = [3,8,7,1,5,4]

    let target = 9

    let resalt = []
    for(let i  = 0; i < arr.length; i++){
        console.log(arr[i]);
        for(let b = 0; b < i; b++){
            if(arr[i] + arr[b] === target){
                resalt.push(b, i)
            }
        }
    }

console.log(resalt)

}


// 2#
// {
// 9.
// Ixtiyoriy n ta element dan iborat bo’lgan array yarating va uning ichidagi dublicate bo’lgan item larni o’chiring:
// let arr = [1, 3, 2, 2, 3 ] ⇒ 2 va 3 1 martadan ko’p ishtirok etgani uchun ularni o’chirish kerak
// natija ⇒ [1,2,3]
// }

// {
//     let arr = [1,8,3,4,1,3,6]
//     let resalt = []
//     for(let i = 0; i < arr.length; i++){
//         if(!resalt.includes(arr[i])){
//             resalt.push(arr[i])
//         }

//     }
//     console.log(resalt)
// }


// 3#
// {
//     10.
//     n natural soni berilgan 2 sonining dastlabki n ta darajasidan tashkil topgan arrayni qaytaruvchi getLevel(n) nomli function tuzing
//     n: 4 
//     result : [2,4,8,16] 2 ning 1-darajasidan boshlanishi kerak va 4-darajasigacha
//     n: 5
//     result: [2,4,8,16,32] 2 ning 5-darajasi 32 bo’ganligi uchun 32 da tugayapti
// }


// {
//     function getLevel(son, daraja){
//         console.log(Math.pow(son, daraja))
//     }    

//     getLevel(2,5);
// }


// 4#

// {
//     11.
//     Ixtiyoriy arrow function yarating va unga 
//     beriladigan argument promt yordamida kiritilgan son bo'lsin.
//     Kiritilgan sonning raqamlari yig'indisi topilsin.
// }

// {
//     const sumOf = (num) => {

//         return num.toString().split('').map(Number).reduce((sum, digit) => sum + digit, 0)
//     }
//     const userInput = +prompt("Son kiriting:")
//     console.log(`Kiritilgan sonning raqamlari qiymati: ${sumOf(userInput)}`)
// }


// 5#
// {
// 12.
// Ixtiyoriy arrow function yarating va uning parametriga bir nechta sonlar berilsin.
// va o'sha sonlar yig'indisini arrayning element lari ko'rinishida ifodalang:
// masalan: [1, 22, 3] yigindisi: 26
// result=> [2,6]
// }

// {
//     const yigindi = (...numbers) => {
//         const sonlar = numbers.reduce((total, num) => total + num, 0);

//         return sonlar.toString().split('').map(Number);
//     }

//     const resalt = yigindi(1,22,44);
//     console.log(resalt);

// }


// 6#
// {
//     13.
//     Kiritilgan so’z yoki sonni palindrome yoki 
//     palindrome emasligini aniqlab beradigan 
//     function yarating argument string 
//     yoki number ligini tekshiring
// }
// {
//     const palTek = (input) => {
//         const str = typeof input === 'number' ? input.toString() : input;
//         const reversed = str.split('').reverse().join('');
//         return str === reversed;
//     }
//     const userInput = prompt("So'z yoki raqam kiriting");

//     if(palTek(userInput)){
//         console.log(`Bu Palindrome.`);
//     }else{
//         console.log(`Bu Palindrome emas.`);
//     }
// }


// 7#
// {
//     14.
//     Ixtiyoriy object yarating => {a:1,b:22}
//     value larinig yig'indisini toping => 23
//     value larining yigindising raqamlar yig'indisini toping => 2 + 3 = 5
// }

// {
//  const obj = {a: 13, b: 2};
//  const sum = obj.a + obj.b;
//  const row = sum.toString().split('').map(Number).reduce((acc, num) => acc + num, 0);
//  console.log(`Qiymatlar yigindisi: ${sum}`);
//  console.log(`Raqamlar yig'indisi: ${row}`);

// }


// 8#
// {
//     15.
//     argument sifatida berilgan so’z da nechta unli harf 
//     borligini aniqlab beradigan function yarating 
//     (trim() dan foydalaning) darsda ko’rsatib berilgan   
// }

// {
//     const nimadur = (str) => {
//         const trimStr = str.trim();
//         const harfs = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
//         let count = 0;
//         for (let char of trimStr) {
//             if (harfs.includes(char)) {
//                 count++
//             }
//         }
//         return count;
//     }
//     const userInput = prompt("So'z kiriting:");
//     const result = nimadur(userInput);

//     console.log(`Unli harflar soni: ${result}`);
// }

// 9#

// {
//     16.
//     N natural son berilgan. Dastlabki n ta toq sondan 
//     tashkil topgan array qaytaruvchi getInitialOdds(n) 
//     nomli function tuzing input: 3 output: [1,3,5]
// }
// {
//     const getInitialOdds = (n) => {
//         const arrayYaratish = [];
//         let number = 1;
//         while (arrayYaratish.length < n){
//             arrayYaratish.push(number);
//             number += 2;
//         }
//         return arrayYaratish;
//     }
//     const resalt = getInitialOdds(3);
//     console.log(resalt);
// }


// 10#
// {
//      17.
//      var mergeTwoLists = function(list1, list2) {};
//      Input: list1 = [1,2,4], list2 = [1,3,4]
//      Output: [1,1,2,3,4,4]
//      spread opeartori yordami birlashtiring concat ishlatilmasin.
// }
// {
//     var mergeTwoLists = function (list1, list2) {
//         const yoyish = [...list1, ...list2];
//         const sortEl = yoyish.sort((a, b) => a - b);
//         return yoyish;
//     };
//     const result = mergeTwoLists([1, 2, 4], [1, 3, 4]);
//     console.log(result);
// }


// 11#
// {
//     18.
//     Ixtiyoriy array yarating va unda 1 martadan ko’p ishtirok 
//     etgan item larni boshqa array ga ko’chiradigan function
//     yarating
// }

// {
//     const getDuplicates = (arr) => {
//         const itemCounts = {};

//         for (let item of arr) {
//             if (itemCounts[item]) {
//                 itemCounts[item]++;
//             } else {
//                 itemCounts[item] = 1;
//             }
//         }

//         const duplicates = [];

//         for (let item in itemCounts) {
//             if (itemCounts[item] > 1) {
//                 duplicates.push(item);
//             }
//         }

//         return duplicates;
//     };

//     const result = getDuplicates([1, 2, 3, 4, 2, 5, 1, 6, 3]);
//     console.log(result);
// }





























