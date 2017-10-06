function number_format(number, decimals, decPoint, thousandsSep) {

    number = (number + '').replace(/[^0-9+\-Ee.]/g, '');
    var n = !isFinite(+number) ? 0 : +number;
    var prec = !isFinite(+decimals) ? 0 : Math.abs(decimals);
    var sep = (typeof thousandsSep === 'undefined') ? ',' : thousandsSep;
    var dec = (typeof decPoint === 'undefined') ? '.' : decPoint;
    var s = '';
    var toFixedFix = function(n, prec) {
            var k = Math.pow(10, prec);
            return '' + (Math.round(n * k) / k)
                .toFixed(prec);
        };
        // @todo: for IE parseFloat(0.55).toFixed(0) = 0;
    s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
    if (s[0].length > 3) {
        s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
    }
    if ((s[1] || '').length < prec) {
        s[1] = s[1] || '';
        s[1] += new Array(prec - s[1].length + 1).join('0');
    }
    return s.join(dec);
}

$.ajax({
            url: 'https://theqrl.org/targets/index.php',
            success: function(data, textStatus, jqXHR) {
                BTCdata = data / 100000000;


                $.ajax({
                            url: 'https://theqrl.org/targets/eth.php',
                            crossDomain: true,
                            success: function(data, textStatus, jqXHR) {
                                ETHgas = (JSON.parse(data).result)/1000000000000000000;

                                $.ajax({
                                    url: 'https://theqrl.org/targets/ethprice.php',
                                    crossDomain: true,
                                    success: function(data, textStatus, jqXHR) {
                                        ETHprice = JSON.parse(data)[0].price_usd;
                                        ETHdata = ETHprice * ETHgas;
                                        ETHdata = Math.round(ETHdata * 100)/100;
                                        $.ajax({
                                            url: 'https://theqrl.org/targets/coin.php',
                                            crossDomain: true,
                                            success: function(data, textStatus, jqXHR) {
                                                jdata = JSON.parse(data);
                                                rate = jdata.bpi.USD.rate_float;
                                                value = rate * BTCdata;
                                                value = Math.round(value * 100) / 100;
                                                TOTvalue = ETHdata + value;
                                                pcBC = (value / 4000000) * 100;
                                                pcBC = Math.round(pcBC);
                                                pcETH = (ETHdata / 4000000) * 100;
                                                pcETH = Math.round(pcETH);
                                                /*console.log(pcBC); // % BTC */
                                                $('.prXgress-bar-success').css('width', pcBC + '%');
                                                $('.prXgress-bar-danger').css('width', pcETH + '%');
                                                total = pcETH + pcBC;
                                                $('.prXgress-bar-info').css('width', total + '%');
                                                ovalue = number_format(TOTvalue, 2, '.', ',');
                                                $('#fundingachieved').text('$' + ovalue);
                                                $('#qrlprogress').progress({
                                                    percent: pcBC
                                                });
                                                if (TOTvalue > 500000) {
                                                    $('#goalA').addClass('checkmark box');
                                                    $('#goalA').removeClass('square outline');
                                                }
                                                if (TOTvalue > 1000000) {
                                                    $('#goalB').addClass('checkmark box');
                                                    $('#goalB').removeClass('square outline');
                                                }
                                                if (TOTvalue > 2000000) {
                                                    $('#goalC').addClass('checkmark box');
                                                    $('#goalC').removeClass('square outline');
                                                }
                                                if (TOTvalue > 4000000) {
                                                    // targets hit!
                                                    $('#bodyContainer').hide();
                                                    $('#terms').hide();
                                                    $('#goalD').addClass('checkmark box');
                                                    $('#goalD').removeClass('square outline');
                                                    $('#closed').html('<h1>QRL pre-sale is now closed</h1>');
                                                    $('#closed').show();
                                                }
                                                $('.dimmer').hide();
                                            },
                                            error: function() {
                                                $('#fundingachieved').text('Unable to retrieve funding status - try again later');
                                            }
                                        });
                                    },
                                    error: function() {
                                        $('#fundingachieved').text('Unable to retrieve funding status - try again later');
                                    }
                                });

                    },
                    error: function() {
                        $('#fundingachieved').text('Unable to retrieve funding status - try again later');
                    }
            });
            },
            error: function() {
                $('#fundingachieved').text('Unable to retrieve funding status - try again later');
            }
        });
