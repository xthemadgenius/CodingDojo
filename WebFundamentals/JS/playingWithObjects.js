var users = [
    {
        name: "Michael", 
        age:37
    },
    {
        name: "John", 
        age:30
    }, 
    {
        name: "David", 
        age:27
    }
];

function findUser(obj){
    for(var i = 0; i < obj.length; i++){
        console.log(obj[i].name, "-", obj[i].age)
    }
}
findUser(users);