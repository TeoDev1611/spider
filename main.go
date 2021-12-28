package main

import (
	"fmt"
	"os"
	"time"

	"github.com/TeoDev1611/batman/log"
	"github.com/urfave/cli/v2"
)

var app = &cli.App{
	Name:     "spider",
	Version:  "1.0.0",
	Compiled: time.Now(),
	Authors: []*cli.Author{
		{
			Name:  "Teo",
			Email: "malehurtadoreyes@hotmail.com",
		},
	},
	Copyright: "(c) 2021 Licenced by Apache 2.0 Opensource by TeoDev1611",
	HelpName:  "spider",
	Usage:     "The most easy way to install a program - Help: github.com/TeoDev1611/spider",
}

func init() {
	log.Config.AppName = "spider"
	log.Config.FileToLog = "spider.log.json"
	err := log.Init()
	if err != nil {
		panic(err)
	}
}

func main() {
	app.Commands = []*cli.Command{
		{
			Name:        "init",
			Aliases:     []string{"i", "new"},
			Usage:       "Init a file for download",
			Description: "Start a new SpiderFile for download the programs",
		},
	}

	err := app.Run(os.Args)
	if err != nil {
		string := fmt.Sprintf("Error at start the app complete error here -> %s", err.Error())
		log.Fatal(string)
	}
}
