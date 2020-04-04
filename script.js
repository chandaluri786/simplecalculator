$(document).ready(
  function () {
    var a, b, toAdd = '', toaddAr = [], to = 0;
    var op_type;

    $('input[name=ListItem]').val('');
    $('#1').click(
      function () {
        toAdd = $('input[name=ListItem]').val();
        $('input[name=ListItem]').val(toAdd + '1');
        });

    $('#2').click(
      function () {
        toAdd = $('input[name=ListItem]').val();
        $('input[name=ListItem]').val(toAdd + '2');
      });
    $('#0').click(
      function () {
        toAdd = $('input[name=ListItem]').val();
        $('input[name=ListItem]').val(toAdd + '0');
      });
    $('#3').click(
      function () {
        toAdd = $('input[name=ListItem]').val();
        $('input[name=ListItem]').val(toAdd + '3');
      });
    $('#4').click(
      function () {
        toAdd = $('input[name=ListItem]').val();
        $('input[name=ListItem]').val(toAdd + '4');
      });
    $('#5').click(
      function () {
        toAdd = $('input[name=ListItem]').val();
        $('input[name=ListItem]').val(toAdd + '5');
      });
    $('#6').click(
      function () {
        toAdd = $('input[name=ListItem]').val();
        $('input[name=ListItem]').val(toAdd + '6');
      });
    $('#7').click(
      function () {
        toAdd = $('input[name=ListItem]').val();
        $('input[name=ListItem]').val(toAdd + '7');
      });
    $('#8').click(
      function () {
        toAdd = $('input[name=ListItem]').val();
        $('input[name=ListItem]').val(toAdd + '8');
      });
    $('#9').click(
      function () {
        toAdd = $('input[name=ListItem]').val();
        $('input[name=ListItem]').val(toAdd + '9');
      });
      $('#clr').click(
        function () {
         $('input[name=ListItem]').val('');
        });
 
    $('#plus').click(
      function () {
        toAdd = $('input[name=ListItem]').val();
        a = parseInt(toAdd);
        $('input[name=ListItem]').val('');
        op_type = 'plus'
      });
    $('#sub').click(
      function () {
        toAdd = $('input[name=ListItem]').val();
        a = parseInt(toAdd);
        $('input[name=ListItem]').val('');
        op_type = 'subt'
      });
    $('#mul').click(
      function () {
        toAdd = $('input[name=ListItem]').val();
        a = parseInt(toAdd);
        $('input[name=ListItem]').val('');
        op_type = 'mult'
      });
    $('#div').click(
      function () {
        toAdd = $('input[name=ListItem]').val();
        a = parseInt(toAdd);
        $('input[name=ListItem]').val('');
        op_type = 'divi'
      });
    
      $('#equalto').click(
      function () {

        toAdd = $('input[name=ListItem]').val();
        b = parseInt(toAdd);
        if (op_type == 'plus') {
          $('input[name=ListItem]').val(a + b);
        }
        else if (op_type == 'subt') {
          $('input[name=ListItem]').val(a - b);
        }
        else if (op_type == 'mult') {
          $('input[name=ListItem]').val(a * b);
        }
        else if(op_type == 'divi') {
          $('input[name=ListItem]').val(a / b);
        }
      });

    $("input[name=ListItem]").keyup(function (event) {
      if (event.keyCode == 13) {
        $("#button").click();
      }
    });

    $(document).on('dblclick', 'li', function () {
      $(this).toggleClass('strike').fadeOut('slow');
    });

    $('input').focus(function () {
      $(this).val('');
    });

    // $('ol').sortable();  

  }
);
