import { HomeService } from './../../../services/home-service/home.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.scss']
})
export class HomeComponentComponent implements OnInit {
  alunos = [];
  constructor( private service: HomeService) { }   //o serviço sempre vai ficar dentro do construtor e privado

  ngOnInit(): void {

    this.service.getAlunos().subscribe((data) => {
      console.log(data);
      this.alunos = data;

    })
  }

  insertAlunos(){
    const data = {
      nome: "Lucas",
      idade: 25
    }
    return this.service.insertAlunos(data).subscribe((data) => {
      return console.log(data);

    })
}

}
