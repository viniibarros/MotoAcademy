import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-meu-componente',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './meu-componente.component.html',
  styleUrl: './meu-componente.component.css'
})
export class MeuComponenteComponent {
  tchauMundo = 'tchau';
  alunos = [
    {
      nome: "Euclides",
      idade: 21,
      trabalha: 'Eldorado',
      salario: '3.000'
    },
    {
      nome: "Richard",
      idade: 27,
      trabalha: 'Eldorado',
      salario: '3.000'
    },
    {
      nome: "Livia",
      idade: 20,
      trabalha: 'Eldorado',
      salario: '3.000'
    }
  ]
}
