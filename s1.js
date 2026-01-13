// 31. فنكشن تدمج مصفوفتين في مصفوفة واحدة
function mergeArrays(arr1, arr2) {
    return arr1.concat(arr2);
}

// 32. فنكشن تعيد أكبر رقم في مصفوفة 
function findMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) { // إذا كان العنصر الحالي أكبر من الماكس
            max = arr[i];   // اجعل هو الماكس الجديد
        }
    }
    return max;
}


// 33. فنكشن تعيد أصغر رقم في مصفوفة
function findMin(arr) {
    return Math.min(...arr);
}

// 34. فنكشن تحسب عدد مرات تكرار حرف معين في نص
function countChar(str, char) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) count++;
    }
    return count;
}

// 35. فنكشن تحول النص إلى مصفوفة كلمات
function splitToWords(str) {
    return str.split(" ");
}

// 36. فنكشن تتحقق إذا كانت المصفوفة تحتوي على رقم سالب
function hasNegative(arr) {
    return arr.some(num => num < 0);
}

// 37. فنكشن تعيد مصفوفة تحتوي على أطوال الكلمات في مصفوفة نصوص
function wordsLengths(arr) {
    return arr.map(word => word.length);
}

// 38. فنكشن تحول مصفوفة من الأرقام إلى نصوص
function numsToStrings(arr) {
    return arr.map(String); 
    // أو: return arr.map(n => n.toString());
}

// 39. فنكشن تعيد النص مكرر n من المرات
function repeatStr(str, n) {
    return str.repeat(n);
}

// 40. فنكشن تحذف العنصر الأخير من المصفوفة وتعيد المصفوفة الجديدة
function removeLast(arr) {
    arr.pop(); // تحذف الأخير
    return arr; // تعيد المصفوفة بعد الحذف
}
// 41. فنكشن تحسب مضروب الرقم (Factorial)
function factorial(n) {
    if (n === 0 || n === 1) return 1;
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

// 42. فنكشن تولد رقماً عشوائياً بين 1 و 10
function randomTen() {
    return Math.floor(Math.random() * 10) + 1;
}

// 43. فنكشن تتحقق إذا كان النص ينتهي بحرف معين
function endsWith(str, char) {
    return str.endsWith(char);
}

// 44. فنكشن تحسب عدد حروف العلة (a, e, i, o, u) في نص
function countVowels(str) {
    const matches = str.match(/[aeiou]/gi); // استخدام Regex
    return matches ? matches.length : 0;
}

// 45. فنكشن تحذف العناصر المكررة من المصفوفة
function removeDuplicates(arr) {
    return [...new Set(arr)];
}

// 46. فنكشن ترتب المصفوفة تصاعدياً
function sortAsc(arr) {
    // نستخدم دالة مقارنة لأن sort ترتب أبجدياً بشكل افتراضي
    return arr.sort((a, b) => a - b);
}

// 47. فنكشن ترتب المصفوفة تنازلياً
function sortDesc(arr) {
    return arr.sort((a, b) => b - a);
}

// 48. فنكشن تتحقق إذا كانت الكلمة "Palindrome"
function isPalindrome(str) {
    let reversed = str.split('').reverse().join('');
    return str === reversed;
}

// 49. فنكشن تحول أول حرف من كل كلمة إلى حرف كبير
function capitalizeWords(str) {
    return str.split(' ').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
}

// 50. فنكشن تعيد الأرقام المشتركة بين مصفوفتين
function getIntersection(arr1, arr2) {
    return arr1.filter(item => arr2.includes(item));
}

// 51. فنكشن تحول الرقم إلى نظام الثنائي (Binary)
function decimalToBinary(n) {
    return n.toString(2);
}

// 52. فنكشن تحسب عدد الكلمات في جملة
function wordCount(str) {
    return str.trim().split(/\s+/).length;
}

// 53. فنكشن تستبدل كلمة بكلمة أخرى في نص
function replaceWord(str, oldW, newW) {
    return str.replaceAll(oldW, newW);
}

// 54. فنكشن تتحقق إذا كان الرقم أولياً (Prime Number)
function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

// 55. فنكشن تعيد مصفوفة بأسماء المستخدمين من مصفوفة كائنات
function getNames(users) {
    return users.map(user => user.name);
}

// 56. فنكشن تحسب العمر بناءً على تاريخ الميلاد (سنة الميلاد)
function calcAge(birthYear) {
    let currentYear = new Date().getFullYear();
    return currentYear - birthYear;
}

// 57. فنكشن تولد كود لون سداسي عشري (Hex Color) عشوائي
function randomHexColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

// 58. فنكشن تتحقق إذا كانت المصفوفة مرتبة (تصاعدياً)
function isSorted(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) return false;
    }
    return true;
}

// 59. فنكشن تدمج كائنين (Objects) في كائن واحد
function mergeObjects(obj1, obj2) {
    return { ...obj1, ...obj2 }; // Spread Operator
}

// 60. فنكشن تحسب مجموع أرقام عدد معين (مثال 123 -> 6)
function sumDigits(n) {
    return n.toString()
            .split('')
            .reduce((sum, num) => sum + parseInt(num), 0);
}