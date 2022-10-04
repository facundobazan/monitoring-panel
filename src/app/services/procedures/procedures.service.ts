import { Injectable } from '@angular/core';
import { addDoc, collection, collectionData, deleteDoc, doc, Firestore } from '@angular/fire/firestore';
import { Procedure } from 'src/app/core/models/procedure.interface';
//import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ProceduresService {
  private procedureRef = collection(this.firestore, 'procedures');

  constructor(private firestore: Firestore) { }

  addProcedure(procedure: Procedure) {
    return addDoc(this.procedureRef, procedure);
  }

  getProcedures() {
    return collectionData(this.procedureRef, { idField: 'id' });
  }

  getProcedure(procedure: Procedure) {
    return doc(this.firestore, `procedures/${procedure.id}`);
  }

  deleteProcedure(procedure: Procedure) {
    return deleteDoc(this.getProcedure(procedure));
  }
}
