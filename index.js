import express from 'express'
import {jsPDF} from 'jspdf'
import path from 'path'
import 'jspdf-autotable';


const app = express()
const port = 3000


const form = path.resolve('./form.html')



app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/', (req, res) => {
  
  res.sendFile(form)
})
app.post('/', async (req,res) => {
  
  const search = await req.body.search
  const name = await req.body.name
  console.log(name)

  // // Create a new jsPDF instance
// Create a new jsPDF instance
var doc = new jsPDF();






//table 0
var headers = ['SHARADA UNITECH'];

// Configure the table options
var tableOptions = {
  margin: { top: 20 },
  didDrawCell: function (data) {
    // Add table border on each cell
    var lineWidth = 0.1;
    doc.setLineWidth(lineWidth);
    doc.line(data.cell.x, data.cell.y, data.cell.x, data.cell.y + data.cell.height); // Left border
    doc.line(data.cell.x, data.cell.y, data.cell.x + data.cell.width, data.cell.y); // Top border
    doc.line(data.cell.x + data.cell.width, data.cell.y, data.cell.x + data.cell.width, data.cell.y + data.cell.height); // Right border
  }
};

// Generate the table using AutoTable
doc.autoTable({
  head: [headers],
  body: data,
  startY: 20,
  styles:{
    fontSize: 20
  },
  tableWidth: 'auto',
  theme: 'plain',
  ...tableOptions
});




//table 1
var data = [
  ['2939,Ground Floor, Avoy Apartment,(Near SD-3 Bus Stand),Sonarpur'],
  ['Kolkata-700150,West Bangal Ph-8240531063,9831093767 email:sharadaunitech@gmail.com'],
  ['GSTIN NO: 19HGCPD4511C1ZW']
];

// Configure the table options
var tableOptions = {
  margin: { top: 25, },
  didDrawCell: function (data) {
    // Add table border on each cell
    var lineWidth = 0.1;
    doc.setLineWidth(lineWidth);
    doc.line(data.cell.x, data.cell.y, data.cell.x, data.cell.y + data.cell.height); // Left border
    doc.line(data.cell.x + data.cell.width, data.cell.y, data.cell.x + data.cell.width, data.cell.y + data.cell.height); // Right border
  }
};

// Generate the table using AutoTable
doc.autoTable({
  body: data,
  startY: 30,
  tableWidth: 'auto',
  theme: 'plain',
  ...tableOptions
});




var data = [
  [`                         Customer Details\n\nName    ${name}\n\nAddress ${await req.body.address}\n\nContact No ${ await req.body.contact}`, `                                 Vendor Details\n\nINVOICE NO.    Priyanshu Mondal\n\nDATE: ${{}}\n\nContact No 93467349`],
];



//Table 2
// Configure the table options
var tableOptions = {
  margin: { top: 20 },
  didDrawCell: function (data) {
    // Add table border on each cell
    var lineWidth = 0.1;
    doc.setLineWidth(lineWidth);
    doc.line(data.cell.x, data.cell.y, data.cell.x, data.cell.y + data.cell.height); // Left border
    doc.line(data.cell.x, data.cell.y, data.cell.x + data.cell.width, data.cell.y); // Top border
    doc.line(data.cell.x + data.cell.width, data.cell.y, data.cell.x + data.cell.width, data.cell.y + data.cell.height); // Right border
    doc.line(data.cell.x, data.cell.y + data.cell.height, data.cell.x + data.cell.width, data.cell.y + data.cell.height); // Bottom border
  }
};

// Generate the table using AutoTable
doc.autoTable({
  body: data,
  startY: 53,
  tableWidth: 'auto',
  theme: 'plain',
  ...tableOptions

});






//table 3

// Define the table headers and data
var headers = ['S.N.', 'Description of Goods', 'HSN','Oty.','Rate','Price','CGST','SGST','Amount'];
var data = [
  ['1', `${await req.body.itemName1}`, `${await req.body.hsn1}`,`${await req.body.qty1}`,`${await req.body.rate1}`,`${await req.body.price1}`,`${await req.body.cgst1}`,`${await req.body.sgst1}`,`${await req.body.amount1}`],
  ['2', `${await req.body.itemName2}`, `${await req.body.hsn2}`,`${await req.body.qty2}`,`${await req.body.rate2}`,`${await req.body.price2}`,`${await req.body.cgst2}`,`${await req.body.sgst2}`,`${await req.body.amount2}`],
  ['3', `${await req.body.itemName3}`, `${await req.body.hsn3}`,`${await req.body.qty3}`,`${await req.body.rate3}`,`${await req.body.price3}`,`${await req.body.cgst3}`,`${await req.body.sgst3}`,`${await req.body.amount3}`],
  ['4', `${await req.body.itemName4}`, `${await req.body.hsn4}`,`${await req.body.qty4}`,`${await req.body.rate4}`,`${await req.body.price4}`,`${await req.body.cgst4}`,`${await req.body.sgst4}`,`${await req.body.amount4}`],
  ['5', `${await req.body.itemName5}`, `${await req.body.hsn5}`,`${await req.body.qty5}`,`${await req.body.rate5}`,`${await req.body.price5}`,`${await req.body.cgst5}`,`${await req.body.sgst5}`,`${await req.body.amount5}`],
  ['6', `${await req.body.itemName6}`, `${await req.body.hsn6}`,`${await req.body.qty6}`,`${await req.body.rate6}`,`${await req.body.price6}`,`${await req.body.cgst6}`,`${await req.body.sgst6}`,`${await req.body.amount6}`],
  ['7', `${await req.body.itemName7}`, `${await req.body.hsn7}`,`${await req.body.qty7}`,`${await req.body.rate7}`,`${await req.body.price7}`,`${await req.body.cgst7}`,`${await req.body.sgst7}`,`${await req.body.amount7}`],
  ['8', `${await req.body.itemName8}`, `${await req.body.hsn8}`,`${await req.body.qty8}`,`${await req.body.rate8}`,`${await req.body.price8}`,`${await req.body.cgst8}`,`${await req.body.sgst8}`,`${await req.body.amount8}`],
  ['9', `${await req.body.itemName9}`, `${await req.body.hsn9}`,`${await req.body.qty9}`,`${await req.body.rate9}`,`${await req.body.price9}`,`${await req.body.cgst9}`,`${await req.body.sgst9}`,`${await req.body.amount9}`],
  ['10', `${await req.body.itemName10}`, `${await req.body.hsn10}`,`${await req.body.qty10}`,`${await req.body.rate10}`,`${await req.body.price10}`,`${await req.body.cgst10}`,`${await req.body.sgst10}`,`${await req.body.amount10}`],
  ['11', `${await req.body.itemName11}`, `${await req.body.hsn11}`,`${await req.body.qty11}`,`${await req.body.rate11}`,`${await req.body.price11}`,`${await req.body.cgst11}`,`${await req.body.sgst11}`,`${await req.body.amount11}`],
  ['12', `${await req.body.itemName12}`, `${await req.body.hsn12}`,`${await req.body.qty12}`,`${await req.body.rate12}`,`${await req.body.price12}`,`${await req.body.cgst12}`,`${await req.body.sgst12}`,`${await req.body.amount12}`],
  ['13', `${await req.body.itemName13}`, `${await req.body.hsn13}`,`${await req.body.qty13}`,`${await req.body.rate13}`,`${await req.body.price13}`,`${await req.body.cgst13}`,`${await req.body.sgst13}`,`${await req.body.amount13}`],
  ['14', `${await req.body.itemName14}`, `${await req.body.hsn14}`,`${await req.body.qty14}`,`${await req.body.rate14}`,`${await req.body.price14}`,`${await req.body.cgst14}`,`${await req.body.sgst14}`,`${await req.body.amount14}`]
];

// Configure the table opti`${await req.body.qty1}`
 tableOptions = {
  margin: { top: 20 },
  didDrawCell: function (data) {
    // Add table border on each cell
    var lineWidth = 0.1;
    doc.setLineWidth(lineWidth);
    doc.line(data.cell.x, data.cell.y, data.cell.x, data.cell.y + data.cell.height); // Left border
    doc.line(data.cell.x, data.cell.y, data.cell.x + data.cell.width, data.cell.y); // Top border
    doc.line(data.cell.x + data.cell.width, data.cell.y, data.cell.x + data.cell.width, data.cell.y + data.cell.height); // Right border
    doc.line(data.cell.x, data.cell.y + data.cell.height, data.cell.x + data.cell.width, data.cell.y + data.cell.height); // Bottom border
  }
};

// Generate the table using AutoTable
doc.autoTable({
  head: [headers],
  body: data,
  startY: 85,
  tableWidth: 'auto',
  theme: 'plain',
  ...tableOptions
});



//table 4
var headers = ['Name', 'Age'];
var data = [
  ['John Doe', '30'],
  ['Jane Smith', '25'],
  ['Bob Johnson', '40']
];

// Configure the table options
var tableOptions = {
  margin: { top: 20 },
  didDrawCell: function (data) {
    // Add table border on each cell
    var lineWidth = 0.1;
    doc.setLineWidth(lineWidth);
    doc.line(data.cell.x, data.cell.y, data.cell.x, data.cell.y + data.cell.height); // Left border
    doc.line(data.cell.x, data.cell.y, data.cell.x + data.cell.width, data.cell.y); // Top border
    doc.line(data.cell.x + data.cell.width, data.cell.y, data.cell.x + data.cell.width, data.cell.y + data.cell.height); // Right border
    doc.line(data.cell.x, data.cell.y + data.cell.height, data.cell.x + data.cell.width, data.cell.y + data.cell.height); // Bottom border
  }
};

// Generate the table using AutoTable
doc.autoTable({
  head: [headers],
  body: data,
  startY: 199,
  tableWidth: '120',
  theme: 'plain',
  ...tableOptions
});





//table 6
var data = [
  ['Bank Details:\n here goes the address']
];

// Configure the table options
var tableOptions = {
  margin: { top: 20 },
  didDrawCell: function (data) {
    // Add table border on each cell
    var lineWidth = 0.1;
    doc.setLineWidth(lineWidth);
    doc.line(data.cell.x, data.cell.y, data.cell.x, data.cell.y + data.cell.height); // Left border
    doc.line(data.cell.x, data.cell.y, data.cell.x + data.cell.width, data.cell.y); // Top border
    doc.line(data.cell.x + data.cell.width, data.cell.y, data.cell.x + data.cell.width, data.cell.y + data.cell.height); // Right border
    doc.line(data.cell.x, data.cell.y + data.cell.height, data.cell.x + data.cell.width, data.cell.y + data.cell.height); // Bottom border
  }
};

// Generate the table using AutoTable
doc.autoTable({
  body: data,
  startY: 229,
  tableWidth: '120',
  theme: 'plain',
  ...tableOptions
});



//table 7
var data = [
  ['Terms And conditions\n','\n\nReceivers Signature'],
  ['Remarks','\n\nAuthorised Sgnature']
];

// Configure the table options
var tableOptions = {
  margin: { top: 20 },
  didDrawCell: function (data) {
    // Add table border on each cell
    var lineWidth = 0.1;
    doc.setLineWidth(lineWidth);
    doc.line(data.cell.x, data.cell.y, data.cell.x, data.cell.y + data.cell.height); // Left border
    doc.line(data.cell.x, data.cell.y, data.cell.x + data.cell.width, data.cell.y); // Top border
    doc.line(data.cell.x + data.cell.width, data.cell.y, data.cell.x + data.cell.width, data.cell.y + data.cell.height); // Right border
    doc.line(data.cell.x, data.cell.y + data.cell.height, data.cell.x + data.cell.width, data.cell.y + data.cell.height); // Bottom border
  }
};

// Generate the table using AutoTable
doc.autoTable({
  body: data,
  startY: 240,
  tableWidth: '120',
  theme: 'plain',
  ...tableOptions
});

// Save or display the generated PDF
doc.save('sample.pdf');



  const pth = path.resolve('./sample.pdf')
  res.sendFile(pth)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})