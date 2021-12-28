package cmds

import (
	"fmt"
	"runtime"

	"github.com/TeoDev1611/batman/log"
	"github.com/TeoDev1611/spider/core/health"
)

func HealthCmd() {
	os := runtime.GOOS
	switch os {
	case "windows":
		scoop, git, choco := health.CheckToolsHealthWin()
		if !scoop {
			log.Error("Scoop not found")
		}
		if !git {
			log.Error("Git not found")
		}
		if !choco {
			log.Error("Choco not found")
		}
		if choco && git && scoop {
			log.Info("Done! All tools installed")
			return
		}

		fmt.Println("<< --- TOOLS INSTALLED: --- >>")
		fmt.Printf("Scoop: %t \n", scoop)
		fmt.Printf("Git: %t \n", git)
		fmt.Printf("Choco: %t \n", choco)
		log.Info("For install this run the <spider health -i>")
	case "linux":
		git, snap := health.CheckToolsHealthLinux()
		if !git {
			log.Error("Git not found")
		}
		if !snap {
			log.Error("Snap not found")
		}
		if git && snap {
			log.Info("Done! All tools installed")
			return

		}
		fmt.Println("<< --- TOOLS INSTALLED: --- >>")
		fmt.Printf("Git: %t \n", git)
		fmt.Printf("Snap: %t \n", snap)
		log.Info("For install this run the <spider health -i>")
	case "darwin":
		git, brew := health.CheckToolsHealthMacOs()
		if !git {
			log.Error("Git not found")
		}
		if !brew {
			log.Error("Brew not found")
		}
		if git && brew {
			log.Info("Done! All tools installed")
			return

		}
		fmt.Println("<< --- TOOLS INSTALLED: --- >>")
		fmt.Printf("Git: %t \n", git)
		fmt.Printf("Brew: %t \n", brew)
		log.Info("For install this run the <spider health -i>")

	default:
		log.Fatal("Platform not supported")
	}
}
