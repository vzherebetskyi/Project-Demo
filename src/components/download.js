import React from 'react';
import Questions from './questions.js';
import pdfMake from "../../node_modules/pdfmake/build/pdfmake.js";
import pdfFonts from "../../node_modules/pdfmake/build/vfs_fonts.js";
pdfMake.vfs = pdfFonts.pdfMake.vfs;

export default class Download extends React.Component {
    constructor(props){
      super(props);
      this.handleDownload = this.handleDownload.bind(this);
    }
  //This part of code responses for the generation of the document.
    handleDownload(data) {
      let freeSpace = '______________________'; 
      let reportPresent = ''; let evidences = '';
      let sortedData = data.map((answer) => answer ? answer : freeSpace); 
      
      if (sortedData[19] != 'lack_of_info') {reportPresent = `Винуватцем в ДТП є Відповідач, що підтверджується Протоколом про адміністративне правопорушення ${sortedData[19]} яким його визнали винним у вчиненні адміністративного правопорушення, передбаченого статтею 124 КУпАП.`;};
      
      if (sortedData[20] == 1 || sortedData[21] == 1) {if (sortedData[20] == 1 && sortedData[21] == 1) {evidences = 'Також на підтвердження того, що винуватцем в ДТП є саме Відповідач надаємо матеріали з відеореєстратора та відповідні показання свідків.';} else if (sortedData[20] == 1) {evidences = 'Також на підтвердження того, що винуватцем в ДТП є саме Відповідач надаємо матеріали з відеореєстратора.';} else if (sortedData[21] == 1) {evidences = 'Також на підтвердження того, що винуватцем в ДТП є саме Відповідач надаємо відповідні показання свідків.';};};
      
      const claim = {
              defaultStyle: {
                     font: 'georgia'
                            },
              content:[
                { stack:
                [{text:'До ' + freeSpace + ' (назва суду)'},
                {text: [{text:'Позивач: '}, sortedData[0]], margin:[0,20,0,0]},
                {text: sortedData[1], margin:[55,0,0,0]},
                {text: sortedData[2], margin:[55,0,0,0]},
                {text: sortedData[3], margin:[55,0,0,0]},
                {text:[{text:'Відповідач: '}, sortedData[4]], margin:[-12,20,0,0]},
                {text: sortedData[5], margin:[55,0,0,0]},
                {text: sortedData[6], margin:[55,0,0,0]},
                {text: sortedData[7], margin:[55,0,0,0]},
                {text:'Дата: ' + freeSpace, margin:[10,20,0,0]},
                {text:'Ціна позову ' + freeSpace +' грн.', margin:[0,10,0,0]}
                ],margin:[250,0,0,0]},
                {stack:[
                {text:'ПОЗОВНА ЗАЯВА', fontSize:25, margin:[85,20,0,0]},
                {text:'про відшкодування шкоди, заподіяної джерелом підвищеної небезпеки', fontSize:13}],
                 margin:[65,20,0,0]},
                {text:'Обставини справи', margin:[30,30,0,0]},
                {text: `ДТП відбулося ${sortedData[9]} за адресою ${sortedData[8]} між транспортним засобом ${sortedData[10]}, який належить (на праві ${sortedData[11]}) Позивачу та транспортним засобом ${sortedData[12]}, який належить (на праві ${sortedData[13]}) Відповідачу. Внаслідок ДТП пошкоджено майно, яке належить Позивачу, а саме: ${sortedData[14]}, державний номер: ${sortedData[15]}.`,margin:[0,30,0,0],alignment:'justify'
                },
                reportPresent ? {text: reportPresent,margin:[0,20,0,0],alignment:'justify'} : '',
                evidences ? {text: evidences,margin:[0,20,0,0],alignment:'justify'} : '',
                {text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',margin:[0,20,0,0],alignment:'justify'},
                {text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',margin:[0,20,0,0],alignment:'justify'},
                {text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla auctor pharetra velit, quis finibus lorem venenatis a. Donec dolor neque, vestibulum eget rhoncus eu, hendrerit sit amet nunc. Sed posuere neque et ornare rhoncus. Nullam vitae elit erat. Suspendisse faucibus tristique quam, in auctor mauris. Mauris molestie odio feugiat volutpat cursus. Pellentesque sit amet urna et felis tincidunt maximus. Curabitur viverra at mi at ornare. Sed finibus eu nisi vitae rutrum. Integer purus nisi, ornare at pellentesque et, maximus eget magna. Suspendisse et elit congue, tincidunt odio ac, pharetra mi.',margin:[0,20,0,0],alignment:'justify'},
                {text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',margin:[0,20,0,0],alignment:'justify'},
                {text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',margin:[0,20,0,0],alignment:'justify'},
                {text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',margin:[0,20,0,0],alignment:'justify'},
                {stack:[
                  {text:'ПРОШУ',fontSize:25,margin:[85,0,0,0]},
                  {text:`1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,fontSize:13, margin:[0,20,0,0], alignment:'justify'},
                  {text:'2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.', fontSize:13, alignment:'justify'},
                ],
                 margin:[25,50,0,0]},
                {stack:[
                  {text:'Додатки:'},
                  {text:'Оригінал квитанції про сплату судового збору;'},
                  {text:'Докази відправлення позовної заяви з додатками учасникам процесу;'},
                  reportPresent ? {text:`Копія Протоколу про адміністративне правопорушення ${sortedData[19]};`} : '',
                  {text:`Копія технічного паспорту транспортного засобу Позивача ${sortedData[10]} державний номер ${sortedData[15]};`},
                  {text:'Копія документу, що посвідчує особу;'},
                  sortedData[20] == 1 ? {text: 'Копія запису відеоматеріалів з відео реєстратора який зафіксував момент ДТП;',margin:[0,20,0,0],alignment:'justify'} : '',
                  sortedData[21] == 1 ? {text: 'Копія показань свідків, що ДТП сталось з вини Відповідача;',margin:[0,20,0,0],alignment:'justify'} : ''
                ],margin:[0,60,0,0]},
                {text:'_____________ (Дата)                            ______________(Підпис)',margin:[50,60,0,0]}
                 ]
      };
      pdfMake.fonts = {
                georgia:{
                    normal:"georgia.ttf"
                        }
        }
        pdfMake.createPdf(claim).download('тестовий_варіант_1.pdf');     
    }
render() {
      return (
        <div>
          <Questions handleDownload = {this.handleDownload} />
        </div>
      );
    }
  }