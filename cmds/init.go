package cmds

import (
	"github.com/TeoDev1611/batman/log"
	"github.com/TeoDev1611/spider/core/parser"
)

func InitCmd() {
	parser.StartSpiderFile()
	log.Info("Created the SpiderFile!")
}
