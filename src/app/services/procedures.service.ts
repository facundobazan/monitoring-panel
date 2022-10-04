import { Injectable } from '@angular/core';
import { addDoc, collection, collectionData, deleteDoc, doc, Firestore } from '@angular/fire/firestore';
import { IProcedure } from '../core/models/procedure';
//import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ProceduresService {
  private procedureRef = collection(this.firestore, 'procedures');

  constructor(private firestore: Firestore) { }

  addProcedure(procedure: IProcedure) {
    return addDoc(this.procedureRef, procedure);
  }

  getProcedures() {
    return collectionData(this.procedureRef, { idField: 'id' });
  }

  getProcedure(procedure: IProcedure) {
    return doc(this.firestore, `procedures/${procedure.id}`);
  }

  deleteProcedure(procedure: IProcedure) {
    return deleteDoc(this.getProcedure(procedure));
  }
}
