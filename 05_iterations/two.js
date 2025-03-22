const myObject = {
    js: 'javascript',
    cpp: 'c++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {  // as we cannot use for of loop for object, in can be used
    // console.log(key)
    //js
    // cpp
    // rb
    // swift
    console.log(`Key is ${key} and value is ${myObject[key]}`)
    // Key is js and value is javascript
    // Key is cpp and value is c++
    // Key is rb and value is ruby
    // Key is swift and value is swift by apple
}

const programming = ["js", "rb", "py", "java", "cpp"]

for(const key in programming){
    // console.log(key)
    // 0
    // 1
    // 2
    // 3
    // 4
    console.log(`Key is ${key} and value is ${programming[key]}`)
    // Key is 0 and value is js
    // Key is 1 and value is rb
    // Key is 2 and value is py
    // Key is 3 and value is java
    // Key is 4 and value is cpp
}

const = myCoding = [
    {
        languageName: "javaScript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    }
]

myCoding.forEach((item)=>{
    console.log(item.languageName)
    // js
    // ruby
    // python
    // cpp
})