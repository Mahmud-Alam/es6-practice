class Student{
    constructor(sId, sName){
        this.id = sId;
        this.name=sName;
        this.school = "Ak scl"
    }
}

const student1 = new Student(12,"Mahmud");
const student2 = new Student(29,"Alam");
const student3 = new Student(22,"Badhan");

console.log(student1,student2);
console.log(student1.name,student2.name);
console.log(student2);
