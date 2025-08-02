// Define a class 'Student'
class Student {
  public name: string;
  private rollNumber: number;
  protected course: string;

  // Static property
  static schoolName: string = "Tech University";

  constructor(name: string, rollNumber: number, course: string) {
    this.name = name;
    this.rollNumber = rollNumber;
    this.course = course;
  }

  // Public method to display student details
  public displayDetails(): void {
    console.log(`Name: ${this.name}`);
    console.log(`Roll Number: ${this.rollNumber}`);
    console.log(`Course: ${this.course}`);
  }

  // Getter for private rollNumber
  public getRollNumber(): number {
    return this.rollNumber;
  }

  // Private method
  private secretCode(): string {
    return `STU-${this.rollNumber}-SECRET`;
  }

  // Public method accessing private method
  public showSecret(): void {
    console.log(`Secret Code: ${this.secretCode()}`);
  }

  // Static method
  static getSchoolInfo(): void {
    console.log(`School: ${Student.schoolName}`);
  }
}

// Subclass extending Student
class GraduateStudent extends Student {
  public year: number;

  constructor(name: string, rollNumber: number, course: string, year: number) {
    super(name, rollNumber, course);
    this.year = year;
  }

  // Override displayDetails to include graduation year
  public displayDetails(): void {
    super.displayDetails();
    console.log(`Graduation Year: ${this.year}`);
  }

  public displayCourse(): void {
    console.log(`${this.name} is enrolled in ${this.course}`);
  }
}

// Creating objects and using the class
const student1 = new Student("Sneha", 101, "AI & ML");
student1.displayDetails();
student1.showSecret();
console.log(`Accessing roll number via getter: ${student1.getRollNumber()}`);

const gradStudent = new GraduateStudent("Rahul", 102, "Data Science", 2025);
gradStudent.displayDetails();
gradStudent.displayCourse();

// Accessing static method and property
Student.getSchoolInfo();
console.log(`School Name (static): ${Student.schoolName}`);