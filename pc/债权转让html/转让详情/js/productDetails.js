$(function() {
    $(".opeLoanBtn").click(function() {
        $(".moreLoan,.shortLoanBtn,.moreLoanBtn").toggle();
    });

    $(".minusMoney").click(function() {
        var textMon = $(".moneyInput").val();
        $(".moneyInput").val(textMon * 1 - 1);
    });
    $(".addMoney").click(function() {
        var textMon = $(".moneyInput").val();
        $(".moneyInput").val(textMon * 1 + 1);
    });


    /*   弹窗  start   */

    $('#investBtn').click(function(e) {
        e.stopPropagation();
        $.xhmodal({
            target: '#alertModal',
            type: 4
        });
    });
    /*   弹窗  end   */
});
