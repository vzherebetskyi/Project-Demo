import React from 'react';

//This part responses for rendering questions in the page.
export default class Questions extends React.Component {
    constructor(props) {
      super(props);
      this.assembleText = this.assembleText.bind(this);
      this.answerSelection = this.answerSelection.bind(this);
      this.state = {
        questionsWithOptions: ['1. Власником автомобіля є фізична особа чи юридична особа?',
                        ['1.1. Вкажіть Ваші ПІБ:','1.2. Введіть реєстраційний номер облікової картки платника податків:', 
                        '1.3. Введіть адресу проживання/реєстрації:', '1.4. Введіть контактний номер телефону:'],
                        ['1.1. Вкажіть назву компанії:', '1.2. Введіть код ЄДРПОУ:',
                        '1.3. Введіть адресу реєстрації:', '1.4. Введіть контактний номер телефону компанії:'],
                        'Власник іншого автомобіля (Відповідач) це фізична чи юридична особа?',
                        ['2.1. Вкажіть його ПІБ:','2.2. Введіть реєстраційний номер облікової картки платника податків (за наявності):', 
                        '2.3. Введіть адресу проживання/реєстрації:', '2.4. Введіть контактний номер телефону:'],
                        ['2.1. Вкажіть назву компанії:', '2.2. Введіть код ЄДРПОУ:',
                        '2.3. Введіть адресу реєстрації:', '2.4. Введіть контактний номер телефону компанії:']],
        questionsList: [' Адреса де відбулося дтп?', 
                        ' Час і дата вчинення дтп?',
                        ' Вкажіть марку, модель та номер Вашого транспортного засобу:',
                        ' Вкажіть на якому праві Вам належить автомобіль?',
                        ' Вкажіть марку, модель та номер транспортного засобу Відповідача:',
                        ' Вкажіть на якому праві належить автомобіль Відповідачу',
                        ' Вкажіть тип Вашого транспортного засобу:',
                        ' Вкажіть державний номер Вашого транспортного засобу:',
                        ' Вкажіть вартість матеріальної шкоди завданої автомобілю (цифрами, БЕЗ текстового опису):',
                        ' Вкажіть номер рахунку (та назву банку в якому рахунок відкритий) на який Ви бажаєте перерахувати кошти:',
                        ' Вкажіть МФО Вашого банку:'],
        questionsWithOptions2: ['14. Чи був складений протокол про адміністративне порушення?', 'Вкажіть номер і дату протоколу:', 
                                '15. Чи є запис відеореєстратора/показання свідків?'],
        personType: 0, respondentType: 0, report: 0, evid1: 0, evid2: 0, agreed: 0
      };
    }

  answerSelection(data, numb) {
     if (this.state[data] != numb) {
       this.setState(() => (
        { [data]: numb }));
      }
      else { this.setState (() => (
        { [data]: 0 }));};
    }
  
  assembleText(e) {
      e.preventDefault();
      let answerArrayPerson = ['','','',''];
      let answerArrayRespondent = ['','','',''];
      let insuranceAnswers = ['lack_of_info','lack_of_info','lack_of_info'];
      const answerArray = this.state.questionsList.map((question, i) => 
      ''.concat(e.target.elements[this.state.questionsList[i]].value));
      
     if(this.state.personType != 0) {answerArrayPerson = this.state.questionsWithOptions[this.state.personType].map((question, i) => 
      ''.concat(e.target.elements[this.state.questionsWithOptions[this.state.personType][i]].value));};
     if(this.state.respondentType != 0) {answerArrayRespondent = this.state.questionsWithOptions[this.state.respondentType + 3].map((question, i) => 
      ''.concat(e.target.elements[this.state.questionsWithOptions[this.state.respondentType + 3][i]].value));};
     if (this.state.report == 1) {answerArray.push(e.target.elements[this.state.questionsWithOptions2[1]].value);}
     else if (this.state.report == 0 || this.state.report == 2) {answerArray.push('lack_of_info');};
     if (this.state.evid1 == 1) {answerArray.push(1);} else if (this.state.evid1 == 0) {answerArray.push(0);};
     if (this.state.evid2 == 1) {answerArray.push(1);} else if (this.state.evid2 == 0) {answerArray.push(0);};
     console.log(answerArrayPerson.concat(answerArrayRespondent, answerArray, insuranceAnswers));
     this.props.handleDownload(answerArrayPerson.concat(answerArrayRespondent, answerArray, insuranceAnswers));
  }
  
    render() {
      return (
        <div className = 'questions'>
        <p>*Якщо у Вас відсутня інформація зараз Ви можете не зазначати інформацію. В створеному документі залишаться чисті поля, які Ви зможете заповнити пізніше.</p>
          <form onSubmit = {this.assembleText}>
          <div>{this.state.questionsWithOptions[0]}</div>
          <p className = {this.state.personType == 1 ? 'YesNo YesNoActive' : 'YesNo'} onClick = {this.answerSelection.bind(this, 'personType', 1)}>Фізична особа</p>
          <p className = {this.state.personType == 2 ? 'YesNo YesNoActive' : 'YesNo'} onClick = {this.answerSelection.bind(this, 'personType', 2)}>Юридична особа</p>
          <div>{this.state.personType != 0 && this.state.questionsWithOptions[this.state.personType].map((question, i) => 
            <div key = {i} style = {{clear: 'left'}}>
            <p>{question}</p>
            <input type = 'text' name = {question} />
            </div>)}
          </div>
          <div style = {{clear: 'left'}}>{this.state.questionsWithOptions[3]}</div>
          <p className = {this.state.respondentType == 1 ? 'YesNo YesNoActive' : 'YesNo'} onClick = {this.answerSelection.bind(this, 'respondentType', 1)}>Фізична особа</p>
          <p className = {this.state.respondentType == 2 ? 'YesNo YesNoActive' : 'YesNo'} onClick = {this.answerSelection.bind(this, 'respondentType', 2)}>Юридична особа</p>
          <div>{this.state.respondentType != 0 && this.state.questionsWithOptions[this.state.respondentType + 3].map((question, i) => 
            <div key = {i} style = {{clear: 'left'}}>
            <p>{question}</p>
            <input type = 'text' name = {question} />
            </div>)}
          </div>
          {
            this.state.questionsList.map((question, i) => 
            <div key = {i} style = {{clear: 'left'}}>
            <p>{i + 3}.{question}</p>
            <input type = 'text' name = {question} />
            </div>)
          }
          <div>{this.state.questionsWithOptions2[0]}</div>
          <p className = {this.state.report == 1 ? 'YesNo YesNoActive' : 'YesNo'} onClick = {this.answerSelection.bind(this, 'report', 1)}>Так</p>
          <p className = {this.state.report == 2 ? 'YesNo YesNoActive' : 'YesNo'} onClick = {this.answerSelection.bind(this, 'report', 2)}>Ні</p>
          <div>
            {this.state.report == 1 && <div style = {{clear: 'left'}}>
             <p>{this.state.questionsWithOptions2[1]}</p>
             <input type = 'text' name = {this.state.questionsWithOptions2[1]} />
            </div>}
          </div>
          <div style = {{clear: 'left'}}>{this.state.questionsWithOptions2[2]}</div>
          <p className = {this.state.evid1 == 1 ? 'YesNo YesNoActive' : 'YesNo'} onClick = {this.answerSelection.bind(this, 'evid1', 1)}>Є запис відеореєстратора</p>
          <p className = {this.state.evid2 == 1 ? 'YesNo YesNoActive' : 'YesNo'} onClick = {this.answerSelection.bind(this, 'evid2', 1)}>Є показання свідків</p>
          <div style = {{clear: 'left'}}>
           <p> Я погоджуюся з умовами користування даним продуктом і тим, що команда ARTEAM Labs не несе відповідальності за будь-які наслідки пов'язані з використанням даного продукту. </p>
           <p className = {this.state.agreed == 1 ? 'YesNo YesNoActive' : 'YesNo'} style = {{marginTop: '-20px'}} onClick = {this.answerSelection.bind(this, 'agreed', 1)}>Згоден</p>
          </div>
          <div style = {{clear: 'left'}}>
          <button className = 'download' disabled = {!this.state.agreed}>Скачати</button>
          </div>
          </form>
        </div>
      );
    }
  }