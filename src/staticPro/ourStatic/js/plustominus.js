<script type="text/javascript">
   // bootstrap collapse for personal info, requires boostrap.min.js or the individual boostrap plugins - collapse.js and transition.js
    $(document).ready(function() {
        if ( !$('#collapse-personal-info').hasClass('in') ) {
            $('#collapse-personal-info').siblings('.panel-footer').hide(); // hide the footer initially
        }
        $('a[href="#collapse-personal-info"]').on("click", function (e) {
            $('#collapse-personal-info').siblings('.panel-footer').toggle(); // toggle visibility of footer
                if ( !$('#collapse-personal-info').hasClass('in') ) {
                    $('#collapse-personal-info').siblings('.panel-heading').find('i').removeClass('glyphicon-plus').addClass('glyphicon-minus');
//                    $('#collapse-personal-info').siblings('.panel-footer').css('border-top', 'solid 1px #ddd');
                } else {
                    $('#collapse-personal-info').siblings('.panel-heading').find('i').removeClass('glyphicon-minus').addClass('glyphicon-plus');
                }
        });
    //tooltips
    //$('[data-toggle="tooltip"]').tooltip();
   });
</script>