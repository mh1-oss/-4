// 61. فنكشن تقوم بعمل "Flatten" لمصفوفة ثنائية الأبعاد (تحويلها لمصفوفة واحدة)
function flattenArray(arr) {
  // يمكن استخدام arr.flat() في النسخ الحديثة، أو هذا الحل للمتوافقية:
  return arr.reduce((acc, val) => acc.concat(val), []);
  // أو ببساطة: return arr.flat(Infinity); للتعامل مع أي عمق
}

// 62. فنكشن تنفذ تأخيراً زمنياً (Promise) لمدة معينة
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// 63. فنكشن تسحب بيانات من رابط (API) باستخدام fetch (Async/Await)
async function fetchData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Network response was not ok");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}

// 64. فنكشن تحول كائن إلى Query String (مثال: {a:1, b:2} -> "a=1&b=2")
function objectToQueryString(obj) {
  return Object.keys(obj)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}`)
    .join('&');
}

// 65. فنكشن تتحقق إذا كان كائنان متساويين في المحتوى (Deep Comparison)
function deepEqual(obj1, obj2) {
  if (obj1 === obj2) return true;
  
  if (typeof obj1 !== "object" || obj1 === null || typeof obj2 !== "object" || obj2 === null) {
    return false;
  }

  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) return false;

  for (let key of keys1) {
    if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) {
      return false;
    }
  }
  return true;
}

// 66. فنكشن تعيد مصفوفة من الأرقام الفريدة فقط (التي لم تتكرر أبداً)
function uniqueOnly(arr) {
  return arr.filter(item => arr.indexOf(item) === arr.lastIndexOf(item));
}

// 67. فنكشن تقوم بتقسيم مصفوفة إلى أجزاء صغيرة (Chunking)
function chunkArray(arr, size) {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}

// 68. فنكشن تحسب الفرق بالأيام بين تاريخين
function daysBetween(date1, date2) {
  const oneDay = 24 * 60 * 60 * 1000; // milliseconds in a day
  const d1 = new Date(date1);
  const d2 = new Date(date2);
  return Math.round(Math.abs((d1 - d2) / oneDay));
}

// 69. فنكشن تقوم بعمل "Debounce" لفنكشن أخرى
// (تستخدم لتأخير التنفيذ حتى يتوقف المستخدم عن الكتابة مثلاً)
function debounce(func, wait) {
  let timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}

// 70. فنكشن تحول النص من camelCase إلى snake_case
function camelToSnake(str) {
  return str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
}

// 71. فنكشن تعيد أكثر عنصر تكراراً في مصفوفة
function mostFrequent(arr) {
  const map = {};
  let maxCount = 0;
  let maxElement = null;

  for (const item of arr) {
    map[item] = (map[item] || 0) + 1;
    if (map[item] > maxCount) {
      maxCount = map[item];
      maxElement = item;
    }
  }
  return maxElement;
}

// 72. فنكشن تخفي أرقام البطاقة الائتمانية عدا آخر 4 أرقام
function maskCard(number) {
  const str = String(number);
  return str.slice(-4).padStart(str.length, '*');
}

// 73. فنكشن تتحقق إذا كان النص يحتوي على أرقام فقط
function isNumeric(str) {
  return /^\d+$/.test(str);
}

// 74. فنكشن تحول الحروف الكبيرة لصغيرة والعكس في نص
function swapCase(str) {
  return str.split('').map(char => 
    char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()
  ).join('');
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
  return { ...arr }; 
  // أو: return Object.assign({}, arr);
}

// 79. فنكشن تولد سلسلة فيبوناتشي حتى الرقم n (عدد العناصر n)
function fibonacci(n) {
  if (n <= 0) return [];
  if (n === 1) return [0];
  const seq = [0, 1];
  while (seq.length < n) {
    const next = seq[seq.length - 1] + seq[seq.length - 2];
    seq.push(next);
  }
  return seq;
}

// 80. فنكشن تتحقق إذا كان الرقم هو "Perfect Square" (له جذر تربيعي صحيح)
function isPerfectSquare(n) {
  return n >= 0 && Math.sqrt(n) % 1 === 0;
}

// 81. فنكشن تحذف القيم "Falsy" من المصفوفة (null, undefined, 0, "")
function compact(arr) {
  return arr.filter(Boolean);
}

// 82. فنكشن تعيد الفرق بين مصفوفتين (العناصر الموجودة في الأولى وليست في الثانية)
function arrayDiff(arr1, arr2) {
  return arr1.filter(item => !arr2.includes(item));
}

// 83. فنكشن تحول الوقت من نظام 12 ساعة إلى 24 ساعة
function timeConvert12to24(timeStr) {
  // المتوقع: "02:00 PM"
  const [time, modifier] = timeStr.split(' ');
  let [hours, minutes] = time.split(':');
  
  if (hours === '12') {
    hours = '00';
  }
  if (modifier === 'PM') {
    hours = parseInt(hours, 10) + 12;
  }
  return `${hours}:${minutes}`;
}

// 84. فنكشن تحسب عدد الأيام المتبقية حتى نهاية السنة
function daysUntilYearEnd() {
  const today = new Date();
  const endOfYear = new Date(today.getFullYear(), 11, 31); // شهر 11 هو ديسمبر في JS
  const oneDay = 1000 * 60 * 60 * 24;
  return Math.ceil((endOfYear - today) / oneDay);
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
  const words = str.toLowerCase().match(/\w+/g) || [];
  return words.reduce((acc, word) => {
    acc[word] = (acc[word] || 0) + 1;
    return acc;
  }, {});
}

// 87. فنكشن تقوم بعمل Shuffle (تبديل عشوائي) لعناصر المصفوفة (Fisher-Yates)
function shuffle(arr) {
  const newArr = [...arr]; // نسخ المصفوفة لتجنب تعديل الأصلية
  for (let i = newArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
  }
  return newArr;
}

// 88. فنكشن تتحقق إذا كان النص بصيغة إيميل صحيح (Regex بسيط)
function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// 89. فنكشن تحول مصفوفة كائنات إلى جدول CSV (نصي)
function toCSV(data) {
  if (!data.length) return '';
  const headers = Object.keys(data[0]);
  const rows = data.map(obj => headers.map(header => obj[header]).join(','));
  return [headers.join(','), ...rows].join('\n');
}

// 90. فنكشن تأخذ رقم وتعيده مع فواصل الآلاف (مثال: 1000 -> 1,000)
function formatNumber(n) {
  return n.toLocaleString();
}

// 91. فنكشن تعيد مصفوفة من أرقام عشوائية غير مكررة
function uniqueRandoms(count, min, max) {
  const nums = new Set();
  while (nums.size < count) {
    nums.add(Math.floor(Math.random() * (max - min + 1)) + min);
  }
  return Array.from(nums);
}

// 92. فنكشن تتحقق إذا كانت السنة كبيسة (Leap Year)
function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

// 93. فنكشن تعيد اسم اليوم من تاريخ معين (مثلاً "Monday")
function getDayName(dateStr) {
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-US', { weekday: 'long' });
}

// 94. فنكشن تقوم بتقليص النص (Truncate) إذا زاد عن حد معين مع إضافة نقاط
function truncate(str, limit) {
  if (str.length <= limit) return str;
  return str.slice(0, limit) + '...';
}

// 95. فنكشن تحسب المسافة بين نقطتين في المستوى الإحداثي
function distance(x1, y1, x2, y2) {
  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}

// 96. فنكشن تعيد الحرف الأكثر تكراراً في نص
function maxChar(str) {
  const charMap = {};
  let max = 0;
  let maxChar = '';

  for (let char of str) {
    charMap[char] = (charMap[char] || 0) + 1;
  }

  for (let char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char];
      maxChar = char;
    }
  }
  return maxChar;
}

// 97. فنكشن تتحقق إذا كان المصفوفة تحتوي على مصفوفات فرعية (Nested)
function hasSubArray(arr) {
  return arr.some(item => Array.isArray(item));
}

// 98. فنكشن تحسب مجموع الأرقام الفردية فقط في مصفوفة
function sumOdds(arr) {
  return arr.filter(n => n % 2 !== 0).reduce((a, b) => a + b, 0);
}

// 99. فنكشن تحول النص إلى URL Slug (مثال: "Hello World" -> "hello-world")
function toSlug(str) {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '') // إزالة الرموز الخاصة
    .replace(/\s+/g, '-');    // استبدال المسافات بشرطة
}

// 100. فنكشن تعيد رقم عشوائي كمعرف (UUID) بسيط
function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
}