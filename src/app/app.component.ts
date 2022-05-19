import { Component, ViewChild } from '@angular/core';
import { NgbAlert, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DrugsService } from './service/drugs.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  activeIndex;
  drugList;

  //Alert configs
  @ViewChild('successAlert', { static: false }) successAlert: NgbAlert;
  @ViewChild('errorAlert', { static: false }) errorAlert: NgbAlert;
  successMessage = "Changes applied successfully!";
  errorMessage = "Error occurred. Please try again!";
  showSuccessAlert = false;
  showErrorAlert = false;

  constructor(private modalService: NgbModal, public drugService: DrugsService) { }

  ngOnInit() {
    this.getDrugList();
    //Auto close success alert in 10 seconds.
    setTimeout(() => this.successAlert.close(), 10000);
  }

  /**
   * Load the list of drugs from the server.
   */
  getDrugList() {
    this.drugService.getDrugList().subscribe(
      data => {
        if (data) {
          this.drugList = data;
        } else {
          this.showErrorAlert = true;
        }
      }
    );
  }

  /**
   * Gets confirmation from the user to save the data.
   * @param index - clicked index position
   * @param content - model reference
   */
  onSaveClick(index, content, item) {
    this.activeIndex = index;
    this.modalService.open(content, { size: 'sm' });
  }

  /**
   * On save confirmation, edit or add the data to the server.
   */
  onSaveConfirm() {
    this.drugList[this.activeIndex].edit = false;
    this.modalService.dismissAll();
    if (!this.drugList[this.activeIndex].id) {
      //Add Mode
      this.saveDrug(this.activeIndex);
    } else {
      //Edit Mode
      this.editDrug(this.activeIndex);
    }
  }

  /**
   * Edit (PUT) API call on confirmation from the user.
   * @param index - Index in which data in entered.
   */
  editDrug(index) {
    if (!this.validData(this.drugList[index])) {
      return;
    }
    let pFormData = this.drugList[index];
    pFormData.edit = false;
    this.drugService.editDrug(pFormData).subscribe(
      data => {
        if (data) {
          this.showSuccessAlert = true;
          this.ngOnInit();
        } else {
          this.showErrorAlert = true;
        }
      });
  }

  /**
   * Add (POST) API call on confirmation from the user.
   * @param index - Index in which data in entered.
   */
  saveDrug(index) {
    if (!this.validData(this.drugList[index])) {
      return;
    } else {
      let pFormData = this.drugList[index];
      pFormData.edit = false;
      this.drugService.addDrug(pFormData).subscribe(
        data => {
          if (data) {
            this.showSuccessAlert = true;
            this.ngOnInit();
          } else {
            this.showErrorAlert = true;
          }
        });
    }
  }

  /**
   * On clicking Delete from screen
   * @param index - index of the grid
   * @param deleteContent - modal reference
   */
  deleteDrug(index, deleteContent) {
    this.activeIndex = index;
    this.modalService.open(deleteContent, { size: 'sm' });
  }

  /**
   * Delete API call on confirmation from the user.
   */
  onConfirmDelete() {
    this.drugService.deleteDrug(this.drugList[this.activeIndex].id).subscribe(
      data => {
        if (data) {
          this.showSuccessAlert = true;
          this.ngOnInit();
        }
      }
    )
    this.modalService.dismissAll();
  }

  /**
   * Form's mandatory fields can be validated here - other validations can be added.
   * @param data - Data to be validated.
   * @returns - boolean indicating true or false.
   */
  validData(data) {
    if (data.name == "") {
      this.showErrorAlert = true;
      this.errorMessage = "Please enter the drug name";
      return false;
    }
    return true;
  }

  /**
   * Adding a new row to the grid.
   */
  addItem() {
    this.drugList.push({
      "name": "",
      "form": "",
      "strengths": "",
      "category": "",
      "edit": true
    });
  }

  /**
   * Makes the rows editable in the UI.
   * @param index - clicked row index.
   */
  onEditClick(index) {
    this.drugList[index].edit = true;
  }

}