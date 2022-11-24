import { contact } from "./contactinfo.js";

let contactInfo = document.querySelector("#contact-information");

class contactInformation {
  //get from API and point
  getcontact() {
    return contact;
  }
}
class UI {
  displayContactInformation(contactInformation) {
    let result = "";
    contactInformation.forEach((item) => {
      result += `<div class="row row-contact">
                  <div class="col-sm-1">
                    ${item.iconUrl}
                  </div>
                  <div class="col-sm-2"><h4 class="contact-title">${item.title}</h4></div>
                  <div class="col-sm-6">
                  <a
                      href=${item.href}
                      class="contact-info"
                      >${item.description}</a>
                   
                  </div>
                </div>`;
      contactInfo.innerHTML = result;
    });
  }
}
const ui = new UI();
ui.displayContactInformation(contact);
