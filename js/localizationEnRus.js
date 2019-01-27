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
    Portfolio: 'Сайт-портфолио веб-разработчика',
    Main: 'Главная',
	  Study: 'Образование',
	  Skills: 'Навыки',
	  Contacts: 'Контакты',
    University: 'Университет',
    selfeducation: 'Самообразование',
	  MastersDegree: 'Магистратура',
	  BSUIR: 'БГУИР',
	  specialty2: 'ФРЭ, Нанотехнологии и наноматериалы (в электронике)',
	  stage2: '2018 - по настоящее время',
	  BachelorsDegree: 'Бакалавриат',
	  specialty1: 'ФРЭ, Квантовые информационные системы',
    stage1:'2014 - 2018 гг.',
    Download: 'Скачать CV',
   };
   var eng = {
    Portfolio: 'Web Developer Portfolio',
    Main: 'Main',
	  Study: 'Study',
	  Skills: 'Skills',
	  Contacts: 'Contacts',
    University: 'University',
    selfeducation: 'Self-education',
	  MastersDegree: 'Master\'s Degree',
	  BSUIR: 'BSUIR',
	  specialty2: 'FRE, Nanotechnologies and Nanomaterials (in electronics)',
	  stage2: '2018 - present',
	  BachelorsDegree: 'Bachelor\'s Degree',
	  specialty1: 'FRE, Quantum information systems',
    stage1: '2014 - 2018 yy.',
	  Download: 'Download CV',
   };
});
