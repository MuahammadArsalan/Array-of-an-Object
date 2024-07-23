

// console.log('hello');

// Object

// let userObject = {
// username : 'Arsalan',
// email : 'muhammadarsalan@gmail.com',
// age :20,

// }
// console.log(userObject);


// let obj = {
//     name:'Arsalan',
//     age:18,
//     email:'muhammadarsalan@gmail.com',
//     greetUser : function(){
//         // console.log('hello before return');
//         // return 'hello after return';
//         return `Hello ${this.firstName}`
    
//     }
// }
// console.log(obj);

// delete obj.name;
// obj.firstName = `Muhammad`;
// obj.lastName = `Arsalan`;
// console.log(obj.greetUser());
// console.log(obj);






// PROBLEM :

// 4 input feild ki value object m print karwani h


// let name = document.querySelector('#name')
// let age = document.querySelector('#age')
// let city = document.querySelector('#city')
// let email = document.querySelector('#email')



// function Object(){
//     let userObj = {
//         name :`${name.value}`,
//         age :`${age.value}`,
//         city :`${city.value}`,
//         email :`${email.value}`
//     }
// name.value ='' 
// age.value ='' 
// city.value ='' 
// email.value ='' 

//     console.log(userObj);
//     // console.log(name.value);
//     // console.log(age.value);
//     // console.log(city.value);
//     // console.log(email.value);
    
    
    
// }





const div = document.querySelector('#box');




// let userObj = [
//     {
//     name : 'Arsalan',
//     age : 20,
//     hobbies:['Cricket','Football','Gaming']
// },
//     {
//     name : 'Usman',
//     age : 29,
//     hobbies:['Cricket','Football','Gaming']

// },
//     {
//     name : 'Ali',
//     age : 40,
//     hobbies:['Cricket','Football','Gaming']

// },
//     {
//     name : 'Hammad',
//     age : 25,
//     hobbies:['Cricket','Football','Eating','Gaming']

// },
//     {
//     name : 'Hassan',
//     age : 58,
//     hobbies:['Cricket','Football','Gaming']

// },
//     {
    //     name : 'Ubaid',
    //     age : 27,
    //     hobbies:['Cricket','Football','Gaming','Animation', 'Designing']
    
    // },
    // ]
    
    //          MERI PARACTICE

// for(let i=0;i<userObj.length;i++){
// // console.log(userObj[i]);
// let hobbiesList = ''
// for(let j =0;j<userObj[i].hobbies.length;j++){
// hobbiesList += `<li>${userObj[i].hobbies[j]}</li>`
// }


// div.innerHTML += `
// <h1>${userObj[i].name}</h1>
// <h2>${userObj[i].age}</h2>
// <h4><ul>${hobbiesList}</ul></h4>


// <hr/>`

// }































//          MERI PARACTICE


// for(let i = 0 ; i < userObj.length; i++){
// let hobbiesList = '';
//     for(let j=0; j < userObj[i].hobbies.length; j++){
// hobbiesList += `<li>${userObj[i].hobbies[j]}</li>`
//     }
    
//     div.innerHTML +=`<h1> Name :${userObj[i].name}<h1/>
//     <h2> Age :${userObj[i].age}<h2/>
//     <h4><li>${hobbiesList}</li></h4>
//     <hr/>`
    


// }

//                    SIR   WALA 

// for (let i = 0; i < userObj.length; i++) {
    // console.log(userObj[i]);
//     let hobbiesList = '';
//     for (let j = 0; j < userObj[i].hobbies.length; j++) {
//         hobbiesList += `<li>${userObj[i].hobbies[j]}</li>`;
//     }
//     div.innerHTML += `
//     <h1>Name: ${userObj[i].name}</h1>
//     <h2>Age: ${userObj[i].age}</h2>
//     <ul>
//     ${hobbiesList}
//     </ul>
//     <hr/>
//     `
// }








// let nestedData = [
//     {
//         category: "Electronics",
//         subcategories: [
//             {
//                 name: "Smartphones",
//                 products: [
//                     { brand: "Apple", model: "iPhone 13", price: 999 },
//                     { brand: "Samsung", model: "Galaxy S21", price: 799 },
//                     { brand: "Google", model: "Pixel 6", price: 699 }
//                 ]
//             },
//             {
//                 name: "Laptops",
//                 products: [
//                     { brand: "Apple", model: "MacBook Pro", price: 1499 },
//                     { brand: "Dell", model: "XPS 13", price: 1299 },
//                     { brand: "HP", model: "Spectre x360", price: 1199 }
//                 ]
//             }
//         ]
//     },
//     {
//         category: "Clothing",
//         subcategories: [
//             {
//                 name: "Men's",
//                 products: [
//                     { brand: "Nike", item: "T-shirt", price: 25 },
//                     { brand: "Adidas", item: "Joggers", price: 40 }
//                 ]
//             },
//             {
//                 name: "Women's",
//                 products: [
//                     { brand: "Zara", item: "Dress", price: 50 },
//                     { brand: "H&M", item: "Jeans", price: 30 }
//                 ]
//             }
//         ]
//     }
// ];

// For WOMENR DRESS
// console.log(nestedData[1].subcategories[1].products[0].item);  

// For LAPTOP HP
// console.log(nestedData[1].subcategories[1].products[0].item);

// div.innerHTML = `${nestedData}`
// For Men's
// console.log(nestedData[1].subcategories[0].products[1].brand);
// console.log(nestedData[1].subcategories[0].products[1].item);
// console.log(nestedData[1].subcategories[0].products[1].price);












// let users = [
//     {
//       id: 1,
//       username: "user1",
//       email: "user1@example.com",
//       interests: ["Reading", "Hiking"]
//     },
//     {
//       id: 2,
//       username: "user2",
//       email: "user2@example.com",
//       interests: ["Traveling", "Photography", "Painting", "Cooking"]
//     },
//     {
//       id: 3,
//       username: "user3",
//       email: "user3@example.com",
//       interests: ["Coding", "Gaming", "Swimming", "Running", "Dancing"]
//     },
//     {
//       id: 4,
//       username: "user4",
//       email: "user4@example.com",
//       interests: ["Writing", "Yoga"]
//     },
//     {
//       id: 5,
//       username: "user5",
//       email: "user5@example.com",
//       interests: ["Singing", "Camping", "Movies", "Biking", "Drawing", "Fishing"]
//     },
//     {
//       id: 6,
//       username: "user6",
//       email: "user6@example.com",
//       interests: ["Gardening", "Shopping", "Crafting"]
//     },
//     {
//       id: 7,
//       username: "user7",
//       email: "user7@example.com",
//       interests: ["Volunteering", "Playing Instruments", "Cycling"]
//     },
//     {
//       id: 8,
//       username: "user8",
//       email: "user8@example.com",
//       interests: ["Hiking", "Painting"]
//     },
//     {
//       id: 9,
//       username: "user9",
//       email: "user9@example.com",
//       interests: ["Gaming", "Movies", "Shopping", "Swimming"]
//     },
//     {
//       id: 10,
//       username: "user10",
//       email: "user10@example.com",
//       interests: ["Cooking", "Reading", "Running"]
//     },
//     {
//       id: 11,
//       username: "user11",
//       email: "user11@example.com",
//       interests: ["Singing", "Traveling", "Photography"]
//     },
//     {
//       id: 12,
//       username: "user12",
//       email: "user12@example.com",
//       interests: ["Dancing", "Biking", "Drawing", "Fishing"]
//     },
//     {
//       id: 13,
//       username: "user13",
//       email: "user13@example.com",
//       interests: ["Camping", "Yoga", "Gardening"]
//     },
//     {
//       id: 14,
//       username: "user14",
//       email: "user14@example.com",
//       interests: ["Crafting", "Writing", "Cooking", "Coding", "Running"]
//     },
//     {
//       id: 15,
//       username: "user15",
//       email: "user15@example.com",
//       interests: ["Playing Instruments", "Reading", "Swimming", "Hiking"]
//     },
//     {
//       id: 16,
//       username: "user16",
//       email: "user16@example.com",
//       interests: ["Painting", "Movies"]
//     },
//     {
//       id: 17,
//       username: "user17",
//       email: "user17@example.com",
//       interests: ["Photography", "Traveling", "Shopping"]
//     },
//     {
//       id: 18,
//       username: "user18",
//       email: "user18@example.com",
//       interests: ["Fishing", "Cycling", "Singing", "Dancing"]
//     },
//     {
//       id: 19,
//       username: "user19",
//       email: "user19@example.com",
//       interests: ["Drawing", "Reading", "Gaming", "Hiking", "Yoga"]
//     },
//     {
//       id: 20,
//       username: "user20",
//       email: "user20@example.com",
//       interests: ["Cooking", "Running", "Movies", "Swimming", "Crafting", "Volunteering"]
//     }
//   ];
  
//   console.log(users);
  



// for (let i=0 ;i<users.length;i++){
// interestList =''
//     for(let j=0;j<users[i].interests.length;j++){
//         interestList += `<li>${users[i].interests[j]}</li>`
//     }

    
//     div.innerHTML += `
//     Name : ${users[i].username}<br><br>
//     Id : ${users[i].id}<br><br>
//     Email:${users[i].email}<br><br>
//    Interest: <ul>${interestList}</ul><br>
    
//     <hr/>` 
// }













let username = 'Muhammad Arsalan'
// console.log(username[4]);
// console.log(username.charAt(3));
// console.log(username.indexOf('m'));
// console.log(username.lastIndexOf('m'));
// console.log(username.split('a'));
// console.log(username.length-1);
console.log(username[username.length-1]);


let pak = 'Pakistan'
console.log(pak[pak.length-5]);
console.log(pak.indexOf('n'));
console.log(pak.length);








