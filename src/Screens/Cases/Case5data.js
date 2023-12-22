// Cases5data.js

let formData = {
  caseno1: "",
  casename1: "",
  hearingDate1: "",
  courtName1: "court0", // Default value
  partyname1: "",
  partycontact1: "",
  caseno2: "",
  casename2: "",
  adversePartyContact: "",
  adversePartyLawyerName: "",
  adversePartyLawyerContact: "",
};

export function setFormData(data) {
  formData = { ...formData, ...data };
}

export function getFormData() {
  return formData;
}

//export default { setFormData, getFormData };
