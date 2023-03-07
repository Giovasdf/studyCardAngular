import { Component } from '@angular/core';
import * as XLSX from 'xlsx';
import { ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-study-cards',
  templateUrl: './study-cards.component.html',
  styleUrls: ['./study-cards.component.css'],
})
export class StudyCardsComponent {
  @ViewChild('myCard') myCard: ElementRef<HTMLElement> | undefined;

  public dataFromXls: any[] = [];
  public palabrasMostradas: any[] = [];
  public englishWord: any;
  public nativeWord: any;
  public decription: any;

  public isFlipped = false;

  public cantCorrectas: number = 0;

  obtenerPalabraAleatoria() {
    //buscar mientras no sea undefined y no este en el array de palabras mostradas
    //si es undefined, buscar otra palabra
    //si no esta en el array de palabras mostradas, agregarla y mostrarla

    let palabraAleatoria = this.dataFromXls[Math.floor(Math.random() * this.dataFromXls.length)];
    while (palabraAleatoria[0] == undefined || this.palabrasMostradas.includes(palabraAleatoria)) {
      palabraAleatoria = this.dataFromXls[Math.floor(Math.random() * this.dataFromXls.length)];
		}
		this.palabrasMostradas.push(palabraAleatoria);
		this.englishWord = palabraAleatoria[0];
		this.nativeWord = palabraAleatoria[1];
  

  }

  flipCard() {
    this.isFlipped = !this.isFlipped;
  }

  sumarCorrecta() {
    this.cantCorrectas++;
    this.obtenerPalabraAleatoria();
  }

  marcarIncorrecta() {
    this.obtenerPalabraAleatoria();
  }

  onFileChange(evt: any) {
    const target: DataTransfer = <DataTransfer>evt.target;
    if (target.files.length > 1) {
      alert('Multiple files are not allowed');
      return;
    } else {
      const reader: FileReader = new FileReader();
      reader.onload = (e: any) => {
        const bstr: string = e.target.result;
        const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });
        const wsname = wb.SheetNames[0];
        const ws: XLSX.WorkSheet = wb.Sheets[wsname];
        let data = XLSX.utils.sheet_to_json(ws, { header: 1 });
        // Print the Excel Data
        this.dataFromXls = data;
        console.log(data);
      };
      reader.readAsBinaryString(target.files[0]);
    }
  }
}
