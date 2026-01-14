import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import { variable64 } from "src/assets/img/img";


(pdfMake as any).vfs = pdfFonts.vfs;

const generatePDF = (
  products: any[],
  datos_paciente: any,
  firma:string
) => {

  const tableBody = [
    [
      { text: "Parametros", style: "tableHeader" },
      { text: "Resultado", style: "tableHeader" },
    ],
    ...products.map((product) => [
      { text: product.label_input, margin: [0, 5, 0, 5] },
      { text: product.respuesta_campo.toString(), margin: [0, 5, 0, 5] },
    ]),
  ];

  const content: any[] = [];


  content.push({
    columns: [
      { image: variable64.miVar, width: 140 },
      {
        stack: [
          { text: `Dr. Oscar Mauricio Gómez Prieto`, style: "header" },
          { text: `Optometria Universidad San Martín`, style: "subheader" },
          { text: `Carrera 53B Bis No.4F-18`, style: "subheader" },
          { text: `3108787161`, style: "subheader" },
          { text: `oscarmauriciog@hotmail.com`, style: "subheader" },
        ],
        alignment: "right",
      },
    ],
  });

  content.push({ text: "\n" });
  content.push({ text: "\n" });
  content.push({ text: "\n" });

  content.push({
    columns: [
      {
        stack: [
          { text: `Fecha / ${datos_paciente.fecha}`, style: { alignment: "right", bold:true } },
          { text: `${datos_paciente.nombre_completo}`, style: "header" },
          { text: `Paciente`, style: "subheader" },
        ]
      },
    ],
  });

  content.push({ text: "\n" });

  content.push({
    table: {
      headerRows: 1,
      widths: ["*", "*"],
      body: tableBody,
    },
    layout: "lightHorizontalLines",
    margin: [0, 11, 0, 11],
  });
  content.push({ text: "\n" });
  content.push({ text: "\n" });

    content.push({
    columns: [
      {
        stack: [
          { text: `Observaciones`, style: "header" },
          { text: `${datos_paciente.observaciones[0].respuesta_campo.toString()}`, style: "subheader" }
        ]
      },
    ],
  });

    content.push({
    columns: [
      {
        stack: [
          { image: firma, width: 140,  },
          { text: `Optómetra______________________________`, style: "header", },

        ],
        alignment: "right",
      },
    ],
  });


  const styles = {
    header: {
      fontSize: 14,
      bold: true,
    },
    subheader: {
      fontSize: 12,
      margin: [0, 2, 0, 2],
    },
    tableHeader: {
      bold: true,
      fontSize: 12,
      color: "black",
    },
    total: {
      fontSize: 12,
      bold: true,
    },
  };


  const docDefinition: any = {
    content,
    styles,
  };

  pdfMake.createPdf(docDefinition).open();
};

export default generatePDF;
