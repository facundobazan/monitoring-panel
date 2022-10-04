import { Component, OnInit } from '@angular/core';
import { Report } from 'src/app/core/models/report.interface';
import { GprsService } from 'src/app/services/gprs/gprs.service';

@Component({
  selector: 'app-gprs-report',
  templateUrl: './gprs-report.component.html',
  styleUrls: ['./gprs-report.component.sass']
})
export class GprsReportComponent implements OnInit {
  private reader = new FileReader();
  array: Report[] = [];
  constructor(private gprsService: GprsService) {
    //this.array = [];
  }

  ngOnInit(): void {

  }

  loadFile(e: any) {
    /*const [file] = e.target.files;
    let reader = new FileReader();
    reader.readAsText(file)
    reader.onload = ()=>{
      console.log(reader.result);
      
    }
    //console.log(file);*/
    this.gprsService.readFile(e);
  }

  async readFile(input: any) {
    //console.log(typeof(input.target.files[0]))
    //console.log(input.target.files[0])
    //let array;
    this.reader.readAsText(await input.target.files[0]);
    this.reader.onload = async (evt) => await this.convertToArray(evt.target?.result);
    //console.log(this.array)
    //return array;
  }

  async convertToArray(evt: any) {
    let line;
    //let result;
    evt.endsWith("\n")
      ? (line = await evt.substring(0, evt.length - 1).split("\n"))
      : (line = await evt.split("\n"));
    return await line.map(async (l: any) => this.array.push( this.setReport(await l.replace(/"/).split(","))));
  }

  setReport(array: string[]): Report {
    return {
      representanteComercial: array[0],
      nombre: array[1],
      codpanel: array[2],
      idComunicador: array[3],
      imei: array[4],
      contrato: array[5],
      numSerie: array[6],
      estado: array[7],
      habilitada: array[8],
      fechaHabilitacion: array[9],
      fechaDeshabilitacion: array[10],
      modelo: array[11],
      numTelefonoSim: array[12],
      numImsi: array[13],
      exton: array[14],
      canalSms: array[15],
      canalGprs: array[16],
      smson: array[17],
      be: array[18],
      apn: array[19],
    };
  }
}
