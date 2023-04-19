const form = document.getElementById("form");
const inputName = document.getElementById("name");
const inputMail = document.getElementById("mail");
const inputAddress = document.getElementById("address");
const inputMsg = document.getElementById("msg");
const btnSubmit = document.getElementById("submit");
const invalidMsg = document.getElementById("invalid-msg");


const xmlDisplay = (xmlData) => {
    document.querySelector('.display-section').style.display = 'block';
    let formatData = xmlData.replace(/></g, '>\n<').replace(/<U/g, '\n<U');
    document.querySelector('.xml-data').innerText += formatData;
}

const createXMLfile = (name, email, address, msg) => {
    // create a new XML document
    let xmlDoc = document.implementation.createDocument("", "", null);

    // create the user element
    let userElement = xmlDoc.createElement("USER");
    xmlDoc.appendChild(userElement);

    // create child elements and add them to the user element
    let childName = xmlDoc.createElement("NAME");
    let childEmail = xmlDoc.createElement("EMAIL");
    let childAddress = xmlDoc.createElement("ADDRESS");
    let childMsg = xmlDoc.createElement("MESSAGE");
    userElement.appendChild(childName);
    userElement.appendChild(childEmail);
    userElement.appendChild(childAddress);
    userElement.appendChild(childMsg);

    // add some text to the child elements
    let textName = xmlDoc.createTextNode(name);
    var textEmail = xmlDoc.createTextNode(email);
    var textAddress = xmlDoc.createTextNode(address);
    var textMsg = xmlDoc.createTextNode(msg);
    childName.appendChild(textName);
    childEmail.appendChild(textEmail);
    childAddress.appendChild(textAddress);
    childMsg.appendChild(textMsg);

    // convert the XML document to a string for display
    let xmlString = new XMLSerializer().serializeToString(xmlDoc);

    xmlDisplay(xmlString);
};

const validateInputs = () => {
  if (
    inputName.value.trim() === "" ||
    inputMail.value.trim() === "" ||
    inputAddress.value.trim() === "" ||
    inputMsg.value.trim() === ""
  ) {
    invalidMsg.innerText = "Blank space is not valid.";
    inputName.value = "";
    inputMail.value = "";
    inputAddress.value = "";
    inputMsg.value = "";
  } else {
    createXMLfile(inputName.value, inputMail.value, inputAddress.value, inputMsg.value);
    invalidMsg.innerText = "";
    inputName.value = "";
    inputMail.value = "";
    inputAddress.value = "";
    inputMsg.value = "";
    
  }
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
//   console.log("submit clicked");

  validateInputs();
});

/*
<USER>
    <NAME></NAME>
    <EMAIL></EMAIL>
    <ADDRESS></ADDRESS>
    <MESSAGE></MESSAGE>
</USER>



<root>
    <child1>This is the first child element</child1>
    <child2>This is the second child element</child2>
</root>
*/

