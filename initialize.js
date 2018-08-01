// Initialize Cloud Firestore through Firebase

var db = firebase.firestore();
var employeesRef = db.collection("employees")

//Reading data from CFS
employeesRef.get().then((querySnapShot)=>{
    querySnapShot.forEach((doc) => {
        console.log(`${doc.id}`);
    })
})


// adding data to CFS

// employeesRef.doc("f.khan").set({
//    fName: 'Farrukh',
//    lName: 'Khan',
//    email: 'farrukh@yahoo.com',
//    age: 35,
//    gender: 'Male',
//    yearsOfExpereince: 9,
//    isFullTime: true, 
// });

// employeesRef.doc("j.Tailor").set({
//     fName: 'Jason',
//     lName: 'Tailor',
//     email: 'jason@yahoo.com',
//     age: 36,
//     gender: 'Male',
//     yearsOfExpereince: 5,
//     isFullTime: true, 
//  });

//  employeesRef.doc("u.james").set({
//     fName: 'Ulysses',
//     lName: 'James',
//     email: 'uly@yahoo.com',
//     age: 39,
//     gender: 'Male',
//     yearsOfExpereince: 3,
//     isFullTime: true, 
//  });

//  employeesRef.doc("b.larance").set({
//     fName: 'Brittany',
//     lName: 'Larwance',
//     email: 'brittany@yahoo.com',
//     age: 26,
//     gender: 'Female',
//     yearsOfExpereince: 4,
//     isFullTime: true, 
//  });