package cmds

import (
	"os"
	"strings"

	"github.com/TeoDev1611/batman/log"
	"github.com/TeoDev1611/spider/core/parser"
	"github.com/manifoldco/promptui"
)

func InitCmd() {
	if _, err := os.Stat("./SpiderFile.toml"); err == nil {
		log.Fatal("File exists cannot re write!")
	} else {
		parser.StartSpiderFile()
		log.Info("Created the SpiderFile!")
	}
}

func InitReset() {
	prompt := promptui.Prompt{
		Label:     "Delete Resource",
		IsConfirm: true,
	}

	result, err := prompt.Run()
	if err != nil {
		log.Info("Ok! Dont reset")
	}

	opts := strings.ToLower(result)

	switch opts {
	case "y":
		parser.StartSpiderFile()
		log.Info("Reseted the file")
	}
}
