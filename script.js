/**
 * 100 JavaScript Coding Challenges
 * قم بكتابة منطق الفنكشن تحت كل وصف
 */

// --- الأساسيات (1-20) ---


// 1. فنكشن تعيد مجموع رقمين
function sum(a, b) {
    return a+b;
}

// 2. فنكشن تعيد حاصل ضرب رقمين
function multiply(a, b) {
    return a*b;
}

// 3. فنكشن تتحقق إذا كان الرقم زوجياً (تعيد true أو false)
function isEven(n) {
    return n%2===0;
}

// 4. فنكشن تتحقق إذا كان الرقم فردياً
function isOdd(n) {
    return n%2!==0;
}

// 5. فنكشن تحول السنوات إلى أيام (بافتراض السنة 365 يوم)
function yearsToDays(years) {
    return years * 365;
}

// 6. فنكشن تأخذ العمر وتعيد "Adult" إذا كان 18 فما فوق، وغير ذلك "Minor"
function checkAge(age) {
    if (age>=18){
        return `adult`;
    }
    else{
        return`minor`;
    }
}

// 7. فنكشن تعيد القيمة المطلقة لرقم (Absolute Value)
function getAbs(n) {
    if (n<0){
        return -n;
    }
}

// 8. فنكشن تحول الساعات إلى ثوانٍ
function hoursToSeconds(hours) {
    return hours * 3600;
}

// 9. فنكشن تحسب مساحة المثلث (القاعدة * الارتفاع / 2)
function triangleArea(base, height) {
    return (base*height)/2;
}

// 10. فنكشن تعيد باقي قسمة رقمين
function remainder(a, b) {
    return a%b;
}

// 11. فنكشن تتحقق إذا كان الرقم يقبل القسمة على 10
function isDivisibleByTen(n) {
    return n%10===0;
}

// 12. فنكشن تعيد مكعب الرقم (n^3)
function cube(n) {
    return n*n*n;
}


// 13. فنكشن تأخذ الاسم وتعيد رسالة ترحيب "Hello [name]"
function greet(name) {
    return `hello ${name};`
}

// 14. فنكشن تتحقق إذا كان النص فارغاً
function isEmpty(str) {
    return str.strLength===0;
}

// 15. فنكشن تعيد طول النص (عدد الحروف)
function strLength(str) {
    return str.strLength;
}


// 16. فنكشن تقارن بين نصين وتعيد true إذا كانا متطابقين
function compareStrings(str1, str2) {
    return str1===str2;
}

// 17. فنكشن تعيد الرقم الأصغر بين رقمين
function getMin(a, b) {
    return a<b ? a :b;
}

// 18. فنكشن تعيد الرقم الأكبر بين رقمين
function getMax(a, b) {
    return a>b ? a:b;
}

// 19. فنكشن تحول الكيلومتر إلى متر
function kmToMeters(km) {
    return km * 1000;
}

// 20. فنكشن تحول السليزيوس إلى فهرنهايت
function celsiusToFahrenheit(c) {
    return (c * 9/5)+32;
}


// --- المصفوفات والنصوص (21-40) ---

// 21. فنكشن تعيد أول عنصر في المصفوفة
function getFirstElement(arr) {
    return arr[0];
}

// 22. فنكشن تعيد آخر عنصر في المصفوفة
function getLastElement(arr) {
    return arr[arr.length-1];
}

// 23. فنكشن تعيد مجموع كل الأرقام في المصفوفة
function sumArray(arr) {
    let sum = 0;
    for (let i=0; i<arr.length; i++){
        sum += arr[i];
    }}
    return sum;

// 24. فنكشن تعيد متوسط أرقام المصفوفة
function averageArray(arr) {
    let sum = 0;
    for(let i=0; i<arr.length; i++){
        sum += arr[i]
    }
}

// 25. فنكشن تبحث عن عنصر داخل المصفوفة وتعيد true إذا وجد
function findElement(arr, elem) {
    for(let i=0; i<arr.length; i++){
        if(arr[i]===elem){
            return true
        }}
        return false;
}

// 26. فنكشن تعيد مصفوفة جديدة تحتوي على الأرقام الزوجية فقط من المصفوفة الأصلية
function filterEvens(arr) {
    let evens = [];
    for(let i=0; i<arr.length; i++){
        if(arr[i]%2===0){
            evens.push(arr[i])
        }
    }
    return evens;
}
// 27. فنكشن تعكس ترتيب المصفوفة
function reverseArray(arr) {
    let reverseed =[];
    for(let i=arr.length-1; i>=0; i--){
        reverseed.push(arr[i]);
    }
    return reverseed;
}

// 28. فنكشن تعكس النص (مثال: "abc" تصبح "cba")
function reverseString(str) {
    let reverseed = ``;
    for(let i=str.length-1; i>=0; i--){
        reverseed += str[i];
        }
        return reverseed;
}

// 29. فنكشن تحول جميع حروف النص إلى حروف كبيرة (Uppercase)
function toUpper(str) {
    return str.toUpperCase();
}

// 30. فنكشن تحذف المسافات من بداية ونهاية النص
function trimString(str) {
    return str.trim();
}
// 31. فنكشن تدمج مصفوفتين في مصفوفة واحدة
function mergeArrays(arr1, arr2) {
    return arr1.concat(arr2);
    
}

// 32. فنكشن تعيد أكبر رقم في مصفوفة
function findMax(arr) {
    return Math.max(...arr);
  
}

// 33. فنكشن تعيد أصغر رقم في مصفوفة
function findMin(arr) {
    return Math.min(...arr);
}

// 34. فنكشن تحسب عدد مرات تكرار حرف معين في نص
function countChar(str, char) {
    return str.split(char).length - 1;
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
    return arr.map(num => num.toString());
}

// 39. فنكشن تعيد النص مكرر n من المرات
function repeatStr(str, n) {
    return str.repeat(n);
}

// 40. فنكشن تحذف العنصر الأخير من المصفوفة وتعيد المصفوفة الجديدة
function removeLast(arr) {
    return arr.slice(0, -1);
}


// --- المنطق والعمليات المتوسطة (41-60) ---

// 41. فنكشن تحسب مضروب الرقم (Factorial)
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
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
    const vowels = 'aeiouAEIOU';
    return str.split('').filter(char => vowels.includes(char)).length;
}

// 45. فنكشن تحذف العناصر المكررة من المصفوفة
function removeDuplicates(arr) {
    return [...new Set(arr)];
}

// 46. فنكشن ترتب المصفوفة تصاعدياً
function sortAsc(arr) {
    return arr.sort((a, b) => a - b);
}

// 47. فنكشن ترتب المصفوفة تنازلياً
function sortDesc(arr) {
    return arr.sort((a, b) => b - a);
}

// 48. فنكشن تتحقق إذا كانت الكلمة "Palindrome" (تقرأ من الجهتين نفس الشيء)
function isPalindrome(str) {
    const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    return cleanedStr === cleanedStr.split('').reverse().join('');
}

// 49. فنكشن تحول أول حرف من كل كلمة إلى حرف كبير
function capitalizeWords(str) {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

// 50. فنكشن تعيد الأرقام المشتركة بين مصفوفتين
function getIntersection(arr1, arr2) {
    return arr1.filter(num => arr2.includes(num));
}

// 51. فنكشن تحول الرقم إلى نظام الثنائي (Binary)
function decimalToBinary(n) {
    return n.toString(2);
}

// 52. فنكشن تحسب عدد الكلمات في جملة
function wordCount(str) {
    return str.split(' ').length;
}

// 53. فنكشن تستبدل كلمة بكلمة أخرى في نص
function replaceWord(str, oldW, newW) {
    return str.replace(oldW, newW);
}

// 54. فنكشن تتحقق إذا كان الرقم أولياً (Prime Number)
function isPrime(n) {
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 === 0 || n % 3 === 0) return false;
    for (let i = 5; i * i <= n; i += 6) {
        if (n % i === 0 || n % (i + 2) === 0) return false;
    }
    return true;
}

// 55. فنكشن تعيد مصفوفة بأسماء المستخدمين من مصفوفة كائنات (Objects)
function getNames(users) { 
    return users.map(user => user.name);
  }

// 56. فنكشن تحسب العمر بناءً على تاريخ الميلاد (سنة الميلاد)
function calcAge(birthYear) { 
    const currentYear = new Date().getFullYear();
    return currentYear - birthYear;
  }

// 57. فنكشن تولد كود لون سداسي عشري (Hex Color) عشوائي
function randomHexColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

// 58. فنكشن تتحقق إذا كانت المصفوفة مرتبة
function isSorted(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        return false;
      }
    }
    return true;
    }

// 59. فنكشن تدمج كائنين (Objects) في كائن واحد
function mergeObjects(obj1, obj2) {
    return { ...obj1, ...obj2 };
}

// 60. فنكشن تحسب مجموع أرقام عدد معين (مثال 123 -> 6)
function sumDigits(n) {
    return n.toString().split('').reduce((sum, digit) => sum + parseInt(digit), 0);
}


// --- المستوى المتقدم والمعالجة (61-80) ---

// 61. فنكشن تقوم بعمل "Flatten" لمصفوفة ثنائية الأبعاد (تحويلها لمصفوفة واحدة)
function flattenArray(arr) {
    return arr.flat();
}

// 62. فنكشن تنفذ تأخيراً زمنياً (Promise) لمدة معينة
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// 63. فنكشن تسحب بيانات من رابط (API) باستخدام fetch (Async/Await)
async function fetchData(url) {
    const response = await fetch(url);
    return response.json();
}

// 64. فنكشن تحول كائن إلى Query String (مثال: {a:1, b:2} -> "a=1&b=2")
function objectToQueryString(obj) {
    return Object.entries(obj).map(([key, value]) => `${key}=${value}`).join('&');
}

// 65. فنكشن تتحقق إذا كان كائنان متساويين في المحتوى (Deep Comparison)
function deepEqual(obj1, obj2) {
    return JSON.stringify(obj1) === JSON.stringify(obj2);
}

// 66. فنكشن تعيد مصفوفة من الأرقام الفريدة فقط (التي لم تتكرر أبداً)
function uniqueOnly(arr) {
    return [...new Set(arr)];
}

// 67. فنكشن تقوم بتقسيم مصفوفة إلى أجزاء صغيرة (Chunking)
function chunkArray(arr, size) {   
    const chunks = [];
    for (let i = 0; i < arr.length; i += size) {
      chunks.push(arr.slice(i, i + size));
    }
    return chunks;
}

// 68. فنكشن تحسب الفرق بالأيام بين تاريخين
function daysBetween(date1, date2) {
    const diffTime = Math.abs(date2 - date1);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
}

// 69. فنكشن تقوم بعمل "Debounce" لفنكشن أخرى
function debounce(func, wait) {
    let timeout;
    return function(...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), wait);
    };
}

// 70. فنكشن تحول النص من camelCase إلى snake_case
function camelToSnake(str) {
    return str.replace(/([A-Z])/g, "_$1").toLowerCase();
}

// 71. فنكشن تعيد أكثر عنصر تكراراً في مصفوفة
function mostFrequent(arr) {
    const freq = {};
    let maxFreq = 0;
    let mostFreq;
    for (const num of arr) {
      freq[num] = (freq[num] || 0) + 1;
      if (freq[num] > maxFreq) {
        maxFreq = freq[num];
        mostFreq = num;
      }
    }
    return mostFreq;
}

// 72. فنكشن تخفي أرقام البطاقة الائتمانية عدا آخر 4 أرقام
function maskCard(number) {
    return number.replace(/\d(?=\d{4})/g, '*');
}

// 73. فنكشن تتحقق إذا كان النص يحتوي على أرقام فقط
function isNumeric(str) { 
    return /^\d+$/.test(str);
}

// 74. فنكشن تحول الحروف الكبيرة لصغيرة والعكس في نص
function swapCase(str) {
    return str.replace(/[a-z]/g, c => c.toUpperCase()).replace(/[A-Z]/g, c => c.toLowerCase());
}

// 75. فنكشن تحسب قيمة الفائدة البسيطة (P * R * T / 100)
function simpleInterest(p, r, t) {
    return (p * r * t) / 100;
}

// 76. فنكشن تعيد مصفوفة بأسماء المفاتيح (Keys) الموجودة في الكائن
function getKeys(obj) {
    return Object.keys(obj);
}

// 77. فنكشن تعيد مصفوفة بالقيم (Values) الموجودة في الكائن
function getValues(obj) {
    return Object.values(obj);
}

// 78. فنكشن تحول المصفوفة إلى كائن (Index هو المفتاح)
function arrayToObject(arr) {
    return Object.fromEntries(arr.map((value, index) => [index, value]));
}

// 79. فنكشن تولد سلسلة فيبوناتشي حتى الرقم n
function fibonacci(n) {
    const fib = [0, 1];
    for (let i = 2; i < n; i++) {
      fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib;
}

// 80. فنكشن تتحقق إذا كان الرقم هو "Perfect Square" (له جذر تربيعي صحيح)
function isPerfectSquare(n) {
    const root = Math.sqrt(n);
    return Number.isInteger(root);
}


// --- تحديات إضافية وشاملة (81-100) ---

// 81. فنكشن تحذف القيم "Falsy" من المصفوفة (null, undefined, 0, "")
function compact(arr) {
    return arr.filter(Boolean);
}

// 82. فنكشن تعيد الفرق بين مصفوفتين
function arrayDiff(arr1, arr2) {
    return arr1.filter(item => !arr2.includes(item));
}

// 83. فنكشن تحول الوقت من نظام 12 ساعة إلى 24 ساعة
function timeConvert12to24(timeStr) {
    const [time, modifier] = timeStr.split(' ');
    let [hours, minutes] = time.split(':');
    if (modifier === 'PM' && hours !== '12') {
      hours = parseInt(hours) + 12;
    } else if (modifier === 'AM' && hours === '12') {
      hours = '00';
    }
    return `${hours}:${minutes}`;
}

// 84. فنكشن تحسب عدد الأيام المتبقية حتى نهاية السنة
function daysUntilYearEnd() {
    const today = new Date();
    const yearEnd = new Date(today.getFullYear(), 11, 31);
    const diffTime = Math.abs(yearEnd - today);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
}

// 85. فنكشن تعيد أصغر رقم موجب مفقود في مصفوفة أرقام
function firstMissingPositive(arr) {  
    const set = new Set(arr);
    let i = 1;
    while (set.has(i)) {
      i++;
    }
    return i;
}

// 86. فنكشن تحسب تكرار الكلمات في نص وتعيدها في كائن
function wordFrequency(str) {
    const words = str.split(/\s+/);
    const freq = {};
    for (const word of words) {
      freq[word] = (freq[word] || 0) + 1;
    }
    return freq;
}

// 87. فنكشن تقوم بعمل Shuffle (تبديل عشوائي) لعناصر المصفوفة
function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

// 88. فنكشن تتحقق إذا كان النص بصيغة إيميل صحيح (Regex)
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// 89. فنكشن تحول مصفوفة كائنات إلى جدول CSV (نصي)
function toCSV(data) {    
    const headers = Object.keys(data[0]);
    const rows = data.map(obj => headers.map(header => obj[header]));
    return [headers, ...rows].map(row => row.join(','));
}

// 90. فنكشن تأخذ رقم وتعيده مع فواصل الآلاف (مثال: 1000 -> 1,000)
function formatNumber(n) {
    return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

// 91. فنكشن تعيد مصفوفة من أرقام عشوائية غير مكررة
function uniqueRandoms(count, min, max) {
    const numbers = [];
    while (numbers.length < count) {
      const num = Math.floor(Math.random() * (max - min + 1)) + min;
      if (!numbers.includes(num)) {
        numbers.push(num);
      }
    }
    return numbers;
}

// 92. فنكشن تتحقق إذا كانت السنة كبيسة (Leap Year)
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

// 93. فنكشن تعيد اسم اليوم من تاريخ معين (مثلاً "Monday")
function getDayName(date) {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[date.getDay()];
}

// 94. فنكشن تقوم بتقليص النص (Truncate) إذا زاد عن حد معين مع إضافة نقاط
function truncate(str, limit) {
    if (str.length > limit) {
      return str.slice(0, limit) + '...';
    }
    return str;
}

// 95. فنكشن تحسب المسافة بين نقطتين في المستوى الإحداثي (x1, y1) و (x2, y2)
function distance(x1, y1, x2, y2) {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}

// 96. فنكشن تعيد الحرف الأكثر تكراراً في نص
function maxChar(str) {
    const freq = {};
    for (const char of str) {
      freq[char] = (freq[char] || 0) + 1;
    }
    let maxChar = null;
    let maxCount = 0;
    for (const char in freq) {
      if (freq[char] > maxCount) {
        maxChar = char;
        maxCount = freq[char];
      }
    }
    return maxChar;
}

// 97. فنكشن تتحقق إذا كان المصفوفة تحتوي على مصفوفات فرعية
function hasSubArray(arr) {
    return arr.some(item => Array.isArray(item));
}

// 98. فنكشن تحسب مجموع الأرقام الفردية فقط في مصفوفة
function sumOdds(arr) {
    return arr.filter(num => num % 2 !== 0).reduce((sum, num) => sum + num, 0);
}

// 99. فنكشن تحول النص إلى URL Slug (مثال: "Hello World" -> "hello-world")
function toSlug(str) {  
    return str.toLowerCase().replace(/[^a-z0-9]/g, '-');
}

// 100. فنكشن تعيد رقم عشوائي كمعرف (UUID) بسيط
function generateId() {
    return Math.random().toString(36).slice(2);
}

