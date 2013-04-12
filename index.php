<html>
	<link rel="icon" href="logo.ico"/>
	<head><title>Bomb Square</title>
	<link rel="stylesheet" href="game.css" type="text/css">
	<script type="text/javascript" src="js/jquery-1.8.2.js"></script>
	<script type="text/javascript" src="js/bomb.js"></script>
	
	</head>
	<div class="panel" >
	<button id="start">Start</button>
	<div id="bg">
	<body onLoad='ajaxFunction()'>
		<?php
			/*untuk kotak*/
			$id=1; //untuk id berurut 1 - 5
			for($i=1;$i<=5;$i++){
				echo"<div style='clear:both'>";
				for($j=1;$j<=10;$j++){				
					echo"<div id=".$id." class='kotak' onClick=cek(this)></div>";
					$id++;
				}				
				echo"</div>";
			}
		?>
		<div class="name">
			<!--<div class="time"><label id='menit'>8</label> : <label id='detik'>00</label></div>-->
			<div id="waktu" class="time">3 : 0</div>
		</div>
	</div>
</body>
</div>
</html>