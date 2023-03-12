import { render } from "@testing-library/react";
import React, {Component} from "react";

 


export default function User({profile})
{
    let clr = (profile.class=="Freshman")? "green" : "black";
    console.log(clr);

    return (
            <div class="center">    
                <div class= {clr}>
                    <img src={profile.src} alt="Random pic" width="100" height="100"></img>
                    <ul>
                        <li>Full Name : {profile.fName}</li>
                        <li>Class Level : {profile.class}</li>
                        <li>School : {profile.school}</li>
                        <li>Email : {profile.email}</li>
                    </ul>
                </div>
            </div>
        );
    
}


// class Picture extends Component{
    

    
//     render(){
       
//         return (
//             <div class="center">
//                 <div class= {clr}>
//                     <img src={profile.user1.src} alt="Random pic" width="100" height="100"></img>
//                     <ul>
//                         <li>Full Name : {profile.user1.fName}</li>
//                         <li>Class Level : {profile.user1.class}</li>
//                         <li>School : {profile.user1.school}</li>
//                         <li>Email : {profile.user1.email}</li>
//                     </ul>
//                 </div>
//                 <div class= {clr}>
//                     <img src={profile.user2.src} alt="Random pic" width="100" height="100"></img>
//                     <ul>
//                         <li>Full Name : {profile.user2.fName}</li>
//                         <li>Class Level : {profile.user2.class}</li>
//                         <li>School : {profile.user2.school}</li>
//                         <li>Email : {profile.user2.email}</li>
//                     </ul>
//                 </div>

//                 <div class= {clr}>
//                     <img src={profile.user3.src} alt="Random pic" width="100" height="100"></img>
//                     <ul>
//                         <li>Full Name : {profile.user3.fName}</li>
//                         <li>Class Level : {profile.user3.class}</li>
//                         <li>School : {profile.user3.school}</li>
//                         <li>Email : {profile.user3.email}</li>
//                     </ul>
//                 </div>
//             </div>

//         )
//     }
// }   

// export default Picture;