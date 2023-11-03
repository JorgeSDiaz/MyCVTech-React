import html2pdf from "html2pdf.js";

export default handleDownloadPDF = () => {
    const element = document.getElementById("pdf");
    const opt = {
      margin: 0.5,
      filename: "myCV.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    };
    html2pdf().from(element).set(opt).save();
  };

