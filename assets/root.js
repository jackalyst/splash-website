$(document)
  .ready(function() {
    $(function() {
      var $content = $("#jsonContent");
      var data = {
        rss_url: "https://medium.com/feed/the-quantum-resistant-ledger",
      };
      $.get("https://api.rss2json.com/v1/api.json", data, function(response) {
        if (response.status === "ok") {
          var output = "";
          $.each(response.items, function(k, item) {
            output += "<div class=\"ui card\">";
            output += "<h4 class=\"date\">" + $.format.date(item.pubDate, "dd<br>MMM") + "</h4>";
            var tagIndex = item.description.indexOf("<img"); // Find where the img tag starts
            var srcIndex = item.description.substring(tagIndex).indexOf("src=") + tagIndex; // Find where the src attribute starts
            var srcStart = srcIndex + 5; // Find where the actual image URL starts; 5 for the length of 'src="'
            var srcEnd = item.description.substring(srcStart).indexOf('"') + srcStart; // Find where the URL ends
            var src = item.description.substring(srcStart, srcEnd); // Extract just the URL
            output += "<div class=\"ui fluid image\"><a href=\"" + item.link + "\"><img src=\"" + src + "\"></a></div>";
            output += "<div class=\"content\"><a href=\"" + item.link + "\">" + item.title + "</a>";
            output += "<div class=\"author\"><span>By " + item.author + "<br><br></span></div>";
            // console.log(output);
            var yourString = item.description.replace(/<img[^>]*>/g, ""); //replace with your string.
            var html = yourString;
            var div = document.createElement("div");
            div.innerHTML = html;
            var text = div.textContent || div.innerText || "";
            yourString = text;
            var maxLength = 120; // maximum number of characters to extract
            //trim the string to the maximum length
            var trimmedString = yourString.substr(0, maxLength);
            // console.log(trimmedString);
            //re-trim if we are in the middle of a word
            trimmedString = trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(" ")));
            output += "<p>" + trimmedString + "...</p>";
            output += "</div></div>";
            return k < 5;
          });
          $content.html(output);
        }
      });
    });
    $(".ui.sidebar").sidebar("attach events", ".toc.item");
    $(".ui.dropdown").dropdown();
  });