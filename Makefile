fmt:
	deno fmt && dprint fmt ./README.md ./SpiderFile.toml ./SpiderFile.json

install-win:
	powershell -Command 'iwr https://deno.land/install.ps1 -useb | iex'
	powershell -Command 'iwr https://dprint.dev/install.ps1 -useb | iex'

install-sh:
	curl -fsSL https://dprint.dev/install.sh | sh
	curl -fsSL https://deno.land/install.sh | sh
