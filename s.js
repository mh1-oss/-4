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