$(function(){
  $(".modal").hide();
 });
/* $(document).ready(function(){
   $('div.autoEvalEco>div').hide();
    $("#paneles>h3").click(function(){
    $(this).next ().slideToggle(100)
   });
 }); */
$(function(){
  $("div.autoEvalEco").accordion({
    active:false,
    collapsible:true,
    animate:200,
    event:"click",
    heightStyle:true,
    header:"h3",
    });
 });
$(function(){
    $(".autoEval").click(function(){
         alert("Usted va a realizar su autoevaluación. Tiene que pulsar en el texto para poder seleccionar la respuesta correcta."),
         $(".datos").hide(),
         $(".impulso").hide();
         $("img").hide();
      });
    });
  $(".resultado").click(function () {
      let puntos = 0;
      $("input[type='radio']").each(function () {
      $(this).parent().css("background-color", "white");
      });
      $("input[data-correct='true']:checked").each(function () {
      puntos++;
      $(this).parent().css("background-color", "rgb(200, 250, 150)");
      });
      $("input[type='radio']:checked").each(function () {
      if ($(this).attr("data-correct") !== "true") {
      $(this).parent().css("background-color", "rgb(250, 150, 150)");
        }
      });
      $("input[type='radio']").prop("checked", false);
      $("#totalPuntos").text(puntos);
      $("#modal").fadeIn();
      $(".datos").show();
      $(".impulso").show();
      $("img").show();
      });
  $(function(){
    $(".nuevaAutoEval").click(function(){
         alert("Usted va a realizar una nueva autoevaluación. Pulse en el texto de la pregunta para desplegar las opciones."),
         $(".datos").hide(),
         $(".impulso").hide(),
         $("img").hide();
         $(".modal").hide();
      $("input[type='radio']").prop("checked", false);
      $("fieldset").each(function () {
      $(this)
        .find("input[type='radio']")
        .parent()
        .css("background-color", "white");
      });
   });
$(".close").click(function () {
    $("#modal").fadeOut();
  });
});