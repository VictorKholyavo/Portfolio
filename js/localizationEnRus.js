$(document).ready(function() {

   $('.rus').on('click', function() {
      var r = $('.localization').each(function() {
         var el = $(this);
         var key = (el.attr('caption'));
         el.text(rus[key]);
      });
   });

   $('.eng').on('click', function() {
      var r = $('.localization').each(function() {
         var el = $(this);
         var key = (el.attr('caption'));
         el.text(eng[key]);
      });
   });

   var rus = {
	  Main: 'Главная',
	  Study: 'Образование',
	  Skills: 'Навыки',
	  Contacts: 'Контакты',
	  MastersDegree: 'Магистратура',
	  BSUIR: 'БГУИР',
	  FRE: 'ФРЭ, Нанотехнологии и наноматериалы (в электронике)',
	  year2: '2018 - по настоящее время',
	  BachelorsDegree: 'Бакалавриат',
	  FREKIS: 'ФРЭ, Квантовые информационные системы',
	  Download: 'Скачать CV',
   };
   var eng = {
      Main: 'Main',
	  Study: 'Study',
	  Skills: 'Skills',
	  Contacts: 'Contacts',
	  MastersDegree: 'Master\'s Degree',
	  BSUIR: 'BSUIR',
	  FRE: 'FRE, Nanotechnologies and Nanomaterials (in electronics)',
	  year2: '2018 - present',
	  BachelorsDegree: 'Bachelor\'s Degree',
	  FREKIS: 'FRE, Quantum information systems',
	  Download: 'Download CV',
   };
});
