function number_format(e,a,t,r){e=(e+"").replace(/[^0-9+\-Ee.]/g,"");var s=isFinite(+e)?+e:0,n=isFinite(+a)?Math.abs(a):0,o=void 0===r?",":r,i=void 0===t?".":t,l="",u=function(e,a){var t=Math.pow(10,a);return""+(Math.round(e*t)/t).toFixed(a)};return l=(n?u(s,n):""+Math.round(s)).split("."),l[0].length>3&&(l[0]=l[0].replace(/\B(?=(?:\d{3})+(?!\d))/g,o)),(l[1]||"").length<n&&(l[1]=l[1]||"",l[1]+=new Array(n-l[1].length+1).join("0")),l.join(i)}$.ajax({url:"https://theqrl.org/targets/index.php",success:function(e,a,t){BTCdata=e/1e8,$.ajax({url:"https://theqrl.org/targets/eth.php",crossDomain:!0,success:function(e,a,t){ETHgas=JSON.parse(e).result/1e18,$.ajax({url:"https://theqrl.org/targets/ethprice.php",crossDomain:!0,success:function(e,a,t){ETHprice=JSON.parse(e)[0].price_usd,ETHdata=ETHprice*ETHgas,ETHdata=Math.round(100*ETHdata)/100,$.ajax({url:"https://theqrl.org/targets/coin.php",crossDomain:!0,success:function(e,a,t){jdata=JSON.parse(e),rate=jdata.bpi.USD.rate_float,value=rate*BTCdata,value=Math.round(100*value)/100,TOTvalue=ETHdata+value,TOTvalue=3999999,pcBC=value/4e6*100,pcBC=Math.round(pcBC),pcETH=ETHdata/4e6*100,pcETH=Math.round(pcETH),$(".prXgress-bar-success").css("width",pcBC+"%"),$(".prXgress-bar-danger").css("width",pcETH+"%"),total=pcETH+pcBC,$(".prXgress-bar-info").css("width",total+"%"),ovalue=number_format(TOTvalue,2,".",","),$("#fundingachieved").text("$"+ovalue),$("#qrlprogress").progress({percent:pcBC}),TOTvalue>5e5&&($("#goalA").addClass("checkmark box"),$("#goalA").removeClass("square outline")),TOTvalue>1e6&&($("#goalB").addClass("checkmark box"),$("#goalB").removeClass("square outline")),TOTvalue>2e6&&($("#goalC").addClass("checkmark box"),$("#goalC").removeClass("square outline")),TOTvalue>4e6&&($("#bodyContainer").hide(),$("#terms").hide(),$("#goalD").addClass("checkmark box"),$("#goalD").removeClass("square outline"),$("#closed").html("<h1>QRL pre-sale is now closed</h1>"),$("#closed").show()),$(".dimmer").hide()},error:function(){$("#fundingachieved").text("Unable to retrieve funding status - try again later")}})},error:function(){$("#fundingachieved").text("Unable to retrieve funding status - try again later")}})},error:function(){$("#fundingachieved").text("Unable to retrieve funding status - try again later")}})},error:function(){$("#fundingachieved").text("Unable to retrieve funding status - try again later")}});