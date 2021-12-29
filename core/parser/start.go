package parser

import (
	"github.com/spf13/viper"
)

var DefaultFile = map[string]interface{}{
	"info": map[string]interface{}{
		"name":        "Teo Start",
		"author":      "Teo",
		"description": "My startup config",
		"version":     1.0,
	},
	"scoop": []map[string]string{
		{
			"pkg": "deno",
		},
		{
			"pkg": "neovim-nightly",
		},
	},
	"git": []map[string]interface{}{
		{
			"repo":     "github.com/TeoDev1611/astro.nvim",
			"homeUser": true,
			"dest":     "AppData\\Local\\nvim",
		},
	},
	"choco": []map[string]interface{}{
		{
			"pkg":     "python",
			"nightly": true,
		},
	},
}

// Start the spider file with viper config and the default data
func StartSpiderFile() {
	// The default data for the spider file
	viper.AddConfigPath("./")
	viper.SetConfigName("SpiderFile")
	viper.SetConfigType("toml")

	// Add the data
	for k, v := range DefaultFile {
		viper.SetDefault(k, v)
	}

	// Write the file
	viper.WriteConfig()
	viper.SafeWriteConfig()
}
