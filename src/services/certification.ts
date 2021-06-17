

export function generateCertificationHTML(wpm: string, time: string) {
	return `
	<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Certificado</title>
		<style type="text/css">
				body{
					background-color: #181B23;
					color: white;
				}
			.kTEfvP{min-width:940px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}
			.kTEfvP h3{font-size:48px;margin-bottom:10px;}
			.kTEfvP h1{margin:40px 0;font-size:36px;}
			.kTEfvP h1 span{font-size:68px;color:#D53F8C;}
			.kTEfvP section{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}
			.kTEfvP button{padding:12px 24px;border-radius:6px;border:0;font-size:18px;font-weight:bold;cursor:pointer;background-color:#D53F8C;color:#fff;-webkit-transition:color ease-in-out .2s;transition:color ease-in-out .2s;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}
		</style>

	</head>
	<body>
	<div class="kTEfvP">
		<h1><span  style="color:#805AD5 !important;">Speed Typing</span></h1>
		<h3>Cerficado Digital</h3>
		<h1>
			<span>${wpm} WPM </span>médio
		</h1>
		<h1>
			<span>${time}s </span>médio
		</h1>
		</div>
	</body>
	</html>
	
	`
}

