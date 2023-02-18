const unittests = [
  {
    name: 'testone',    
    params: { 
      month: 01,
      year: 1999
    },
    expectedoutcomes: {
      days: 31
    },
    realizedoutcomes: {
      days: 0,
      pass: false
    }
  },
  {
    name: 'testtwo',
    params: { 
      month: 09,
      year: 1567
    },
    expectedoutcomes: {
      days: 30
    },
    realizedoutcomes: {
      days: 0,
      pass: false
    }
  },
  {
    name: 'testthree',
    params: { 
      month: 02,
      year: 1776
    },
    expectedoutcomes: {
      days: 29
    },
    realizedoutcomes: {
      days: 0,
      pass: false
    }
  },
  {
    name: 'testfour',
    params: { 
      month: 02,
      year: 2022
    },
    expectedoutcomes: {
      days: 28
    },
    realizedoutcomes: {
      days: 0,
      pass: false
    }
  }  
];

$("#btn-unit-tests").click(function() {
  unittests.forEach(item => {
    // Arrange
    document.getElementById(`expected-outcome-${item.name}-days`).innerText = item.expectedoutcomes.days;
    document.getElementById('calendar-month').value = item.params.month;
    document.getElementById('calendar-year').value = item.params.year;    

    // Act
    $('#calculate').click();

    // Assert
    document.getElementById(`realized-outcome-${item.name}-days`).innerText = item.realizedoutcomes.days = document.getElementById('days-in-month').innerText;    

    item.realizedoutcomes.pass = (item.realizedoutcomes.days == item.expectedoutcomes.days) ? true : false;       
    const cardTitle = document.getElementById(`${item.name}-title`);
    
    if (item.realizedoutcomes.pass) {      
      cardTitle.parentNode.classList.add('bg-success');
      cardTitle.innerHTML = '<i class="fa-solid fa-circle-check text-success"></i> Test Passed';      
    }
    else {
      cardTitle.parentNode.classList.add('bg-danger');
            cardTitle.innerHTML = '<i class="fa-solid fa-circle-xmark text-danger"></i> Test Failed';      
    }
  });
});
