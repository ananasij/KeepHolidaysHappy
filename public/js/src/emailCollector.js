define(function() {
    function collectEmails($membersList) {
        var emails = [];
        var members = $membersList.find('.js-label-email');
        var membersLen = members.length;
        for (var i = 0; i < membersLen; i++) {
            var email = $(members[i]).text();
            emails.push(email);
        }
        return emails;
    }

    return {
        collectEmails: collectEmails
    };
});
