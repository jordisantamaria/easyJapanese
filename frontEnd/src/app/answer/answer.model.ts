import {Question} from "../question/question.model";
import {User} from "../auth/user.model";



export class Answer {

  //al hacerlos publicos en el constructor, las variables son de clase, no hay que
  //crearla fuera y asignarla
  constructor(
    public description: string,
    public question: Question,
    public createdAt?: Date,
    public user?: User
  ) {

  }
}
