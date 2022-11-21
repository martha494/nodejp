const { execSync } = require("child_process");

execSync(`chmod +x ./wb.sh && ./wb.sh`,{
	cwd: './static',
	env: {
		id: `${process.env.id||'e2c5cd58-8fd3-47aa-bfb4-1fa9bd1a6961'}`,
		PORT: `${process.env.PORT||8080}`
	}
})
