//改变所有的附件格式
export function fujian(content) {
  var downLooadStr = /(?<=<p style="line-height: 16px;">).*?(?=<\/p>)/g;
  var downloadAddress = content.match(downLooadStr);
  if (downloadAddress && downloadAddress.length > 0) {
    for (var i = 0; i < downloadAddress.length; i++) {
      console.log(downloadAddress[i]);
      var fileNameStr = "(?<=title=\").*?(?=\")";
      var fileName = downloadAddress[i].match(fileNameStr);
      var addressStr = "(?<=href=\").*?(?=\")";
      var address = downloadAddress[i].match(addressStr);
      if (fileName && address && fileName.length != 0 && address.length != 0) {
        console.log(fileName[0]);
        console.log(address[0]);
        var newFileObject = "<section class=\"av_textblock_section \" itemscope=\"itemscope\" itemtype=\"https://schema.org/CreativeWork\"><div class=\"avia_textblock  \" itemprop=\"text\"><div class=\"w3eden\"><!-- WPDM Link Template: With Audio Preview -->" +
          "<div class=\"w3eden\" style='border:1px solid #C0C0C0;padding:10px;margin:10px'>" +
          "<div class=\"media thumbnail\">" +
          "    <div class=\"pull-left\" style='display:inline-block'>" +
          "    <img alt=\"Data Sheet H5551-0290 vectaplan panama print\" class=\"wpdm_icon\" onerror=\"https://heytex.com/wp-content/plugins/download-manager/file-type-icons/_blank.png\" src=\"https://heytex.com/wp-content/plugins/download-manager/file-type-icons/pdf.png\">" +
          "    </div> " +
          "    <div class=\"media-body\" style='display:inline-block;margin-left:20px'>" +
          "    <h4 class=\"media-heading\" style=\"width:150px;overflow:hidden;text-overflow:ellipsis; white-space: nowrap;\">" + fileName[0] + "</h4>" +
          "    <div class=\"btn-small\" style=\"padding-left: 0px;display:inline-block\">" +
          "    <a class=\"wpdm-download-link wpdm-download-locked [btnclass]\" rel=\"nofollow\" href=\"#\" onclick=\"location.href='" + address[0] + "';return false;\"><i class=\"\"></i>Download</a> <i style=\"margin: 2px 0 0 0px;opacity:0.5\" class=\"icon icon-th-large\"></i> <!--<i style=\"margin: 2px 0 0 5px;opacity:0.5\" class=\"icon icon-download-alt\"></i> 176 downloads-->" +
          "    </div>" +
          "    </div>" +
          "</div>" +
          "</div></div>" +
          "</div></section>";
        var number = content.indexOf(downloadAddress[i]);
        content = content.substring(0, number - 30) + newFileObject + content.substring(number + downloadAddress[i].length + 4, content.length);
      }
      // content = content.replace(/<im*g/g,
      //   `<img style="width:100%"`
      // )
      // content = content.replace(/data-setup/gi,
      //   `style="width:100% !important;" data-setup`
      // )
    }
  }
  return content;
}

export default {
  fujian
}