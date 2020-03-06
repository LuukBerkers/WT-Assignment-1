class Teacher extends Person{
    constructor(name, age, experience, courseCode, link){
        super(name, age);
        this.experience = experience;
        this.courseCode = courseCode;
        this.link = link;
    }
}