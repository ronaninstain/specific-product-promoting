const exams = [
  {
    title: "CompTIA Security + (SY0-601)",
    link: "#",
  },
  {
    title: "CompTIA A+",
    link: "#",
  },
  {
    title: "CCNP Enterprice (350-401)",
    link: "#",
  },
  {
    title: "CCNA (200-301)",
    link: "#",
  },
  {
    title: "AWS Certified Solutions Architect -Associate",
    link: "#",
  },
  {
    title: "Microsoft Certified Azure Fundamentals AZ-900)",
    link: "#",
  },
  {
    title: "CASP-004 (CAS-004)",
    link: "#",
  },
  {
    title: "CompTIA Network+ (N10-008)",
    link: "#",
  },
  {
    title: "ITIL V4 Foundation (ITILFND V4)",
    link: "#",
  },
  {
    title: "Microsoft Certified: Azure Solutions Architect Expert(AZ-305)",
    link: "#",
  },
  {
    title: "CCIE Enterprise (350-401)",
    link: "#",
  },
  {
    title: "CISSP (CISSP)",
    link: "#",
  },
  {
    title: "AWS Certified Solution Architect - Professional (SAP-C01)",
    link: "#",
  },
  {
    title: "CCNP Collaboration (350-801)",
    link: "#",
  },

  {
    title: "Web Development",
    link: "#",
  },
];
const examList = document.querySelector("#the-main-list-ks-exams ul");

exams.forEach((exam, index) => {
  const listItem = document.createElement("li");
  listItem.innerHTML = `
       <a href=${exam.link}>${index + 1}. ${exam.title}</a>
        `;
  examList.append(listItem);
});
function searchExam() {
  let inputValue = document.getElementById("search-exam").value.toLowerCase();
  const filteredExam = exams.filter((course) =>
    course.title.toLowerCase().includes(inputValue)
  );

  if (filteredExam.length > 0) {
    examList.innerHTML = ``;
  }
  filteredExam.forEach((item, index) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
       <a href=${item.link}>${index + 1}. ${item.title}</a>
        `;
    // listItem.innerText = item.title;
    // listItem.href = item.link;
    examList.append(listItem);
  });
}
// console.log(exams)
