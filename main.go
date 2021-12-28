package main

import (
	"fmt"
	"os"
	"time"

	"github.com/TeoDev1611/batman/log"
	"github.com/TeoDev1611/spider/cmds"
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
	var (
		healthInstall bool
		healthCheck   bool
	)

	app.Commands = []*cli.Command{
		{
			Name:        "init",
			Aliases:     []string{"i", "new"},
			Usage:       "Init a file for download",
			Description: "Start a new SpiderFile for download the programs",
		},
		{
			Name:    "health",
			Aliases: []string{"check"},
			Usage:   "Check the tools for the usage",
			Flags: []cli.Flag{
				&cli.BoolFlag{
					Name:        "install",
					Usage:       "Show the install Commands for the tools `BOOL`",
					Value:       false,
					Destination: &healthInstall,
					Aliases:     []string{"i", "ins"},
				},
				&cli.BoolFlag{
					Name:        "check",
					Usage:       "Check the health for the spider usage",
					Value:       false,
					Destination: &healthCheck,
					Aliases:     []string{"c"},
				},
			},
			Action: func(c *cli.Context) error {
				if healthCheck {
					cmds.HealthCmd()
				}

				if healthInstall {
					log.Info("Hello from install")
				}
				return nil
			},
		},
	}

	err := app.Run(os.Args)
	if err != nil {
		string := fmt.Sprintf("Error at start the app complete error here -> %s", err.Error())
		log.Fatal(string)
	}
}
