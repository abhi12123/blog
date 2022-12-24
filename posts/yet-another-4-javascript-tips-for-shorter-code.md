---
title: "Yet another 4 JavaScript tips for shorter code"
date: "2022-09-11"
description: "Seems like JavaScript never ceases to surprise me, perhaps that would explain why I’m writing another blog on JavaScript tips. This will be my continuation to my previous two blogs on the same topic"
topics: ["JavaScript", "Web Development"]
# otherSourcesNames: ["medium", "hashnode", "devTo"]
# otherSourcesUrls:
#   [
#     "https://medium.com/@abhinav_vp/",
#     "https://medium.com/@abhinav_vp/",
#     "https://dev.to/abhi_vp_/using-clamp-for-responsiveness-3bem",
#   ]
---

Seems like JavaScript never ceases to surprise me, perhaps that would explain why I’m writing another blog on JavaScript tips, and I honestly don't see this blog series ending in near future.

This will be my continuation to my previous two blogs on the same topic : [4 JavaScript Tips for Shorter Code](/posts/4-javascript-tips-for-shorter-code) and [Another 4 JavaScript Tips for Shorter Code](/posts/another-4-javascript-tips-for-shorter-code). It’s not necessary that you read those, but it is recommended as they can be really useful.

## 1. Conditionally add keys to an object.

Javascript object contains props and its values, and some times we might have to conditionally add more prop value pairs in it. The following syntax can be used for it.

```js
const obj = {
  ...(condition && { someprop: propvalue }),
  ...otherprops,
};
```

In the below example, `hobbies` are added in the `personDetails` object only if the number of `hobbies` are greater than 0

```js
const hobbies = ["painting", "cooking", "reading"];
const personDetails = {
  name: "John Doe",
  age: 25,
  ...(hobbies.length > 0 && { hobbies }),
};
```

## 2. Keys, Entries and Values.

Another tip for dealing with objects ? Yes.

`Object.keys()` returns the list of property names.
`Object.values()` returns the list of property values,
`Object.entries()` returns the list of pairs of property names and corresponding values

Above functions will take the object as a parameter and returns the output accordingly

```js
const personDetails = {
  name: "John Doe",
  age: 25,
};
```

`Object.keys(personDetails)` will return `[ 'name', 'age' ]`.
`Object.values(personDetails)` will return `[ 'john doe', 24 ]`.
`Object.entries(personDetails)` will return `[ [ 'name', 'john doe' ], [ 'age', 24 ] ]`.

## 3. Defaut values using `||`.

You can assign a default value to a variable using `||` operator. This tip is very useful if you’re dealing with APIs, and will act as a failsafe mechanism. In case an API breaks we can use this method to give a default value accordingly.

In the below example, `age` is evaluated to `false` since its `undefined`, giving `newAge` a value of `5`.
const age = undefined;

```js
const newAge = age || 5;
```

## 4. Formatting json using JSON.stringify().

`JSON.stringify()` can be used to convert a javaScript value to `JSON` string. The value to be converted can be passed in as a parameter. It also takes in two optional parameters, `replacer` and `space`. We can use the third parameter to format the output.

```js
const personDetails = {
  name: "John Doe",
  age: 25,
};
```

Now if we run the below line, the output would be a single lined.
`console.log(JSON.stringify(personDetails))`
Output : `{"name":"John Doe","age":25}`

But if we were to add the other two parameters, the output would be formatted.
`console.log(JSON.stringify(personDetails,undefined,2))`
Output :

```
{
  "name": "John Doe",
  "age": 25
}
```
