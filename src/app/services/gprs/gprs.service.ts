import { Injectable } from '@angular/core';
import { Report } from 'src/app/core/models/report.interface';

@Injectable({
  providedIn: 'root'
})
export class GprsService {
  private reader = new FileReader();
  constructor() { }

  async readFile(input: any) {
    /*let array;    
    this.reader.onload =  (evt) => {  array = this.convertToArray(evt.target?.result) };
    this.reader.readAsText(e.target.files[0]) ;
    return array;*/
    this.reader.readAsText(await input.target.files[0]);
    this.reader.onload = async (evt) => {
      return await this.convertToArray(evt.target?.result)
    };
  }

  async convertToArray(evt: any) {
    let line;

    evt.endsWith("\n")
      ? (line = await evt.substring(0, evt.length - 1).split("\n"))
      : (line = await evt.split("\n"));

    return await line.map(async (l: any) => await this.setReport(await l.replace(/"/).split(",")));
  }

  async setReport(array: string[]): Promise<Report> {
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
