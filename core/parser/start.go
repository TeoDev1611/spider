package parser

import (
	"runtime"

	"github.com/TeoDev1611/batman/log"
	"github.com/spf13/viper"
)

var (
	DefaultFileWin = map[string]interface{}{
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
	DefaultFileLinux = map[string]interface{}{
		"info": map[string]interface{}{
			"name":        "Teo Start",
			"author":      "Teo",
			"description": "My startup config",
			"version":     1.0,
		},
		"snap": []map[string]string{
			{
				"pkg": "deno",
			},
		},
		"git": []map[string]interface{}{
			{
				"repo":     "github.com/TeoDev1611/astro.nvim",
				"homeUser": true,
				"dest":     ".config/nvim",
			},
		},
		"apt": []map[string]string{
			{
				"pkg": "python",
			},
		},
		"pacman": []map[string]string{
			{
				"pkg": "cowsay",
			},
		},
	}

	DefaultFileMacOs = map[string]interface{}{
		"info": map[string]interface{}{
			"name":        "Teo Start",
			"author":      "Teo",
			"description": "My startup config",
			"version":     1.0,
		},
		"brew": []map[string]interface{}{
			{
				"pkg":     "deno",
				"nightly": true,
			},
		},
		"git": []map[string]interface{}{
			{
				"repo":     "github.com/TeoDev1611/astro.nvim",
				"homeUser": true,
				"dest":     ".config/nvim",
			},
		},
	}
)

// Start the spider file with viper config and the default data
func StartSpiderFile() {
	// The default data for the spider file
	viper.AddConfigPath("./")
	viper.SetConfigName("SpiderFile")
	viper.SetConfigType("toml")

	// Add the data
	os := runtime.GOOS
	switch os {
	case "windows":
		for k, v := range DefaultFileWin {
			viper.SetDefault(k, v)
		}
	case "linux":
		for k, v := range DefaultFileLinux {
			viper.SetDefault(k, v)
		}
	case "darwin":
		for k, v := range DefaultFileMacOs {
			viper.SetDefault(k, v)
		}
	default:
		log.Fatal("Platform not supported!")
	}
	// Write the file
	viper.WriteConfig()
	viper.SafeWriteConfig()
}
