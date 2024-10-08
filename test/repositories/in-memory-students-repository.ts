import { StudentRepository } from "../../src/application/repositories/StudentsRepository";
import { Student } from "../../src/domain/entities/student";

export class InMemoryChallengeStudentsRepository implements StudentRepository{
  
  public items: Student[] = []
  
  async findById(id: string): Promise<Student | null> {
    const student =  this.items.find(Student => student.id === id)

    if(!student){
      return null
    }

    return student
  }
}