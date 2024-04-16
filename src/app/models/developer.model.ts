import { Skill } from "./skill.model";

export class Developer {
    firstName : string = "";
    lastName : string = "";
    age : number = 0;
    gender : string ="";
    bio : string ="";
    skills: Skill[] = [];

    constructor(firstName : string,
    lastName : string,
    age : number = 0,
    gender : string,
    bio : string,
    skills: Skill[]) {
        this.firstName = firstName;
        this.lastName = lastName
        this.age = age;
        this.bio = bio;
        this.gender = gender;
        this.skills = skills;
    }
}