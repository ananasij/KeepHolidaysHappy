define(function() {
    var formData = {};

    return {
        get: function() {
            return formData;
        },
        set: function(data) {
            return Object.assign(formData, data);
        }
    };
});