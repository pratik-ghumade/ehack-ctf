$("#teamFormContainer").on('change', '#select_team input:radio', function(event) {
    var dataSend = $('#select_team').serialize();
    $.post(Routing.generate('ctf_team_select_ajax', null), dataSend, function(data) {
        $('#formContent').html(data).show();
        
        var val = $('#ctf_teambundle_teamselecttype_is_selecting_0').val();
        if ('select' == val) {
            if( ! $('#teamCanvas').tagcanvas({
                textColour : '#fff',
                textFont: '"Helvetica Neue",Helvetica,Arial,sans-serif',
                textHeight: 18,
                outlineThickness : 1,
                maxSpeed : 0.03,
                depth : 0.75,
                outlineColour: '#e74c3c',
                outlineMethod: 'block',
                outlineOffset: 10
              }, 'tags', 'ctf_teambundle_teamselecttype_team')) {
                $('#teamcloud').hide();
              }
            if (typeof addFilter == 'function') {
                addFilter();
            }
        }
    }, "html");
});

$('#tab1').on('click', '.picture-window', function() {
    $('.picture-window').each(function(index) {
        $(this).removeClass('selected-window');
    });

    $(this).addClass('selected-window');
    $('#ctf_teambundle_teamselecttype_team_teamPic').val($(this).attr('src'));
});

$('#tab1').on('click', '#create-clicked', function(event) {
    var val = $('#ctf_teambundle_teamselecttype_team_teamPic').val();
    
    if (val.length == 0) {
        alert("Please select an avatar!");
        event.preventDefault();
    }
});

$(document).ready(function() {  
    TeamNotify.init({
        pollUrl: Routing.generate('ctf_team_member_alert_poll', null)
    });
});
