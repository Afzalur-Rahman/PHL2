# What is PostgreSQL?

PostgreSQL হলো একটি খুবই পাওয়ারফুল একটি ওপেন সোর্স রিলেশনাল ডাটাবেজ ম্যানেজমেন্ট সিস্টেম যেটাকে সংক্ষেপে RDBMS বলে| এটি উন্নত মানের ডেটাবেজ সিস্টেম, যেটার ডেটা সংরক্ষণ ,পুনরুদ্ধার বা ব্যবস্থাপনার কাজে ব্যবহৃত হয় |PostgreSQL এসিড(ACID) বৈশিষ্ট্য সমর্থন করে যেটা নির্ভরযোগ্যতা অখণ্ডতা নিশ্চিত করে এবং এখানে এসিড বলতে বোঝায় Atomicity ,Consistency ,Isolation,Durability এবং এটি বিভিন্ন ধরনের ডেটা টাইপ, জটিল কুয়ারি এবং এক্সটেনসিবিলিটির জন্য পরিচিত| Postgres ছোট থেকে বড় আকারের এন্টারপ্রাইজ লেভেলের অ্যাপ্লিকেশনে ব্যবহৃত হয় |এটি স্ট্রাকচার্ড কুয়ারি ল্যাংগুয়েজ স্ট্যান্ডার্ড অনুসরণ করে এবং এর সাথে উন্নত ফিচার যেমন JSONB, full text search এবং কাস্টম ফাংশন সাপোর্ট করে |এটি নির্ভরযোগ্যতা এবং পারফরম্যান্সের জন্য বিখ্যাত| এখানে ডেটাকে টেবিল আকারে সংরক্ষণ করা হয় যেখানে টেবিলগুলোর মধ্যে সম্পর্ক থাকে|For example একটি ই-কমার্স ওয়েবসাইটে গ্রাহকের তথ্য ,অর্ডার এবং পণ্যের বিবরণ সংরক্ষণের জন্য Postgres ব্যবহার করা যায়| এখানে একটি Postgres এর কোড দেখানো হলো:

```sql
CREATE DATABASE dokan; CREATE TABLE customers(

customer_id SERIAL PRIMARY KEY,
 name VARCHAR(255),
  email VARCHAR(255)

);
```

# Explain the Primary Key and Foreign Key concepts in PostgreSQL.

প্রাইমারি কি: একটি টেবিলের প্রাইমারি কি হল এক বা একাধিক COLUMN এর একটি সেট যেটা টেবিলের প্রত্যেকটা Row কে ইউনিক্লি ডিফাইন করে| এর কয়েকটা উল্লেখযোগ্য বৈশিষ্ট্য হলো

ইউনিকনেস: প্রাইমারি কি এর মান অবশ্যই প্রত্যেকটা Row এর জন্য ইউনিক হতে হবে| কোন দুইটি বা তিনটি Row এর প্রাইমারি কি এর ভ্যালু কখনো same হতে পারে না | Not Null: প্রাইমারি কি এর COLUMN এ কোন ধরনের নাল ভ্যালু থাকতে পারে না| এখানে প্রত্যেকটা রো এর জন্য একটি ভ্যালু অবশ্যই উল্লেখ করতে হবে| অপরিবর্তনীয়তা: প্রাইমারি কি কে যদিও টেকনিক্যালি চেঞ্জ করা সম্ভব কিন্তু ডাটা integrity রক্ষার জন্য এটিকে সাধারণত অপরিবর্তিত ই রাখা হয়|

ফরেন কি:

একটা টেবিলের মধ্যে ফরেন কি হলো এক বা একাধিক কলাম যেটা অন্য টেবিলের প্রাইমারি কি কে রেফার করে| দুইটা টেবিলের মধ্যে ফরেন কি সম্পর্ক স্থাপন করে |ফরেন কি একটি টেবিলের ডাটাকে অন্য টেবিলের ডাটার সাথে লিঙ্ক করতে মূলত ব্যবহৃত হয় যেটা রিলেশনাল ডেটাবেজের মেইন কনসেপ্ট|একটি ফরেন কি অবশ্যই অন্য একটি টেবিলের প্রাইমারি কি এর মান কে রেফার করে| ফরেন কি নিশ্চিত করে যে দুটি টেবিলের মধ্যে রিলেশন টি বৈধ| এটি এমন কোন ভ্যালু INSERT করতে বাধা দেয় যেটা রেফারেন্স টেবিলের প্রাইমারি কি তে অনুপস্থিত| ফরেন কি কলামে নাল ভ্যালু থাকতে পারে যার অর্থ হলো এই ROW টি রেফারেন্স টেবিলের কোন নির্দিষ্ট ROW এর সাথে সম্পর্কিত নয় |

একটি সহজ উদাহরণ দেখা যাক ফরেন কি এবং প্রাইমারি কি নিয়ে:

```sql
CREATE TABLE customers(

customer_id SERIAL PRIMARY KEY,
 name VARCHAR(100)

);

CREATE TABLE orders (

order_id SERIAL PRIMARY KEY,
 customer_id INT, 
 order_date DATE,
  FOREIGN KEY (customer_id) REFERENCES customers(customer_id)

);
```

এখানে কাস্টমার টেবিলের কাস্টমার আইডি হল প্রাইমারি কি এবং অর্ডারস টেবিল এর কাস্টমার আইডি হল ফরেন কি যেটা কাস্টমার টেবিল এর সাথে সম্পর্ক স্থাপন করে|

# Explain the purpose of the WHERE clause in a SELECT statement.

WHERE ক্লোজ SELECT স্টেটমেন্ট এ ব্যবহৃত হয় ডেটা ফিল্টার করার জন্য |এটি নির্দিষ্ট শর্ত পূরণের মাধ্যমে টেবিল থেকে কেবলমাত্র সেই রেকর্ডগুলোই সিলেক্ট করে যেগুলো শর্ত পূরণ করেছে |এর কিছু উল্লেখযোগ্য উদ্দেশ্য হলো ডাটা ফিল্টারিং অর্থাৎ প্রয়োজনীয় ডাটা নির্বাচন করা| এরপরে অপ্রয়োজনীয় ডাটা প্রক্রিয়াকরণ কমানো যার দরুন পারফরম্যান্স উন্নত হয়| এছাড়াও কাস্টমাইজেশনের মাধ্যমে ব্যবহারকারীর প্রয়োজন অনুযায়ী নির্দিষ্ট রেজাল্ট দেয়া যায়| For example:

```sql
SELECT email 
FROM customers  

WHERE age >40;
```

এখানে WHERE age>40 শর্ত বা ফিল্টার টি নিশ্চিত করে যে কেবল 40 বছরের বেশি বয়সের কাস্টমারের তথ্য ই যেন ফেরত আসে|

এইসব কাজে সচরাচর বিভিন্ন অপারেটর ব্যবহার করা হয় যেমন LIKE,IN,AND,OR,=,>= ,< ….ইত্যাদি ইত্যাদি |

# How can you modify data using UPDATE statements?

আপডেট স্টেটমেন্ট টেবিলে থাকা রেকর্ডের ডেটা আপডেট বা পরিবর্তন করতে ব্যবহৃত হয়| এটি নির্দিষ্ট কলামের ভ্যালু চেঞ্জ করে এবং WHERE ক্লোজ ব্যবহার করে কোন রেকর্ড গুলো আপডেট করা হবে তা ঠিক করে| এখানে কিছু সতর্কতা অবলম্বন করা জরুরী যেমন WHERE ক্লজ যদি না থাকে তাহলে পুরা টেবিলের সব রেকর্ড আপডেট হয়ে যাবে এবং এজন্য ট্রানজেকশন ব্যবহার করা উচিত বড় আপডেটেড এর জন্য , যেন ভুল হলেও তা রোলব্যাক করা যায়| আপডেট স্টেটমেন্ট এর মৌলিক সিনটেক্স হল:

```sql
UPDATE টেবিলের নাম 

SET কলাম1 = ভ্যালু1, ভ্যালু2, ভ্যালু3,...... 

[WHERE condition]
```

একটি সহজ উদাহরণের মাধ্যমে আরো সহজেই বুঝা সম্ভব |যেমন

এখানে প্রডাক্টস নামের একটি টেবিলে একটি প্রোডাক্ট আইডি হলো 121 এবং আমি এর প্রাইস পরিবর্তন করে ১০০ করতে চাই |

```sql
UPDATE products SET price = 100 WHERE product_id = 121;
```

# **What is the significance of the JOIN operation, and how does it work in PostgreSQL?**

JOIN অপারেশন দুই বা ততোধিক টেবিলের ডাটা এক জায়গায় করতে ব্যবহৃত হয় যেটা রিলেশনাল ডাটাবেজের মেইন পাওয়ার| এটি টেবিল গুলার মধ্যে সম্পর্ক যেমন প্রাইমারি কি এবং ফরেন কি ব্যবহার করে ডাটা সংযোগ করে| এর কিছু গুরুত্বপূর্ণ কাজ হল বিভিন্ন টেবিল থেকে রিলেটেড ডাটা একত্রে আনা, একাধিক কুয়ারির পরিবর্তে একটি কুয়ারিতে ফলাফল পাওয়া এবং টেবিলগুলোর মধ্যে রিলেশন বজায় রাখা |JOIN বিভিন্ন প্রকারের আছে |নিচে এগুলোর কিছু বিবরণ দেওয়া হলো |

INNER JOIN: কেবলমাত্র Matched রেকর্ড ফেরত দেয় LEFT JOIN:বাম টেবিলের সব রেকর্ড এবং ডান টেবিল এর ম্যাচিং রেকর্ড ফেরত দেয় RIGHT JOIN: ডান টেবিলের সব রেকর্ড এবং বাম টেবিল এর ম্যাচিং রেকর্ড ফেরত দেয় FULL JOIN: উভয় টেবিলের সব রেকর্ড ফেরত দেয় এবং যদি ম্যাচ না হয় তাহলে নাল ব্যবহার করে CROSS JOIN:দুইটি টেবিলের সব রেকর্ডের কার্টেসিয়ান প্রোডাক্ট

কিছু উদাহরণ দেওয়া হল:

```sql
SELECT [customer.name](http://customer.name/), orders.order_date
 FROM customers
  INNER JOIN orders ON customers.customer_id = orders.customer_id;
```

এখানে কাস্টমার এবং অর্ডারস টেবিল থেকে ম্যাচিং কাস্টমার আইডি এর ভিত্তিতেই ডেটা ফেরত দেবে|

আরেকটি উদাহরণ LEFT JOIN দিয়ে:

```sql
SELECT [customers.name](http://customers.name/), orders.order_date 
FROM customers 
LEFT JOIN orders ON customers.customers_id = orders.customer_id;
```

এটি সব কাস্টমার এর নাম ফেরত দিবে , এমনকি তাদের কোন অর্ডার না থাকলেও |সে ক্ষেত্রে অর্ডার ডেট তখন নাল হবে|