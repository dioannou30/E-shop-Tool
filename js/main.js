var used = new Vue({
    el: '#used',
    data: {
        codeInput: '',
        serialInput: ''
    },
    methods: {
        openProduct: function(event) {
            window.open('http://www.e-shop.gr/show_used.phtml?id=' + this.codeInput + '&oem=' + this.serialInput, '_blank');
        },
        clearInput: function(event) {
            this.codeInput = '';
            this.serialInput = '';
        }
    }
});

var calc = new Vue({
    el: '#calc',
    data: {
        lib: '',
        inch1: '',
        inch2: '',
        inch3: ''
    },
    filters: {
        toMM: function(value) {
            if (!value || isNaN(value)) {
                return "Enter a valid number";
            } else {
                return (parseFloat(value) * 2.54).toFixed(2) + ' ' + 'mm';
            }
        },
        toKG: function(value) {
            if (!value || isNaN(value)) {
                return "Enter a valid number";
            } else {
                return (parseFloat(value) * 0.45359237).toFixed(2) + ' ' + 'kg';
            }
        }
    },
    methods: {
        clearBoxes: function(event) {
            this.inch1 = '';
            this.inch2 = '';
            this.inch3 = '';
            this.lib = '';
        }
    }
});


$('#search').keyup(function() {
    var $rows = $('#modalTable tr');
    var val = $.trim($(this).val()).replace(/ +/g, ' ').toLowerCase();

    $rows.show().filter(function() {
        var text = $(this).text().replace(/\s+/g, ' ').toLowerCase();
        return !~ text.indexOf(val);
    }).hide();
});
