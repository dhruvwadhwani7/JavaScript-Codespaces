````md
# 🧠 JavaScript Prototype Hierarchy & Method Injection

## 📌 Concept

- Suppose you created an object called `heroPower`.
- Now you want to call a random method like `heroPower.dhruv()`.
- But there is **no `dhruv()` method** in the `heroPower` object or its prototype.

- In JavaScript, every data type (Array, String, Object, Function) ultimately goes through the **`Object` prototype**.
- So if you add a method to `Object.prototype`, it will be available to **all types** like:
  - objects
  - arrays
  - strings
  - functions

---

## 🧬 Prototype Chain Diagram

```mermaid
graph LR
    A[array] --> E[OBJECT]
    B[string] --> E[OBJECT]
    C[object] --> E[OBJECT]
    D[function] --> E[OBJECT]
````

* All these types are connected to the top-level `Object`.
* Any method added to `Object.prototype` will be accessible to all.

---

## ⚡ Injecting a Method in `Object.prototype`

```js
let myName = "dhruv     ";
console.log(myName.length);         // 10
console.log(myName.trim().length);  // 5

const myHeros = ["thor", "spiderman"];

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function () {
        console.log(`The spidy power is ${this.spiderman}`);
    }
};

// Injecting method at top-level Object prototype
Object.prototype.dhruv = function () {
    console.log("Dhruv method is present in all objects");
};

heroPower.dhruv();  // ✅ Works
myHeros.dhruv();    // ✅ Works
```

**Why it works:**
Because both arrays and objects internally go through `Object` in the prototype chain.

---

## ⚠️ Injecting a Method in a Lower-Level Prototype

```js
Array.prototype.HeyDhruv = function () {
    console.log("Hey Dhruv hello how are you");
};

myHeros.HeyDhruv();   // ✅ Works because it's an array
heroPower.HeyDhruv(); // ❌ Error, not available to plain objects
```

**Why it fails on `heroPower`:**
Because `heroPower` is a plain object, not an array.
Methods added to `Array.prototype` do not go up to `Object.prototype`.

---

## 📌 Summary

* Adding a method to `Object.prototype` makes it available to **everything** (object, array, string, function, etc.)
* Adding a method to a lower prototype (like `Array.prototype`) makes it available **only** to that type.
* So if you want a method to be used by everything, inject it at the **top-level `Object.prototype`**.

---

## 💡 Bonus: Custom `trueLength` Method

```js
String.prototype.trueLength = function() {
    return this.trim().length;
};

let myName = "dhruv     ";
console.log(myName.trueLength()); // 5
```

---

📝 This is how **prototype hierarchy** works and how you can inject your custom methods at any level.

```
```
