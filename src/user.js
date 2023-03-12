var randNo = Math.ceil((Math.random()*100));


const userData = {
    user1 : {
            src : "https://picsum.photos/id/"+String(randNo)+"/200/300",
            class : "Freshman",
            fName : "Walter White",
            school : "IBA",
            email : "Heisenburg@gmail.com"
        },

    user2 : {
            src : "https://picsum.photos/id/"+String(randNo+1)+"/200/300",
            class : "Sophomore",
            fName : "Jesse",
            school : "Karachi University",
            email : "pinkman@gmail.com"
        },
        
    user3 : {
            src : "https://picsum.photos/id/"+String(randNo+2)+"/200/300",
            class : "Junior",
            fName : "Gustavo Fring",
            school : "LUMS",
            email : "gus@gmail.com"
        }
}


export default userData;